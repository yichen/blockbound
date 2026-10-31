import * as THREE from 'three';

// Kart Rush — an original 3D kart-racing tribute to Mario Kart.
// Three laps around a closed circuit with boost pads, item boxes and AI rivals.
// No Nintendo characters or assets are used.

const TRACK_WIDTH = 10;
const LAPS = 3;
const MAX_SPEED = 27;
const AUTO_SPEED = 13;
const OFFROAD_SPEED = 8.5;
const ACCEL = 10;
const STEER_RATE = 1.85;

const COLORS = {
  sky: 0x8fd4ff,
  grass: 0x76c96b,
  road: 0x4c5560,
  roadLine: 0xf4f7fb,
  curbA: 0xff6b6b,
  curbB: 0xf9f9f9,
  boost: 0x7be3cb,
  box: 0xffd166,
  kart: 0xffd166,
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function formatTime(seconds) {
  if (seconds == null || !Number.isFinite(seconds)) return '–';
  const total = Math.max(0, seconds);
  const minutes = Math.floor(total / 60);
  const rest = total - minutes * 60;
  return `${String(minutes).padStart(2, '0')}:${rest.toFixed(1).padStart(4, '0')}`;
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

export function createKart({ canvas, renderer, getBest, onFinish, onExit }) {
  // ------------------------------------------------------------- scene -------
  const scene = new THREE.Scene();
  const sky = new THREE.Color(COLORS.sky);
  scene.background = sky;
  const fog = new THREE.Fog(sky.clone(), 70, 260);
  scene.fog = fog;

  const camera = new THREE.PerspectiveCamera(66, innerWidth / innerHeight, 0.1, 400);
  camera.position.set(0, 8, 14);

  scene.add(new THREE.HemisphereLight(0xe9f8ff, 0x5d7a5a, 1.8));
  const sun = new THREE.DirectionalLight(0xfff6e0, 2.2);
  sun.position.set(30, 50, 20);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x9fd8ff, 0.7);
  rim.position.set(-30, 24, -40);
  scene.add(rim);

  // Ground.
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(360, 360), new THREE.MeshStandardMaterial({ color: COLORS.grass, roughness: 0.9 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.15;
  scene.add(ground);

  // Circuit control points (closed loop).
  const controls = [
    [0, 0], [16, 0], [29, -5], [37, -17], [38, -32], [31, -46], [16, -53],
    [1, -52], [-10, -43], [-15, -29], [-13, -13], [-7, -3],
  ].map(([x, z]) => new THREE.Vector3(x, 0, z));
  const curve = new THREE.CatmullRomCurve3(controls, true, 'catmullrom', 0.5);
  const SAMPLES = 260;
  const roadSamples = curve.getSpacedPoints(SAMPLES).map((point, index, all) => {
    const next = all[(index + 1) % all.length];
    const prev = all[(index - 1 + all.length) % all.length];
    const tangent = new THREE.Vector3(next.x - prev.x, 0, next.z - prev.z).normalize();
    return { x: point.x, z: point.z, tangent, index };
  });

  const roadMaterial = new THREE.MeshStandardMaterial({ color: COLORS.road, roughness: 0.8, metalness: 0.02 });
  for (let i = 0; i < roadSamples.length; i++) {
    const sample = roadSamples[i];
    const next = roadSamples[(i + 1) % roadSamples.length];
    const dx = next.x - sample.x;
    const dz = next.z - sample.z;
    const length = Math.hypot(dx, dz) + 0.4;
    const angle = Math.atan2(dx, dz);
    const segment = new THREE.Mesh(new THREE.BoxGeometry(TRACK_WIDTH, 0.24, length), roadMaterial);
    segment.position.set(sample.x, 0, sample.z);
    segment.rotation.y = angle;
    scene.add(segment);
    if (i % 2 === 0) {
      for (const side of [-1, 1]) {
        const curb = box(1.1, 0.3, length * 0.96, i % 4 === 0 ? COLORS.curbA : COLORS.curbB);
        const offset = new THREE.Vector3(sample.tangent.z * (TRACK_WIDTH / 2 + 0.35), 0, -sample.tangent.x * (TRACK_WIDTH / 2 + 0.35));
        curb.position.set(sample.x + offset.x * side, 0.06, sample.z + offset.z * side);
        curb.rotation.y = angle;
        scene.add(curb);
      }
    }
  }

  // Start / finish line.
  const startSample = roadSamples[0];
  for (let i = -2; i <= 1; i++) {
    for (let j = 0; j < 2; j++) {
      const tile = box(0.9, 0.06, 0.9, (i + j) % 2 === 0 ? 0xffffff : 0x1c232b);
      const side = new THREE.Vector3(startSample.tangent.z, 0, -startSample.tangent.x);
      tile.position.set(startSample.x + side.x * (i * 1.05 + 0.5), 0.18, startSample.z + side.z * (i * 1.05 + 0.5));
      scene.add(tile);
    }
  }
  const startGate = new THREE.Group();
  for (const side of [-1, 1]) {
    const post = box(0.7, 5.5, 0.7, 0xffffff);
    const offset = new THREE.Vector3(startSample.tangent.z, 0, -startSample.tangent.x).multiplyScalar(TRACK_WIDTH / 2 + 1);
    post.position.set(startSample.x + offset.x * side, 2.75, startSample.z + offset.z * side);
    startGate.add(post);
  }
  const bannerLabel = makeLabel('START / FINISH', { accent: '#ff9f9f', scale: 6, height: 1.4 });
  bannerLabel.position.set(startSample.x, 6.2, startSample.z);
  startGate.add(bannerLabel);
  scene.add(startGate);

  // Trees and cones around the circuit.
  for (let i = 0; i < 60; i++) {
    const angle = (i / 60) * Math.PI * 2;
    const radius = 42 + (i % 4) * 5;
    const tree = new THREE.Group();
    const trunk = box(0.6, 2.2, 0.6, 0x7a5230);
    trunk.position.y = 1.1;
    const leaves = new THREE.Mesh(new THREE.ConeGeometry(1.6 + (i % 3) * 0.35, 3.2, 7), new THREE.MeshStandardMaterial({ color: 0x4f9e4a, roughness: 0.8 }));
    leaves.position.y = 3.6;
    tree.add(trunk, leaves);
    tree.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius - 20);
    scene.add(tree);
  }
  for (let i = 0; i < 40; i++) {
    const sample = roadSamples[(i * 13) % SAMPLES];
    const side = i % 2 === 0 ? 1 : -1;
    const offset = new THREE.Vector3(sample.tangent.z, 0, -sample.tangent.x).multiplyScalar(TRACK_WIDTH / 2 + 1.2);
    const cone = box(0.7, 1.1, 0.7, 0xff9f43);
    cone.position.set(sample.x + offset.x * side, 0.55, sample.z + offset.z * side);
    scene.add(cone);
  }

  // Boost pads and item boxes.
  const boostPads = [];
  for (const index of [30, 88, 150, 210]) {
    const sample = roadSamples[index];
    const pad = box(4.4, 0.1, 2.6, COLORS.boost, COLORS.boost, 0.9);
    pad.position.set(sample.x, 0.16, sample.z);
    pad.rotation.y = Math.atan2(sample.tangent.x, sample.tangent.z);
    scene.add(pad);
    boostPads.push({ index, x: sample.x, z: sample.z, cooldown: 0, mesh: pad });
  }
  const itemBoxes = [];
  for (const index of [55, 120, 185]) {
    const sample = roadSamples[index];
    const side = new THREE.Vector3(sample.tangent.z, 0, -sample.tangent.x);
    for (const lane of [-1, 1]) {
      const boxMesh = box(1.2, 1.2, 1.2, COLORS.box, COLORS.box, 0.4);
      boxMesh.position.set(sample.x + side.x * lane * 2.4, 1.1, sample.z + side.z * lane * 2.4);
      scene.add(boxMesh);
      itemBoxes.push({ index, x: boxMesh.position.x, z: boxMesh.position.z, cooldown: 0, mesh: boxMesh });
    }
  }

  // ------------------------------------------------------------- karts ------
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

  function newKartState(index, isPlayer) {
    const sample = roadSamples[index];
    return {
      isPlayer,
      index,
      position: new THREE.Vector3(sample.x, 0, sample.z),
      heading: Math.atan2(sample.tangent.x, sample.tangent.z),
      speed: 0,
      lap: 0,
      progress: index,
      boost: 0,
      charges: 0,
      finished: false,
      mesh: null,
      lane: isPlayer ? 0 : (Math.random() < 0.5 ? -2.1 : 2.1),
      color: isPlayer ? COLORS.kart : [0xff7aa8, 0x8f7dff, 0x7be3cb][index % 3],
    };
  }

  const player = newKartState(0, true);
  player.mesh = createKartMesh(player.color, true);
  scene.add(player.mesh);
  const rivals = [newKartState(6, false), newKartState(12, false), newKartState(18, false)];
  rivals.forEach((rival, index) => {
    rival.speed = 17 + index * 1.8;
    rival.mesh = createKartMesh(rival.color, false);
    scene.add(rival.mesh);
  });

  // ------------------------------------------------------------- state ------
  const keys = new Set();
  let active = false;
  let paused = false;
  let finished = false;
  let running = false;
  let raceTime = 0;
  let lapStart = 0;
  let bestLap = getBest?.().bestLap ?? null;
  let bestRace = getBest?.().bestRace ?? null;
  let rank = 4;
  let toastTimer = 0;
  let best = getBest?.() || {};

  const element = {
    timer: document.querySelector('#kart-timer'),
    lap: document.querySelector('#kart-lap'),
    speed: document.querySelector('#kart-speed'),
    rank: document.querySelector('#kart-rank'),
    best: document.querySelector('#kart-best'),
    objective: document.querySelector('#kart-objective'),
    toast: document.querySelector('#kart-toast'),
    pause: document.querySelector('#kart-pause'),
    finish: document.querySelector('#kart-finish'),
    finishTitle: document.querySelector('#kart-finish-title'),
    finishTime: document.querySelector('#kart-finish-time'),
    finishLap: document.querySelector('#kart-finish-lap'),
    finishBest: document.querySelector('#kart-finish-best'),
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
    if (element.objective) element.objective.textContent = finished ? 'Race complete!' : player.lap >= LAPS - 1 ? 'Final lap — go!' : 'Three laps — hit the boost pads';
    if (element.pauseLine) element.pauseLine.textContent = `Lap ${Math.min(player.lap + 1, LAPS)}/${LAPS} · ${ordinal(rank)} place`;
  }

  function ordinal(number) {
    return ['1st', '2nd', '3rd', '4th'][number - 1] || `${number}th`;
  }

  function resetRace() {
    raceTime = 0;
    lapStart = 0;
    running = false;
    finished = false;
    paused = false;
    rank = 4;
    player.index = 0;
    player.lap = 0;
    player.progress = 0;
    player.speed = 0;
    player.boost = 0;
    player.charges = 0;
    player.finished = false;
    const sample = roadSamples[0];
    player.position.set(sample.x, 0, sample.z);
    player.heading = Math.atan2(sample.tangent.x, sample.tangent.z);
    rivals.forEach((rival, index) => {
      const rivalSample = roadSamples[6 + index * 6];
      rival.index = 6 + index * 6;
      rival.position.set(rivalSample.x, 0, rivalSample.z);
      rival.heading = Math.atan2(rivalSample.tangent.x, rivalSample.tangent.z);
      rival.speed = 17 + index * 1.8;
      rival.lap = 0;
    });
    for (const pad of boostPads) pad.cooldown = 0;
    for (const item of itemBoxes) item.cooldown = 0;
    best = getBest?.() || {};
    bestLap = best.bestLap ?? null;
    bestRace = best.bestRace ?? null;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    updateHud();
    snapCamera();
  }

  function nearestSample(position) {
    let bestIndex = 0;
    let bestDistance = Infinity;
    for (let i = 0; i < roadSamples.length; i++) {
      const sample = roadSamples[i];
      const dx = position.x - sample.x;
      const dz = position.z - sample.z;
      const distance = dx * dx + dz * dz;
      if (distance < bestDistance) { bestDistance = distance; bestIndex = i; }
    }
    return { index: bestIndex, distance: Math.sqrt(bestDistance), sample: roadSamples[bestIndex] };
  }

  function accelerateKart(kart, dt, targetSpeed, steer) {
    kart.speed += (targetSpeed - kart.speed) * Math.min(1, ACCEL * dt);
    if (steer) {
      const grip = clamp(kart.speed / 14, 0.35, 1);
      kart.heading += steer * STEER_RATE * grip * dt;
    }
    kart.position.x += Math.sin(kart.heading) * kart.speed * dt;
    kart.position.z += Math.cos(kart.heading) * kart.speed * dt;
  }

  function advanceProgress(kart, lapCallback) {
    const nearest = nearestSample(kart.position);
    const previous = kart.progress;
    kart.progress = nearest.index;
    if (previous > roadSamples.length * 0.8 && nearest.index < roadSamples.length * 0.2) {
      kart.lap += 1;
      if (lapCallback) lapCallback(kart.lap);
    }
  }

  function explodeItem(item) {
    item.cooldown = 4.5;
    item.mesh.visible = false;
  }

  function updateKartProgressVisuals(kart, time) {
    const nearest = nearestSample(kart.position);
    const sample = roadSamples[nearest.index];
    const side = new THREE.Vector3(sample.tangent.z, 0, -sample.tangent.x);
    const offset = kart.isPlayer ? 0 : Math.sin(time * 0.7 + nearest.index) * 0.8;
    kart.mesh.position.set(kart.position.x + side.x * offset, 0, kart.position.z + side.z * offset);
    let heading = kart.heading;
    if (!kart.isPlayer) {
      const lookAhead = roadSamples[(nearest.index + 8) % roadSamples.length];
      heading = Math.atan2(lookAhead.x - kart.position.x, lookAhead.z - kart.position.z);
      kart.heading += (heading - kart.heading) * 0.12;
      heading = kart.heading;
    }
    kart.mesh.rotation.y = heading;
    const bounce = Math.sin(time * 9) * 0.03;
    kart.mesh.position.y = bounce;
    if (kart.isPlayer) {
      kart.mesh.children.forEach((child, index) => {
        if (index >= 5) child.rotation.x += kart.speed * 0.02;
      });
    }
  }

  function updatePlayer(dt) {
    if (!running) { player.speed = 0; return; }
    const throttle = keys.has('forward') ? 1 : keys.has('back') ? -1 : 0;
    const steer = (keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0);
    const nearest = nearestSample(player.position);
    const offroad = nearest.distance > TRACK_WIDTH / 2 + 0.4;
    let target = AUTO_SPEED;
    if (throttle > 0) target = MAX_SPEED;
    else if (throttle < 0) target = 0;
    if (offroad) target = Math.min(target, OFFROAD_SPEED);
    if (player.boost > 0) target += 12;
    accelerateKart(player, dt, target, steer);
    if (player.boost > 0) player.boost = Math.max(0, player.boost - dt);
  }

  function updateRivals(dt, time) {
    for (const rival of rivals) {
      const nearest = nearestSample(rival.position);
      const lookAhead = roadSamples[(nearest.index + 6) % roadSamples.length];
      const heading = Math.atan2(lookAhead.x - rival.position.x, lookAhead.z - rival.position.z);
      let delta = heading - rival.heading;
      while (delta > Math.PI) delta -= Math.PI * 2;
      while (delta < -Math.PI) delta += Math.PI * 2;
      rival.heading += clamp(delta, -1.6 * dt, 1.6 * dt);
      const targetSpeed = (18 + (rival.index % 4) * 1.4) * (0.94 + Math.sin(time * 0.4 + rival.index) * 0.04);
      rival.speed += (targetSpeed - rival.speed) * Math.min(1, 3 * dt);
      rival.position.x += Math.sin(rival.heading) * rival.speed * dt;
      rival.position.z += Math.cos(rival.heading) * rival.speed * dt;
      advanceProgress(rival, null);
    }
  }

  function checkBoostPads(dt) {
    for (const pad of boostPads) {
      pad.cooldown = Math.max(0, pad.cooldown - dt);
      if (pad.cooldown > 0) continue;
      const distance = Math.hypot(player.position.x - pad.x, player.position.z - pad.z);
      if (distance < 4.4) {
        pad.cooldown = 2.2;
        player.boost = 1.2;
        showToast('Boost pad!');
      }
    }
    for (const item of itemBoxes) {
      item.cooldown = Math.max(0, item.cooldown - dt);
      if (item.cooldown > 0) continue;
      const distance = Math.hypot(player.position.x - item.x, player.position.z - item.z);
      if (distance < 2.4) {
        explodeItem(item);
        player.charges = Math.min(3, player.charges + 1);
        showToast('Boost item +1 · SPACE to use');
      }
    }
  }

  function useBoost() {
    if (player.charges > 0 && player.boost < 0.9) {
      player.charges -= 1;
      player.boost = 1.5;
      showToast('Turbo!');
    }
  }

  function finishRace() {
    finished = true;
    running = false;
    player.finished = true;
    const result = onFinish?.({
      raceTime,
      bestLap,
      lap: player.lap,
      rank,
    }) || { isBest: false, best: best };
    best = result.best || best;
    bestLap = best.bestLap ?? bestLap;
    bestRace = best.bestRace ?? bestRace;
    if (element.finishTitle) element.finishTitle.textContent = rank === 1 ? 'Race Won!' : 'Race Complete!';
    if (element.finishTime) element.finishTime.textContent = formatTime(raceTime);
    if (element.finishLap) element.finishLap.textContent = `Best lap ${formatTime(bestLap)}`;
    if (element.finishBest) element.finishBest.textContent = result.isBest ? 'New best race time!' : `Best race ${formatTime(bestRace)}`;
    setOverlay(element.pause, false);
    setOverlay(element.finish, true);
    updateHud();
  }

  function updateLap(lap) {
    if (lap > LAPS) return;
    const lapTime = raceTime - lapStart;
    lapStart = raceTime;
    if (bestLap == null || lapTime < bestLap) bestLap = lapTime;
    if (lap >= LAPS) {
      finishRace();
      return;
    }
    showToast(`Lap ${lap} · ${formatTime(lapTime)}`);
    updateHud();
  }

  function updateRank() {
    const entries = [{ kart: player, score: player.lap * 1000 + player.progress, isPlayer: true }, ...rivals.map((rival) => ({ kart: rival, score: rival.lap * 1000 + rival.progress }))];
    entries.sort((a, b) => b.score - a.score);
    rank = entries.findIndex((entry) => entry.isPlayer) + 1;
  }

  function update(dt) {
    if (!active || paused || finished) return;
    if (running) {
      raceTime += dt;
      lapStart = lapStart || 0;
    }
    updatePlayer(dt);
    advanceProgress(player, updateLap);
    checkBoostPads(dt);
    if (running) updateRivals(dt, raceTime + dt);
    updateRank();
    for (const pad of boostPads) pad.mesh.material.emissiveIntensity = pad.cooldown > 0 ? 0.25 : 0.9;
    for (const item of itemBoxes) item.mesh.rotation.y += dt * 1.6;
    updateHud();
    for (const kart of [player, ...rivals]) updateKartProgressVisuals(kart, raceTime);
    updateCamera(dt);
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

  // ------------------------------------------------------------- input ------
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
    else if (code === 'Space') { useBoost(); event.preventDefault(); return; }
    else if (code === 'KeyR') { restart(); return; }
    else return;
    if (!running) { running = true; lapStart = 0; updateHud(); }
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
    const press = (event) => { event.preventDefault(); if (!active || paused || finished) return; if (action === 'boost') useBoost(); else keys.add(action); if (!running) { running = true; lapStart = 0; } button.setPointerCapture?.(event.pointerId); };
    const release = (event) => { if (action !== 'boost') keys.delete(action); if (button.hasPointerCapture?.(event.pointerId)) button.releasePointerCapture(event.pointerId); };
    button.addEventListener('pointerdown', press);
    for (const type of ['pointerup', 'pointercancel', 'pointerleave']) button.addEventListener(type, release);
  }
  canvas.addEventListener('pointerdown', (event) => {
    if (!active || paused || finished || event.pointerType === 'mouse') return;
    canvas.dataset.touch = JSON.stringify({ id: event.pointerId, x: event.clientX, y: event.clientY });
  });
  canvas.addEventListener('pointerup', (event) => {
    if (event.pointerType === 'mouse' || !canvas.dataset.touch) return;
    const start = JSON.parse(canvas.dataset.touch);
    canvas.dataset.touch = '';
    const dx = event.clientX - start.x;
    if (Math.abs(dx) < 20) return;
    const key = dx > 0 ? 'right' : 'left';
    keys.add(key);
    setTimeout(() => keys.delete(key), 160);
    if (!running) { running = true; lapStart = 0; }
  });

  // ------------------------------------------------------------- pause ------
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
    resetRace();
    showToast('New race');
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
      else if (action === 'menu') leave();
    });
  }

  // ------------------------------------------------------------- api --------
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

  function start() {
    active = true;
    resetRace();
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
        lap: player.lap, speed: player.speed, rank, raceTime, bestLap, bestRace,
        running, finished, paused, boost: player.boost, charges: player.charges,
        position: player.position.toArray(), heading: player.heading,
      };
    },
  };

  if (import.meta.env.DEV) {
    api.debugTeleport = (index, offset = 0) => {
      const sample = roadSamples[(index + offset) % roadSamples.length];
      player.position.set(sample.x, 0, sample.z);
      player.heading = Math.atan2(sample.tangent.x, sample.tangent.z);
      player.speed = 8;
    };
    api.debugLap = (lap) => {
      player.lap = lap;
      player.index = 0;
      player.progress = 0;
      const sample = roadSamples[0];
      player.position.set(sample.x, 0, sample.z);
      player.heading = Math.atan2(sample.tangent.x, sample.tangent.z);
    };
    api.debugSetBoost = (value) => { player.boost = value; };
    api.debugCharges = (value) => { player.charges = value; };
    api.debugFinish = () => {
      player.lap = LAPS - 1;
      const sample = roadSamples[roadSamples.length - 3];
      player.position.set(sample.x, 0, sample.z);
      player.heading = Math.atan2(sample.tangent.x, sample.tangent.z);
      player.speed = 10;
      player.progress = roadSamples.length - 3;
    };
    window.__kart = api;
  }

  resetRace();
  running = false;
  return api;
}
