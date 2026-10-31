import * as THREE from 'three';

// Kart Rush — an original 3D kart-racing tribute. Three circuits, three laps each,
// countdown start, item boxes with turbo charges, boost pads and AI rivals that follow
// the racing line with rubber-banding. No Nintendo characters or assets are used.

const LAPS = 3;
const TRACK_WIDTH = 10;
const MAX_SPEED = 28;
const OFFROAD_SPEED = 9;
const ACCEL = 11;
const BRAKE = 20;
const STEER_RATE = 1.9;
const SAMPLES = 260;

const COLORS = {
  boost: 0x7be3cb,
  box: 0xffd166,
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function formatTime(seconds) {
  if (seconds == null || !Number.isFinite(seconds)) return '–';
  const total = Math.max(0, seconds);
  const minutes = Math.floor(total / 60);
  const rest = total - minutes * 60;
  return `${String(minutes).padStart(2, '0')}:${rest.toFixed(1).padStart(4, '0')}`;
}

function ordinal(number) {
  return ['1st', '2nd', '3rd', '4th'][number - 1] || `${number}th`;
}

function box(w, h, d, color, emissive = 0x000000, intensity = 0) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.05, emissive, emissiveIntensity: intensity }),
  );
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

const TRACKS = [
  {
    name: 'Beach Circuit',
    subtitle: 'Sunny coast · wide corners',
    sky: 0x8fd4ff,
    ground: 0x7fce74,
    road: 0x4c5560,
    curbA: 0xff6b6b,
    curbB: 0xf9f9f9,
    accent: '#ff9f9f',
    controls: [
      [0, 0], [16, 0], [29, -5], [37, -17], [38, -32], [31, -46], [16, -53],
      [1, -52], [-10, -43], [-15, -29], [-13, -13], [-7, -3],
    ],
    boostIndices: [30, 88, 150, 210],
    itemIndices: [55, 120, 185],
    rivalSpeeds: [21.5, 22.5, 23.5],
  },
  {
    name: 'Canyon Dash',
    subtitle: 'Sunset canyon · long straights',
    sky: 0xffc48a,
    ground: 0xd6a15f,
    road: 0x5b4a3a,
    curbA: 0xffc93c,
    curbB: 0xfff1c9,
    accent: '#ffcf7a',
    controls: [
      [0, 0], [20, 1], [36, -6], [44, -20], [40, -35], [26, -46], [8, -47],
      [-8, -40], [-17, -24], [-13, -8], [-7, -2],
    ],
    boostIndices: [25, 80, 145, 205],
    itemIndices: [48, 115, 175],
    rivalSpeeds: [22, 23, 24],
  },
  {
    name: 'Candy Cove',
    subtitle: 'Pink bay · tight turns',
    sky: 0xffc6e2,
    ground: 0xffb3d9,
    road: 0x6a5a7a,
    curbA: 0xb58cff,
    curbB: 0xfff4fb,
    accent: '#ffd6f4',
    controls: [
      [0, 0], [15, 3], [27, 15], [25, 32], [11, 42], [-6, 38], [-14, 24],
      [-29, 18], [-35, 4], [-25, -10], [-10, -12],
    ],
    boostIndices: [22, 84, 148, 212],
    itemIndices: [50, 118, 182],
    rivalSpeeds: [22.5, 23.5, 24.5],
  },
];

