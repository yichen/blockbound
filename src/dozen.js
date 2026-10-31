import * as THREE from 'three';

// 12 Dozen — a 3D math platformer. You are a little number block that starts at 12.
// Step on arithmetic pads to change your value and make the targets 24, 72 and 144.
// The number you carry also unlocks math powers:
//   multiple of 3 → climb       multiple of 4 → push
//   multiple of 5 → swim        multiple of 9 → jump tall
//   negative number → upside down (inverted gravity + camera)

const GRAVITY = 30;
const MOVE_SPEED = 7.2;
const JUMP_SPEED = 11.2;
const TALL_JUMP_SPEED = 16.4;
const GROUND_ACCEL = 20;
const AIR_ACCEL = 7;
const SWIM_SPEED = 4.8;
const CLIMB_SPEED = 3.8;
const PLAYER_WIDTH = 0.95;
const PLAYER_HEIGHT = 1.0;
const VOID_Y = -8;
const SKY_LIMIT = 46;
const START_VALUE = 12;
const START_POSITION = new THREE.Vector3(0, 0.06, 3.5);

const COLORS = {
  white: 0xf6fbff,
  teal: 0x63e6d5,
  lime: 0x9be15d,
  yellow: 0xffd166,
  purple: 0xb38bff,
  blue: 0x74a7ff,
  coral: 0xff7a5c,
  pink: 0xff9ff3,
  gold: 0xffc93c,
  add: 0x7bed9f,
  sub: 0xff7676,
  mul: 0xffd166,
  div: 0x74b9ff,
  wood: 0xc98b4d,
  water: 0x3fa9f5,
  climb: 0x9be15d,
};

