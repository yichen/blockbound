import * as THREE from 'three';

// 12 Dozen — a 3D math platformer. You are a little number block that starts at 12.
// Step on arithmetic pads to change your value, then pass three gates that only open
// at exactly 24, 72 and 144 (a dozen dozens). Runs are timed; best time is saved.

const GRAVITY = 30;
const MOVE_SPEED = 7.2;
const JUMP_SPEED = 10.8;
const GROUND_ACCEL = 20;
const AIR_ACCEL = 7;
const PLAYER_WIDTH = 0.95;
const PLAYER_HEIGHT = 1.0;
const VOID_Y = -8;
const START_VALUE = 12;
const START_POSITION = new THREE.Vector3(0, 0.06, 3.5);
const CHECKPOINT_RADIUS = 2.6;

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
};

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
  ctx.font = '700 46px "Trebuchet MS", "Arial Black", sans-serif';
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
  const rounded = 52;
  ctx.fillStyle = '#0f2230';
  ctx.beginPath();
  ctx.roundRect(8, 8, 240, 240, rounded);
  ctx.fill();
  ctx.strokeStyle = '#7be3cb';
  ctx.lineWidth = 10;
  ctx.stroke();
  const text = String(value);
  ctx.fillStyle = '#ffffff';
  ctx.font = `800 ${text.length > 3 ? 108 : 128}px "Trebuchet MS", "Arial Black", sans-serif`;
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
  scene.fog = new THREE.Fog(sky.clone(), 65, 220);

  const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 400);
  camera.position.set(0, 6.4, 12);

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
  let levelGroup = new THREE.Group();
  scene.add(levelGroup);
  let finishPoint = null;
  let checkpoint = { position: START_POSITION.clone(), value: START_VALUE };
  let gateCheckpoints = [];

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
    const rim = boxMesh(w + 0.12, 0.1, d + 0.12, COLOR_ACCENT(color), COLOR_ACCENT(color), 0.5);
    rim.position.set(x, top + 0.03, z);
    levelGroup.add(mesh, rim);
    platform.minX = x - w / 2; platform.maxX = x + w / 2;
    platform.minY = top - h; platform.maxY = top;
    platform.minZ = z - d / 2; platform.maxZ = z + d / 2;
    platforms.push(platform);
    return platform;
  }

  function COLOR_ACCENT(color) {
    return color;
  }

  function addPad({ x, z, top, op, amount }) {
    const color = op === '+' ? COLORS.add : op === '−' ? COLORS.sub : op === '×' ? COLORS.mul : COLORS.div;
    const tile = boxMesh(2.4, 0.16, 2.4, color, color, 0.55);
    tile.position.set(x, top + 0.07, z);
    const label = makeLabelSprite(`${op}${amount}`, {
      accent: `#${color.toString(16).padStart(6, '0')}`,
      scale: 2.6,
      height: 0.65,
    });
    label.position.set(x, top + 1.9, z);
    levelGroup.add(tile, label);
    pads.push({ x, z, top, op, amount, color, tile, label, used: false });
  }

  function addGate({ x, z, top, required, label }) {
    const gate = { x, z, top, required, open: false, label, progress: 0 };
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
    levelGroup.add(bar, barrier, sign);
    gate.barrier = barrier;
    gate.bar = bar;
    gate.minX = x - 5.4; gate.maxX = x + 5.4;
    gate.minZ = z - 0.5; gate.maxZ = z + 0.5;
    gate.minY = top; gate.maxY = top + 3.9;
    gates.push(gate);
    return gate;
  }

  function addDozenDecor() {
    // Floating math symbols / blocks around the course.
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
    finishPoint = null;
    gateCheckpoints = [];

    // Start plaza.
    addPlatform({ x: 0, z: 0, top: 0, w: 14, d: 14, h: 1.4, color: COLORS.white });
    addDozenDecor();

    // ---- Section 1: 12 -> 24. ----
    addPlatform({ x: 0, z: -9, top: 0.4, w: 5.8, d: 4.8, color: COLORS.teal });
    addPad({ x: 0, z: -9, top: 0.4, op: '+', amount: 12 });
    addPlatform({ x: 2.6, z: -15.5, top: 0.8, w: 5.2, d: 4.6, color: COLORS.lime });
    addPad({ x: 2.6, z: -15.5, top: 0.8, op: '×', amount: 2 });
    addPlatform({ x: 0, z: -21.6, top: 1.2, w: 5.4, d: 4.8, color: COLORS.yellow });
    addPad({ x: 0, z: -21.6, top: 1.2, op: '+', amount: 6 });
    addPlatform({ x: -2.4, z: -27.2, top: 1.5, w: 5, d: 4.6, color: COLORS.purple });

    // Gate 1 needs 24.
    const gate1Top = 1.8;
    addPlatform({ x: 0, z: -32.6, top: gate1Top, w: 12, d: 5.2, color: COLORS.blue });
    const gate1 = addGate({ x: 0, z: -35.2, top: gate1Top, required: 24 });
    gateCheckpoints.push({ gate: gate1, position: new THREE.Vector3(0, gate1Top + 0.06, -39.2), value: 24 });
    addPlatform({ x: 0, z: -39.2, top: gate1Top + 0.2, w: 7.4, d: 5.2, color: COLORS.teal });

    // ---- Section 2: 24 -> 72. ----
    addPlatform({ x: 0, z: -45.2, top: 2.4, w: 5.8, d: 4.8, color: COLORS.lime });
    addPad({ x: 0, z: -45.2, top: 2.4, op: '+', amount: 24 });
    addPlatform({ x: 2.8, z: -51.4, top: 2.8, w: 5.2, d: 4.6, color: COLORS.yellow });
    addPad({ x: 2.8, z: -51.4, top: 2.8, op: '+', amount: 24 });
    addPlatform({ x: 0, z: -57.6, top: 3.2, w: 5.4, d: 4.8, color: COLORS.purple });
    addPad({ x: 0, z: -57.6, top: 3.2, op: '−', amount: 12 });
    addPlatform({ x: -2.6, z: -63.0, top: 3.5, w: 5, d: 4.6, color: COLORS.teal });
    // Side route: straight from 24 to 72.
    addPlatform({ x: -6.0, z: -45.2, top: 2.4, w: 4.2, d: 4.2, color: COLORS.blue });
    addPad({ x: -6.0, z: -45.2, top: 2.4, op: '×', amount: 3 });

    // Gate 2 needs 72.
    const gate2Top = 3.8;
    addPlatform({ x: 0, z: -68.4, top: gate2Top, w: 12, d: 5.2, color: COLORS.blue });
    const gate2 = addGate({ x: 0, z: -71.0, top: gate2Top, required: 72 });
    gateCheckpoints.push({ gate: gate2, position: new THREE.Vector3(0, gate2Top + 0.06, -75.0), value: 72 });
    addPlatform({ x: 0, z: -75.0, top: gate2Top + 0.2, w: 7.4, d: 5.2, color: COLORS.teal });

    // ---- Section 3: 72 -> 144. ----
    addPlatform({ x: 0, z: -81.0, top: 4.4, w: 5.8, d: 4.8, color: COLORS.lime });
    addPad({ x: 0, z: -81.0, top: 4.4, op: '×', amount: 2 });
    addPlatform({ x: 2.8, z: -87.2, top: 4.7, w: 5.2, d: 4.6, color: COLORS.yellow });
    addPad({ x: 2.8, z: -87.2, top: 4.7, op: '+', amount: 72 });
    addPlatform({ x: -5.8, z: -81.0, top: 4.4, w: 4.2, d: 4.2, color: COLORS.purple });
    addPad({ x: -5.8, z: -81.0, top: 4.4, op: '÷', amount: 2 });

    // Finish gate needs a full dozen dozens.
    const finishTop = 5.0;
    addPlatform({ x: 0, z: -93.0, top: finishTop, w: 16, d: 10, color: COLORS.gold });
    const finishGate = addGate({ x: 0, z: -97.6, top: finishTop, required: 144 });
    finishPoint = { x: 0, y: finishTop + 0.1, z: -97.6 };
    finishGate.finish = true;
    // Finish banner behind the gate.
    const banner = makeLabelSprite('144 = 12 DOZEN', { accent: '#ffc93c', scale: 7.2, height: 1.7 });
    banner.position.set(0, finishTop + 6.4, -103);
    levelGroup.add(banner);
    const pad = boxMesh(5.4, 0.14, 5.4, COLORS.gold, COLORS.gold, 0.7);
    pad.position.set(0, finishTop + 0.08, -99.5);
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

  const player = {
    position: START_POSITION.clone(),
    velocity: new THREE.Vector3(),
    onGround: false,
    ground: null,
    jumpBuffer: 0,
  };

  let value = START_VALUE;
  let equation = 'Start · 12';
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
    objective: document.querySelector('#dozen-objective'),
    toast: document.querySelector('#dozen-toast'),
    pause: document.querySelector('#dozen-pause'),
    finish: document.querySelector('#dozen-finish'),
    finishTime: document.querySelector('#dozen-finish-time'),
    finishBest: document.querySelector('#dozen-finish-best'),
    finishValue: document.querySelector('#dozen-finish-value'),
    pauseValue: document.querySelector('#dozen-pause-value'),
  };

  const isTouch = matchMedia('(pointer: coarse)').matches;
  const keys = new Set();

  function showToast(message) {
    if (!element.toast) return;
    element.toast.textContent = message;
    element.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.toast.classList.remove('show'), 2400);
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
    if (element.objective) {
      const gate = gates[gateIndex];
      element.objective.textContent = finished
        ? 'Twelve dozen!'
        : gate
          ? `Next gate needs ${gate.required} · you have ${value}`
          : 'Reach the finish';
    }
    if (element.pauseValue) element.pauseValue.textContent = `Your number: ${value} · ${equation}`;
  }

  function setValue(next, description) {
    value = next;
    equation = description;
    halo.material.color.set(next === 144 ? COLORS.gold : 0x7be3cb);
    halo.material.emissive.set(next === 144 ? COLORS.gold : 0x7be3cb);
    const texture = numberTexture(value);
    if (playerMaterial.map) playerMaterial.map.dispose();
    playerMaterial.map = texture;
    playerMaterial.needsUpdate = true;
    valueSprite.material.map?.dispose();
    valueSprite.material.map = numberSpriteTexture(String(value));
    valueSprite.material.needsUpdate = true;
    updateHud();
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
    ctx.strokeStyle = text === '144' ? '#ffc93c' : '#7be3cb';
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

  function overlaps(box, platform) {
    return box.maxX > platform.minX && box.minX < platform.maxX
      && box.maxY > platform.minY && box.minY < platform.maxY
      && box.maxZ > platform.minZ && box.minZ < platform.maxZ;
  }

  function overlapsGate(box, gate) {
    return box.maxX > gate.minX && box.minX < gate.maxX
      && box.maxY > gate.minY && box.minY < gate.maxY
      && box.maxZ > gate.minZ && box.minZ < gate.maxZ;
  }

  function resetPads() {
    for (const pad of pads) {
      pad.used = false;
      pad.tile.visible = true;
      pad.label.visible = true;
    }
  }

  function respawn(reason = 'Try again!') {
    if (respawnTimer > 0) return;
    respawnTimer = 0.35;
    player.position.copy(checkpoint.position);
    player.velocity.set(0, 0, 0);
    player.onGround = false;
    player.ground = null;
    resetPads();
    setValue(checkpoint.value, `Reset · ${checkpoint.value}`);
    showToast(reason);
  }

  function openGate(gate) {
    if (gate.open) return;
    gate.open = true;
    gate.barrier.visible = false;
    // Snap the frame/bar to the side so the way is clearly open.
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
    elapsed = 0;
    running = false;
    finished = false;
    paused = false;
    gateIndex = 0;
    checkpoint = { position: START_POSITION.clone(), value: START_VALUE };
    buildLevel();
    resetPads();
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
    equation = 'Start · 12';
    setValue(START_VALUE, 'Start · 12');
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    bestTime = getBest?.() ?? null;
    updateHud();
    snapCamera();
  }

  // ---------------------------------------------------------- input ----------
  function down(event) {
    if (!active || event.repeat) return;
    const code = event.code;
    if (code === 'KeyW' || code === 'ArrowUp') keys.add('forward');
    else if (code === 'KeyS' || code === 'ArrowDown') keys.add('back');
    else if (code === 'KeyA' || code === 'ArrowLeft') keys.add('left');
    else if (code === 'KeyD' || code === 'ArrowRight') keys.add('right');
    else if (code === 'Space') { keys.add('jump'); player.jumpBuffer = 0.16; }
    else if (code === 'KeyR') { if (!paused && !finished) respawn('Reset to checkpoint'); }
    else if (code === 'Escape') {
      if (finished) leave();
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
    keys.clear();
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    onExit?.();
  }

  document.addEventListener('keydown', down);
  document.addEventListener('keyup', up);
  for (const button of document.querySelectorAll('[data-dozen-move]')) {
    const key = button.dataset.dozenMove;
    button.addEventListener('pointerdown', (event) => { event.preventDefault(); if (!active || paused || finished) return; keys.add(key); startTimer(); button.setPointerCapture?.(event.pointerId); });
    const release = (event) => { keys.delete(key); if (button.hasPointerCapture?.(event.pointerId)) button.releasePointerCapture(event.pointerId); };
    for (const type of ['pointerup', 'pointercancel', 'pointerleave']) button.addEventListener(type, release);
  }
  for (const button of document.querySelectorAll('[data-dozen-jump]')) {
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      if (!active || paused || finished) return;
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

  // ---------------------------------------------------------- physics --------
  function step(axis, amount) {
    if (!amount) return;
    player.position[axis] += amount;
    let box = playerBox();
    const half = PLAYER_WIDTH / 2;
    const blockers = [...platforms, ...gates.filter((gate) => !gate.open)];
    for (const blocker of blockers) {
      if (!overlapsOrBox(box, blocker)) continue;
      const isGate = blocker.required != null;
      if (isGate && value === blocker.required) {
        // The value is correct: the gate dissolves as you walk into it.
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
            : `Needs ${blocker.required} · you have ${value} — step on more pads`);
        }
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

  function overlapsOrBox(box, blocker) {
    return box.maxX > blocker.minX && box.minX < blocker.maxX
      && box.maxY > blocker.minY && box.minY < blocker.maxY
      && box.maxZ > blocker.minZ && box.minZ < blocker.maxZ;
  }

  function groundBelow(x, z, feetY) {
    let best = null;
    for (const platform of platforms) {
      if (x < platform.minX || x > platform.maxX || z < platform.minZ || z > platform.maxZ) continue;
      const gap = feetY - platform.maxY;
      if (gap >= -0.35 && gap <= 1.1 && (!best || platform.maxY > best.maxY)) best = platform;
    }
    return best;
  }

  function checkPads() {
    if (!player.onGround) return;
    for (const pad of pads) {
      if (pad.used) continue;
      const box = playerBox();
      const halfPad = 1.2;
      if (Math.abs(player.position.x - pad.x) > halfPad + PLAYER_WIDTH / 2) continue;
      if (Math.abs(player.position.z - pad.z) > halfPad + PLAYER_WIDTH / 2) continue;
      if (Math.abs(player.position.y - pad.top) > 0.6) continue;
      pad.used = true;
      pad.tile.visible = false;
      pad.label.visible = false;
      const before = value;
      if (pad.op === '+') value += pad.amount;
      else if (pad.op === '−') value -= pad.amount;
      else if (pad.op === '×') value *= pad.amount;
      else if (pad.op === '÷') value = Math.round((value / pad.amount) * 100) / 100;
      if (value < 0) value = 0;
      const rounded = Math.round(value * 100) / 100;
      setValue(rounded, `${before} ${pad.op} ${pad.amount} = ${rounded}`);
      showToast(`${before} ${pad.op} ${pad.amount} = ${rounded}`);
      break;
    }
  }

  function physics(dt) {
    const input = new THREE.Vector3();
    if (keys.has('forward')) input.z -= 1;
    if (keys.has('back')) input.z += 1;
    if (keys.has('left')) input.x -= 1;
    if (keys.has('right')) input.x += 1;
    if (input.lengthSq() > 1) input.normalize();
    const targetX = input.x * MOVE_SPEED;
    const targetZ = input.z * MOVE_SPEED;
    const accel = player.onGround ? GROUND_ACCEL : AIR_ACCEL;
    const blend = clamp(accel * dt, 0, 1);
    player.velocity.x += (targetX - player.velocity.x) * blend;
    player.velocity.z += (targetZ - player.velocity.z) * blend;
    if (input.lengthSq() > 0.05) startTimer();

    if (player.jumpBuffer > 0) player.jumpBuffer -= dt;
    if (keys.has('jump') && player.onGround) {
      player.velocity.y = JUMP_SPEED;
      player.onGround = false;
      player.ground = null;
      player.jumpBuffer = 0;
      startTimer();
    }
    player.velocity.y = Math.max(player.velocity.y - GRAVITY * dt, -26);

    // Vertical movement first.
    const feetBefore = player.position.y;
    player.position.y += player.velocity.y * dt;
    player.onGround = false;
    player.ground = null;
    let box = playerBox();
    for (const platform of platforms) {
      if (!overlaps(box, platform)) continue;
      if (player.velocity.y <= 0) {
        player.position.y = platform.maxY;
        player.velocity.y = 0;
        player.onGround = true;
        player.ground = platform;
      } else {
        player.position.y = platform.minY - PLAYER_HEIGHT - 0.001;
        player.velocity.y = 0;
      }
      box = playerBox();
    }

    // Horizontal movement with wall/gate collision.
    step('x', player.velocity.x * dt);
    step('z', player.velocity.z * dt);

    if (!player.onGround && player.velocity.y <= 0) {
      const below = groundBelow(player.position.x, player.position.z, feetBefore);
      if (below && player.position.y <= below.maxY + 0.1) {
        player.position.y = below.maxY;
        player.velocity.y = 0;
        player.onGround = true;
        player.ground = below;
      }
    }

    checkPads();

    if (player.position.y < VOID_Y) respawn('You fell! · back to the checkpoint');
  }

  function snapCamera() {
    cameraTarget.set(player.position.x, player.position.y + 1.4, player.position.z - 5);
    camera.position.set(player.position.x, player.position.y + 6.2, player.position.z + 11.4);
    camera.lookAt(cameraTarget);
  }

  function updateCamera(dt) {
    const targetX = player.position.x;
    const targetY = player.position.y + 6.2;
    const targetZ = player.position.z + 11.4;
    const lerp = 1 - Math.pow(0.001, dt);
    camera.position.x += (targetX - camera.position.x) * lerp;
    camera.position.y += (targetY - camera.position.y) * lerp;
    camera.position.z += (targetZ - camera.position.z) * lerp;
    cameraTarget.set(player.position.x, player.position.y + 1.4, player.position.z - 5);
    camera.lookAt(cameraTarget);
  }

  function updateVisuals(dt, time) {
    playerGroup.position.copy(player.position);
    valueSprite.position.y = PLAYER_HEIGHT + 0.9 + Math.sin(time * 2.2) * 0.06;
    halo.rotation.z += dt * 1.4;
    for (const decoration of decorations) {
      decoration.mesh.position.y = decoration.baseY + Math.sin(time * 0.8 + decoration.mesh.position.x) * 0.35;
      if (decoration.spin) decoration.mesh.rotation.y += dt * decoration.spin;
    }
    for (const pad of pads) {
      if (pad.used) continue;
      pad.tile.position.y = pad.top + 0.09 + Math.sin(time * 3 + pad.x) * 0.02;
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
    if (size.x > 0 && size.y > 0) {
      const aspect = size.x / size.y;
      if (Math.abs(camera.aspect - aspect) > 0.0005) {
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
      }
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
        value, equation, gateIndex, elapsed, running, finished, paused,
        gates: gates.map((gate) => ({ required: gate.required, open: gate.open, x: gate.x, z: gate.z })),
        position: player.position.toArray(),
      };
    },
  };

  if (import.meta.env.DEV) {
    api.debugTeleport = (x, y, z) => { player.position.set(x, y, z); player.velocity.set(0, 0, 0); };
    api.debugSetValue = (next) => setValue(next, 'debug');
    api.debugPads = () => pads.map((pad) => ({ x: pad.x, z: pad.z, top: pad.top, op: pad.op, amount: pad.amount, used: pad.used }));
    api.debugFinishPoint = () => finishPoint;
    api.debugGate = (index) => gates[index] ? { x: gates[index].x, z: gates[index].z, top: gates[index].top, required: gates[index].required, open: gates[index].open } : null;
    api.debugCheckpoint = () => ({ position: checkpoint.position.toArray(), value: checkpoint.value });
    window.__dozen = api;
  }

  resetRun();
  return api;
}
