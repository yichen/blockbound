import * as THREE from 'three';

// Super Block Bros. — an original 2.5D side-scrolling platformer tribute.
// Run and jump across breakable blocks, collect coins, stomp angry jelly blobs and
// raise the flag. No Nintendo characters or assets are used.

const RUN_SPEED = 8.2;
const ACCEL = 34;
const AIR_ACCEL = 14;
const JUMP_SPEED = 14.8;
const GRAVITY = 38;
const VOID_Y = -11;
const VIEW_HEIGHT = 20;
const START_X = 3;
const START_Y = 1.2;

const COLORS = {
  sky: 0x8ed8ff,
  groundTop: 0x8be36b,
  groundBody: 0x8a5a2b,
  brick: 0xd77a3d,
  question: 0xffc93c,
  coin: 0xffd166,
  player: 0x63e6d5,
  enemy: 0xb58cff,
  flag: 0x7be3cb,
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function formatTime(seconds) {
  if (seconds == null || !Number.isFinite(seconds)) return '–';
  const total = Math.max(0, seconds);
  const minutes = Math.floor(total / 60);
  const rest = total - minutes * 60;
  return `${String(minutes).padStart(2, '0')}:${rest.toFixed(1).padStart(4, '0')}`;
}

function makeLabel(text, { accent = '#7be3cb', scale = 3.4, height = 0.8 } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(8, 18, 26, .82)';
  ctx.beginPath();
  ctx.roundRect(8, 26, 496, 76, 26);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.font = '700 44px "Trebuchet MS", "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#fff';
  ctx.fillText(text, 256, 66);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
  sprite.scale.set(scale, height, 1);
  return sprite;
}

function box(w, h, d, color, emissive = 0x000000, intensity = 0) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.62, metalness: 0.04, emissive, emissiveIntensity: intensity }),
  );
}

