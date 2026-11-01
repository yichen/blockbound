import * as THREE from 'three';

// Neon Dash — an original Geometry Dash–style auto-runner.
// One-button jump timing through neon spike-and-block courses. Three levels, attempts
// and progress saved. No Geometry Dash assets or music are used.

const GRAVITY = 42;
const JUMP_SPEED = 13.5;
const PLAYER_SIZE = 1;
const START_X = 0;

const LEVELS = [
  {
    name: 'Stereo Start', speed: 7.0, length: 88,
    sky: 0x0d0820, floor: 0x1a1038, accent: 0x63e6d5, spikeColor: 0xff5c8a, blockColor: 0x8b5cff,
    obstacles: [
      { type: 'spike', x: 16 },
      { type: 'saw', x: 23, y: 0.62, r: 0.62 },
      { type: 'spike', x: 30 },
      { type: 'saw', x: 37, y: 0.62, r: 0.62 },
      { type: 'spike', x: 44 },
      { type: 'saw', x: 51, y: 0.62, r: 0.62 },
      { type: 'spike', x: 58 },
      { type: 'saw', x: 65, y: 0.62, r: 0.62 },
      { type: 'spike', x: 72 },
      { type: 'saw', x: 79, y: 0.62, r: 0.62 },
    ],
  },
  {
    name: 'Bass Drop', speed: 8.0, length: 124,
    sky: 0x1a0a20, floor: 0x2a1030, accent: 0xff9ff3, spikeColor: 0xffc93c, blockColor: 0xff5c8a,
    obstacles: [
      { type: 'spike', x: 12 },
      { type: 'saw', x: 19, y: 0.62, r: 0.6 },
      { type: 'block', x: 26, w: 2.0, h: 1.0 },
      { type: 'spike', x: 33 },
      { type: 'saw', x: 40, y: 0.62, r: 0.6 },
      { type: 'block', x: 47, y: 2.2, w: 2.4, h: 1.0 },
      { type: 'spike', x: 54 },
      { type: 'saw', x: 61, y: 0.62, r: 0.6 },
      { type: 'block', x: 68, w: 2.2, h: 1.2 },
      { type: 'spike', x: 75 },
      { type: 'saw', x: 82, y: 0.62, r: 0.6 },
      { type: 'block', x: 89, w: 2.0, h: 1.0 },
      { type: 'spike', x: 96 },
      { type: 'saw', x: 103, y: 0.62, r: 0.6 },
      { type: 'block', x: 110, w: 2.2, h: 1.2 },
      { type: 'spike', x: 117 },
    ],
  },
  {
    name: 'Neon Overdrive', speed: 8.8, length: 150,
    sky: 0x061426, floor: 0x0c2a3a, accent: 0x7be3cb, spikeColor: 0xff4d6d, blockColor: 0x74a7ff,
    obstacles: [
      { type: 'spike', x: 10 },
      { type: 'saw', x: 16, y: 0.62, r: 0.6 },
      { type: 'block', x: 22, w: 2.0, h: 1.0 },
      { type: 'spike', x: 28 },
      { type: 'saw', x: 34, y: 0.62, r: 0.6 },
      { type: 'block', x: 40, w: 2.2, h: 1.2 },
      { type: 'spike', x: 46 },
      { type: 'spike', x: 47.4 },
      { type: 'saw', x: 54, y: 0.62, r: 0.6 },
      { type: 'block', x: 60, w: 2.0, h: 1.0 },
      { type: 'spike', x: 66 },
      { type: 'saw', x: 72, y: 0.62, r: 0.6 },
      { type: 'block', x: 78, w: 2.2, h: 1.2 },
      { type: 'saw', x: 85, y: 2.3, r: 0.55 },
      { type: 'spike', x: 92 },
      { type: 'spike', x: 93.4 },
      { type: 'saw', x: 99, y: 0.62, r: 0.6 },
      { type: 'block', x: 105, w: 2.0, h: 1.0 },
      { type: 'spike', x: 111 },
      { type: 'saw', x: 117, y: 0.62, r: 0.6 },
      { type: 'block', x: 123, w: 2.2, h: 1.2 },
      { type: 'spike', x: 129 },
      { type: 'spike', x: 130.4 },
      { type: 'saw', x: 136, y: 0.62, r: 0.6 },
      { type: 'spike', x: 143 },
    ],
  },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function box(w, h, d, color, emissive = 0x000000, intensity = 0) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.2, emissive, emissiveIntensity: intensity }),
  );
}

