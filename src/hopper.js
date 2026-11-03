import * as THREE from 'three';

// Road Hopper — an endless, one-screen traffic-hopping game in the spirit of the
// classic mobile time-killer. Hop a blocky character across grass and roads, dodge
// cars, and push as far forward as possible. WASD / arrows to hop.

const LANE = 2.4;
const X_LIMIT = 4;
const HOP_TIME = 0.16;
const START_ROWS = 3;
const WORLD_X = 24;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function box(w, h, d, color, emissive = 0x000000, intensity = 0) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.02, emissive, emissiveIntensity: intensity }),
  );
}

function makeFaceTexture(color) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
  ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = 'rgba(255,255,255,.22)';
  ctx.fillRect(0, 0, 128, 16);
  ctx.fillStyle = '#10141f';
  ctx.beginPath(); ctx.roundRect(20, 52, 24, 32, 7); ctx.fill();
  ctx.beginPath(); ctx.roundRect(84, 52, 24, 32, 7); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(32, 66, 6, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(96, 66, 6, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#10141f';
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.arc(64, 94, 17, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeCar(color) {
  const group = new THREE.Group();
  const body = box(2.0, 0.55, 1.1, color, 0x0, 0.06);
  body.position.y = 0.48;
  group.add(body);
  const cabin = box(1.05, 0.45, 0.92, new THREE.Color(color).offsetHSL(0, -0.05, -0.13).getHex());
  cabin.position.set(-0.1, 0.92, 0);
  group.add(cabin);
  const windscreen = box(0.58, 0.32, 0.8, 0x9fe4ff);
  windscreen.position.set(0.38, 0.94, 0);
  group.add(windscreen);
  for (const side of [-1, 1]) {
    for (const offset of [-0.62, 0.62]) {
      const wheel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 0.16, 10),
        new THREE.MeshStandardMaterial({ color: 0x14131a, roughness: 0.8 }),
      );
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(offset, 0.25, side * 0.58);
      group.add(wheel);
    }
  }
  const light = box(0.08, 0.14, 0.18, 0xfff4b0, 0xfff4b0, 0.8);
  light.position.set(1.01, 0.5, 0.32);
  group.add(light);
  return group;
}

function makeTree() {
  const group = new THREE.Group();
  const trunk = box(0.22, 0.9, 0.22, 0x8a5a32);
  trunk.position.y = 0.45;
  group.add(trunk);
  const crown = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.65, 0),
    new THREE.MeshStandardMaterial({ color: 0x4fbf62, roughness: 0.9, flatShading: true }),
  );
  crown.position.y = 1.25;
  group.add(crown);
  return group;
}