export function createBros({ canvas, renderer, getBest, onFinish, onExit }) {
  // ------------------------------------------------------------- scene -------
  const scene = new THREE.Scene();
  const sky = new THREE.Color(COLORS.sky);
  scene.background = sky;
  scene.fog = new THREE.Fog(sky.clone(), 60, 140);

  const camera = new THREE.OrthographicCamera(-VIEW_HEIGHT, VIEW_HEIGHT, VIEW_HEIGHT / 2, -VIEW_HEIGHT / 2, 0.1, 200);
  camera.position.set(0, 6, 40);
  camera.lookAt(0, 5, 0);

  scene.add(new THREE.HemisphereLight(0xf2fbff, 0x5a7a63, 1.85));
  const sun = new THREE.DirectionalLight(0xfff6e2, 2.0);
  sun.position.set(16, 34, 22);
  scene.add(sun);

  // Background hills / clouds.
  for (let i = 0; i < 16; i++) {
    const hill = new THREE.Mesh(new THREE.SphereGeometry(5 + (i % 3) * 2, 12, 8), new THREE.MeshStandardMaterial({ color: 0x6fc4a8, roughness: 0.9 }));
    hill.position.set(-20 + i * 16, -2.8, -30 - (i % 3) * 6);
    hill.scale.y = 0.55;
    scene.add(hill);
  }
  for (let i = 0; i < 8; i++) {
    const cloud = box(7 + (i % 3) * 3, 1.4, 2, 0xffffff);
    cloud.position.set(-10 + i * 22, 18 + (i % 3) * 4, -18);
    scene.add(cloud);
  }

  // ---------------------------------------------------------- level data -----
  const solids = [];
  const coins = [];
  const enemies = [];
  const bumpBlocks = [];
  let checkpoint = { x: START_X + 40, y: START_Y };
  let goal = { x: 138, y: 6 };
  let levelEnd = 148;

  function addSolid(x, y, w, h, color = COLORS.groundTop) {
    const mesh = box(w, h, 2.4, color);
    mesh.position.set(x + w / 2, y + h / 2, 0);
    scene.add(mesh);
    const top = box(w, 0.25, 2.5, color === COLORS.brick ? COLORS.brick : 0xa6f27a, 0xa6f27a, 0.15);
    top.position.set(x + w / 2, y + h - 0.02, 0);
    scene.add(top);
    const solid = { x, y, w, h, minX: x, maxX: x + w, minY: y, maxY: y + h, mesh, top, kind: 'ground' };
    solids.push(solid);
    return solid;
  }

  function addBumpBlock(x, y, kind = 'coin') {
    const mesh = box(1.8, 1.8, 1.8, kind === 'coin' ? COLORS.question : COLORS.brick, kind === 'coin' ? COLORS.question : 0x0, kind === 'coin' ? 0.35 : 0);
    mesh.position.set(x, y, 0);
    scene.add(mesh);
    const label = kind === 'coin' ? makeLabel('?', { accent: '#ffc93c', scale: 1.2, height: 1.0 }) : null;
    if (label) { label.position.set(x, y, 1.2); scene.add(label); }
    const block = { x, y, w: 1.8, h: 1.8, minX: x - 0.9, maxX: x + 0.9, minY: y - 0.9, maxY: y + 0.9, kind, mesh, label, used: false, bump: 0 };
    bumpBlocks.push(block);
    solids.push(block);
    return block;
  }

  function addCoin(x, y) {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.13, 8, 18), new THREE.MeshStandardMaterial({ color: COLORS.coin, emissive: COLORS.coin, emissiveIntensity: 0.7, roughness: 0.3 }));
    mesh.rotation.x = 0;
    mesh.position.set(x, y, 0);
    scene.add(mesh);
    coins.push({ x, y, mesh, collected: false });
  }

  function addEnemy(x, minX, maxX, y = 1.2) {
    const group = new THREE.Group();
    const body = box(1.1, 1.1, 1.1, COLORS.enemy, COLORS.enemy, 0.15);
    const eyeLeft = box(0.18, 0.22, 0.1, 0x1b1f2a);
    eyeLeft.position.set(-0.26, 0.18, 0.56);
    const eyeRight = box(0.18, 0.22, 0.1, 0x1b1f2a);
    eyeRight.position.set(0.26, 0.18, 0.56);
    const brow = box(0.7, 0.1, 0.1, 0x1b1f2a);
    brow.position.set(0, 0.42, 0.56);
    group.add(body, eyeLeft, eyeRight, brow);
    group.position.set(x, y, 0);
    scene.add(group);
    const enemy = { x, y, minX, maxX, dir: 1, speed: 2.1, group, alive: true, phase: Math.random() * 6 };
    enemies.push(enemy);
    return enemy;
  }

  function buildLevel() {
    for (const solid of solids) { scene.remove(solid.mesh); solid.mesh.geometry.dispose(); solid.mesh.material.dispose(); if (solid.top) { scene.remove(solid.top); solid.top.geometry.dispose(); solid.top.material.dispose(); } }
    solids.length = 0;
    for (const block of bumpBlocks) { scene.remove(block.mesh); block.mesh.geometry.dispose(); block.mesh.material.dispose(); if (block.label) { scene.remove(block.label); block.label.material.map?.dispose(); block.label.material.dispose(); } }
    bumpBlocks.length = 0;
    for (const coin of coins) { scene.remove(coin.mesh); coin.mesh.geometry.dispose(); coin.mesh.material.dispose(); }
    coins.length = 0;
    for (const enemy of enemies) { scene.remove(enemy.group); enemy.group.traverse((object) => { if (object.geometry) object.geometry.dispose(); if (object.material) object.material.dispose(); }); }
    enemies.length = 0;

    // Ground segments with pits.
    const segments = [[0, 23], [27, 20], [51, 21], [76, 21], [101, 28], [134, 16]];
    for (const [start, width] of segments) {
      addSolid(start, 0, width, 1.6);
      addSolid(start, -1.6, width, 1.6, COLORS.groundBody);
    }
    // Floating platforms.
    addSolid(30, 3.6, 8, 0.8, COLORS.groundTop);
    addSolid(52, 4.2, 7, 0.8, COLORS.groundTop);
    addSolid(80, 3.6, 10, 0.8, COLORS.groundTop);
    addSolid(106, 4.4, 8, 0.8, COLORS.groundTop);
    addSolid(122, 3.6, 6, 0.8, COLORS.groundTop);
    // Question / brick blocks.
    for (const x of [8, 12, 16]) addBumpBlock(x, 4.6, 'coin');
    addBumpBlock(10, 7.4, 'brick');
    for (const x of [56, 60]) addBumpBlock(x, 8.2, 'coin');
    for (const x of [86, 90]) addBumpBlock(x, 7.4, 'coin');
    addBumpBlock(112, 8.6, 'brick');
    // Coins.
    for (let i = 0; i < 3; i++) addCoin(6 + i * 2.2, 3.0);
    for (let i = 0; i < 4; i++) addCoin(31 + i * 2, 4.6);
    for (let i = 0; i < 3; i++) addCoin(53 + i * 2, 5.8);
    for (let i = 0; i < 5; i++) addCoin(81 + i * 2, 5.0);
    for (let i = 0; i < 3; i++) addCoin(107 + i * 2, 6.0);
    for (let i = 0; i < 3; i++) addCoin(124 + i * 2, 5.4);
    for (let i = 0; i < 3; i++) addCoin(136 + i * 2, 2.8);
    // Enemies.
    addEnemy(18, 14, 22);
    addEnemy(33, 28, 34, 5.0);
    addEnemy(58, 53, 64);
    addEnemy(70, 68, 74);
    addEnemy(86, 80, 92, 5.0);
    addEnemy(114, 106, 120, 5.9);
    addEnemy(122, 116, 128);

    // Checkpoint (small flag).
    const cpPole = box(0.18, 4.2, 0.18, 0xf4f7fb);
    cpPole.position.set(76, 2.1, 0.2);
    scene.add(cpPole);
    const cpFlag = box(1.2, 0.8, 0.12, 0x7be3cb);
    cpFlag.position.set(76.7, 3.8, 0.2);
    scene.add(cpFlag);
    checkpoint = { x: 76, y: 2.6 };

    // Goal flag.
    const pole = box(0.25, 8.5, 0.25, 0xf4f7fb);
    pole.position.set(goal.x, 4.25, 0);
    scene.add(pole);
    const flag = box(2.4, 1.6, 0.16, COLORS.flag);
    flag.position.set(goal.x + 1.3, 7.6, 0);
    scene.add(flag);
    const star = makeLabel('GOAL', { accent: '#ffc93c', scale: 3, height: 0.8 });
    star.position.set(goal.x, 9.6, 0);
    scene.add(star);
    levelEnd = 150;
  }

  // ------------------------------------------------------------- player ------
  const playerGroup = new THREE.Group();
  const playerBody = box(1.2, 1.1, 1.2, COLORS.player, COLORS.player, 0.2);
  const playerHead = box(1.0, 0.8, 1.0, 0xf8e6cf);
  playerHead.position.y = 0.9;
  const playerVisor = box(0.72, 0.26, 0.08, 0x1b1f2a);
  playerVisor.position.set(0, 0.95, 0.53);
  const playerAntenna = box(0.1, 0.5, 0.1, 0x6b7f8a);
  playerAntenna.position.set(0, 1.55, 0);
  playerGroup.add(playerBody, playerHead, playerVisor, playerAntenna);
  scene.add(playerGroup);

  const player = {
    x: START_X, y: START_Y, vx: 0, vy: 0,
    onGround: false, facing: 1, lives: 3, coins: 0,
    invulnerable: 0, jumpBuffer: 0,
  };

  // ------------------------------------------------------------- state ------
  let active = false;
  let paused = false;
  let finished = false;
  let won = false;
  let running = false;
  let elapsed = 0;
  let best = getBest?.() || {};
  let toastTimer = 0;
  let cameraX = START_X;
  let checkpointMarker = null;

  const element = {
    timer: document.querySelector('#bros-timer'),
    lives: document.querySelector('#bros-lives'),
    coins: document.querySelector('#bros-coins'),
    best: document.querySelector('#bros-best'),
    objective: document.querySelector('#bros-objective'),
    toast: document.querySelector('#bros-toast'),
    pause: document.querySelector('#bros-pause'),
    finish: document.querySelector('#bros-finish'),
    finishTitle: document.querySelector('#bros-finish-title'),
    finishTime: document.querySelector('#bros-finish-time'),
    finishCoins: document.querySelector('#bros-finish-coins'),
    finishBest: document.querySelector('#bros-finish-best'),
    pauseLine: document.querySelector('#bros-pause-line'),
  };

  function showToast(message) {
    if (!element.toast) return;
    element.toast.textContent = message;
    element.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.toast.classList.remove('show'), 1800);
  }

  function setOverlay(node, visible) {
    if (!node) return;
    node.hidden = !visible;
    node.style.display = visible ? '' : 'none';
  }

  function objectiveText() {
    if (finished) return won ? 'Flag raised — you win!' : 'Out of lives!';
    if (player.x < checkpoint.x) return 'Run right · collect coins · stomp the blobs';
    return 'Reach the flag at the end of the level';
  }

  function updateHud() {
    if (element.timer) element.timer.textContent = formatTime(running || finished ? elapsed : 0);
    if (element.lives) element.lives.textContent = `${player.lives} ${player.lives === 1 ? 'life' : 'lives'}`;
    if (element.coins) element.coins.textContent = `${player.coins} coins`;
    if (element.best) element.best.textContent = `Best ${best.bestTime != null ? formatTime(best.bestTime) : '–'}`;
    if (element.objective) element.objective.textContent = objectiveText();
    if (element.pauseLine) element.pauseLine.textContent = `${player.coins} coins · ${formatTime(elapsed)}`;
  }

  // ---------------------------------------------------------- collisions -----
  function solidsAt(box) {
    return solids.filter((solid) => box.maxX > solid.minX && box.minX < solid.maxX && box.maxY > solid.minY && box.minY < solid.maxY);
  }

  function playerBox() {
    return { minX: player.x - 0.55, maxX: player.x + 0.55, minY: player.y, maxY: player.y + 1.75 };
  }

  function hurt() {
    if (player.invulnerable > 0 || finished) return;
    const reachedCheckpoint = player.x >= 76;
    player.lives -= 1;
    player.invulnerable = 1.4;
    if (player.lives <= 0) {
      finished = true;
      won = false;
      finishOverlay();
      return;
    }
    player.x = reachedCheckpoint ? 77 : START_X;
    player.y = reachedCheckpoint ? 2.8 : START_Y;
    player.vx = 0;
    player.vy = 0;
    showToast(`${player.lives} ${player.lives === 1 ? 'life' : 'lives'} left`);
    updateHud();
  }

  function finishOverlay() {
    const result = onFinish?.({ time: elapsed, coins: player.coins, won }) || { isBest: false, best: best };
    best = result.best || best;
    if (element.finishTitle) element.finishTitle.textContent = won ? 'Flag Raised!' : 'Game Over';
    if (element.finishTime) element.finishTime.textContent = formatTime(elapsed);
    if (element.finishCoins) element.finishCoins.textContent = `${player.coins} coins · ${player.lives} ${player.lives === 1 ? 'life' : 'lives'} left`;
    if (element.finishBest) element.finishBest.textContent = result.isBest ? 'New best time!' : `Best ${formatTime(best.bestTime)}`;
    setOverlay(element.pause, false);
    setOverlay(element.finish, true);
    updateHud();
  }

  function bumpBlock(block) {
    if (block.used || block.kind !== 'coin') return;
    block.used = true;
    block.bump = 0.3;
    player.coins += 1;
    player.y = block.minY - 1.76;
    player.vy = 0;
    block.mesh.material.emissiveIntensity = 0;
    block.mesh.material.color.set(0x9b7b5a);
    if (block.label) block.label.visible = false;
    showToast('Coin block!');
    updateHud();
  }

  function resetLevel() {
    elapsed = 0;
    running = false;
    finished = false;
    won = false;
    paused = false;
    player.x = START_X;
    player.y = START_Y;
    player.vx = 0;
    player.vy = 0;
    player.lives = 3;
    player.coins = 0;
    player.invulnerable = 0;
    best = getBest?.() || {};
    cameraX = START_X;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    updateHud();
    snapCamera();
  }

  function resetRun() {
    resetLevel();
    buildLevel();
    checkpoint = { x: 76, y: 2.6 };
    player.x = START_X;
    player.y = START_Y;
    updateHud();
  }

  // ------------------------------------------------------------- input ------
  const keys = new Set();
  function down(event) {
    if (!active) return;
    const code = event.code;
    if (code === 'Escape') {
      if (finished) leave();
      else if (paused) resume();
      else pause();
      event.preventDefault();
      return;
    }
    if (finished || paused) return;
    if (code === 'ArrowLeft' || code === 'KeyA') keys.add('left');
    else if (code === 'ArrowRight' || code === 'KeyD') keys.add('right');
    else if (code === 'Space' || code === 'ArrowUp' || code === 'KeyW') keys.add('jump');
    else if (code === 'KeyR') { restart(); return; }
    else return;
    if (!running) { running = true; }
    event.preventDefault();
  }
  function up(event) {
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') keys.delete('left');
    else if (event.code === 'ArrowRight' || event.code === 'KeyD') keys.delete('right');
    else if (event.code === 'Space' || event.code === 'ArrowUp' || event.code === 'KeyW') keys.delete('jump');
  }
  document.addEventListener('keydown', down);
  document.addEventListener('keyup', up);

  for (const button of document.querySelectorAll('[data-bros-action]')) {
    const action = button.dataset.brosAction;
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      if (!active || paused || finished) return;
      if (action === 'jump') player.jumpBuffer = 0.16;
      else keys.add(action);
      if (!running) running = true;
      button.setPointerCapture?.(event.pointerId);
    });
    for (const type of ['pointerup', 'pointercancel', 'pointerleave']) {
      button.addEventListener(type, () => keys.delete(action));
    }
  }
  for (const button of document.querySelectorAll('[data-bros-panel]')) {
    button.addEventListener('click', () => {
      const action = button.dataset.brosPanel;
      if (action === 'resume') resume();
      else if (action === 'restart') restart();
      else if (action === 'menu') leave();
    });
  }

  function pause() {
    if (!active || finished) return;
    paused = true;
    setOverlay(element.pause, true);
    updateHud();
  }
  function resume() {
    if (!active) return;
    paused = false;
    setOverlay(element.pause, false);
  }
  function restart() {
    resetLevel();
    setOverlay(element.finish, false);
    showToast('New run');
  }
  function leave() {
    active = false;
    paused = false;
    finished = false;
    running = false;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    onExit?.();
  }

  // ------------------------------------------------------------- update -----
  function physics(dt) {
    const input = (keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0);
    if (input) player.facing = input;
    player.vx += (input * RUN_SPEED - player.vx) * Math.min(1, (player.onGround ? ACCEL : AIR_ACCEL) * dt);

    if (player.jumpBuffer > 0) player.jumpBuffer -= dt;
    if (keys.has('jump') && player.onGround) {
      player.vy = JUMP_SPEED;
      player.onGround = false;
    }

    player.vy -= GRAVITY * dt;
    player.vy = Math.max(player.vy, -30);

    // Horizontal.
    player.x += player.vx * dt;
    let box = playerBox();
    for (const solid of solidsAt(box)) {
      if (player.vx > 0) player.x = solid.minX - 0.56;
      else if (player.vx < 0) player.x = solid.maxX + 0.56;
      player.vx = 0;
      box = playerBox();
    }

    // Vertical.
    player.y += player.vy * dt;
    player.onGround = false;
    box = playerBox();
    for (const solid of solidsAt(box)) {
      if (player.vy <= 0) {
        player.y = solid.maxY;
        player.vy = 0;
        player.onGround = true;
      } else {
        if (solid.kind === 'coin') bumpBlock(solid);
        player.y = solid.minY - 1.76;
        player.vy = 0;
      }
      box = playerBox();
    }

    // Blocks bump animation.
    for (const block of bumpBlocks) {
      if (block.bump > 0) {
        block.bump = Math.max(0, block.bump - dt);
        block.mesh.position.y = block.y + Math.sin((0.3 - block.bump) * 24) * 0.18;
      }
    }

    // Coins.
    for (const coin of coins) {
      if (coin.collected) continue;
      if (Math.abs(player.x - coin.x) < 0.8 && Math.abs(player.y + 0.8 - coin.y) < 0.9) {
        coin.collected = true;
        coin.mesh.visible = false;
        player.coins += 1;
        updateHud();
      }
    }

    // Enemies.
    for (const enemy of enemies) {
      if (!enemy.alive) continue;
      enemy.x += enemy.dir * enemy.speed * dt;
      if (enemy.x > enemy.maxX) { enemy.x = enemy.maxX; enemy.dir = -1; }
      if (enemy.x < enemy.minX) { enemy.x = enemy.minX; enemy.dir = 1; }
      enemy.group.position.x = enemy.x;
      enemy.group.position.y = enemy.y + Math.abs(Math.sin((elapsed + enemy.phase) * 6)) * 0.08;
      enemy.group.rotation.z = enemy.dir * 0.05;
      const dx = Math.abs(player.x - enemy.x);
      const dy = player.y - enemy.y;
      if (dx < 1.05 && dy < 1.3 && dy > -1.2) {
        if (player.vy < 0 && player.y > enemy.y + 0.5) {
          enemy.alive = false;
          enemy.group.visible = false;
          player.vy = 10.5;
          player.coins += 2;
          showToast('Stomp! +2 coins');
          updateHud();
        } else {
          hurt();
        }
      }
    }

    if (player.x > goal.x - 0.8 && player.y < goal.y + 2) {
      finished = true;
      won = true;
      running = false;
      finishOverlay();
      return;
    }
    if (player.y < VOID_Y) hurt();
    if (player.invulnerable > 0) player.invulnerable = Math.max(0, player.invulnerable - dt);
  }

  function update(dt) {
    if (!active || paused || finished) return;
    if (running) elapsed += dt;
    physics(dt);
    updateHud();
    // Player visuals.
    playerGroup.position.set(player.x, player.y + 0.86, 0);
    playerGroup.rotation.y = player.facing > 0 ? 0.35 : -0.35;
    playerGroup.visible = player.invulnerable > 0 ? Math.sin(elapsed * 30) > 0 : true;
    for (const coin of coins) if (!coin.collected) coin.mesh.rotation.z += dt * 3.4;
    updateCamera(dt);
  }

  function snapCamera() {
    camera.position.set(cameraX + 4, 6, 40);
    camera.lookAt(cameraX + 4, 6, 0);
  }

  function updateCamera(dt) {
    cameraX += (player.x - cameraX) * Math.min(1, dt * 4.5);
    const targetX = cameraX + 4;
    const lerp = 1 - Math.pow(0.002, dt);
    camera.position.x += (targetX - camera.position.x) * lerp;
    camera.position.y += (6 - camera.position.y) * lerp;
    camera.lookAt(targetX + 1, 6, 0);
  }

  const renderSize = new THREE.Vector2();
  function render() {
    const size = renderer.getSize(renderSize);
    if (size.x > 0 && size.y > 0) {
      const height = VIEW_HEIGHT;
      const width = height * (size.x / size.y);
      camera.left = -width / 2;
      camera.right = width / 2;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
  }

  // ------------------------------------------------------------- api --------
  function start() {
    active = true;
    resetRun();
    updateHud();
    snapCamera();
  }

  function stop() {
    active = false;
    paused = false;
    finished = false;
    running = false;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
  }

  const api = {
    start, stop, update, render,
    get active() { return active; },
    get paused() { return paused; },
    get finished() { return finished; },
    get state() {
      return {
        x: player.x, y: player.y, vx: player.vx, vy: player.vy,
        lives: player.lives, coins: player.coins, elapsed, running, finished, won, paused,
      };
    },
  };

  if (import.meta.env.DEV) {
    api.debugTeleport = (x, y = START_Y) => { player.x = x; player.y = y; player.vx = 0; player.vy = 0; };
    api.debugSetLives = (value) => { player.lives = value; updateHud(); };
    api.debugSetCoins = (value) => { player.coins = value; updateHud(); };
    api.debugFinish = () => { player.x = goal.x - 1; player.y = 3; };
    api.debugEnemies = () => enemies.map((enemy) => ({ x: enemy.x, y: enemy.y, alive: enemy.alive }));
    window.__bros = api;
  }

  resetRun();
  running = false;
  return api;
}
