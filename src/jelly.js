import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// Jelly Run 2048 — a 3D merge-runner in the style of Goolny's Jelly Run 2048.
// Auto-run down a jelly lane; dodge obstacles and grab matching number cubes to
// double your jelly (2 → 4 → 8 … → 2048). Hitting a different number splits you in half.

const LANES = [-2.3, 0, 2.3];
const PLAYER_Z = 2.4;
const SPAWN_Z = -66;
const START_NUMBER = 2;
const LEVELS = [
  { name: 'Strawberry Shores', goal: 32, sky: 0x9fe3ff, track: 0x8fe3f5, rail: 0x7be3cb, match: 0x63e6d5, decoy: 0xb58cff, barrier: 0xff7aa8, speed: 7.4, spawn: 1.15 },
  { name: 'Lime Lagoon', goal: 128, sky: 0xbfe98f, track: 0x9be15d, rail: 0x63e6d5, match: 0x9be15d, decoy: 0xff9ff3, barrier: 0xff7a5c, speed: 8.4, spawn: 1.0 },
  { name: 'Blueberry Bay', goal: 512, sky: 0x9fb9ff, track: 0x74a7ff, rail: 0xb58cff, match: 0x74b9ff, decoy: 0xffd166, barrier: 0xff5c8a, speed: 9.6, spawn: 0.88 },
  { name: 'Candy Cosmos', goal: 2048, sky: 0xffc6e2, track: 0xff9ecb, rail: 0xb58cff, match: 0xff9ecb, decoy: 0x63e6d5, barrier: 0xff4d6d, speed: 10.8, spawn: 0.76 },
];
const BASE_SPEED = 8.2;
const MAX_SPEED = 17;
const JUMP_SPEED = 8.6;
const GRAVITY = 26;
const MAX_HEARTS = 3;

const COLORS = {
  sky: 0xaee7ff,
  track: 0x8fe3f5,
  lane: 0xd8f7ff,
  match: 0x63e6d5,
  decoy: 0xb58cff,
  barrier: 0xff7aa8,
  player: 0xffe27a,
  rail: 0x7be3cb,
  text: '#ffffff',
};

const JELLY_TONES = [0x63e6d5, 0x7bdff2, 0xffe27a, 0xb58cff, 0xff9ff3, 0x9be15d, 0xffb366];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function formatTime(seconds) {
  if (seconds == null || !Number.isFinite(seconds)) return '–';
  const total = Math.max(0, seconds);
  const minutes = Math.floor(total / 60);
  const rest = total - minutes * 60;
  return `${String(minutes).padStart(2, '0')}:${rest.toFixed(1).padStart(4, '0')}`;
}

function formatNumber(value) {
  return Number(value).toLocaleString('en-US');
}