export function createHopper({ canvas, renderer, getBest, onFinish, onExit }) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x8ad7f2);
  scene.fog = new THREE.Fog(0x8ad7f2, 34, 82);
  const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.1, 160);

  scene.add(new THREE.HemisphereLight(0xdaf6ff, 0x3d5a3a, 1.7));
  const sun = new THREE.DirectionalLight(0xfff3d0, 2.1);
  sun.position.set(10, 18, 8);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x9fd8ff, 0.8);
  rim.position.set(-12, 8, -10);
  scene.add(rim);

  // Soft cloud backdrop.
  for (let i = 0; i < 7; i++) {
    const cloud = box(2.6 + (i % 3), 0.7, 1.5, 0xffffff);
    cloud.position.set(-22 + i * 8, 11 + (i % 3) * 1.4, -24 - (i % 2) * 5);
    cloud.material.emissive.set(0xffffff);
    cloud.material.emissiveIntensity = 0.2;
    scene.add(cloud);
  }

  const world = new THREE.Group();
  scene.add(world);

  const startGround = box(220, 0.18, 26, 0x7ddc62);
  startGround.position.set(0, -0.09, 12);
  world.add(startGround);

  const playerGroup = new THREE.Group();
  const playerColor = 0x63e6d5;
  const playerCube = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.9, 0.9),
    new THREE.MeshStandardMaterial({ color: playerColor, roughness: 0.55, metalness: 0.08, map: makeFaceTexture(playerColor) }),
  );
  playerCube.position.y = 0.45;
  playerGroup.add(playerCube);
  scene.add(playerGroup);

  const playerShadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.62, 24),
    new THREE.MeshBasicMaterial({ color: 0x102018, transparent: true, opacity: 0.24, depthWrite: false }),
  );
  playerShadow.rotation.x = -Math.PI / 2;
  playerShadow.position.y = 0.02;
  scene.add(playerShadow);

  let lanes = [];
  let active = false;
  let paused = false;
  let finished = false;
  let best = Number(getBest?.() || 0);
  let score = 0;
  let maxRow = 0;
  let gx = 0;
  let gz = 0;
  let hop = null;
  let queued = null;
  let started = false;
  let cameraTarget = new THREE.Vector3();

  const element = {
    score: document.querySelector('#hopper-score'),
    best: document.querySelector('#hopper-best'),
    objective: document.querySelector('#hopper-objective'),
    toast: document.querySelector('#hopper-toast'),
    pause: document.querySelector('#hopper-pause'),
    finish: document.querySelector('#hopper-finish'),
    finishScore: document.querySelector('#hopper-finish-score'),
    finishBest: document.querySelector('#hopper-finish-best'),
    finishTitle: document.querySelector('#hopper-finish-title'),
    pauseLine: document.querySelector('#hopper-pause-line'),
  };

  function showToast(message) {
    if (!element.toast) return;
    element.toast.textContent = message;
    element.toast.classList.add('show');
    setTimeout(() => element.toast?.classList.remove('show'), 1400);
  }

  function setOverlay(node, visible) {
    if (!node) return;
    node.hidden = !visible;
    node.style.display = visible ? '' : 'none';
  }

  function laneZ(index) {
    return -index * LANE;
  }

  function updateHud() {
    if (element.score) element.score.textContent = `${score} lane${score === 1 ? '' : 's'}`;
    if (element.best) element.best.textContent = `Best ${best}`;
    if (element.pauseLine) element.pauseLine.textContent = `${score} lane${score === 1 ? '' : 's'} · best ${best}`;
    if (element.objective) {
      element.objective.textContent = finished
        ? 'Run over — hop again!'
        : !started
          ? 'WASD / arrows / Space to hop'
          : 'Hop forward · dodge the traffic';
    }
  }

  function disposeGroup(group) {
    group.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of materials) material.dispose();
      }
    });
    while (group.children.length) group.remove(group.children[0]);
  }

  function clearWorld() {
    for (const lane of lanes) {
      if (lane.group) {
        world.remove(lane.group);
        disposeGroup(lane.group);
      }
      for (const car of lane.cars || []) {
        if (car.group) {
          world.remove(car.group);
          disposeGroup(car.group);
        }
      }
    }
    lanes = [];
  }

  function laneType(index) {
    if (index < START_ROWS) return 'grass';
    if (index < START_ROWS + 6) return index % 3 === 0 ? 'grass' : 'road';
    return Math.random() < 0.58 ? 'road' : 'grass';
  }

  function buildLane(index) {
    const group = new THREE.Group();
    group.position.z = laneZ(index);
    const road = laneType(index);
    if (road === 'road') {
      const surface = box(220, 0.18, LANE * 1.02, 0x343947);
      surface.position.y = -0.09;
      group.add(surface);
      const edge = box(220, 0.05, 0.1, 0xf4f8ff, 0xf4f8ff, 0.4);
      for (const side of [-1, 1]) {
        const line = edge.clone();
        line.position.set(0, 0.01, side * LANE * 0.46);
        group.add(line);
      }
      for (let x = -80; x <= 80; x += 3.2) {
        const dash = box(1.5, 0.04, 0.09, 0xffd166);
        dash.position.set(x, 0.02, 0);
        group.add(dash);
      }
    } else {
      const surface = box(220, 0.18, LANE * 1.02, index % 2 === 0 ? 0x7ddc62 : 0x70cf58);
      surface.position.y = -0.09;
      group.add(surface);
      if (index >= START_ROWS) {
        const treeCount = 1 + (Math.random() < 0.5 ? 1 : 0);
        for (let i = 0; i < treeCount; i++) {
          const tree = makeTree();
          tree.position.set((Math.random() < 0.5 ? -1 : 1) * (5 + Math.random() * 8), 0, (Math.random() - 0.5) * 0.8);
          group.add(tree);
        }
      }
    }
    world.add(group);
    const lane = { index, type: road, group, cars: [] };
    if (road === 'road') {
      const carCount = index < START_ROWS + 8 ? 2 : 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < carCount; i++) {
        const car = spawnCar(lane, index);
        lane.cars.push(car);
      }
    }
    lanes[index] = lane;
  }

  function spawnCar(lane, index) {
    const palette = [0xff5c7a, 0x74b9ff, 0xffd166, 0x9b8cff, 0xff9f43, 0x63e6d5];
    const color = palette[Math.floor(Math.random() * palette.length)];
    const group = makeCar(color);
    const direction = Math.random() < 0.5 ? 1 : -1;
    const speed = 4.2 + Math.min(5, index * 0.045) + Math.random() * 2.2;
    const x = -WORLD_X + Math.random() * WORLD_X * 2;
    group.position.set(x, 0, laneZ(index) + (index % 2 === 0 ? 0.3 : -0.3));
    group.rotation.y = direction > 0 ? 0 : Math.PI;
    world.add(group);
    return { group, x, z: group.position.z, direction, speed, width: 2.0, depth: 1.2 };
  }

  function ensureLanes(upTo) {
    while (lanes.length <= upTo) buildLane(lanes.length);
  }

  function resetRun() {
    clearWorld();
    gx = 0;
    gz = 0;
    hop = null;
    queued = null;
    score = 0;
    maxRow = 0;
    started = false;
    finished = false;
    paused = false;
    best = Number(getBest?.() || 0);
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    ensureLanes(START_ROWS + 20);
    playerGroup.position.set(0, 0, 0);
    playerCube.rotation.set(0, 0, 0);
    playerGroup.rotation.set(0, 0, 0);
    camera.position.set(4.2, 6.6, 6.6);
    updateHud();
  }

  function newAttempt() {
    resetRun();
    showToast('Hop!');
  }

  function die(reason = 'Splat!') {
    if (finished) return;
    finished = true;
    best = Math.max(best, maxRow);
    const result = onFinish?.(maxRow) || { isBest: false, best };
    best = result.best ?? best;
    if (element.finishTitle) element.finishTitle.textContent = reason;
    if (element.finishScore) element.finishScore.textContent = `${maxRow} lane${maxRow === 1 ? '' : 's'} crossed`;
    if (element.finishBest) element.finishBest.textContent = result.isBest ? 'New best run!' : `Best ${best} lanes`;
    setOverlay(element.pause, false);
    setOverlay(element.finish, true);
    updateHud();
  }

  function occupiedByCar() {
    if (gz < 0 || gz >= lanes.length) return false;
    const lane = lanes[gz];
    if (!lane || lane.type !== 'road') return false;
    const px = gx * LANE;
    for (const car of lane.cars) {
      if (Math.abs(car.x - px) < (car.width + 0.7) / 2 && Math.abs(car.z - laneZ(gz)) < 1.25) return true;
    }
    return false;
  }

  function landed() {
    started = true;
    maxRow = Math.max(maxRow, gz);
    score = maxRow;
    ensureLanes(gz + 20);
    updateHud();
    if (occupiedByCar()) die('Squashed!');
  }

  function tryMove(dx, dz) {
    if (!active || paused || finished) return;
    if (hop) { queued = { dx, dz }; return; }
    const nx = clamp(gx + dx, -X_LIMIT, X_LIMIT);
    const nz = Math.max(0, gz + dz);
    if (nx === gx && nz === gz) return;
    started = true;
    hop = { fromX: gx, fromZ: gz, toX: nx, toZ: nz, t: 0 };
    if (dz !== 0) playerGroup.rotation.y = dx !== 0 ? Math.atan2(dx, -dz) : (dz > 0 ? 0 : Math.PI);
    else playerGroup.rotation.y = dx > 0 ? Math.PI / 2 : -Math.PI / 2;
  }

  function finishHop() {
    gx = hop.toX;
    gz = hop.toZ;
    hop = null;
    playerGroup.position.set(gx * LANE, 0, laneZ(gz));
    landed();
    if (queued && !finished) {
      const next = queued;
      queued = null;
      tryMove(next.dx, next.dz);
    }
  }

  function updateCars(dt) {
    for (const lane of lanes) {
      if (!lane || lane.type !== 'road') continue;
      for (const car of lane.cars) {
        car.x += car.direction * car.speed * dt;
        if (car.x > WORLD_X + 3) car.x = -WORLD_X - 3;
        else if (car.x < -WORLD_X - 3) car.x = WORLD_X + 3;
        car.group.position.x = car.x;
      }
      if (!hop && !finished && gz === lane.index && occupiedByCar()) die('Squashed!');
    }
  }

  function updateCamera(dt) {
    cameraTarget.set(gx * LANE, 2.2, laneZ(gz));
    const targetX = cameraTarget.x + 4.2;
    const targetY = 6.6;
    const targetZ = cameraTarget.z + 6.6;
    const lerp = Math.min(1, dt * 4.5);
    camera.position.x += (targetX - camera.position.x) * lerp;
    camera.position.y += (targetY - camera.position.y) * lerp;
    camera.position.z += (targetZ - camera.position.z) * lerp;
    camera.lookAt(cameraTarget.x, 1.0, cameraTarget.z - 3.0);
  }

  function update(dt) {
    if (!active) return;
    if (paused || finished) {
      updateCamera(dt);
      return;
    }
    updateCars(dt);
    if (hop) {
      hop.t += dt / HOP_TIME;
      const t = Math.min(1, hop.t);
      const x = (hop.fromX + (hop.toX - hop.fromX) * t) * LANE;
      const z = laneZ(hop.fromZ + (hop.toZ - hop.fromZ) * t);
      playerGroup.position.set(x, Math.sin(Math.PI * t) * 0.95, z);
      playerCube.rotation.z = (hop.toX - hop.fromX) * Math.PI * 0.5 * t;
      playerCube.rotation.x = (hop.toZ - hop.fromZ) * Math.PI * 0.5 * t;
      if (hop.t >= 1) finishHop();
    } else {
      playerGroup.position.set(gx * LANE, 0, laneZ(gz));
      playerCube.rotation.z *= 0.82;
      playerCube.rotation.x *= 0.82;
      if (occupiedByCar()) die('Squashed!');
    }
    // Keep only nearby lane meshes visible.
    for (const lane of lanes) {
      if (!lane) continue;
      const distance = lane.index - gz;
      lane.group.visible = distance > -14 && distance < 42;
      for (const car of lane.cars) car.group.visible = lane.group.visible;
    }
    playerShadow.position.set(playerGroup.position.x, 0.02, playerGroup.position.z);
    playerShadow.material.opacity = 0.24 * (1 - Math.min(0.7, playerGroup.position.y * 0.65));
    updateCamera(dt);
    updateHud();
  }

  function render() {
    const size = renderer.getSize(new THREE.Vector2());
    if (size.x > 0 && size.y > 0) {
      const aspect = size.x / size.y;
      if (Math.abs(camera.aspect - aspect) > 0.0005) {
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
      }
    }
    renderer.render(scene, camera);
  }

  const keyDirections = {
    ArrowUp: [0, 1], KeyW: [0, 1],
    ArrowDown: [0, -1], KeyS: [0, -1],
    ArrowLeft: [-1, 0], KeyA: [-1, 0],
    ArrowRight: [1, 0], KeyD: [1, 0],
  };

  function down(event) {
    if (!active) return;
    if (event.code === 'Escape') {
      if (finished) leave();
      else if (paused) resume();
      else pause();
      event.preventDefault();
      return;
    }
    if (event.code === 'KeyR') { restart(); event.preventDefault(); return; }
    if (finished || paused) return;
    if (event.code === 'Space') {
      tryMove(0, 1);
      event.preventDefault();
      return;
    }
    const direction = keyDirections[event.code];
    if (direction) {
      tryMove(direction[0], direction[1]);
      event.preventDefault();
    }
  }
  document.addEventListener('keydown', down);

  for (const button of document.querySelectorAll('[data-hopper-move]')) {
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      const direction = button.dataset.hopperMove;
      if (direction === 'forward') tryMove(0, 1);
      else if (direction === 'back') tryMove(0, -1);
      else if (direction === 'left') tryMove(-1, 0);
      else if (direction === 'right') tryMove(1, 0);
    });
  }
  for (const button of document.querySelectorAll('[data-hopper-panel]')) {
    button.addEventListener('click', () => {
      const action = button.dataset.hopperPanel;
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
  function persistBest() {
    if (!finished && maxRow > best) {
      best = maxRow;
      onFinish?.(maxRow);
    }
  }

  function restart() {
    persistBest();
    resetRun();
    showToast('New run');
  }
  function leave() {
    persistBest();
    active = false;
    paused = false;
    finished = false;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    onExit?.();
  }

  function start() {
    active = true;
    resetRun();
    paused = false;
    finished = false;
    started = false;
    updateHud();
  }

  function stop() {
    active = false;
    paused = false;
    finished = false;
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
  }

  resetRun();

  const api = {
    start, stop, update, render,
    get active() { return active; },
    get paused() { return paused; },
    get finished() { return finished; },
    get state() {
      return { active, paused, finished, score, best, gx, gz, lane: lanes[gz]?.type, cars: lanes[gz]?.cars?.length || 0, hop: !!hop };
    },
  };

  if (import.meta.env.DEV) {
    api.debugTeleport = (x, z) => { gx = clamp(x, -X_LIMIT, X_LIMIT); gz = Math.max(0, z); playerGroup.position.set(gx * LANE, 0, laneZ(gz)); ensureLanes(gz + 20); };
    api.debugDie = () => die('Squashed!');
    window.__hopper = api;
  }

  return api;
}
