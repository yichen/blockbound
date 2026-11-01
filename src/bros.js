import * as THREE from 'three';

// Super Block Bros. — an original 2.5D side-scrolling platformer tribute.
// Run and jump across breakable blocks, collect coins, stomp angry jelly blobs and
// raise the flag. No Nintendo characters or assets are used.

const RUN_SPEED = 8.2;
const ACCEL = 34;
const AIR_ACCEL = 14;
const JUMP_SPEED = 23.0;
const GRAVITY = 44;
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

const LEVELS = [
  {
    name: 'Block Meadow', sky: 0x8ed8ff, groundTop: 0x8be36b, groundBody: 0x8a5a2b,
    segments: [[0, 23], [27, 20], [51, 21], [76, 21], [101, 28], [134, 16]],
    platforms: [[30, 3.6, 8], [52, 4.2, 7], [80, 3.6, 10], [106, 4.4, 8], [122, 3.6, 6]],
    blocks: [[8, 4.6, 'coin'], [12, 4.6, 'coin'], [16, 4.6, 'coin'], [10, 7.4, 'brick'], [56, 8.2, 'coin'], [60, 8.2, 'coin'], [86, 7.4, 'coin'], [90, 7.4, 'coin'], [112, 8.6, 'brick']],
    coins: [[6, 3.0], [8.2, 3.0], [10.4, 3.0], [31, 4.6], [33, 4.6], [35, 4.6], [37, 4.6], [53, 5.8], [55, 5.8], [57, 5.8], [81, 5.0], [83, 5.0], [85, 5.0], [87, 5.0], [89, 5.0], [107, 6.0], [109, 6.0], [111, 6.0], [124, 5.4], [126, 5.4], [128, 5.4], [136, 2.8], [138, 2.8], [140, 2.8]],
    enemies: [[18, 14, 22, 1.2], [33, 28, 34, 5.0], [58, 53, 64, 1.2], [70, 68, 74, 1.2], [86, 80, 92, 5.0], [114, 106, 120, 5.9], [122, 116, 128, 1.2]],
    checkpoint: 76, goal: 138,
  },
  {
    name: 'Canyon Run', sky: 0xffc48a, groundTop: 0xe0a35f, groundBody: 0x8a5a2b,
    segments: [[0, 18], [22, 16], [42, 18], [64, 14], [82, 20], [106, 16], [126, 26]],
    platforms: [[24, 3.6, 8], [46, 4.2, 7], [70, 3.8, 8], [92, 4.4, 8], [112, 3.8, 7], [130, 4.2, 8]],
    blocks: [[6, 4.6, 'coin'], [10, 4.6, 'coin'], [48, 8.2, 'coin'], [52, 8.2, 'coin'], [88, 7.6, 'coin'], [92, 7.6, 'coin'], [118, 8.6, 'brick']],
    coins: [[4, 3.0], [6.4, 3.0], [8.8, 3.0], [25, 4.6], [27, 4.6], [29, 4.6], [47, 5.8], [49, 5.8], [71, 5.4], [73, 5.4], [75, 5.4], [93, 6.0], [95, 6.0], [97, 6.0], [113, 5.4], [115, 5.4], [131, 5.8], [133, 5.8], [135, 5.8]],
    enemies: [[14, 8, 18, 1.2], [30, 24, 40, 5.0], [52, 46, 60, 1.2], [76, 70, 80, 5.4], [98, 92, 104, 6.0], [116, 112, 126, 5.4], [134, 128, 140, 1.2]],
    checkpoint: 86, goal: 144,
  },
  {
    name: 'Sky Steps', sky: 0xa8e6ff, groundTop: 0x9be15d, groundBody: 0x6b4a2a,
    segments: [[0, 16], [20, 12], [36, 14], [54, 16], [74, 12], [90, 18], [112, 14], [130, 28]],
    platforms: [[18, 3.6, 6], [34, 3.8, 8], [50, 4.2, 7], [68, 3.8, 8], [86, 4.4, 8], [104, 3.8, 7], [120, 4.2, 8]],
    blocks: [[4, 4.6, 'coin'], [8, 4.6, 'coin'], [38, 7.8, 'coin'], [42, 7.8, 'coin'], [72, 7.8, 'coin'], [76, 7.8, 'coin'], [108, 7.8, 'coin'], [112, 7.8, 'coin']],
    coins: [[3, 3.0], [5.4, 3.0], [19, 4.6], [21, 4.6], [35, 4.8], [37, 4.8], [51, 5.2], [53, 5.2], [69, 4.8], [71, 4.8], [87, 5.4], [89, 5.4], [105, 4.8], [107, 4.8], [121, 5.2], [123, 5.2], [132, 2.8], [134, 2.8], [136, 2.8]],
    enemies: [[12, 8, 16, 1.2], [22, 20, 28, 1.2], [48, 36, 50, 5.2], [66, 54, 70, 1.2], [82, 74, 84, 1.2], [94, 90, 104, 5.4], [116, 112, 128, 5.2], [138, 130, 148, 1.2]],
    checkpoint: 96, goal: 152,
  },
  {
    name: 'Ember Ridge', sky: 0xffb07a, groundTop: 0xd98a4a, groundBody: 0x6b4a2a,
    segments: [[0, 16], [21, 12], [37, 14], [55, 14], [73, 16], [93, 14], [111, 12], [127, 24]],
    platforms: [[14, 3.8, 8], [38, 4.0, 8], [58, 3.8, 8], [78, 4.2, 8], [98, 3.8, 8], [118, 4.0, 8]],
    blocks: [[5, 4.6, 'coin'], [9, 4.6, 'coin'], [42, 4.6, 'coin'], [46, 4.6, 'coin'], [82, 4.6, 'coin'], [114, 4.6, 'coin']],
    coins: [[4, 2.8], [6.4, 2.8], [15, 5.0], [17, 5.0], [39, 5.2], [41, 5.2], [59, 5.0], [61, 5.0], [79, 5.4], [81, 5.4], [99, 5.0], [101, 5.0], [119, 5.2], [121, 5.2], [129, 2.8], [131, 2.8], [133, 2.8]],
    enemies: [[12, 8, 16, 1.2], [28, 21, 33, 1.2], [48, 43, 51, 1.2], [68, 55, 69, 1.2], [88, 81, 89, 1.2], [104, 99, 107, 1.2], [124, 117, 127, 1.2], [140, 131, 149, 1.2]],
    checkpoint: 82, goal: 146,
  },
  {
    name: 'Moonlit Keep', sky: 0x232a4d, groundTop: 0x6fae8a, groundBody: 0x2f4a44,
    segments: [[0, 18], [23, 12], [40, 14], [59, 12], [76, 16], [97, 12], [114, 14], [133, 22]],
    platforms: [[15, 3.8, 7], [36, 4.2, 8], [56, 3.8, 8], [72, 4.2, 8], [93, 3.8, 8], [110, 4.2, 8], [128, 3.8, 7]],
    blocks: [[4, 4.6, 'coin'], [8, 4.6, 'coin'], [44, 4.6, 'coin'], [48, 4.6, 'coin'], [80, 4.6, 'coin'], [84, 4.6, 'coin'], [118, 4.6, 'coin'], [122, 4.6, 'coin']],
    coins: [[3, 2.8], [5.4, 2.8], [16, 5.0], [18, 5.0], [37, 5.4], [39, 5.4], [57, 5.0], [59, 5.0], [73, 5.4], [75, 5.4], [94, 5.0], [96, 5.0], [111, 5.4], [113, 5.4], [129, 5.0], [131, 5.0], [135, 2.8], [137, 2.8], [139, 2.8]],
    enemies: [[13, 8, 18, 1.2], [30, 23, 35, 1.2], [50, 40, 54, 1.2], [68, 59, 71, 1.2], [86, 76, 92, 1.2], [104, 97, 109, 1.2], [122, 114, 128, 1.2], [142, 133, 153, 1.2]],
    checkpoint: 93, goal: 150,
  },
];

function makeSpeckleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#d9d9d9';
  ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 260; i++) {
    const shade = 160 + Math.floor(Math.random() * 80);
    ctx.fillStyle = `rgba(${shade},${shade},${shade},.5)`;
    const size = 1 + Math.random() * 3;
    ctx.fillRect(Math.random() * 128, Math.random() * 128, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const SPECKLE_TEXTURE = makeSpeckleTexture();

function makeQuestionBlockTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffc93c';
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = 'rgba(255,255,255,.35)';
  ctx.fillRect(0, 0, 256, 24);
  ctx.fillRect(0, 0, 24, 256);
  ctx.strokeStyle = 'rgba(120,70,0,.55)';
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, 246, 246);
  ctx.fillStyle = 'rgba(110,60,0,.9)';
  ctx.font = '800 150px "Trebuchet MS", "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('?', 128, 140);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function makeBrickTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#b5653a';
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = 'rgba(60,25,15,.55)';
  ctx.lineWidth = 6;
  for (let row = 0; row < 4; row++) {
    const y = row * 64;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y); ctx.stroke();
    const offset = row % 2 === 0 ? 0 : 64;
    for (let x = offset; x < 256; x += 128) {
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 64); ctx.stroke();
    }
  }
  ctx.fillStyle = 'rgba(255,255,255,.12)';
  for (let i = 0; i < 40; i++) ctx.fillRect(Math.random() * 256, Math.random() * 256, 12, 4);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