export function createKart({ canvas, renderer, getBest, onFinish, onExit }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(66, innerWidth / innerHeight, 0.1, 400);
  scene.add(new THREE.HemisphereLight(0xe9f8ff, 0x5d7a5a, 1.8));
  const sun = new THREE.DirectionalLight(0xfff6e0, 2.2);
  sun.position.set(30, 50, 20);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x9fd8ff, 0.7);
  rim.position.set(-30, 24, -40);
  scene.add(rim);

  let trackGroup = new THREE.Group();
  scene.add(trackGroup);
  let track = TRACKS[0];
  let trackIndex = 0;
  let roadSamples = [];
  let samplesLength = 1;
  let boostPads = [];
  let itemBoxes = [];

  function createKartMesh(color, isPlayer = false) {
    const group = new THREE.Group();
    const body = box(1.9, 0.55, 2.7, color);
    body.position.y = 0.72;
    const nose = box(1.2, 0.35, 0.9, color, color, 0.2);
    nose.position.set(0, 0.6, 1.5);
    const seat = box(1.1, 0.5, 0.9, 0x2d3540);
    seat.position.set(0, 1.15, -0.5);
    const driver = box(0.7, 0.8, 0.7, 0xf0c49d);
    driver.position.set(0, 1.5, -0.25);
    const helmet = box(0.8, 0.35, 0.8, isPlayer ? 0x7be3cb : 0x8a8f98);
    helmet.position.set(0, 1.98, -0.25);
    group.add(body, nose, seat, driver, helmet);
    const wheelGeometry = new THREE.CylinderGeometry(0.46, 0.46, 0.36, 12);
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x1c2027, roughness: 0.8 });
    for (const [x, z] of [[-1.05, 1], [1.05, 1], [-1.05, -1], [1.05, -1]]) {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.46, z * 0.95);
      group.add(wheel);
    }
    return group;
  }

  const playerMesh = createKartMesh(COLORS.box, true);
  scene.add(playerMesh);
  const rivalMeshes = [createKartMesh(0xff7aa8, false), createKartMesh(0x8f7dff, false), createKartMesh(0x7be3cb, false)];
  for (const mesh of rivalMeshes) scene.add(mesh);

  const player = {
    position: new THREE.Vector3(0, 0, 0),
    heading: 0,
    speed: 0,
    progress: 0,
    lap: 0,
    boost: 0,
    charges: 0,
  };
  const rivals = [0, 1, 2].map((index) => ({
    progress: 0,
    lap: 0,
    lane: index % 2 === 0 ? -2.2 : 2.2,
    speed: 22,
    boost: 0,
    mesh: rivalMeshes[index],
    index,
  }));

  const keys = new Set();
  let active = false;
  let paused = false;
  let finished = false;
  let running = false;
  let raceTime = 0;
  let lapStart = 0;
  let countdown = 0;
  let countdownLabel = '';
  let rank = 4;
  let toastTimer = 0;
  let best = getBest?.(0) || {};
  let bestLap = best.bestLap ?? null;
  let bestRace = best.bestRace ?? null;
  let engineTime = 0;

  const element = {
    timer: document.querySelector('#kart-timer'),
    lap: document.querySelector('#kart-lap'),
    speed: document.querySelector('#kart-speed'),
    rank: document.querySelector('#kart-rank'),
    best: document.querySelector('#kart-best'),
    track: document.querySelector('#kart-track'),
    item: document.querySelector('#kart-item'),
    countdown: document.querySelector('#kart-countdown'),
    objective: document.querySelector('#kart-objective'),
    toast: document.querySelector('#kart-toast'),
    pause: document.querySelector('#kart-pause'),
    finish: document.querySelector('#kart-finish'),
    finishTitle: document.querySelector('#kart-finish-title'),
    finishTime: document.querySelector('#kart-finish-time'),
    finishLap: document.querySelector('#kart-finish-lap'),
    finishBest: document.querySelector('#kart-finish-best'),
    finishTrack: document.querySelector('#kart-finish-track'),
    pauseLine: document.querySelector('#kart-pause-line'),
  };

  function showToast(message) {
    if (!element.toast) return;
    element.toast.textContent = message;
    element.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.toast.classList.remove('show'), 2000);
  }

  function setOverlay(node, visible) {
    if (!node) return;
    node.hidden = !visible;
    node.style.display = visible ? '' : 'none';
  }

  function updateHud() {
    if (element.timer) element.timer.textContent = formatTime(running || finished ? raceTime : 0);
    if (element.lap) element.lap.textContent = `Lap ${Math.min(player.lap + 1, LAPS)}/${LAPS}`;
    if (element.speed) element.speed.textContent = `${Math.round(player.speed * 4.2)} km/h`;
    if (element.rank) element.rank.textContent = `${ordinal(rank)}/4`;
    if (element.best) element.best.textContent = `Best lap ${bestLap != null ? formatTime(bestLap) : '–'}`;
    if (element.track) element.track.textContent = `${track.name} · ${track.subtitle}`;
    if (element.item) element.item.textContent = player.charges > 0 ? `TURBO ×${player.charges} · SPACE` : 'ITEM: empty';
    if (element.objective) element.objective.textContent = countdown > 0 ? 'Get ready…' : finished ? 'Race complete!' : player.lap >= LAPS - 1 ? 'Final lap — go!' : 'Three laps — grab item boxes and boost pads';
    if (element.pauseLine) element.pauseLine.textContent = `${track.name} · Lap ${Math.min(player.lap + 1, LAPS)}/${LAPS} · ${ordinal(rank)} place`;
  }

  function sampleAt(progress) {
    const wrapped = ((progress % SAMPLES) + SAMPLES) % SAMPLES;
    const index = Math.floor(wrapped) % SAMPLES;
    const next = (index + 1) % SAMPLES;
    const t = wrapped - Math.floor(wrapped);
    const a = roadSamples[index];
    const b = roadSamples[next];
    return {
      x: a.x + (b.x - a.x) * t,
      z: a.z + (b.z - a.z) * t,
      tangent: a.tangent,
      side: a.side,
      index,
    };
  }

  function nearestOnTrack(position) {
    let bestIndex = 0;
    let bestDistance = Infinity;
    for (let i = 0; i < roadSamples.length; i++) {
      const sample = roadSamples[i];
      const dx = position.x - sample.x;
      const dz = position.z - sample.z;
      const distance = dx * dx + dz * dz;
      if (distance < bestDistance) { bestDistance = distance; bestIndex = i; }
    }
    return { index: bestIndex, distance: Math.sqrt(bestDistance) };
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

  function buildTrack(index) {
    disposeGroup(trackGroup);
    trackIndex = clamp(index, 0, TRACKS.length - 1);
    track = TRACKS[trackIndex];
    scene.background = new THREE.Color(track.sky);
    scene.fog = new THREE.Fog(new THREE.Color(track.sky), 70, 260);

    const curve = new THREE.CatmullRomCurve3(track.controls.map(([x, z]) => new THREE.Vector3(x, 0, z)), true, 'catmullrom', 0.5);
    samplesLength = curve.getLength();
    roadSamples = curve.getSpacedPoints(SAMPLES).map((point, i, all) => {
      const next = all[(i + 1) % all.length];
      const prev = all[(i - 1 + all.length) % all.length];
      const tangent = new THREE.Vector3(next.x - prev.x, 0, next.z - prev.z).normalize();
      const side = new THREE.Vector3(tangent.z, 0, -tangent.x);
      return { x: point.x, z: point.z, tangent, side, index: i };
    });

    const ground = new THREE.Mesh(new THREE.PlaneGeometry(420, 420), new THREE.MeshStandardMaterial({ color: track.ground, roughness: 0.9 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, -0.2, -18);
    trackGroup.add(ground);

    const roadMaterial = new THREE.MeshStandardMaterial({ color: track.road, roughness: 0.82, metalness: 0.02 });
    for (let i = 0; i < roadSamples.length; i++) {
      const sample = roadSamples[i];
      const next = roadSamples[(i + 1) % SAMPLES];
      const length = Math.hypot(next.x - sample.x, next.z - sample.z) + 0.5;
      const angle = Math.atan2(sample.tangent.x, sample.tangent.z);
      const segment = new THREE.Mesh(new THREE.BoxGeometry(TRACK_WIDTH, 0.24, length), roadMaterial);
      segment.position.set(sample.x, 0, sample.z);
      segment.rotation.y = angle;
      trackGroup.add(segment);
      if (i % 2 === 0) {
        for (const sideSign of [-1, 1]) {
          const curb = box(1.1, 0.3, length * 0.96, i % 4 === 0 ? track.curbA : track.curbB);
          curb.position.set(sample.x + sample.side.x * (TRACK_WIDTH / 2 + 0.35) * sideSign, 0.06, sample.z + sample.side.z * (TRACK_WIDTH / 2 + 0.35) * sideSign);
          curb.rotation.y = angle;
          trackGroup.add(curb);
        }
      }
    }

    const startSample = roadSamples[0];
    for (let i = -2; i <= 1; i++) {
      for (let j = 0; j < 2; j++) {
        const tile = box(0.95, 0.06, 0.95, (i + j) % 2 === 0 ? 0xffffff : 0x1c232b);
        tile.position.set(startSample.x + startSample.side.x * (i * 1.1 + 0.5), 0.18, startSample.z + startSample.side.z * (i * 1.1 + 0.5));
        trackGroup.add(tile);
      }
    }
    for (const sideSign of [-1, 1]) {
      const post = box(0.7, 5.5, 0.7, 0xffffff);
      post.position.set(startSample.x + startSample.side.x * (TRACK_WIDTH / 2 + 1) * sideSign, 2.75, startSample.z + startSample.side.z * (TRACK_WIDTH / 2 + 1) * sideSign);
      trackGroup.add(post);
    }
    const bannerLabel = makeLabel('START / FINISH', { accent: track.accent, scale: 6, height: 1.4 });
    bannerLabel.position.set(startSample.x, 6.2, startSample.z);
    trackGroup.add(bannerLabel);

    for (let i = 0; i < 70; i++) {
      const angle = (i / 70) * Math.PI * 2;
      const radius = 46 + (i % 5) * 5;
      const tree = new THREE.Group();
      const trunk = box(0.6, 2.2, 0.6, 0x7a5230);
      trunk.position.y = 1.1;
      const leaves = new THREE.Mesh(new THREE.ConeGeometry(1.6 + (i % 3) * 0.35, 3.2, 7), new THREE.MeshStandardMaterial({ color: 0x4f9e4a, roughness: 0.8 }));
      leaves.position.y = 3.6;
      tree.add(trunk, leaves);
      tree.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius - 18);
      trackGroup.add(tree);
    }
    for (let i = 0; i < 34; i++) {
      const sample = roadSamples[(i * 15) % SAMPLES];
      const cone = box(0.7, 1.1, 0.7, 0xff9f43);
      cone.position.set(sample.x + sample.side.x * (TRACK_WIDTH / 2 + 1.2) * (i % 2 ? 1 : -1), 0.55, sample.z + sample.side.z * (TRACK_WIDTH / 2 + 1.2) * (i % 2 ? 1 : -1));
      trackGroup.add(cone);
    }

    boostPads = track.boostIndices.map((sampleIndex) => {
      const sample = roadSamples[sampleIndex % SAMPLES];
      const pad = box(4.4, 0.1, 2.6, COLORS.boost, COLORS.boost, 0.9);
      pad.position.set(sample.x, 0.16, sample.z);
      pad.rotation.y = Math.atan2(sample.tangent.x, sample.tangent.z);
      trackGroup.add(pad);
      return { index: sampleIndex, x: sample.x, z: sample.z, cooldown: 0, mesh: pad };
    });

    itemBoxes = [];
    for (const sampleIndex of track.itemIndices) {
      const sample = roadSamples[sampleIndex % SAMPLES];
      for (const laneSign of [-1, 1]) {
        const mesh = box(1.2, 1.2, 1.2, COLORS.box, COLORS.box, 0.4);
        mesh.position.set(sample.x + sample.side.x * 2.4 * laneSign, 1.1, sample.z + sample.side.z * 2.4 * laneSign);
        trackGroup.add(mesh);
        itemBoxes.push({ x: mesh.position.x, z: mesh.position.z, cooldown: 0, mesh });
      }
    }
  }

  function resetRace(startTrack = trackIndex) {
    buildTrack(startTrack);
    raceTime = 0;
    lapStart = 0;
    running = false;
    finished = false;
    paused = false;
    countdown = 3.4;
    countdownLabel = '3';
    rank = 4;
    player.position.set(roadSamples[2].x, 0, roadSamples[2].z);
    player.heading = Math.atan2(roadSamples[2].tangent.x, roadSamples[2].tangent.z);
    player.speed = 0;
    player.progress = 2;
    player.lap = 0;
    player.boost = 0;
    player.charges = 0;
    rivals.forEach((rival, index) => {
      rival.progress = 8 + index * 5;
      rival.lap = 0;
      rival.speed = track.rivalSpeeds[index];
      rival.boost = 0;
      const sample = sampleAt(rival.progress);
      rival.mesh.position.set(sample.x + sample.side.x * rival.lane, 0, sample.z + sample.side.z * rival.lane);
      rival.mesh.rotation.y = Math.atan2(sample.tangent.x, sample.tangent.z);
    });
    for (const pad of boostPads) pad.cooldown = 0;
    for (const item of itemBoxes) item.cooldown = 0;
    best = getBest?.(trackIndex) || {};
    bestLap = best.bestLap ?? null;
    bestRace = best.bestRace ?? null;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    if (element.countdown) {
      element.countdown.hidden = false;
      element.countdown.style.display = '';
      element.countdown.textContent = '3';
    }
    updateHud();
    snapCamera();
  }

  function tickCountdown(dt) {
    if (countdown <= 0) return;
    countdown = Math.max(0, countdown - dt);
    const label = countdown <= 0.4 ? 'GO!' : String(Math.max(1, Math.ceil(countdown)));
    if (label !== countdownLabel) {
      countdownLabel = label;
      if (element.countdown) element.countdown.textContent = label;
      if (label === 'GO!') {
        running = true;
        lapStart = 0;
        showToast('GO!');
      }
    }
    if (countdown <= 0 && element.countdown) {
      element.countdown.hidden = true;
      element.countdown.style.display = 'none';
    }
  }

  function accelerateKart(dt) {
    const throttle = keys.has('forward') ? 1 : keys.has('back') ? -1 : 0;
    const steer = (keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0);
    const nearest = nearestOnTrack(player.position);
    const offroad = nearest.distance > TRACK_WIDTH / 2 + 0.4;
    let target = 0;
    if (throttle > 0) target = offroad ? OFFROAD_SPEED : MAX_SPEED;
    if (player.boost > 0) target = Math.max(target, MAX_SPEED + 10);
    const rate = throttle < 0 ? BRAKE : ACCEL;
    player.speed += clamp(target - player.speed, -rate * dt, rate * dt);
    if (offroad) player.speed = Math.min(player.speed, OFFROAD_SPEED + 2);
    if (steer) {
      const grip = clamp(player.speed / 14, 0.35, 1);
      player.heading += steer * STEER_RATE * grip * dt;
    }
    player.position.x += Math.sin(player.heading) * player.speed * dt;
    player.position.z += Math.cos(player.heading) * player.speed * dt;
    if (player.boost > 0) player.boost = Math.max(0, player.boost - dt);
  }

  function updateProgress() {
    const nearest = nearestOnTrack(player.position);
    const previous = player.progress;
    player.progress = nearest.index;
    if (previous > SAMPLES * 0.8 && nearest.index < SAMPLES * 0.2) {
      player.lap += 1;
      const lapTime = raceTime - lapStart;
      lapStart = raceTime;
      if (bestLap == null || lapTime < bestLap) bestLap = lapTime;
      if (player.lap >= LAPS) finishRace();
      else showToast(player.lap === LAPS - 1 ? 'Final lap!' : `Lap ${player.lap + 1} · ${formatTime(lapTime)}`);
      updateHud();
    }
  }

  function useItem() {
    if (player.charges <= 0) {
      showToast('No item — drive through a ? box');
      return;
    }
    player.charges -= 1;
    player.boost = 1.6;
    showToast('Turbo!');
    updateHud();
  }

  function checkPickups() {
    for (const pad of boostPads) {
      pad.cooldown = Math.max(0, pad.cooldown - 1 / 60);
      if (pad.cooldown > 0) continue;
      if (Math.hypot(player.position.x - pad.x, player.position.z - pad.z) < 4.4) {
        pad.cooldown = 2.2;
        player.boost = 1.3;
        showToast('Boost pad!');
      }
    }
    for (const item of itemBoxes) {
      item.cooldown = Math.max(0, item.cooldown - 1 / 60);
      if (!item.mesh.visible) {
        if (item.cooldown <= 0) item.mesh.visible = true;
        continue;
      }
      if (Math.hypot(player.position.x - item.x, player.position.z - item.z) < 2.4) {
        item.cooldown = 6;
        item.mesh.visible = false;
        player.charges = Math.min(3, player.charges + 1);
        showToast(`Item box · TURBO ×${player.charges} · SPACE to use`);
        updateHud();
      }
    }
  }

  function updateRivals(dt) {
    if (!running) return;
    const playerScore = player.lap * SAMPLES + player.progress;
    for (const rival of rivals) {
      rival.boost = Math.max(0, rival.boost - dt);
      let speed = rival.speed + rival.boost * 8;
      const rivalScore = rival.lap * SAMPLES + rival.progress;
      const gap = playerScore - rivalScore;
      if (gap > 30) speed *= 1.16;
      else if (gap < -45) speed *= 0.93;
      const aheadIndex = Math.floor((rival.progress + 6) % SAMPLES);
      if (track.boostIndices.some((index) => Math.abs(index - aheadIndex) < 3) && Math.random() < 0.9 * dt) rival.boost = 0.9;
      rival.progress += (speed * dt) / (samplesLength / SAMPLES);
      if (rival.progress >= SAMPLES) {
        rival.progress -= SAMPLES;
        rival.lap += 1;
      }
      const sample = sampleAt(rival.progress);
      const lane = rival.lane + Math.sin((rival.progress + rival.index * 20) * 0.02) * 0.6;
      rival.mesh.position.set(sample.x + sample.side.x * lane, 0, sample.z + sample.side.z * lane);
      rival.mesh.rotation.y = Math.atan2(sample.tangent.x, sample.tangent.z);
      for (let i = 5; i < rival.mesh.children.length; i++) rival.mesh.children[i].rotation.x = engineTime * 14;
    }
  }

  function updatePlayerVisuals() {
    playerMesh.position.copy(player.position);
    playerMesh.rotation.y = player.heading;
    playerMesh.position.y = Math.sin(engineTime * 9) * 0.03;
    for (let i = 5; i < playerMesh.children.length; i++) playerMesh.children[i].rotation.x = engineTime * (8 + player.speed * 0.5);
  }

  function updateRank() {
    const entries = [{ score: player.lap * SAMPLES + player.progress, player: true }, ...rivals.map((rival) => ({ score: rival.lap * SAMPLES + rival.progress }))];
    entries.sort((a, b) => b.score - a.score);
    rank = entries.findIndex((entry) => entry.player) + 1;
  }

  function finishRace() {
    finished = true;
    running = false;
    const result = onFinish?.(trackIndex, { raceTime, bestLap, rank, lap: player.lap }) || { isBest: false, best };
    best = result.best || best;
    bestLap = best.bestLap ?? bestLap;
    bestRace = best.bestRace ?? bestRace;
    if (element.finishTitle) element.finishTitle.textContent = rank === 1 ? 'Race Won!' : 'Race Complete!';
    if (element.finishTrack) element.finishTrack.textContent = `${track.name} · ${ordinal(rank)} place`;
    if (element.finishTime) element.finishTime.textContent = formatTime(raceTime);
    if (element.finishLap) element.finishLap.textContent = `Best lap ${formatTime(bestLap)}`;
    if (element.finishBest) element.finishBest.textContent = result.isBest ? 'New best race time!' : `Best race ${formatTime(bestRace)}`;
    setOverlay(element.pause, false);
    setOverlay(element.finish, true);
    updateHud();
  }

  function nextTrack() {
    resetRace((trackIndex + 1) % TRACKS.length);
    showToast(`Next circuit: ${track.name}`);
  }

  function update(dt) {
    if (!active || paused || finished) return;
    engineTime += dt;
    if (countdown > 0) tickCountdown(dt);
    if (running) raceTime += dt;
    if (running) {
      accelerateKart(dt);
      updateProgress();
      checkPickups();
    }
    updateRivals(dt);
    updateRank();
    for (const pad of boostPads) pad.mesh.material.emissiveIntensity = pad.cooldown > 0 ? 0.25 : 0.9;
    for (const item of itemBoxes) item.mesh.rotation.y += dt * 1.6;
    updatePlayerVisuals();
    updateCamera(dt);
    updateHud();
  }

  function snapCamera() {
    const forward = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading));
    camera.position.set(player.position.x - forward.x * 9, 4.6, player.position.z - forward.z * 9);
    camera.lookAt(player.position.x + forward.x * 8, 1.2, player.position.z + forward.z * 8);
  }

  function updateCamera(dt) {
    const forward = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading));
    const targetX = player.position.x - forward.x * 9;
    const targetZ = player.position.z - forward.z * 9;
    const lerp = 1 - Math.pow(0.002, dt);
    camera.position.x += (targetX - camera.position.x) * lerp;
    camera.position.z += (targetZ - camera.position.z) * lerp;
    camera.position.y += (4.6 - camera.position.y) * lerp;
    camera.lookAt(player.position.x + forward.x * 8, 1.2, player.position.z + forward.z * 8);
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
    if (code === 'KeyW' || code === 'ArrowUp') keys.add('forward');
    else if (code === 'KeyS' || code === 'ArrowDown') keys.add('back');
    else if (code === 'KeyA' || code === 'ArrowLeft') keys.add('left');
    else if (code === 'KeyD' || code === 'ArrowRight') keys.add('right');
    else if (code === 'Space') { useItem(); event.preventDefault(); return; }
    else if (code === 'KeyR') { restart(); return; }
    else return;
    event.preventDefault();
  }
  function up(event) {
    if (event.code === 'KeyW' || event.code === 'ArrowUp') keys.delete('forward');
    else if (event.code === 'KeyS' || event.code === 'ArrowDown') keys.delete('back');
    else if (event.code === 'KeyA' || event.code === 'ArrowLeft') keys.delete('left');
    else if (event.code === 'KeyD' || event.code === 'ArrowRight') keys.delete('right');
  }
  document.addEventListener('keydown', down);
  document.addEventListener('keyup', up);

  for (const button of document.querySelectorAll('[data-kart-action]')) {
    const action = button.dataset.kartAction;
    const press = (event) => { event.preventDefault(); if (!active || paused || finished) return; if (action === 'boost') useItem(); else keys.add(action); button.setPointerCapture?.(event.pointerId); };
    const release = (event) => { if (action !== 'boost') keys.delete(action); if (button.hasPointerCapture?.(event.pointerId)) button.releasePointerCapture(event.pointerId); };
    button.addEventListener('pointerdown', press);
    for (const type of ['pointerup', 'pointercancel', 'pointerleave']) button.addEventListener(type, release);
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
    resetRace(trackIndex);
    showToast('Race restarted');
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
  for (const button of document.querySelectorAll('[data-kart-panel]')) {
    button.addEventListener('click', () => {
      const action = button.dataset.kartPanel;
      if (action === 'resume') resume();
      else if (action === 'restart') restart();
      else if (action === 'next') nextTrack();
      else if (action === 'menu') leave();
    });
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

  function start(trackNumber = 1) {
    active = true;
    resetRace(clamp((trackNumber || 1) - 1, 0, TRACKS.length - 1));
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
    get trackCount() { return TRACKS.length; },
    get state() {
      return {
        trackIndex, trackName: track.name, lap: player.lap, speed: player.speed,
        rank, raceTime, bestLap, bestRace, running, finished, paused,
        countdown, charges: player.charges, boost: player.boost,
        position: player.position.toArray(), heading: player.heading,
      };
    },
  };

  if (import.meta.env.DEV) {
    api.debugStart = () => { countdown = 0.01; };
    api.debugTeleport = (index) => {
      const sample = roadSamples[index % SAMPLES];
      player.position.set(sample.x, 0, sample.z);
      player.heading = Math.atan2(sample.tangent.x, sample.tangent.z);
      player.speed = 10;
    };
    api.debugFinish = () => {
      player.lap = LAPS - 1;
      const sample = roadSamples[SAMPLES - 3];
      player.position.set(sample.x, 0, sample.z);
      player.heading = Math.atan2(sample.tangent.x, sample.tangent.z);
      player.speed = 12;
      player.progress = SAMPLES - 3;
    };
    api.debugCharges = (value) => { player.charges = value; updateHud(); };
    api.debugRivals = () => rivals.map((rival) => ({ lap: rival.lap, progress: rival.progress, speed: rival.speed }));
    window.__kart = api;
  }

  resetRace(0);
  running = false;
  return api;
}