function makeNumberTexture(text, { background = '#0f2230', accent = '#7be3cb', color = '#ffffff', small = false } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = background;
  ctx.beginPath();
  ctx.roundRect(6, 6, 244, 244, 56);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 10;
  ctx.stroke();
  const length = String(text).length;
  ctx.fillStyle = color;
  ctx.font = `800 ${small || length > 4 ? 74 : length > 3 ? 92 : 122}px "Trebuchet MS", "Arial Black", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 134);
  // A glossy jelly highlight.
  ctx.fillStyle = 'rgba(255, 255, 255, .22)';
  ctx.beginPath();
  ctx.ellipse(96, 70, 44, 24, -0.4, 0, Math.PI * 2);
  ctx.fill();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function makeLabelSprite(text, { accent = '#7be3cb', scale = 4.0, height = 1.0 } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(8, 18, 26, .8)';
  ctx.beginPath();
  ctx.roundRect(8, 26, 496, 76, 26);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.font = '700 44px "Trebuchet MS", "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(text, 256, 66);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
  sprite.scale.set(scale, height, 1);
  return sprite;
}

export function createJelly({ canvas, renderer, getBest, onFinish, onExit }) {
  // ------------------------------------------------------------- scene -------
  const scene = new THREE.Scene();
  const sky = new THREE.Color(COLORS.sky);
  scene.background = sky;
  const fog = new THREE.Fog(sky.clone(), 55, 140);
  scene.fog = fog;

  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 260);
  camera.position.set(0, 7.4, 12.8);
  camera.lookAt(0, 0.8, -8);

  scene.add(new THREE.HemisphereLight(0xeafaff, 0x5c8a94, 1.8));
  const sun = new THREE.DirectionalLight(0xfff6e5, 2.2);
  sun.position.set(14, 30, 16);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0xa5d8ff, 0.7);
  rim.position.set(-20, 16, -30);
  scene.add(rim);

  // Track.
  const trackGroup = new THREE.Group();
  scene.add(trackGroup);
  const trackMaterial = new THREE.MeshStandardMaterial({ color: COLORS.track, roughness: 0.5, metalness: 0.05, emissive: COLORS.track, emissiveIntensity: 0.12 });
  const track = new THREE.Mesh(new THREE.BoxGeometry(8.2, 0.8, 240), trackMaterial);
  track.position.set(0, -0.4, -95);
  trackGroup.add(track);
  for (let i = 0; i < 3; i++) {
    const laneEdge = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.06, 240),
      new THREE.MeshStandardMaterial({ color: COLORS.lane, emissive: COLORS.lane, emissiveIntensity: 0.5 }),
    );
    laneEdge.position.set(-3.45 + i * 3.45, 0.02, -95);
    trackGroup.add(laneEdge);
  }
  const rails = [];
  for (let side = -1; side <= 1; side += 2) {
    for (let i = 0; i < 22; i++) {
      const rail = new THREE.Mesh(
        new RoundedBoxGeometry(0.55, 0.55, 0.55, 3, 0.18),
        new THREE.MeshStandardMaterial({ color: COLORS.rail, roughness: 0.35, metalness: 0.04, emissive: COLORS.rail, emissiveIntensity: 0.25 }),
      );
      rail.position.set(side * 4.35, 0.55 + (i % 3) * 0.1, 8 - i * 9);
      rail.userData.phase = i * 0.7 + side;
      trackGroup.add(rail);
      rails.push(rail);
    }
  }
  // Soft jelly hills in the distance.
  for (let i = 0; i < 30; i++) {
    const hill = new THREE.Mesh(
      new RoundedBoxGeometry(3 + (i % 5) * 1.6, 2 + (i % 3), 3, 3, 0.5),
      new THREE.MeshStandardMaterial({ color: JELLY_TONES[i % JELLY_TONES.length], roughness: 0.45, metalness: 0.02, emissive: JELLY_TONES[i % JELLY_TONES.length], emissiveIntensity: 0.18 }),
    );
    const angle = (i / 30) * Math.PI * 2;
    hill.position.set(Math.cos(angle) * (26 + (i % 6) * 6), -1.4 + (i % 4) * 0.4, -30 + Math.sin(angle) * 70);
    hill.rotation.y = angle;
    scene.add(hill);
  }

  // ------------------------------------------------------------- player -----
  const player = {
    lane: 1,
    x: LANES[1],
    y: 0.95,
    vy: 0,
    number: START_NUMBER,
    hearts: MAX_HEARTS,
    invulnerable: 0,
    jumpFlash: 0,
  };

  const playerGroup = new THREE.Group();
  const playerMaterial = new THREE.MeshStandardMaterial({ color: COLORS.player, roughness: 0.3, metalness: 0.05, emissive: COLORS.player, emissiveIntensity: 0.2, map: makeNumberTexture(String(START_NUMBER), { background: '#ffb703', accent: '#ff9f1c', color: '#2b1a00' }) });
  const playerCube = new THREE.Mesh(new RoundedBoxGeometry(1.25, 1.25, 1.25, 4, 0.28), playerMaterial);
  playerCube.position.y = 0.62;
  playerGroup.add(playerCube);
  const playerHalo = new THREE.Mesh(
    new THREE.TorusGeometry(0.86, 0.07, 8, 26),
    new THREE.MeshStandardMaterial({ color: 0xffd166, emissive: 0xffd166, emissiveIntensity: 0.9 }),
  );
  playerHalo.rotation.x = -Math.PI / 2;
  playerHalo.position.y = 0.06;
  playerGroup.add(playerHalo);
  scene.add(playerGroup);

  const numberSprite = makeLabelSprite('2', { accent: '#ffd166', scale: 1.7, height: 0.44 });
  numberSprite.position.y = 2.0;
  playerGroup.add(numberSprite);

  // ------------------------------------------------------------- state ------
  const entities = [];
  const effects = [];
  let active = false;
  let paused = false;
  let finished = false;
  let won = false;
  let elapsed = 0;
  let running = false;
  let score = 0;
  let speed = BASE_SPEED;
  let spawnTimer = 0;
  let toastTimer = 0;
  let hitFlash = 0;
  let shake = 0;
  let best = getBest?.(0) || {};
  let levelIndex = 0;
  let goal = LEVELS[0].goal;

  const element = {
    screen: document.querySelector('#jelly-screen'),
    timer: document.querySelector('#jelly-timer'),
    score: document.querySelector('#jelly-score'),
    best: document.querySelector('#jelly-best'),
    number: document.querySelector('#jelly-number'),
    next: document.querySelector('#jelly-next'),
    hearts: document.querySelector('#jelly-hearts'),
    objective: document.querySelector('#jelly-objective'),
    level: document.querySelector('#jelly-level'),
    toast: document.querySelector('#jelly-toast'),
    pause: document.querySelector('#jelly-pause'),
    finish: document.querySelector('#jelly-finish'),
    finishTitle: document.querySelector('#jelly-finish-title'),
    finishTime: document.querySelector('#jelly-finish-time'),
    finishScore: document.querySelector('#jelly-finish-score'),
    finishBest: document.querySelector('#jelly-finish-best'),
    pauseScore: document.querySelector('#jelly-pause-score'),
  };

  const isTouch = matchMedia('(pointer: coarse)').matches;

  function showToast(message) {
    if (!element.toast) return;
    element.toast.textContent = message;
    element.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.toast.classList.remove('show'), 2200);
  }

  function setOverlay(node, visible) {
    if (!node) return;
    node.hidden = !visible;
    node.style.display = visible ? '' : 'none';
  }

  function updateHud() {
    if (element.timer) element.timer.textContent = formatTime(running || finished ? elapsed : 0);
    if (element.score) element.score.textContent = `${formatNumber(score)} pts`;
    if (element.best) element.best.textContent = `Best ${best.bestNumber ? formatNumber(best.bestNumber) : '–'}`;
    if (element.number) element.number.textContent = formatNumber(player.number);
    if (element.next) element.next.textContent = player.number >= goal ? 'LEVEL CLEAR!' : `next ×2 = ${formatNumber(player.number * 2)}`;
    if (element.hearts) element.hearts.innerHTML = Array.from({ length: MAX_HEARTS }, (_, index) => `<span class="${index < player.hearts ? 'on' : ''}">♥</span>`).join('');
    if (element.objective) element.objective.textContent = player.number >= goal ? 'Level clear!' : `Level ${levelIndex + 1}/${LEVELS.length} · merge to ${formatNumber(goal)}`;
    if (element.pauseScore) element.pauseScore.textContent = `${formatNumber(player.number)} jelly · ${formatNumber(score)} pts`;
  }

  function setNumber(next, description) {
    player.number = next;
    if (playerMaterial.map) playerMaterial.map.dispose();
    playerMaterial.map = makeNumberTexture(String(next), {
      background: next >= 512 ? '#ff5d8f' : next >= 64 ? '#ffb703' : '#ffd166',
      accent: next >= 512 ? '#ffd6e7' : '#ff9f1c',
      color: next >= 64 ? '#2b1a00' : '#3d2a00',
    });
    playerMaterial.needsUpdate = true;
    numberSprite.material.map?.dispose();
    numberSprite.material.map = makeNumberTexture(String(next), {
      background: 'rgba(9, 18, 26, .82)', accent: '#ffd166', color: '#ffffff', small: true,
    });
    numberSprite.material.needsUpdate = true;
    if (description) showToast(description);
    updateHud();
  }

  function spawnMergeEffect(x, y, z, color) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.75, 0.09, 8, 28),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1, transparent: true, opacity: 0.9 }),
    );
    ring.position.set(x, y, z);
    ring.rotation.x = -Math.PI / 2;
    scene.add(ring);
    effects.push({ mesh: ring, life: 0.55, maxLife: 0.55 });
    const pop = new THREE.Mesh(
      new RoundedBoxGeometry(0.8, 0.8, 0.8, 3, 0.2),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.9, transparent: true, opacity: 0.8 }),
    );
    pop.position.set(x, y + 0.4, z);
    scene.add(pop);
    effects.push({ mesh: pop, life: 0.4, maxLife: 0.4, rise: 1 });
  }

  function spawnEntity(type, number = null, lane = Math.floor(Math.random() * 3)) {
    const x = LANES[lane];
    const group = new THREE.Group();
    let color = COLORS.match;
    let height = 1.2;
    let texture = null;
    if (type === 'barrier') {
      color = COLORS.barrier;
      height = 2.2;
    } else if (type === 'decoy') {
      color = COLORS.decoy;
    }
    const geometry = type === 'barrier'
      ? new RoundedBoxGeometry(1.7, height, 0.55, 3, 0.2)
      : new RoundedBoxGeometry(1.2, 1.2, 1.2, 4, 0.26);
    if (type !== 'barrier') {
      texture = makeNumberTexture(String(number), {
        background: type === 'match' ? '#0f8f80' : '#5b3a9e',
        accent: '#ffffff',
        color: '#ffffff',
      });
    }
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.32,
      metalness: 0.04,
      emissive: color,
      emissiveIntensity: 0.22,
      map: texture,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = type === 'barrier' ? height / 2 + 0.05 : 0.62;
    group.add(mesh);
    if (type !== 'barrier') {
      const label = makeLabelSprite(String(number), { accent: type === 'match' ? '#63e6d5' : '#b58cff', scale: 2.2, height: 0.55 });
      label.position.y = 1.55;
      group.add(label);
    }
    group.position.set(x, 0, SPAWN_Z - Math.random() * 6);
    scene.add(group);
    entities.push({
      type, number, lane, group, mesh,
      z: group.position.z,
      phase: Math.random() * Math.PI * 2,
      wobble: 0.9 + Math.random() * 0.5,
    });
    return entities[entities.length - 1];
  }

  function chooseSpawn() {
    const roll = Math.random();
    if (roll < 0.5) return { type: 'match', number: player.number };
    if (roll < 0.78) {
      const candidate = Math.random() < 0.5 ? Math.max(2, Math.floor(player.number / 2)) : player.number * 2;
      return { type: 'decoy', number: candidate === player.number ? player.number * 2 : candidate };
    }
    return { type: 'barrier' };
  }

  function applyLevelTheme(level) {
    scene.background.set(level.sky);
    fog.color.set(level.sky);
    trackMaterial.color.set(level.track);
    trackMaterial.emissive.set(level.track);
    for (const rail of rails) {
      rail.material.color.set(level.rail);
      rail.material.emissive.set(level.rail);
    }
    if (element.level) element.level.textContent = `Level ${levelIndex + 1}/${LEVELS.length} · ${level.name}`;
  }

  function resetRun(level = levelIndex) {
    levelIndex = clamp(level - 1, 0, LEVELS.length - 1);
    goal = LEVELS[levelIndex].goal;
    applyLevelTheme(LEVELS[levelIndex]);
    for (const entity of entities) { scene.remove(entity.group); disposeEntity(entity); }
    entities.length = 0;
    for (const effect of effects) { scene.remove(effect.mesh); effect.mesh.geometry.dispose(); effect.mesh.material.dispose(); }
    effects.length = 0;
    elapsed = 0;
    running = false;
    finished = false;
    won = false;
    paused = false;
    active = true;
    player.lane = 1;
    player.x = LANES[1];
    player.y = 0.95;
    player.vy = 0;
    player.number = START_NUMBER;
    player.hearts = MAX_HEARTS;
    player.invulnerable = 0;
    score = 0;
    speed = LEVELS[levelIndex].speed;
    spawnTimer = LEVELS[levelIndex].spawn;
    best = getBest?.(levelIndex + 1) || {};
    setNumber(START_NUMBER);
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    updateHud();
  }

  function disposeEntity(entity) {
    entity.group.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (object.material.map) object.material.map.dispose();
        object.material.dispose();
      }
    });
  }

  function updateVisuals(dt, time) {
    playerGroup.position.set(player.x, player.y, PLAYER_Z);
    const wobble = 1 + Math.sin(time * 7) * 0.045;
    playerCube.scale.set(wobble, 2 - wobble, wobble);
    playerCube.rotation.y = Math.sin(time * 2) * 0.08;
    playerHalo.rotation.z += dt * 1.8;
    numberSprite.position.y = 2.0 + Math.sin(time * 2.4) * 0.05;
    if (player.invulnerable > 0) {
      const blink = Math.sin(time * 30) > 0;
      playerCube.visible = blink;
    } else if (!playerCube.visible) {
      playerCube.visible = true;
    }
    for (const rail of rails) rail.scale.y = 1 + Math.sin(time * 3 + rail.userData.phase) * 0.16;
    for (const entity of entities) {
      const bob = Math.sin(time * 6 * entity.wobble + entity.phase);
      entity.mesh.scale.set(1 + bob * 0.06, 1 - bob * 0.08, 1 + bob * 0.06);
    }
    for (let i = effects.length - 1; i >= 0; i--) {
      const effect = effects[i];
      effect.life -= dt;
      const t = 1 - effect.life / effect.maxLife;
      effect.mesh.scale.setScalar(1 + t * 1.8);
      effect.mesh.material.opacity = Math.max(0, 1 - t);
      if (effect.rise) effect.mesh.position.y += dt * 1.8;
      if (effect.life <= 0) {
        scene.remove(effect.mesh);
        effect.mesh.geometry.dispose();
        effect.mesh.material.dispose();
        effects.splice(i, 1);
      }
    }
    if (hitFlash > 0) {
      hitFlash = Math.max(0, hitFlash - dt);
      playerMaterial.emissiveIntensity = 0.2 + hitFlash * 1.4;
    }
  }

  function collide(entity) {
    if (entity.type === 'barrier') {
      if (player.invulnerable > 0) return;
      player.hearts -= 1;
      player.invulnerable = 1.2;
      hitFlash = 0.4;
      shake = 0.35;
      spawnMergeEffect(entity.group.position.x, 0.9, PLAYER_Z, COLORS.barrier);
      removeEntity(entity);
      showToast(player.hearts > 0 ? `Ouch! ${player.hearts} ${player.hearts === 1 ? 'heart' : 'hearts'} left` : 'Splat!');
      if (player.hearts <= 0) lose();
      updateHud();
      return;
    }
    if (entity.number === player.number) {
      const next = player.number * 2;
      score += next;
      spawnMergeEffect(entity.group.position.x, 0.9, PLAYER_Z, COLORS.match);
      removeEntity(entity);
      setNumber(next, `${player.number} + ${player.number} = ${next}`);
      if (next >= goal && !finished) win();
      return;
    }
    // Wrong number: split in half.
    const next = Math.max(2, Math.floor(player.number / 2));
    score = Math.max(0, score - 5);
    spawnMergeEffect(entity.group.position.x, 0.9, PLAYER_Z, COLORS.decoy);
    removeEntity(entity);
    setNumber(next, `Split! ${player.number} ÷ 2 = ${next}`);
  }

  function removeEntity(entity) {
    const index = entities.indexOf(entity);
    if (index >= 0) entities.splice(index, 1);
    scene.remove(entity.group);
    disposeEntity(entity);
  }

  function win() {
    won = true;
    finished = true;
    running = false;
    finishOverlay('2048!', 'You merged to a jelly 2048!');
  }

  function lose() {
    finished = true;
    running = false;
    finishOverlay('Jelly Splat!', 'Run out of hearts.');
  }

  function finishOverlay(title, message) {
    const result = onFinish?.(levelIndex + 1, { score, number: player.number, elapsed, won }) || { isBest: false, best: best };
    best = result.best || best;
    if (element.finishTitle) element.finishTitle.textContent = won ? `Level ${levelIndex + 1} Cleared!` : title;
    if (element.finishTime) element.finishTime.textContent = formatTime(elapsed);
    if (element.finishScore) element.finishScore.textContent = `${formatNumber(player.number)} jelly · ${formatNumber(score)} pts`;
    if (element.finishBest) element.finishBest.textContent = result.isBest ? `${message} New best!` : message;
    setOverlay(element.pause, false);
    setOverlay(element.finish, true);
    updateHud();
  }

  function laneShift(direction) {
    if (!active || paused || finished) return;
    const next = clamp(player.lane + direction, 0, LANES.length - 1);
    if (next === player.lane) return;
    player.lane = next;
    if (!running) { running = true; updateHud(); }
  }

  function jump() {
    if (!active || paused || finished) return;
    if (player.y > 0.97) return;
    player.vy = JUMP_SPEED;
    player.jumpFlash = 0.2;
    if (!running) { running = true; updateHud(); }
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
    running = false;
    showToast('New run');
  }

  function nextLevel() {
    resetRun(levelIndex + 2);
    running = false;
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

  // ------------------------------------------------------------- input ------
  const keys = new Set();
  function keyDown(event) {
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
    if (code === 'ArrowLeft' || code === 'KeyA') laneShift(-1);
    else if (code === 'ArrowRight' || code === 'KeyD') laneShift(1);
    else if (code === 'Space' || code === 'ArrowUp' || code === 'KeyW') jump();
    else if (code === 'KeyR') restart();
    else return;
    event.preventDefault();
  }
  document.addEventListener('keydown', keyDown);

  // Touch: swipe left/right to change lane, swipe up/tap to jump.
  let touchStart = null;
  canvas.addEventListener('pointerdown', (event) => {
    if (!active || paused || finished) return;
    if (event.pointerType === 'mouse') return;
    touchStart = { id: event.pointerId, x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener('pointerup', (event) => {
    if (!touchStart || touchStart.id !== event.pointerId) return;
    const dx = event.clientX - touchStart.x;
    const dy = event.clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(dx) > 28) laneShift(dx > 0 ? 1 : -1);
    else if (dy < -22 || Math.abs(dx) <= 28) jump();
  });
  canvas.addEventListener('pointercancel', () => { touchStart = null; });

  for (const button of document.querySelectorAll('[data-jelly-action]')) {
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      const action = button.dataset.jellyAction;
      if (action === 'left') laneShift(-1);
      else if (action === 'right') laneShift(1);
      else if (action === 'jump') jump();
    });
  }
  for (const button of document.querySelectorAll('[data-jelly-panel]')) {
    button.addEventListener('click', () => {
      const action = button.dataset.jellyPanel;
      if (action === 'resume') resume();
      else if (action === 'restart') restart();
      else if (action === 'next') nextLevel();
      else if (action === 'menu') leave();
    });
  }

  // ------------------------------------------------------------- update -----
  function update(dt) {
    if (!active || paused || finished) return;
    if (running) elapsed += dt;
    speed = Math.min(MAX_SPEED, LEVELS[levelIndex].speed + elapsed * 0.2);
    if (running) spawnTimer -= dt;
    if (spawnTimer <= 0) {
      const spawn = chooseSpawn();
      spawnEntity(spawn.type, spawn.number, Math.floor(Math.random() * LANES.length));
      spawnTimer = Math.max(0.5, LEVELS[levelIndex].spawn - elapsed * 0.012) + Math.random() * 0.35;
      if (Math.random() < 0.28 && player.number < goal) spawnEntity('match', player.number, Math.floor(Math.random() * LANES.length));
    }

    for (const entity of entities) {
      entity.z += speed * dt;
      entity.group.position.z = entity.z;
      if (entity.z > 13) removeEntity(entity);
    }

    player.x += (LANES[player.lane] - player.x) * Math.min(1, dt * 16);
    if (player.vy > 0 || player.y > 0.95) {
      player.vy -= GRAVITY * dt;
      player.y += player.vy * dt;
      if (player.y <= 0.95) { player.y = 0.95; player.vy = 0; }
    }
    if (player.invulnerable > 0) player.invulnerable = Math.max(0, player.invulnerable - dt);

    // Collisions: entities whose z crosses the player's z in the same lane.
    for (const entity of entities) {
      if (entity.lane !== player.lane) continue;
      if (entity.z < PLAYER_Z - 0.8 || entity.z > PLAYER_Z + 0.8) continue;
      if (entity.type === 'barrier' && player.y > 1.95) continue;
      if (entity.type !== 'barrier' && player.y > 1.9) continue;
      collide(entity);
      break;
    }

    shake = Math.max(0, shake - dt);
    updateVisuals(dt, elapsed);
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
    const shakeX = shake > 0 ? (Math.random() - 0.5) * shake * 0.6 : 0;
    const shakeY = shake > 0 ? (Math.random() - 0.5) * shake * 0.4 : 0;
    camera.position.x = shakeX;
    camera.position.y = 7.4 + shakeY;
    renderer.render(scene, camera);
  }

  // ------------------------------------------------------------- API --------
  function start(level = 1) {
    resetRun(level);
    running = false;
    updateHud();
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
        number: player.number, score, hearts: player.hearts, lane: player.lane,
        level: levelIndex + 1, goal, elapsed, running, finished, won, paused,
        entities: entities.length, speed,
      };
    },
  };

  if (import.meta.env.DEV) {
    api.debugSetNumber = (value) => setNumber(value, null);
    api.debugHearts = (value) => { player.hearts = value; updateHud(); };
    api.debugSpawn = (type, number, lane = player.lane, offset = 0) => {
      const entity = spawnEntity(type, number, lane);
      entity.z = PLAYER_Z - 3.2 + offset;
      entity.group.position.z = entity.z;
      return { z: entity.z, lane, type };
    };
    api.debugClear = () => { for (const entity of [...entities]) removeEntity(entity); };
    api.debugState = () => api.state;
    window.__jelly = api;
  }

  // Initial scene state so the canvas is never empty before the first launch.
  resetRun();
  running = false;
  return api;
}