const QUESTION_TEXTURE = makeQuestionBlockTexture();
const BRICK_TEXTURE = makeBrickTexture();

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
  const levelProps = [];
  let checkpoint = { x: START_X + 40, y: START_Y };
  let goal = { x: 138, y: 6 };
  let levelEnd = 148;
  let levelIndex = 0;

  function addSolid(x, y, w, h, color = COLORS.groundTop) {
    const mesh = box(w, h, 2.4, color);
    mesh.material.map = SPECKLE_TEXTURE;
    mesh.material.needsUpdate = true;
    mesh.position.set(x + w / 2, y + h / 2, 0);
    scene.add(mesh);
    const top = box(w, 0.25, 2.5, color === COLORS.brick ? COLORS.brick : 0xa6f27a, 0xa6f27a, 0.15);
    top.material.map = SPECKLE_TEXTURE;
    top.material.needsUpdate = true;
    top.position.set(x + w / 2, y + h - 0.02, 0);
    scene.add(top);
    const solid = { x, y, w, h, minX: x, maxX: x + w, minY: y, maxY: y + h, mesh, top, kind: 'ground' };
    solids.push(solid);
    return solid;
  }

  function addBumpBlock(x, y, kind = 'coin') {
    const mesh = box(1.8, 1.8, 1.8, 0xffffff, kind === 'coin' ? COLORS.question : 0x0, kind === 'coin' ? 0.3 : 0);
    mesh.material.map = kind === 'coin' ? QUESTION_TEXTURE : BRICK_TEXTURE;
    mesh.material.needsUpdate = true;
    mesh.position.set(x, y, 0);
    scene.add(mesh);
    const block = { x, y, w: 1.8, h: 1.8, minX: x - 0.9, maxX: x + 0.9, minY: y - 0.9, maxY: y + 0.9, kind, mesh, label: null, used: false, bump: 0 };
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

  function buildLevel(index = levelIndex) {
    levelIndex = clamp(index, 0, LEVELS.length - 1);
    const cfg = LEVELS[levelIndex];
    scene.background.set(cfg.sky);
    scene.fog.color.set(cfg.sky);
    for (const solid of solids) { scene.remove(solid.mesh); solid.mesh.geometry.dispose(); solid.mesh.material.dispose(); if (solid.top) { scene.remove(solid.top); solid.top.geometry.dispose(); solid.top.material.dispose(); } }
    solids.length = 0;
    for (const block of bumpBlocks) { scene.remove(block.mesh); block.mesh.geometry.dispose(); block.mesh.material.dispose(); if (block.label) { scene.remove(block.label); block.label.material.map?.dispose(); block.label.material.dispose(); } }
    bumpBlocks.length = 0;
    for (const coin of coins) { scene.remove(coin.mesh); coin.mesh.geometry.dispose(); coin.mesh.material.dispose(); }
    coins.length = 0;
    for (const enemy of enemies) { scene.remove(enemy.group); enemy.group.traverse((object) => { if (object.geometry) object.geometry.dispose(); if (object.material) object.material.dispose(); }); }
    enemies.length = 0;
    for (const prop of levelProps) { scene.remove(prop); prop.traverse?.((object) => { if (object.geometry) object.geometry.dispose(); if (object.material) object.material.dispose(); }); }
    levelProps.length = 0;

    for (const [startX, width] of cfg.segments) {
      addSolid(startX, 0, width, 1.6, cfg.groundTop);
      addSolid(startX, -1.6, width, 1.6, cfg.groundBody);
    }
    for (const [x, y, width] of cfg.platforms) addSolid(x, y, width, 0.8, cfg.groundTop);
    for (const [x, y, kind] of cfg.blocks) addBumpBlock(x, y, kind);
    for (const [x, y] of cfg.coins) addCoin(x, y);
    for (const [x, minX, maxX, y] of cfg.enemies) addEnemy(x, minX, maxX, y);

    // Mid-level checkpoint flag.
    const cpPole = box(0.18, 4.2, 0.18, 0xf4f7fb);
    cpPole.position.set(cfg.checkpoint, 2.1, 0.2);
    scene.add(cpPole);
    const cpFlag = box(1.2, 0.8, 0.12, 0x7be3cb);
    cpFlag.position.set(cfg.checkpoint + 0.7, 3.8, 0.2);
    scene.add(cpFlag);
    levelProps.push(cpPole, cpFlag);
    checkpoint = { x: cfg.checkpoint, y: 2.8 };

    // Goal flag.
    goal = { x: cfg.goal, y: 6 };
    const pole = box(0.25, 8.5, 0.25, 0xf4f7fb);
    pole.position.set(goal.x, 4.25, 0);
    scene.add(pole);
    const flag = box(2.4, 1.6, 0.16, COLORS.flag);
    flag.position.set(goal.x + 1.3, 7.6, 0);
    scene.add(flag);
    const star = makeLabel('GOAL', { accent: '#ffc93c', scale: 3, height: 0.8 });
    star.position.set(goal.x, 9.6, 0);
    scene.add(star);
    levelProps.push(pole, flag, star);
    levelEnd = cfg.goal + 12;
    if (element.level) element.level.textContent = `Level ${levelIndex + 1}/${LEVELS.length} · ${cfg.name}`;
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
    level: document.querySelector('#bros-level'),
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
    if (player.x < checkpoint.x) return `Level ${levelIndex + 1} · run right · collect coins · stomp the blobs`;
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
    const levelCheckpoint = LEVELS[levelIndex].checkpoint;
    const reachedCheckpoint = player.x >= levelCheckpoint;
    player.lives -= 1;
    player.invulnerable = 1.4;
    if (player.lives <= 0) {
      finished = true;
      won = false;
      finishOverlay();
      return;
    }
    player.x = reachedCheckpoint ? levelCheckpoint : START_X;
    player.y = reachedCheckpoint ? 2.8 : START_Y;
    player.vx = 0;
    player.vy = 0;
    showToast(`${player.lives} ${player.lives === 1 ? 'life' : 'lives'} left`);
    updateHud();
  }

  function finishOverlay() {
    const result = onFinish?.(levelIndex + 1, { time: elapsed, coins: player.coins, won }) || { isBest: false, best: best };
    best = result.best || best;
    if (element.finishTitle) element.finishTitle.textContent = won ? `Level ${levelIndex + 1} Cleared!` : 'Game Over';
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
    block.mesh.material.color.set(0x8a6a4a);
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
    best = getBest?.(levelIndex + 1) || {};
    cameraX = START_X;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    updateHud();
    snapCamera();
  }

  function resetRun(level = levelIndex + 1) {
    levelIndex = clamp(level - 1, 0, LEVELS.length - 1);
    resetLevel();
    buildLevel(levelIndex);
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
      else if (action === 'next') nextLevel();
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
    resetRun(levelIndex + 1);
    setOverlay(element.finish, false);
    showToast('New run');
  }

  function nextLevel() {
    resetRun(levelIndex + 2);
    setOverlay(element.finish, false);
    showToast(`Level ${levelIndex + 1} · ${LEVELS[levelIndex].name}`);
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
  function start(level = 1) {
    active = true;
    resetRun(level);
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
        level: levelIndex + 1, lives: player.lives, coins: player.coins, elapsed, running, finished, won, paused,
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