const POWER_DEFS = [
  { id: 'climb', label: 'Climb', rule: 'multiples of 3', short: '×3', test: (value) => Number.isInteger(value) && value % 3 === 0 },
  { id: 'push', label: 'Push', rule: 'multiples of 4', short: '×4', test: (value) => Number.isInteger(value) && value % 4 === 0 },
  { id: 'swim', label: 'Swim', rule: 'multiples of 5', short: '×5', test: (value) => Number.isInteger(value) && value % 5 === 0 },
  { id: 'jump', label: 'Tall jump', rule: 'multiples of 9', short: '×9', test: (value) => Number.isInteger(value) && value % 9 === 0 },
  { id: 'flip', label: 'Upside down', rule: 'negative numbers', short: '< 0', test: (value) => value < 0 },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function formatTime(seconds) {
  if (seconds == null || !Number.isFinite(seconds)) return '–';
  const total = Math.max(0, seconds);
  const minutes = Math.floor(total / 60);
  const rest = total - minutes * 60;
  return `${String(minutes).padStart(2, '0')}:${rest.toFixed(1).padStart(4, '0')}`;
}

function makeLabelSprite(text, { accent = '#7be3cb', background = 'rgba(8, 18, 26, .8)', color = '#ffffff', scale = 3.4, height = 0.85 } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = background;
  ctx.beginPath();
  ctx.roundRect(8, 26, 496, 76, 26);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.font = '700 42px "Trebuchet MS", "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.fillText(text, 256, 66);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
  sprite.scale.set(scale, height, 1);
  return sprite;
}

function numberTexture(value) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = value < 0 ? '#2a1230' : '#0f2230';
  ctx.beginPath();
  ctx.roundRect(8, 8, 240, 240, 52);
  ctx.fill();
  ctx.strokeStyle = value < 0 ? '#ff9ff3' : '#7be3cb';
  ctx.lineWidth = 10;
  ctx.stroke();
  const text = String(value);
  ctx.fillStyle = value < 0 ? '#ffd9f7' : '#ffffff';
  ctx.font = `800 ${text.length > 3 ? 96 : 118}px "Trebuchet MS", "Arial Black", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 132);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function boxMesh(w, h, d, color, emissive = 0x000000, emissiveIntensity = 0) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.05, emissive, emissiveIntensity }),
  );
}

export function createDozen({ canvas, renderer, getBest, onFinish, onExit }) {
  // ------------------------------------------------------------- scene -------
  const scene = new THREE.Scene();
  const sky = new THREE.Color(0x9fdcff);
  scene.background = sky;
  const fog = new THREE.Fog(sky.clone(), 65, 220);
  scene.fog = fog;

  const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 400);
  camera.position.set(0, 6.4, 12);
  const mapCamera = new THREE.OrthographicCamera(-60, 60, 40, -40, 0.1, 400);
  let mapView = false;

  scene.add(new THREE.HemisphereLight(0xe9f8ff, 0x6a7f8c, 1.7));
  const sun = new THREE.DirectionalLight(0xfff6df, 2.1);
  sun.position.set(22, 44, 16);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x9fd8ff, 0.8);
  rim.position.set(-26, 20, -36);
  scene.add(rim);

  // ---------------------------------------------------------- level data -----
  const platforms = [];
  const pads = [];
  const gates = [];
  const decorations = [];
  const climbables = [];
  const waters = [];
  const crates = [];
  const gateCheckpoints = [];
  let levelGroup = new THREE.Group();
  scene.add(levelGroup);
  let finishPoint = null;
  let checkpoint = { position: START_POSITION.clone(), value: START_VALUE };

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

  function addPlatform({ x = 0, z = 0, top = 0, w = 6, d = 5, h = 1.2, color = COLORS.teal }) {
    const platform = { x, z, top, w, d, h, color };
    const mesh = boxMesh(w, h, d, color, color, 0.12);
    mesh.position.set(x, top - h / 2, z);
    const rim = boxMesh(w + 0.12, 0.1, d + 0.12, color, color, 0.5);
    rim.position.set(x, top + 0.03, z);
    levelGroup.add(mesh, rim);
    platform.minX = x - w / 2; platform.maxX = x + w / 2;
    platform.minY = top - h; platform.maxY = top;
    platform.minZ = z - d / 2; platform.maxZ = z + d / 2;
    platforms.push(platform);
    return platform;
  }

  function addSign(text, { x, y, z, accent = '#7be3cb', scale = 4.2, height = 1.05 } = {}) {
    const sign = makeLabelSprite(text, { accent, scale, height });
    sign.position.set(x, y, z);
    levelGroup.add(sign);
    return sign;
  }

  function addPad({ x, z, top, op, amount, underside = false }) {
    const color = op === '+' ? COLORS.add : op === '−' ? COLORS.sub : (op === '×' && amount >= 0) ? COLORS.mul : COLORS.div;
    const tile = boxMesh(2.4, 0.16, 2.4, color, color, 0.55);
    tile.position.set(x, underside ? top - 0.1 : top + 0.07, z);
    const label = makeLabelSprite(`${op}${amount}`, {
      accent: `#${color.toString(16).padStart(6, '0')}`,
      scale: 2.6,
      height: 0.65,
    });
    label.position.set(x, underside ? top - 1.7 : top + 1.9, z);
    label.userData.baseScale = label.scale.clone();
    label.userData.mapScale = label.scale.clone().multiplyScalar(2.6);
    levelGroup.add(tile, label);
    pads.push({ x, z, top, op, amount, color, tile, label, underside, used: false });
  }

  function addGate({ x, z, top, required, finish = false }) {
    const gate = { x, z, top, required, open: false, finish };
    const frameColor = COLORS.pink;
    for (const side of [-1, 1]) {
      const pillar = boxMesh(0.7, 4.2, 0.7, frameColor, frameColor, 0.28);
      pillar.position.set(x + side * 5.4, top + 2.1, z);
      levelGroup.add(pillar);
    }
    const bar = boxMesh(11.5, 0.6, 0.7, frameColor, frameColor, 0.4);
    bar.position.set(x, top + 4.1, z);
    const barrier = new THREE.Mesh(
      new THREE.PlaneGeometry(10.2, 3.8),
      new THREE.MeshStandardMaterial({ color: COLORS.pink, emissive: COLORS.pink, emissiveIntensity: 0.55, transparent: true, opacity: 0.38, side: THREE.DoubleSide }),
    );
    barrier.position.set(x, top + 2.0, z);
    const sign = makeLabelSprite(`NEEDS ${required}`, { accent: '#ff9ff3', scale: 4.4, height: 1.1 });
    sign.position.set(x, top + 5.3, z);
    sign.userData.baseScale = sign.scale.clone();
    sign.userData.mapScale = sign.scale.clone().multiplyScalar(2.2);
    levelGroup.add(bar, barrier, sign);
    gate.barrier = barrier;
    gate.bar = bar;
    gate.sign = sign;
    gate.minX = x - 5.4; gate.maxX = x + 5.4;
    gate.minZ = z - 0.5; gate.maxZ = z + 0.5;
    gate.minY = top; gate.maxY = top + 3.9;
    gates.push(gate);
    return gate;
  }

  function addClimbWall({ x, z, top, w = 7, d = 1.4 }) {
    const wall = addPlatform({ x, z, top, w, d, h: top, color: COLORS.climb });
    climbables.push({
      minX: wall.minX, maxX: wall.maxX,
      faceZ: wall.maxZ,
      top: wall.top, wall,
    });
    addSign('CLIMB ×3', { x: x + w / 2 + 2.4, y: top + 1.6, z: wall.maxZ + 0.2, accent: '#9be15d', scale: 4.0, height: 1 });
    return wall;
  }

  function addWater({ x, z, w = 14, d = 7, surface = 2.2, bottom = -0.4 }) {
    const mesh = boxMesh(w, surface - bottom, d, COLORS.water, COLORS.water, 0.25);
    mesh.material.transparent = true;
    mesh.material.opacity = 0.55;
    mesh.position.set(x, (surface + bottom) / 2, z);
    const surfaceMesh = boxMesh(w + 0.2, 0.06, d + 0.2, 0xbfeaff, 0xbfeaff, 0.5);
    surfaceMesh.position.set(x, surface, z);
    levelGroup.add(mesh, surfaceMesh);
    waters.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, surface, bottom, x, z });
    addSign('SWIM ×5', { x, y: surface + 2.6, z: z + d / 2 + 0.8, accent: '#74b9ff', scale: 4.0, height: 1 });
  }

  function addCrate({ x, z, top }) {
    const size = 1.7;
    const mesh = boxMesh(size, size, size, COLORS.wood, 0x6b3f1d, 0.2);
    mesh.position.set(x, top + size / 2, z);
    const band = boxMesh(size + 0.04, 0.16, size + 0.04, 0x7a4a22, 0x7a4a22, 0.3);
    band.position.set(x, top + size / 2 + 0.18, z);
    const band2 = boxMesh(size + 0.04, 0.16, size + 0.04, 0x7a4a22, 0x7a4a22, 0.3);
    band2.position.set(x, top + size / 2 - 0.18, z);
    levelGroup.add(mesh, band, band2);
    const crate = {
      isCrate: true, x, z, y: top, size, mesh, band, band2, vy: 0, falling: false, removed: false,
      minX: x - size / 2, maxX: x + size / 2,
      minY: top, maxY: top + size,
      minZ: z - size / 2, maxZ: z + size / 2,
    };
    crates.push(crate);
    addSign('PUSH ×4', { x: x + 4.2, y: top + 2.4, z: z + 2.6, accent: '#ffd166', scale: 3.6, height: 0.9 });
    return crate;
  }

  function addDozenDecor() {
    const symbols = ['+', '−', '×', '÷', '12', '144', '24', '72'];
    const palette = [COLORS.teal, COLORS.yellow, COLORS.purple, COLORS.coral, COLORS.blue, COLORS.lime];
    for (let i = 0; i < 34; i++) {
      const kind = i % 4;
      let mesh;
      if (kind === 0) {
        mesh = boxMesh(1.4 + (i % 3) * 0.5, 1.4 + (i % 2) * 0.6, 1.4, palette[i % palette.length], 0, 0);
      } else {
        mesh = makeLabelSprite(symbols[i % symbols.length], {
          accent: `#${palette[i % palette.length].toString(16).padStart(6, '0')}`,
          scale: 1.9,
          height: 0.5,
        });
      }
      const angle = (i / 34) * Math.PI * 2;
      const radius = 24 + (i % 7) * 9;
      mesh.position.set(Math.cos(angle) * radius, 8 + (i % 8) * 4, -48 + Math.sin(angle) * radius);
      levelGroup.add(mesh);
      decorations.push({ mesh, baseY: mesh.position.y, spin: kind === 0 ? 0.15 + (i % 4) * 0.05 : 0 });
    }
  }

  function buildLevel() {
    disposeGroup(levelGroup);
    platforms.length = 0;
    pads.length = 0;
    gates.length = 0;
    decorations.length = 0;
    climbables.length = 0;
    waters.length = 0;
    crates.length = 0;
    gateCheckpoints.length = 0;
    finishPoint = null;

    // Start plaza — 12 already carries climb (÷3) and push (÷4).
    addPlatform({ x: 0, z: 0, top: 0, w: 14, d: 14, h: 1.4, color: COLORS.white });
    addDozenDecor();

    // ---- Section A: climb (÷3), push (÷4), gate 24. ----
    addPlatform({ x: 0, z: -9, top: 0.4, w: 5.8, d: 4.8, color: COLORS.teal });
    addPad({ x: 0, z: -9, top: 0.4, op: '+', amount: 12 });
    addPlatform({ x: 2.4, z: -14.5, top: 0.9, w: 5.2, d: 4.6, color: COLORS.lime });
    addClimbWall({ x: 2.4, z: -19.0, top: 4.3 });
    addPlatform({ x: 2.4, z: -21.5, top: 4.3, w: 5.4, d: 3.4, color: COLORS.teal });
    addPlatform({ x: 2.4, z: -24.2, top: 4.3, w: 3.0, d: 2.6, color: COLORS.yellow });
    addCrate({ x: 2.4, z: -24.2, top: 4.3 });
    const gate1Top = 4.3;
    addPlatform({ x: 0, z: -28.4, top: gate1Top, w: 12, d: 5.2, color: COLORS.blue });
    const gate1 = addGate({ x: 0, z: -31.0, top: gate1Top, required: 24 });
    gateCheckpoints.push({ gate: gate1, position: new THREE.Vector3(0, 4.5 + 0.06, -33.6), value: 24 });
    addPlatform({ x: 0, z: -33.6, top: 4.5, w: 7.4, d: 4.8, color: COLORS.teal });

    // ---- Section B: swim (÷5), gate 72. ----
    addPlatform({ x: 0, z: -37.8, top: 3.6, w: 5.4, d: 4.6, color: COLORS.lime });
    addPlatform({ x: 0, z: -41.6, top: 2.6, w: 5.2, d: 4.4, color: COLORS.yellow });
    addPad({ x: 0, z: -41.6, top: 2.6, op: '+', amount: 1 });
    addWater({ x: 0, z: -46.6, w: 14, d: 6.6, surface: 2.2, bottom: -0.4 });
    addPlatform({ x: 0, z: -52.4, top: 1.9, w: 7, d: 4.8, color: COLORS.teal });
    addPad({ x: 0, z: -52.4, top: 1.9, op: '×', amount: 3 });
    addPlatform({ x: 0, z: -56.4, top: 2.1, w: 5.2, d: 4.4, color: COLORS.lime });
    addPad({ x: 0, z: -56.4, top: 2.1, op: '−', amount: 3 });
    const gate2Top = 2.3;
    addPlatform({ x: 0, z: -60.6, top: gate2Top, w: 12, d: 5.2, color: COLORS.blue });
    const gate2 = addGate({ x: 0, z: -63.2, top: gate2Top, required: 72 });
    gateCheckpoints.push({ gate: gate2, position: new THREE.Vector3(0, 2.5 + 0.06, -65.6), value: 72 });
    addPlatform({ x: 0, z: -65.6, top: 2.5, w: 7.4, d: 4.8, color: COLORS.teal });

    // ---- Section C: tall jump (÷9), upside down (negative), gate 144. ----
    addPlatform({ x: 0, z: -69.8, top: 2.7, w: 5.4, d: 4.6, color: COLORS.lime });
    addSign('TALL JUMP ×9', { x: 5.4, y: 4.6, z: -71.4, accent: '#ffc93c', scale: 4.0, height: 1 });
    addPlatform({ x: 0, z: -74.8, top: 5.9, w: 7.2, d: 4.8, color: COLORS.gold });
    addPad({ x: 0, z: -76.4, top: 5.9, op: '×', amount: -1 });
    addSign('NEGATIVE = UPSIDE DOWN', { x: 5.8, y: 7.4, z: -76.4, accent: '#ff9ff3', scale: 6.2, height: 1.5 });
    const ceiling = addPlatform({ x: 0, z: -79.0, top: 9.2, w: 8, d: 6.0, h: 1.2, color: COLORS.purple });
    addPad({ x: 0, z: -80.9, top: ceiling.minY, op: '×', amount: -1, underside: true });
    addPlatform({ x: 0, z: -83.6, top: 1.2, w: 9, d: 6.0, color: COLORS.teal });
    addPad({ x: 0, z: -84.2, top: 1.2, op: '×', amount: 2 });
    const finishTop = 1.6;
    addPlatform({ x: 0, z: -89.6, top: finishTop, w: 16, d: 10, color: COLORS.gold });
    const finishGate = addGate({ x: 0, z: -94.6, top: finishTop, required: 144, finish: true });
    finishGate.finish = true;
    finishPoint = { x: 0, y: finishTop + 0.1, z: -94.6 };
    addSign('144 = 12 DOZEN', { x: 0, y: finishTop + 6.4, z: -101, accent: '#ffc93c', scale: 7.0, height: 1.7 });
    const pad = boxMesh(5.4, 0.14, 5.4, COLORS.gold, COLORS.gold, 0.7);
    pad.position.set(0, finishTop + 0.08, -96.5);
    levelGroup.add(pad);

    checkpoint = { position: START_POSITION.clone(), value: START_VALUE };
  }

  // ------------------------------------------------------------- player ------
  const playerGroup = new THREE.Group();
  const playerMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.05, map: numberTexture(START_VALUE) });
  const playerCube = new THREE.Mesh(new THREE.BoxGeometry(PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_WIDTH), playerMaterial);
  playerCube.position.y = PLAYER_HEIGHT / 2;
  playerGroup.add(playerCube);
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.85, 0.06, 8, 28),
    new THREE.MeshStandardMaterial({ color: 0x7be3cb, emissive: 0x7be3cb, emissiveIntensity: 0.9 }),
  );
  halo.rotation.x = -Math.PI / 2;
  halo.position.y = 0.08;
  playerGroup.add(halo);
  scene.add(playerGroup);

  const valueSprite = makeLabelSprite('12', { accent: '#7be3cb', scale: 1.9, height: 0.5 });
  valueSprite.position.y = 2.0;
  playerGroup.add(valueSprite);

  const youMarker = makeLabelSprite('YOU', { accent: '#ffc93c', scale: 4.4, height: 1.1 });
  youMarker.visible = false;
  scene.add(youMarker);

  const player = {
    position: START_POSITION.clone(),
    velocity: new THREE.Vector3(),
    onGround: false,
    ground: null,
    jumpBuffer: 0,
    climbing: false,
    climbingWall: null,
    inWater: false,
  };

  let value = START_VALUE;
  let equation = 'Start · 12';
  let activePowers = [];
  let elapsed = 0;
  let running = false;
  let finished = false;
  let paused = false;
  let active = false;
  let gateIndex = 0;
  let cameraTarget = new THREE.Vector3();
  let toastTimer = 0;
  let respawnTimer = 0;
  let lastGateToast = -Infinity;
  let bestTime = getBest?.() ?? null;

  const element = {
    screen: document.querySelector('#dozen-screen'),
    timer: document.querySelector('#dozen-timer'),
    gates: document.querySelector('#dozen-gates'),
    best: document.querySelector('#dozen-best-hud'),
    value: document.querySelector('#dozen-value'),
    equation: document.querySelector('#dozen-equation'),
    powers: document.querySelector('#dozen-powers'),
    objective: document.querySelector('#dozen-objective'),
    toast: document.querySelector('#dozen-toast'),
    pause: document.querySelector('#dozen-pause'),
    finish: document.querySelector('#dozen-finish'),
    finishTime: document.querySelector('#dozen-finish-time'),
    finishBest: document.querySelector('#dozen-finish-best'),
    finishValue: document.querySelector('#dozen-finish-value'),
    pauseValue: document.querySelector('#dozen-pause-value'),
    mapToggle: document.querySelector('#dozen-map-toggle'),
    mapCaption: document.querySelector('#dozen-map-caption'),
  };

  const isTouch = matchMedia('(pointer: coarse)').matches;
  const keys = new Set();

  function gravityDirection() {
    return value < 0 ? -1 : 1;
  }

  function hasPower(id) {
    return activePowers.includes(id);
  }

  function powerList() {
    return POWER_DEFS.filter((definition) => definition.test(value));
  }

  function renderPowers() {
    if (!element.powers) return;
    element.powers.innerHTML = POWER_DEFS.map((definition) => {
      const on = hasPower(definition.id);
      return `<span class="dozen-power${on ? ' on' : ''}" title="${definition.label} · ${definition.rule}"><b>${definition.label}</b><i>${definition.short}</i></span>`;
    }).join('');
  }

  function showToast(message) {
    if (!element.toast) return;
    element.toast.textContent = message;
    element.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.toast.classList.remove('show'), 2600);
  }

  function setOverlay(node, visible) {
    if (!node) return;
    node.hidden = !visible;
    node.style.display = visible ? '' : 'none';
  }

  function updateHud() {
    if (element.timer) element.timer.textContent = formatTime(running || finished ? elapsed : 0);
    if (element.gates) element.gates.textContent = `Gate ${Math.min(gateIndex + 1, gates.length)}/${gates.length}`;
    if (element.best) element.best.textContent = `Best ${bestTime != null ? formatTime(bestTime) : '–'}`;
    if (element.value) element.value.textContent = String(value);
    if (element.equation) element.equation.textContent = equation;
    if (element.powers) renderPowers();
    if (element.objective) {
      const gate = gates[gateIndex];
      element.objective.textContent = finished
        ? 'Twelve dozen!'
        : gate
          ? `Make ${gate.required} — you have ${value}`
          : 'Reach the finish';
    }
    if (element.pauseValue) element.pauseValue.textContent = `Your number: ${value} · ${equation}`;
  }

  function setValue(next, description) {
    const beforeGravity = gravityDirection();
    value = next;
    equation = description;
    activePowers = powerList().map((definition) => definition.id);
    halo.material.color.set(value < 0 ? COLORS.pink : value === 144 ? COLORS.gold : 0x7be3cb);
    halo.material.emissive.set(value < 0 ? COLORS.pink : value === 144 ? COLORS.gold : 0x7be3cb);
    const texture = numberTexture(value);
    if (playerMaterial.map) playerMaterial.map.dispose();
    playerMaterial.map = texture;
    playerMaterial.needsUpdate = true;
    valueSprite.material.map?.dispose();
    valueSprite.material.map = numberSpriteTexture(String(value));
    valueSprite.material.needsUpdate = true;
    updateHud();
    if (gravityDirection() !== beforeGravity) snapCamera();
  }

  function numberSpriteTexture(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 96;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(9, 18, 26, .82)';
    ctx.beginPath();
    ctx.roundRect(4, 8, 248, 80, 26);
    ctx.fill();
    ctx.strokeStyle = text.startsWith('-') ? '#ff9ff3' : text === '144' ? '#ffc93c' : '#7be3cb';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 58px "Trebuchet MS", "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 50);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  function playerBox() {
    const half = PLAYER_WIDTH / 2;
    return {
      minX: player.position.x - half, maxX: player.position.x + half,
      minY: player.position.y, maxY: player.position.y + PLAYER_HEIGHT,
      minZ: player.position.z - half, maxZ: player.position.z + half,
    };
  }

  function overlapsBox(box, blocker) {
    return box.maxX > blocker.minX && box.minX < blocker.maxX
      && box.maxY > blocker.minY && box.minY < blocker.maxY
      && box.maxZ > blocker.minZ && box.minZ < blocker.maxZ;
  }

  function resetPads() {
    for (const pad of pads) {
      pad.used = false;
      pad.tile.visible = true;
      pad.label.visible = true;
    }
  }

  function resetCrates() {
    for (const crate of crates) {
      crate.mesh.visible = true;
      crate.band.visible = true;
      crate.band2.visible = true;
      crate.falling = false;
      crate.removed = false;
      crate.vy = 0;
    }
  }

  function respawn(reason = 'Try again!') {
    if (respawnTimer > 0) return;
    respawnTimer = 0.35;
    player.position.copy(checkpoint.position);
    player.velocity.set(0, 0, 0);
    player.onGround = false;
    player.ground = null;
    player.climbing = false;
    player.inWater = false;
    resetPads();
    setValue(checkpoint.value, `Reset · ${checkpoint.value}`);
    snapCamera();
    showToast(reason);
  }

  function openGate(gate) {
    if (gate.open) return;
    gate.open = true;
    gate.barrier.visible = false;
    gate.bar.material.color.set(COLORS.lime);
    gate.bar.material.emissive.set(COLORS.lime);
    if (gate.finish) {
      gateIndex = gates.length;
    } else {
      const saved = gateCheckpoints.find((entry) => entry.gate === gate);
      if (saved) {
        checkpoint = { position: saved.position.clone(), value: saved.value };
        gateIndex = Math.min(gateIndex + 1, gates.length);
      }
    }
    showToast(gate.finish ? 'You made twelve dozen!' : `Gate open · ${gate.required} is correct!`);
    updateHud();
  }

  function finishRun() {
    finished = true;
    running = false;
    paused = false;
    setOverlay(element.pause, false);
    const result = onFinish?.(elapsed) || { isBest: false, best: elapsed };
    bestTime = result.best;
    if (element.finishTime) element.finishTime.textContent = formatTime(elapsed);
    if (element.finishBest) element.finishBest.textContent = result.isBest ? 'New best time!' : `Best ${formatTime(result.best)}`;
    if (element.finishValue) element.finishValue.textContent = '144 = 12 × 12';
    setOverlay(element.finish, true);
    updateHud();
  }

  function resetRun() {
    mapView = false;
    scene.fog = fog;
    if (element.mapToggle) { element.mapToggle.textContent = '2D'; element.mapToggle.setAttribute('aria-pressed', 'false'); }
    if (element.mapCaption) element.mapCaption.hidden = true;
    element.screen?.classList.remove('dozen-map-open');
    elapsed = 0;
    running = false;
    finished = false;
    paused = false;
    gateIndex = 0;
    checkpoint = { position: START_POSITION.clone(), value: START_VALUE };
    buildLevel();
    resetPads();
    resetCrates();
    for (const gate of gates) {
      gate.open = false;
      gate.barrier.visible = true;
      gate.bar.material.color.set(COLORS.pink);
      gate.bar.material.emissive.set(COLORS.pink);
    }
    player.position.copy(START_POSITION);
    player.velocity.set(0, 0, 0);
    player.onGround = true;
    player.ground = null;
    player.climbing = false;
    player.inWater = false;
    equation = 'Start · 12';
    setValue(START_VALUE, 'Start · 12');
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    bestTime = getBest?.() ?? null;
    updateHud();
    snapCamera();
  }

  // ---------------------------------------------------------- 2D map ---------
  function courseBounds() {
    let minX = Infinity; let maxX = -Infinity; let minZ = Infinity; let maxZ = -Infinity;
    for (const platform of platforms) {
      minX = Math.min(minX, platform.minX);
      maxX = Math.max(maxX, platform.maxX);
      minZ = Math.min(minZ, platform.minZ);
      maxZ = Math.max(maxZ, platform.maxZ);
    }
    return { minX, maxX, minZ, maxZ };
  }

  function updateMapCamera(aspect) {
    const bounds = courseBounds();
    const margin = 12;
    const width = bounds.maxX - bounds.minX + margin * 2;
    const length = bounds.maxZ - bounds.minZ + margin * 2;
    const centerX = (bounds.minX + bounds.maxX) / 2;
    const centerZ = (bounds.minZ + bounds.maxZ) / 2;
    mapCamera.position.set(centerX, 160, centerZ);
    if (aspect >= 1) {
      const halfHeight = Math.max(length / 2 / aspect, width / 2);
      mapCamera.left = -halfHeight * aspect;
      mapCamera.right = halfHeight * aspect;
      mapCamera.top = halfHeight;
      mapCamera.bottom = -halfHeight;
      mapCamera.up.set(-1, 0, 0);
    } else {
      const halfHeight = length / 2;
      const halfWidth = Math.max(halfHeight * aspect, width / 2);
      mapCamera.left = -halfWidth;
      mapCamera.right = halfWidth;
      mapCamera.top = halfHeight;
      mapCamera.bottom = -halfHeight;
      mapCamera.up.set(0, 0, -1);
    }
    mapCamera.lookAt(centerX, 0, centerZ);
    mapCamera.updateProjectionMatrix();
  }

  function setMapView(next) {
    if (!active || paused || finished) return;
    if (mapView === next) return;
    mapView = next;
    keys.clear();
    for (const pad of pads) pad.label.scale.copy(mapView ? pad.label.userData.mapScale : pad.label.userData.baseScale);
    for (const gate of gates) gate.sign.scale.copy(mapView ? gate.sign.userData.mapScale : gate.sign.userData.baseScale);
    for (const decoration of decorations) decoration.mesh.visible = !mapView;
    youMarker.visible = mapView;
    if (mapView) {
      scene.fog = null;
      youMarker.position.copy(player.position).add(new THREE.Vector3(0, 1.2, 0));
      updateMapCamera(camera.aspect || innerWidth / innerHeight);
    } else {
      scene.fog = fog;
      snapCamera();
    }
    if (element.mapToggle) {
      element.mapToggle.textContent = mapView ? '3D' : '2D';
      element.mapToggle.setAttribute('aria-pressed', mapView ? 'true' : 'false');
    }
    if (element.mapCaption) element.mapCaption.hidden = !mapView;
    element.screen?.classList.toggle('dozen-map-open', mapView);
    updateHud();
  }

  function toggleMap() {
    setMapView(!mapView);
  }

  element.mapToggle?.addEventListener('click', () => toggleMap());

  // ---------------------------------------------------------- input ----------
  function down(event) {
    if (!active || event.repeat) return;
    const code = event.code;
    if (code === 'KeyW' || code === 'ArrowUp') keys.add('forward');
    else if (code === 'KeyS' || code === 'ArrowDown') keys.add('back');
    else if (code === 'KeyA' || code === 'ArrowLeft') keys.add('left');
    else if (code === 'KeyD' || code === 'ArrowRight') keys.add('right');
    else if (code === 'Space') { keys.add('jump'); player.jumpBuffer = 0.16; }
    else if (code === 'KeyR') { if (!paused && !finished && !mapView) respawn('Reset to checkpoint'); }
    else if (code === 'KeyM') { toggleMap(); }
    else if (code === 'Escape') {
      if (mapView) setMapView(false);
      else if (finished) leave();
      else if (paused) resume();
      else pause();
    } else return;
    if (['forward', 'back', 'left', 'right', 'jump'].some((key) => keys.has(key))) startTimer();
    event.preventDefault?.();
  }

  function up(event) {
    if (event.code === 'KeyW' || event.code === 'ArrowUp') keys.delete('forward');
    else if (event.code === 'KeyS' || event.code === 'ArrowDown') keys.delete('back');
    else if (event.code === 'KeyA' || event.code === 'ArrowLeft') keys.delete('left');
    else if (event.code === 'KeyD' || event.code === 'ArrowRight') keys.delete('right');
    else if (event.code === 'Space') keys.delete('jump');
  }

  function startTimer() {
    if (!active || paused || finished || running) return;
    running = true;
    updateHud();
  }

  function pause() {
    if (!active || finished) return;
    paused = true;
    keys.clear();
    setOverlay(element.pause, true);
    updateHud();
  }

  function resume() {
    if (!active) return;
    paused = false;
    setOverlay(element.pause, false);
    updateHud();
  }

  function restart() {
    resetRun();
    running = false;
    showToast('Run reset');
  }

  function leave() {
    active = false;
    paused = false;
    finished = false;
    running = false;
    mapView = false;
    scene.fog = fog;
    keys.clear();
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    element.screen?.classList.remove('dozen-map-open');
    onExit?.();
  }

  document.addEventListener('keydown', down);
  document.addEventListener('keyup', up);
  for (const button of document.querySelectorAll('[data-dozen-move]')) {
    const key = button.dataset.dozenMove;
    button.addEventListener('pointerdown', (event) => { event.preventDefault(); if (!active || paused || finished || mapView) return; keys.add(key); startTimer(); button.setPointerCapture?.(event.pointerId); });
    const release = (event) => { keys.delete(key); if (button.hasPointerCapture?.(event.pointerId)) button.releasePointerCapture(event.pointerId); };
    for (const type of ['pointerup', 'pointercancel', 'pointerleave']) button.addEventListener(type, release);
  }
  for (const button of document.querySelectorAll('[data-dozen-jump]')) {
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      if (!active || paused || finished || mapView) return;
      keys.add('jump');
      player.jumpBuffer = 0.16;
      startTimer();
    });
    for (const type of ['pointerup', 'pointercancel', 'pointerleave']) button.addEventListener(type, () => keys.delete('jump'));
  }
  for (const button of document.querySelectorAll('[data-dozen-action]')) {
    button.addEventListener('click', () => {
      const action = button.dataset.dozenAction;
      if (action === 'resume') resume();
      else if (action === 'restart') restart();
      else if (action === 'menu') leave();
    });
  }

  // ---------------------------------------------------------- helpers --------
  function findClimbWall() {
    for (const wall of climbables) {
      if (player.position.x < wall.minX - 0.2 || player.position.x > wall.maxX + 0.2) continue;
      if (player.position.z < wall.faceZ - 0.4 || player.position.z > wall.faceZ + 1.6) continue;
      if (player.position.y >= wall.top) continue;
      return wall;
    }
    return null;
  }

  function inWaterBox(box) {
    for (const water of waters) {
      if (box.maxX <= water.minX || box.minX >= water.maxX) continue;
      if (box.maxZ <= water.minZ || box.minZ >= water.maxZ) continue;
      if (box.minY > water.surface || box.maxY < water.bottom) continue;
      return water;
    }
    return null;
  }

  function crateSupported(crate) {
    for (const platform of platforms) {
      if (crate.x - crate.size / 2 < platform.minX || crate.x + crate.size / 2 > platform.maxX) continue;
      if (crate.z - crate.size / 2 < platform.minZ || crate.z + crate.size / 2 > platform.maxZ) continue;
      if (Math.abs(platform.top - crate.y) < 0.08) return true;
    }
    return false;
  }

  function step(axis, amount) {
    if (!amount) return;
    player.position[axis] += amount;
    let box = playerBox();
    const half = PLAYER_WIDTH / 2;
    const blockers = [...platforms, ...gates.filter((gate) => !gate.open), ...crates.filter((crate) => !crate.falling && !crate.removed)];
    for (const blocker of blockers) {
      if (!overlapsBox(box, blocker)) continue;
      const isGate = blocker.required != null;
      const isCrate = blocker.isCrate === true;
      if (isGate && value === blocker.required) {
        openGate(blocker);
        if (blocker.finish) finishRun();
        box = playerBox();
        continue;
      }
      if (isGate) {
        if (elapsed - lastGateToast > 2.5) {
          lastGateToast = elapsed;
          showToast(blocker.finish
            ? `The finish needs exactly 144 · you have ${value}`
            : `Needs ${blocker.required} · you have ${value} — change your number`);
        }
      }
      if (!isGate && !isCrate && (player.onGround || player.inWater)) {
        const rise = blocker.maxY - player.position.y;
        if (rise > 0 && rise <= 0.66) {
          player.position.y = blocker.maxY;
          player.velocity.y = 0;
          if (axis === 'x') player.position.x = amount > 0 ? blocker.minX + half + 0.02 : blocker.maxX - half - 0.02;
          else player.position.z = amount > 0 ? blocker.minZ + half + 0.02 : blocker.maxZ - half - 0.02;
          player.onGround = true;
          player.ground = blocker;
          box = playerBox();
          continue;
        }
      }
      if (isCrate && hasPower('push')) {
        const crate = blocker;
        const push = (amount > 0 ? 1 : -1) * Math.max(Math.abs(amount) * 0.8, 0.9 / 60);
        crate[axis] += push;
        crate.minX = crate.x - crate.size / 2; crate.maxX = crate.x + crate.size / 2;
        crate.minZ = crate.z - crate.size / 2; crate.maxZ = crate.z + crate.size / 2;
        crate.mesh.position[axis] += push;
        crate.band.position[axis] += push;
        crate.band2.position[axis] += push;
        box = playerBox();
        if (!overlapsBox(box, crate)) continue;
      }
      if (axis === 'x') {
        player.position.x = amount > 0 ? blocker.minX - half - 0.001 : blocker.maxX + half + 0.001;
        player.velocity.x = 0;
      } else {
        player.position.z = amount > 0 ? blocker.minZ - half - 0.001 : blocker.maxZ + half + 0.001;
        player.velocity.z = 0;
      }
      box = playerBox();
    }
  }

  // Small ledges can be stepped onto when grounded or swimming.
  function tryStepUp() {
    if (!player.onGround && !player.inWater) return;
    const box = playerBox();
    for (const platform of platforms) {
      const horizontal = box.maxX > platform.minX && box.minX < platform.maxX && box.maxZ > platform.minZ && box.minZ < platform.maxZ;
      if (!horizontal) continue;
      const rise = platform.maxY - player.position.y;
      if (rise > 0 && rise <= 0.62) {
        player.position.y = platform.maxY;
        player.velocity.y = 0;
        player.onGround = true;
        player.ground = platform;
        return;
      }
    }
  }

  function formatAmount(amount) {
    return amount < 0 ? `(${amount})` : String(amount);
  }

  function checkPads() {
    if (mapView) return;
    for (const pad of pads) {
      if (pad.used) continue;
      if (Math.abs(player.position.x - pad.x) > 1.2 + PLAYER_WIDTH / 2) continue;
      if (Math.abs(player.position.z - pad.z) > 1.2 + PLAYER_WIDTH / 2) continue;
      if (pad.underside) {
        if (gravityDirection() > 0 || !player.onGround) continue;
        if (Math.abs(player.position.y + PLAYER_HEIGHT - pad.top) > 0.7) continue;
      } else {
        if (!player.onGround) continue;
        if (Math.abs(player.position.y - pad.top) > 0.7) continue;
      }
      pad.used = true;
      pad.tile.visible = false;
      pad.label.visible = false;
      const before = value;
      const beforePowers = activePowers.slice();
      if (pad.op === '+') value += pad.amount;
      else if (pad.op === '−') value -= pad.amount;
      else if (pad.op === '×') value *= pad.amount;
      else if (pad.op === '÷') value = Math.round((value / pad.amount) * 100) / 100;
      const rounded = Math.round(value * 100) / 100;
      setValue(rounded, `${before} ${pad.op} ${formatAmount(pad.amount)} = ${rounded}`);
      const gained = activePowers.filter((id) => !beforePowers.includes(id))
        .map((id) => POWER_DEFS.find((definition) => definition.id === id).label);
      showToast(`${before} ${pad.op} ${formatAmount(pad.amount)} = ${rounded}${gained.length ? ` · ${gained.join(' + ')} unlocked!` : ''}`);
      break;
    }
  }

  function updateCrates(dt) {
    for (const crate of crates) {
      if (crate.removed) continue;
      if (!crate.falling && !crateSupported(crate)) crate.falling = true;
      if (!crate.falling) continue;
      crate.vy -= GRAVITY * dt;
      crate.y += crate.vy * dt;
      crate.mesh.position.y = crate.y + crate.size / 2;
      crate.band.position.y = crate.mesh.position.y + 0.18;
      crate.band2.position.y = crate.mesh.position.y - 0.18;
      crate.minY = crate.y; crate.maxY = crate.y + crate.size;
      if (crate.y < VOID_Y - 2) {
        crate.mesh.visible = false;
        crate.band.visible = false;
        crate.band2.visible = false;
        crate.removed = true;
        crate.falling = false;
        crate.minX = 1e6; crate.maxX = 1e6 + 1; crate.minZ = 1e6; crate.maxZ = 1e6 + 1;
        crate.minY = 1e6; crate.maxY = 1e6 + 1;
        showToast('Crate pushed away! Path clear.');
      }
    }
  }

  function physics(dt) {
    const gravity = gravityDirection();
    const input = new THREE.Vector3();
    if (keys.has('forward')) input.z -= 1;
    if (keys.has('back')) input.z += 1;
    if (keys.has('left')) input.x -= 1;
    if (keys.has('right')) input.x += 1;
    if (input.lengthSq() > 1) input.normalize();
    if (input.lengthSq() > 0.05) startTimer();

    // Climbing: stick to a climbable wall and move up/down with forward/back.
    player.climbing = false;
    if (hasPower('climb')) {
      const wall = findClimbWall();
      if (wall) {
        player.climbing = true;
        player.climbingWall = wall;
        player.velocity.set(0, 0, 0);
        player.position.z = wall.faceZ + PLAYER_WIDTH / 2 + 0.02;
        if (keys.has('forward')) player.position.y = Math.min(wall.top, player.position.y + CLIMB_SPEED * dt);
        if (keys.has('back')) player.position.y = Math.max(0.4, player.position.y - CLIMB_SPEED * dt);
        if (keys.has('jump')) {
          player.climbing = false;
          player.velocity.y = JUMP_SPEED;
          player.position.z = wall.faceZ + PLAYER_WIDTH / 2 + 0.45;
          keys.delete('jump');
        }
        player.onGround = false;
        player.ground = null;
        if (player.position.y >= wall.top - 0.02) {
          player.position.y = wall.top;
          player.position.z = wall.faceZ - PLAYER_WIDTH / 2 - 0.12;
          player.climbing = false;
          player.onGround = true;
          player.ground = wall.wall;
        }
        checkPads();
        return;
      }
    }

    const swimPower = hasPower('swim');
    const water = inWaterBox(playerBox());
    player.inWater = Boolean(water);
    if (water && !swimPower) {
      respawn('Splash! Multiples of 5 can swim');
      return;
    }

    const speed = water ? SWIM_SPEED : MOVE_SPEED;
    const blend = clamp((player.onGround ? GROUND_ACCEL : AIR_ACCEL) * dt, 0, 1);
    player.velocity.x += (input.x * speed - player.velocity.x) * blend;
    player.velocity.z += (input.z * speed - player.velocity.z) * blend;

    if (player.jumpBuffer > 0) player.jumpBuffer -= dt;
    if (keys.has('jump') && player.onGround && !water) {
      player.velocity.y = gravity > 0
        ? (hasPower('jump') ? TALL_JUMP_SPEED : JUMP_SPEED)
        : -JUMP_SPEED;
      player.onGround = false;
      player.ground = null;
      player.jumpBuffer = 0;
    }

    if (water) {
      // Buoyant: hold SPACE to rise, otherwise tread water/float up to the surface.
      player.velocity.y = keys.has('jump') ? 8.2 : 2.4;
    } else {
      player.velocity.y -= GRAVITY * gravity * dt;
      player.velocity.y = gravity > 0
        ? Math.max(player.velocity.y, -26)
        : Math.min(player.velocity.y, 6.5);
    }

    player.position.y += player.velocity.y * dt;
    player.onGround = false;
    player.ground = null;
    let box = playerBox();
    for (const platform of platforms) {
      if (!overlapsBox(box, platform)) continue;
      if (gravity > 0) {
        if (player.velocity.y <= 0) {
          player.position.y = platform.maxY;
          player.velocity.y = 0;
          player.onGround = true;
          player.ground = platform;
        } else {
          player.position.y = platform.minY - PLAYER_HEIGHT - 0.001;
          player.velocity.y = 0;
        }
      } else if (player.velocity.y >= 0) {
        player.position.y = platform.minY - PLAYER_HEIGHT;
        player.velocity.y = 0;
        player.onGround = true;
        player.ground = platform;
      } else {
        player.position.y = platform.maxY;
        player.velocity.y = 0;
      }
      box = playerBox();
    }

    step('x', player.velocity.x * dt);
    step('z', player.velocity.z * dt);
    tryStepUp();

    if (water && !player.onGround && player.position.y + PLAYER_HEIGHT > water.surface - 0.05) {
      player.position.y = Math.min(player.position.y, water.surface - PLAYER_HEIGHT + 0.1);
    }

    checkPads();
    updateCrates(dt);

    if (gravity > 0 && player.position.y < VOID_Y) respawn('You fell! · back to the checkpoint');
    if (gravity < 0 && player.position.y > SKY_LIMIT) respawn('Floated away! · back to the checkpoint');
  }

  // ---------------------------------------------------------- camera ---------
  function snapCamera() {
    if (value < 0) {
      // Inverted view: look up from under the player so the ceiling route stays visible.
      camera.position.set(player.position.x, player.position.y - 5.2, player.position.z + 1.1);
      cameraTarget.set(player.position.x, player.position.y + 1.0, player.position.z - 3.0);
      camera.up.set(0, 0, -1);
    } else {
      camera.position.set(player.position.x, player.position.y + 6.2, player.position.z + 11.4);
      cameraTarget.set(player.position.x, player.position.y + 1.4, player.position.z - 5);
      camera.up.set(0, 1, 0);
    }
    camera.lookAt(cameraTarget);
  }

  function updateCamera(dt) {
    const negative = value < 0;
    const lerp = 1 - Math.pow(0.001, dt);
    camera.position.x += (player.position.x - camera.position.x) * lerp;
    camera.position.z += (player.position.z + (negative ? 1.1 : 11.4) - camera.position.z) * lerp;
    camera.position.y += (player.position.y + (negative ? -5.2 : 6.2) - camera.position.y) * lerp;
    cameraTarget.set(player.position.x, player.position.y + (negative ? 1.0 : 1.4), player.position.z - (negative ? 3.0 : 5));
    camera.up.set(0, negative ? 0 : 1, negative ? -1 : 0);
    camera.lookAt(cameraTarget);
  }

  function updateVisuals(dt, time) {
    playerGroup.position.copy(player.position);
    valueSprite.position.y = (value < 0 ? -1.0 : PLAYER_HEIGHT + 0.9) + Math.sin(time * 2.2) * 0.06;
    halo.rotation.z += dt * 1.4;
    for (const decoration of decorations) {
      decoration.mesh.position.y = decoration.baseY + Math.sin(time * 0.8 + decoration.mesh.position.x) * 0.35;
      if (decoration.spin) decoration.mesh.rotation.y += dt * decoration.spin;
    }
    for (const pad of pads) {
      if (pad.used) continue;
      pad.tile.position.y = (pad.underside ? pad.top - 0.1 : pad.top + 0.09) + Math.sin(time * 3 + pad.x) * 0.02;
    }
  }

  // ------------------------------------------------------------- API ---------
  function start() {
    active = true;
    resetRun();
    updateHud();
  }

  function stop() {
    active = false;
    paused = false;
    finished = false;
    running = false;
    keys.clear();
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
  }

  function update(dt) {
    if (!active) return;
    if (mapView) return;
    if (respawnTimer > 0) respawnTimer = Math.max(0, respawnTimer - dt);
    if (!paused && !finished) {
      if (running) elapsed += dt;
      physics(dt);
      updateCamera(dt);
      updateHud();
    }
    updateVisuals(dt, elapsed);
  }

  const renderSize = new THREE.Vector2();
  function render() {
    const size = renderer.getSize(renderSize);
    const aspect = size.x > 0 && size.y > 0 ? size.x / size.y : camera.aspect;
    if (size.x > 0 && size.y > 0 && Math.abs(camera.aspect - aspect) > 0.0005) {
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }
    if (mapView) {
      updateMapCamera(aspect);
      renderer.render(scene, mapCamera);
      return;
    }
    renderer.render(scene, camera);
  }

  const api = {
    start, stop, update, render,
    get active() { return active; },
    get paused() { return paused; },
    get finished() { return finished; },
    get state() {
      return {
        value, equation, activePowers, gravity: gravityDirection(),
        gateIndex, elapsed, running, finished, paused,
        gates: gates.map((gate) => ({ required: gate.required, open: gate.open, x: gate.x, z: gate.z })),
        position: player.position.toArray(),
        climbing: player.climbing, inWater: player.inWater,
      };
    },
  };

  if (import.meta.env.DEV) {
    api.debugTeleport = (x, y, z) => { player.position.set(x, y, z); player.velocity.set(0, 0, 0); };
    api.debugSetValue = (next) => setValue(next, 'debug');
    api.debugPowers = () => activePowers;
    api.debugFeatures = () => ({
      climbables: climbables.map((wall) => ({ x: wall.wall.x, z: wall.wall.z, top: wall.top, minX: wall.minX, maxX: wall.maxX, minZ: wall.minZ, maxZ: wall.maxZ })),
      waters: waters.map((water) => ({ x: water.x, z: water.z, surface: water.surface, minX: water.minX, maxX: water.maxX, minZ: water.minZ, maxZ: water.maxZ })),
      crates: crates.map((crate) => ({ x: crate.x, z: crate.z, y: crate.y, falling: crate.falling, removed: crate.removed })),
      pads: pads.map((pad) => ({ x: pad.x, z: pad.z, top: pad.top, op: pad.op, amount: pad.amount, underside: pad.underside, used: pad.used })),
    });
    api.debugGate = (index) => gates[index] ? { x: gates[index].x, z: gates[index].z, top: gates[index].top, required: gates[index].required, open: gates[index].open } : null;
    api.debugFinishPoint = () => finishPoint;
    api.debugCheckpoint = () => ({ position: checkpoint.position.toArray(), value: checkpoint.value });
    api.debugMap = () => ({ mapView, toggleText: element.mapToggle?.textContent ?? null });
    api.debugToggleMap = () => toggleMap();
    window.__dozen = api;
  }

  resetRun();
  return api;
}