function makeFaceTexture(color) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
  ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = 'rgba(255,255,255,.25)';
  ctx.fillRect(0, 0, 128, 18);
  ctx.fillStyle = '#10141f';
  ctx.beginPath(); ctx.roundRect(20, 56, 26, 34, 8); ctx.fill();
  ctx.beginPath(); ctx.roundRect(82, 56, 26, 34, 8); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(33, 68, 7, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(95, 68, 7, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#10141f';
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.arc(64, 96, 18, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeGridTexture(accent) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 512);
  gradient.addColorStop(0, '#090718');
  gradient.addColorStop(1, '#1c1038');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);
  ctx.strokeStyle = 'rgba(140, 120, 255, .35)';
  ctx.lineWidth = 2;
  for (let i = 0; i <= 512; i += 64) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
  }
  ctx.fillStyle = accent;
  for (let i = 0; i < 60; i++) {
    ctx.fillRect(Math.random() * 512, Math.random() * 512, 3, 3);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeLabel(text, { accent = '#63e6d5', scale = 4, height = 0.9 } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(8, 8, 20, .85)';
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

export function createDash({ canvas, renderer, getBest, onProgress, onFinish, onExit }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 200);
  camera.position.set(2, 5.2, 16);

  scene.add(new THREE.HemisphereLight(0xb8c4ff, 0x1a1030, 1.5));
  const sun = new THREE.DirectionalLight(0xffe6ff, 1.8);
  sun.position.set(10, 24, 16);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x63e6d5, 0.9);
  rim.position.set(-20, 14, 10);
  scene.add(rim);

  let levelGroup = new THREE.Group();
  scene.add(levelGroup);
  let levelIndex = 0;
  let level = LEVELS[0];
  let best = getBest?.(1) || {};

  const playerGroup = new THREE.Group();
  const playerMaterial = new THREE.MeshStandardMaterial({ color: 0x63e6d5, roughness: 0.3, metalness: 0.3, emissive: 0x63e6d5, emissiveIntensity: 0.5, map: makeFaceTexture(0x63e6d5) });
  const playerCube = new THREE.Mesh(new THREE.BoxGeometry(PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE), playerMaterial);
  playerCube.position.y = PLAYER_SIZE / 2;
  playerGroup.add(playerCube);
  scene.add(playerGroup);

  const trail = [];
  const player = { x: START_X, y: 0, vy: 0, onGround: true, rotation: 0 };
  const keys = new Set();
  let active = false;
  let paused = false;
  let finished = false;
  let attempts = 1;
  let bestProgress = 0;
  let progress = 0;
  let attemptFlash = 0;
  let deathFlash = 0;
  let toastTimer = 0;
  let cameraX = 0;
  let begun = false;
  let jumpBuffer = 0;
  let coyote = 0;

  const element = {
    level: document.querySelector('#dash-level'),
    attempts: document.querySelector('#dash-attempts'),
    progress: document.querySelector('#dash-progress'),
    best: document.querySelector('#dash-best'),
    objective: document.querySelector('#dash-objective'),
    toast: document.querySelector('#dash-toast'),
    pause: document.querySelector('#dash-pause'),
    finish: document.querySelector('#dash-finish'),
    finishTitle: document.querySelector('#dash-finish-title'),
    finishAttempts: document.querySelector('#dash-finish-attempts'),
    finishBest: document.querySelector('#dash-finish-best'),
    pauseLine: document.querySelector('#dash-pause-line'),
  };

  function showToast(message) {
    if (!element.toast) return;
    element.toast.textContent = message;
    element.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.toast.classList.remove('show'), 1600);
  }

  function setOverlay(node, visible) {
    if (!node) return;
    node.hidden = !visible;
    node.style.display = visible ? '' : 'none';
  }

  function updateHud() {
    if (element.level) element.level.textContent = `Level ${levelIndex + 1}/3 · ${level.name}`;
    if (element.attempts) element.attempts.textContent = `Attempt ${attempts}`;
    if (element.progress) element.progress.textContent = `${Math.floor(progress)}%`;
    if (element.best) element.best.textContent = `Best ${Math.floor(bestProgress)}%`;
    if (element.objective) element.objective.textContent = finished ? 'Level complete!' : !begun ? 'Press SPACE / tap to start' : 'Jump the spikes — hold to auto-jump';
    if (element.pauseLine) element.pauseLine.textContent = `${level.name} · ${Math.floor(progress)}% · attempt ${attempts}`;
  }

  function disposeGroup(group) {
    group.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of materials) { if (material.map) material.map.dispose(); material.dispose(); }
      }
    });
    while (group.children.length) group.remove(group.children[0]);
  }

  function buildLevel(index) {
    levelIndex = clamp(index, 0, LEVELS.length - 1);
    level = LEVELS[levelIndex];
    best = getBest?.(levelIndex + 1) || {};
    bestProgress = Math.max(0, best.bestProgress || 0);
    scene.background = new THREE.Color(level.sky);
    scene.fog = new THREE.Fog(new THREE.Color(level.sky), 50, 120);
    disposeGroup(levelGroup);

    // Neon grid backdrop.
    const backdrop = new THREE.Mesh(
      new THREE.PlaneGeometry(320, 90),
      new THREE.MeshBasicMaterial({ map: makeGridTexture(`#${level.accent.toString(16).padStart(6, '0')}`), transparent: true, opacity: 0.55 }),
    );
    backdrop.position.set(level.length / 2, 22, -28);
    levelGroup.add(backdrop);

    // Ground.
    const floor = box(level.length + 80, 1, 18, level.floor);
    floor.position.set(level.length / 2, -0.5, 0);
    levelGroup.add(floor);
    const glowLine = box(level.length + 80, 0.08, 0.14, level.accent, level.accent, 1.2);
    glowLine.position.set(level.length / 2, 0.02, 0.2);
    levelGroup.add(glowLine);

    // Neon mountains.
    for (let i = 0; i < 14; i++) {
      const mountain = new THREE.Mesh(
        new THREE.ConeGeometry(5 + (i % 4) * 2, 7 + (i % 3) * 3, 3),
        new THREE.MeshStandardMaterial({ color: level.floor, emissive: level.accent, emissiveIntensity: 0.08, roughness: 0.9 }),
      );
      mountain.position.set(-10 + i * 14, 0, -20 - (i % 3) * 4);
      mountain.rotation.y = Math.PI / 6;
      levelGroup.add(mountain);
    }

    // Obstacles.
    for (const obstacle of level.obstacles) {
      if (obstacle.type === 'spike') {
        const spike = new THREE.Mesh(
          new THREE.ConeGeometry(0.62, 1.1, 4),
          new THREE.MeshStandardMaterial({ color: level.spikeColor, emissive: level.spikeColor, emissiveIntensity: 0.8, roughness: 0.3, metalness: 0.3 }),
        );
        spike.position.set(obstacle.x, 0.55, 0);
        levelGroup.add(spike);
        obstacle.minX = obstacle.x - 0.3; obstacle.maxX = obstacle.x + 0.3;
        obstacle.minY = 0; obstacle.maxY = 1.1;
      } else if (obstacle.type === 'saw') {
        const radius = obstacle.r || 0.6;
        const group = new THREE.Group();
        const disc = new THREE.Mesh(
          new THREE.CylinderGeometry(radius, radius, 0.16, 20),
          new THREE.MeshStandardMaterial({ color: 0xdfe9ff, emissive: level.accent, emissiveIntensity: 0.35, roughness: 0.25, metalness: 0.8 }),
        );
        disc.rotation.x = Math.PI / 2;
        group.add(disc);
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(radius * 0.92, 0.075, 8, 24),
          new THREE.MeshStandardMaterial({ color: level.spikeColor, emissive: level.spikeColor, emissiveIntensity: 0.9, roughness: 0.3 }),
        );
        group.add(ring);
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const tooth = new THREE.Mesh(
            new THREE.ConeGeometry(radius * 0.24, radius * 0.5, 4),
            new THREE.MeshStandardMaterial({ color: level.spikeColor, emissive: level.spikeColor, emissiveIntensity: 0.8, roughness: 0.3 }),
          );
          tooth.position.set(Math.cos(angle) * radius * 0.92, Math.sin(angle) * radius * 0.92, 0);
          tooth.rotation.z = angle - Math.PI / 2;
          group.add(tooth);
        }
        group.position.set(obstacle.x, obstacle.y || radius, 0);
        levelGroup.add(group);
        obstacle.mesh = group;
        obstacle.spin = 0;
        const hit = radius * 0.85;
        obstacle.minX = obstacle.x - hit; obstacle.maxX = obstacle.x + hit;
        obstacle.minY = (obstacle.y || radius) - hit; obstacle.maxY = (obstacle.y || radius) + hit;
      } else {
        const baseY = obstacle.y || 0;
        const block = box(obstacle.w, obstacle.h, 1.4, level.blockColor, level.blockColor, 0.45);
        block.position.set(obstacle.x + obstacle.w / 2, baseY + obstacle.h / 2, 0);
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(block.geometry),
          new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }),
        );
        edges.position.copy(block.position);
        levelGroup.add(block, edges);
        const floaters = baseY > 0.5;
        obstacle.minX = obstacle.x; obstacle.maxX = obstacle.x + obstacle.w;
        obstacle.minY = baseY; obstacle.maxY = baseY + obstacle.h;
        if (floaters) {
          const label = makeLabel('FLOAT', { accent: `#${level.accent.toString(16).padStart(6, '0')}`, scale: 2.4, height: 0.6 });
          label.position.set(obstacle.x + obstacle.w / 2, baseY + obstacle.h + 0.7, 0);
          levelGroup.add(label);
        }
      }
    }

    // Finish portal.
    const finish = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.18, 10, 32),
      new THREE.MeshStandardMaterial({ color: level.accent, emissive: level.accent, emissiveIntensity: 1, roughness: 0.3 }),
    );
    finish.position.set(level.length, 2.6, 0);
    levelGroup.add(finish);
    const finishLabel = makeLabel('FINISH', { accent: `#${level.accent.toString(16).padStart(6, '0')}`, scale: 4.5, height: 1 });
    finishLabel.position.set(level.length, 6, 0);
    levelGroup.add(finishLabel);
  }

  function resetAttempt(keepAttempts = true) {
    if (!keepAttempts) attempts = 1;
    player.x = START_X;
    player.y = 0;
    player.vy = 0;
    player.onGround = true;
    player.rotation = 0;
    playerGroup.rotation.z = 0;
    playerCube.rotation.z = 0;
    playerGroup.position.set(player.x, player.y, 0);
    progress = 0;
    cameraX = 0;
    attemptFlash = 0.9;
    camera.position.set(2, 5.2, 16);
    updateHud();
  }

  function resetLevel(index = levelIndex) {
    buildLevel(index);
    attempts = 1;
    finished = false;
    paused = false;
    begun = false;
    resetAttempt(true);
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    updateHud();
  }

  function die() {
    if (finished) return;
    bestProgress = Math.max(bestProgress, progress);
    onProgress?.(levelIndex + 1, { bestProgress, attempts });
    attempts += 1;
    deathFlash = 0.5;
    spawnDeathBurst(player.x, player.y + 0.5);
    resetAttempt(true);
    showToast(`Attempt ${attempts}`);
  }

  function spawnDeathBurst(x, y) {
    for (let i = 0; i < 10; i++) {
      const shard = box(0.18, 0.18, 0.18, level.spikeColor, level.spikeColor, 1);
      shard.position.set(x, y, 0.5);
      shard.userData = { vx: (Math.random() - 0.5) * 9, vy: Math.random() * 8 + 2, life: 0.6 };
      levelGroup.add(shard);
      trail.push(shard);
    }
  }

  function finishLevel() {
    finished = true;
    bestProgress = 100;
    onProgress?.(levelIndex + 1, { bestProgress: 100, attempts });
    const result = onFinish?.(levelIndex + 1, { attempts, bestProgress: 100 }) || { isBest: false, best };
    best = result.best || best;
    if (element.finishTitle) element.finishTitle.textContent = 'Level Complete!';
    if (element.finishAttempts) element.finishAttempts.textContent = `${attempts} attempt${attempts === 1 ? '' : 's'}`;
    if (element.finishBest) element.finishBest.textContent = result.isBest ? 'New best!' : `Best ${Math.floor(best.bestProgress || 100)}%`;
    setOverlay(element.pause, false);
    setOverlay(element.finish, true);
    updateHud();
  }

  function nextLevel() {
    resetLevel((levelIndex + 1) % LEVELS.length);
    showToast(`Level ${levelIndex + 1} · ${level.name}`);
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
    resetLevel(levelIndex);
    showToast('Level restarted');
  }
  function leave() {
    active = false;
    paused = false;
    finished = false;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    onExit?.();
  }

  function doJump() {
    player.vy = JUMP_SPEED;
    player.onGround = false;
    jumpBuffer = 0;
    coyote = 0;
  }

  function jump() {
    if (!active || paused || finished) return;
    begun = true;
    jumpBuffer = 0.14;
    if (player.onGround || coyote > 0) doJump();
  }

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
    if (code === 'Space' || code === 'ArrowUp' || code === 'KeyW' || code === 'KeyJ') {
      keys.add('jump');
      jump();
      event.preventDefault();
    } else if (code === 'KeyR') {
      restart();
      event.preventDefault();
    }
  }
  function up(event) {
    if (event.code === 'Space' || event.code === 'ArrowUp' || event.code === 'KeyW' || event.code === 'KeyJ') keys.delete('jump');
  }
  document.addEventListener('keydown', down);
  document.addEventListener('keyup', up);
  canvas.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse') return;
    event.preventDefault();
    if (active && !paused && !finished) {
      if (player.onGround) { player.vy = JUMP_SPEED; player.onGround = false; }
    }
  });
  for (const button of document.querySelectorAll('[data-dash-action]')) {
    button.addEventListener('pointerdown', (event) => { event.preventDefault(); jump(); });
  }
  for (const button of document.querySelectorAll('[data-dash-panel]')) {
    button.addEventListener('click', () => {
      const action = button.dataset.dashPanel;
      if (action === 'resume') resume();
      else if (action === 'restart') restart();
      else if (action === 'next') nextLevel();
      else if (action === 'menu') leave();
    });
  }

  function update(dt) {
    if (!active) return;
    if (paused || finished) {
      attemptFlash = Math.max(0, attemptFlash - dt);
      deathFlash = Math.max(0, deathFlash - dt);
      return;
    }
    if (deathFlash > 0) deathFlash = Math.max(0, deathFlash - dt);
    if (attemptFlash > 0) attemptFlash = Math.max(0, attemptFlash - dt);
    if (!begun) { updateHud(); return; }

    const previousY = player.y;
    const wasGrounded = player.onGround;
    jumpBuffer = Math.max(0, jumpBuffer - dt);
    coyote = wasGrounded ? 0.1 : Math.max(0, coyote - dt);
    if (wasGrounded && jumpBuffer > 0) doJump();
    else if (keys.has('jump') && player.onGround) doJump();
    player.x += level.speed * dt;
    player.vy -= GRAVITY * dt;
    player.y += player.vy * dt;
    if (player.y <= 0) {
      player.y = 0;
      player.vy = 0;
      if (!player.onGround) {
        const step = Math.PI / 2;
        player.rotation = Math.round(player.rotation / step) * step;
      }
      player.onGround = true;
    } else {
      player.onGround = false;
    }
    // Rotating a square can push its corners below the floor; lift it just enough
    // that the visual cube never intersects the ground.
    if (!player.onGround) {
      const halfExtent = 0.5 * (Math.abs(Math.cos(player.rotation)) + Math.abs(Math.sin(player.rotation)));
      playerCube.position.y = PLAYER_SIZE / 2 + Math.max(0, halfExtent - PLAYER_SIZE / 2 - player.y);
    } else {
      playerCube.position.y = PLAYER_SIZE / 2;
    }
    if (!player.onGround) player.rotation -= dt * 7.5;

    const box = { minX: player.x - 0.5, maxX: player.x + 0.5, minY: player.y, maxY: player.y + PLAYER_SIZE };
    for (const obstacle of level.obstacles) {
      if (box.maxX <= obstacle.minX || box.minX >= obstacle.maxX || box.maxY <= obstacle.minY || box.minY >= obstacle.maxY) continue;
      if (obstacle.type === 'block' && player.vy <= 0 && previousY >= obstacle.maxY - 0.5) {
        player.y = obstacle.maxY;
        player.vy = 0;
        if (!player.onGround) {
          const step = Math.PI / 2;
          player.rotation = Math.round(player.rotation / step) * step;
        }
        player.onGround = true;
        continue;
      }
      die();
      return;
    }
    for (const obstacle of level.obstacles) {
      if (obstacle.type === 'saw' && obstacle.mesh) {
        obstacle.spin = (obstacle.spin || 0) + dt * 7;
        obstacle.mesh.rotation.z = obstacle.spin;
      }
    }
    progress = clamp((player.x / level.length) * 100, 0, 100);
    if (player.x >= level.length) {
      finishLevel();
      return;
    }

    // Camera + player visuals.
    cameraX += (player.x - cameraX) * Math.min(1, dt * 6);
    camera.position.x += (cameraX + 2.5 - camera.position.x) * Math.min(1, dt * 8);
    camera.position.y += (5.2 - camera.position.y) * Math.min(1, dt * 5);
    camera.lookAt(cameraX + 5, 2.6, 0);
    playerGroup.position.set(player.x, player.y, 0);
    playerCube.rotation.z = player.rotation;
    playerGroup.rotation.z = 0;
    playerCube.material.emissiveIntensity = 0.4 + Math.sin(player.x * 0.6) * 0.15;

    // Update shards.
    for (let i = trail.length - 1; i >= 0; i--) {
      const shard = trail[i];
      const data = shard.userData;
      data.life -= dt;
      shard.position.x += data.vx * dt;
      shard.position.y += data.vy * dt;
      data.vy -= GRAVITY * dt;
      shard.rotation.z += dt * 6;
      shard.material.opacity = Math.max(0, data.life / 0.6);
      shard.material.transparent = true;
      if (data.life <= 0) {
        levelGroup.remove(shard);
        shard.geometry.dispose();
        shard.material.dispose();
        trail.splice(i, 1);
      }
    }
    updateHud();
  }

  const renderSize = new THREE.Vector2();
  function render() {
    const size = renderer.getSize(renderSize);
    if (size.x > 0 && size.y > 0) {
      const aspect = size.x / size.y;
      if (Math.abs(camera.aspect - aspect) > 0.0005) {
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
      }
    }
    renderer.render(scene, camera);
  }

  function start(levelNumber = 1) {
    active = true;
    resetLevel(clamp(levelNumber - 1, 0, LEVELS.length - 1));
    updateHud();
  }

  function stop() {
    active = false;
    paused = false;
    finished = false;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
  }

  const api = {
    start, stop, update, render,
    get active() { return active; },
    get paused() { return paused; },
    get finished() { return finished; },
    get state() {
      return { level: levelIndex + 1, attempts, progress, bestProgress, x: player.x, y: player.y, onGround: player.onGround, paused, finished, begun };
    },
  };

  if (import.meta.env.DEV) {
    api.debugTeleport = (x) => { begun = true; player.x = x; player.y = 0; player.vy = 0; player.onGround = true; player.rotation = 0; };
    api.debugComplete = () => { begun = true; player.x = level.length + 0.1; };
    api.debugKill = () => die();
    api.debugObstacles = () => level.obstacles.map((o) => ({ type: o.type, x: o.x, minX: o.minX, maxX: o.maxX }));
    api.debugState = () => api.state;
    window.__dash = api;
  }

  resetLevel(0);
  return api;
}
