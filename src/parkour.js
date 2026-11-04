import * as THREE from 'three';

// Parkour Obby — a small Roblox-style obstacle course that runs on the shared
// renderer/canvas. It owns its own scene, camera, physics and HUD, and is driven
// from main.js's animation loop while the launcher's parkour screen is active.

const PLAYER = { width: 0.62, height: 1.72, eye: 1.58 };
const GRAVITY = 30;
const WALK_SPEED = 6.4;
const SPRINT_SPEED = 9.4;
const JUMP_SPEED = 10.4;
const GROUND_ACCEL = 16;
const AIR_ACCEL = 5;
const MOUSE_SENSITIVITY = 0.0022;
const CHECKPOINT_RADIUS = 2.3;
const FINISH_RADIUS = 2.6;
const VOID_Y = -7;
const RESPAWN_DELAY = 0.28;
const COLORS = {
  teal: 0x63e6d5,
  yellow: 0xffd166,
  coral: 0xff5c4d,
  blue: 0x74a7ff,
  purple: 0xb38bff,
  lime: 0x9be15d,
  white: 0xf4fbff,
  gold: 0xffc93c,
  lava: 0xff4a1f,
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function formatTime(seconds) {
  if (seconds == null || !Number.isFinite(seconds)) return '–';
  const total = Math.max(0, seconds);
  const minutes = Math.floor(total / 60);
  const rest = total - minutes * 60;
  const secondsPart = rest.toFixed(1).padStart(4, '0');
  return `${String(minutes).padStart(2, '0')}:${secondsPart}`;
}

function makeLabelSprite(text, { color = '#ffffff', background = 'rgba(10, 20, 30, .72)', accent = '#ffd166' } = {}) {
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
  ctx.font = '700 44px "Trebuchet MS", "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.fillText(text, 256, 66);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
  sprite.scale.set(3.4, 0.85, 1);
  return sprite;
}

function makeFloorLabel(text, { accent = '#8ecbff' } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(8, 16, 24, .62)';
  ctx.beginPath();
  ctx.roundRect(16, 40, 992, 176, 40);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.font = '700 88px "Trebuchet MS", "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(text, 512, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(9, 2.25),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, side: THREE.DoubleSide }),
  );
  mesh.rotation.x = -Math.PI / 2;
  return mesh;
}

function makePanelTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#eef3f6';
  ctx.fillRect(0, 0, 256, 256);
  // Soft panel grid + bevels.
  ctx.strokeStyle = 'rgba(50, 70, 80, .16)';
  ctx.lineWidth = 3;
  for (let i = 0; i <= 256; i += 64) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(255, 255, 255, .75)';
  ctx.lineWidth = 2;
  for (let i = 0; i <= 256; i += 64) {
    ctx.beginPath(); ctx.moveTo(i + 2, 0); ctx.lineTo(i + 2, 256); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i + 2); ctx.lineTo(256, i + 2); ctx.stroke();
  }
  ctx.fillStyle = 'rgba(255, 255, 255, .15)';
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(256, 0); ctx.lineTo(0, 140); ctx.closePath(); ctx.fill();
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

const PANEL_TEXTURE = makePanelTexture();

function makeFaceTexture(skin, hair) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = skin;
  ctx.fillRect(0, 0, 256, 256);
  // Hair.
  ctx.fillStyle = hair;
  ctx.beginPath();
  ctx.roundRect(0, 0, 256, 64, 18);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.16)';
  ctx.beginPath(); ctx.ellipse(70, 30, 44, 14, -0.2, 0, Math.PI * 2); ctx.fill();
  // Eyes.
  for (const x of [82, 174]) {
    ctx.fillStyle = '#f7fbff';
    ctx.beginPath(); ctx.ellipse(x, 112, 24, 20, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#1c2a36';
    ctx.beginPath(); ctx.ellipse(x + 4, 114, 10, 13, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.ellipse(x + 8, 108, 4, 5, 0, 0, Math.PI * 2); ctx.fill();
  }
  // Brows.
  ctx.strokeStyle = hair;
  ctx.lineWidth = 7;
  ctx.beginPath(); ctx.moveTo(58, 78); ctx.lineTo(106, 82); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(150, 82); ctx.lineTo(198, 78); ctx.stroke();
  // Mouth.
  ctx.strokeStyle = 'rgba(90, 45, 40, .85)';
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.arc(128, 170, 34, 0.18 * Math.PI, 0.82 * Math.PI); ctx.stroke();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function makeShirtTexture(color, accent) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = accent;
  ctx.fillRect(0, 176, 256, 30);
  ctx.fillStyle = 'rgba(255,255,255,.9)';
  ctx.beginPath();
  ctx.moveTo(96, 0); ctx.lineTo(160, 0); ctx.lineTo(128, 54); ctx.closePath();
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.22)';
  ctx.beginPath(); ctx.ellipse(64, 100, 42, 26, -0.3, 0, Math.PI * 2); ctx.fill();
  // Little badge.
  ctx.fillStyle = 'rgba(15, 25, 35, .55)';
  ctx.beginPath(); ctx.roundRect(176, 96, 50, 50, 10); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = '700 28px "Trebuchet MS", sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('★', 201, 122);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function boxMesh(w, h, d, color, emissive = 0x000000, emissiveIntensity = 0) {
  const geometry = new THREE.BoxGeometry(w, h, d);
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.56,
    metalness: 0.04,
    emissive,
    emissiveIntensity,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  return mesh;
}

export function createParkour({ canvas, renderer, getBest, onFinish, onExit, onlineCount = 12 }) {
  // ---------------------------------------------------------------- scene ----
  const scene = new THREE.Scene();
  const sky = new THREE.Color(0x8ecbff);
  scene.background = sky;
  scene.fog = new THREE.Fog(sky.clone(), 70, 260);

  const camera = new THREE.PerspectiveCamera(76, innerWidth / innerHeight, 0.08, 400);
  camera.rotation.order = 'YXZ';

  // Every level cycles through its own look (sky, lighting, palette, level banner),
  // so "next level" never feels like the same course again.
  const THEMES = [
    { name: 'Sunny Sprint', sky: 0x8ecbff, fog: 0x9fd3ff, hemiSky: 0xdff1ff, hemiGround: 0x4b5a63, hemi: 1.65, sun: 0xfff4de, sunPower: 2.15, cloud: 0xffffff,
      palette: [COLORS.teal, COLORS.lime, COLORS.yellow, COLORS.purple, COLORS.blue, COLORS.coral], spawn: COLORS.white, trim: COLORS.coral, checkpoint: COLORS.blue, accent: '#8ecbff', startLine: COLORS.teal },
    { name: 'Sunset Ridge', sky: 0xf59b62, fog: 0xf8b37c, hemiSky: 0xffd6b8, hemiGround: 0x5c3a2e, hemi: 1.5, sun: 0xffc07a, sunPower: 2.3, cloud: 0xffe4cf,
      palette: [COLORS.coral, COLORS.yellow, COLORS.gold, 0xff8c42, COLORS.teal, COLORS.purple], spawn: 0xfff0e2, trim: 0xff7a3d, checkpoint: 0xffa64d, accent: '#ffb066', startLine: COLORS.yellow },
    { name: 'Neon Night', sky: 0x161b33, fog: 0x1f2747, hemiSky: 0x4f5d9e, hemiGround: 0x10131f, hemi: 0.95, sun: 0xb9c4ff, sunPower: 1.25, cloud: 0x39406b,
      palette: [COLORS.teal, COLORS.purple, COLORS.blue, 0xff5cf0, COLORS.lime, COLORS.yellow], spawn: 0x2b3355, trim: 0xff5cf0, checkpoint: 0x7d5cff, accent: '#a78bfa', startLine: 0x7be3cb },
    { name: 'Toxic Wastes', sky: 0x9fce6a, fog: 0xb3dc7e, hemiSky: 0xe6ffcf, hemiGround: 0x3f4d2a, hemi: 1.6, sun: 0xf2ffd6, sunPower: 2.2, cloud: 0xf0ffe0,
      palette: [COLORS.lime, 0xb6e34a, COLORS.teal, COLORS.yellow, 0x6fae3a, COLORS.coral], spawn: 0xe4f2cc, trim: 0x5c8a2e, checkpoint: 0x8fd14f, accent: '#a3e635', startLine: COLORS.lime },
    { name: 'Candy Clouds', sky: 0xffc6e2, fog: 0xffd8ec, hemiSky: 0xfff0f8, hemiGround: 0x6b4661, hemi: 1.7, sun: 0xffe6f2, sunPower: 2.1, cloud: 0xfff6fb,
      palette: [0xff9ecb, COLORS.purple, COLORS.yellow, COLORS.teal, 0xff6fa8, COLORS.blue], spawn: 0xfff4fa, trim: 0xff6fa8, checkpoint: 0xd580ff, accent: '#ff9ecb', startLine: 0xff9ecb },
    { name: 'Void Ascent', sky: 0x2a1f3d, fog: 0x372a4f, hemiSky: 0x8c7ab8, hemiGround: 0x1a1424, hemi: 1.05, sun: 0xd8c8ff, sunPower: 1.4, cloud: 0x4a3d69,
      palette: [COLORS.purple, COLORS.blue, COLORS.teal, 0xff7ad9, COLORS.lime, COLORS.yellow], spawn: 0x3b2f55, trim: 0xff7ad9, checkpoint: 0xa78bfa, accent: '#c4b5fd', startLine: 0xb38bff },
  ];
  let activeTheme = THEMES[0];
  const hemiLight = new THREE.HemisphereLight(0xdff1ff, 0x4b5a63, 1.65);
  scene.add(hemiLight);
  const sunLight = new THREE.DirectionalLight(0xfff4de, 2.15);
  sunLight.position.set(24, 46, 18);
  scene.add(sunLight);
  const rimLight = new THREE.DirectionalLight(0x8fd3ff, 0.9);
  rimLight.position.set(-30, 22, -40);
  scene.add(rimLight);

  // ------------------------------------------------------------- levels ------
  // Endless procedurally-generated levels. Each level has a fixed seed, so level N
  // always builds the same course (fair best times) while difficulty ramps forever.
  const platforms = [];
  const hazards = [];
  const saws = [];
  const lasers = [];
  const spikeTraps = [];
  const checkpoints = [];
  const otherPlayers = [];
  const COURSE_COLORS = [COLORS.teal, COLORS.lime, COLORS.yellow, COLORS.purple, COLORS.blue, COLORS.coral];
  let level = 1;
  let finish = null;
  let spawn = new THREE.Vector3(0, 0.06, 4.5);
  let spawnPlatform = null;
  let spawnRing = null;
  let arrow = null;
  let finishPad = null;
  let levelGroup = new THREE.Group();
  scene.add(levelGroup);

  function mulberry32(seed) {
    let state = seed >>> 0;
    return function random() {
      state = (state + 0x6D2B79F5) | 0;
      let t = Math.imul(state ^ (state >>> 15), 1 | state);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function disposeGroup(group) {
    group.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of materials) {
          if (material.map) material.map.dispose();
          material.dispose();
        }
      }
    });
    while (group.children.length) group.remove(group.children[0]);
  }

  function addPlatform({ x = 0, z = 0, top = 0, w = 3, d = 3, h = 1.1, color = COLORS.teal, emissive = 0x000000, emissiveIntensity = 0.25, move = null }) {
    const platform = {
      x, z, top, w, d, h, color,
      baseX: x, baseY: top - h / 2, baseZ: z,
      move,
      prev: new THREE.Vector3(),
      delta: new THREE.Vector3(),
      mesh: boxMesh(w, h, d, color, emissive || color, emissiveIntensity),
    };
    platform.mesh.position.set(x, top - h / 2, z);
    platform.mesh.material.map = PANEL_TEXTURE;
    platform.mesh.material.needsUpdate = true;
    levelGroup.add(platform.mesh);
    platform.minX = x - w / 2; platform.maxX = x + w / 2;
    platform.minY = top - h; platform.maxY = top;
    platform.minZ = z - d / 2; platform.maxZ = z + d / 2;
    platform.prev.set(x, top - h / 2, z);
    platforms.push(platform);
    return platform;
  }

  function addHazard({ x = 0, z = 0, y = 0, w = 10, h = 2, d = 10, color = COLORS.lava }) {
    const mesh = boxMesh(w, h, d, color, color, 0.9);
    mesh.position.set(x, y, z);
    levelGroup.add(mesh);
    hazards.push({ minX: x - w / 2, maxX: x + w / 2, minY: y - h / 2, maxY: y + h / 2, minZ: z - d / 2, maxZ: z + d / 2 });
  }

  function addSawBlade(platform, rng) {
    const radius = 0.55;
    const offsetX = (rng() < 0.5 ? -1 : 1) * platform.w * (0.24 + rng() * 0.1);
    const offsetZ = (rng() < 0.5 ? -1 : 1) * platform.d * (0.24 + rng() * 0.1);
    const x = platform.x + offsetX;
    const z = platform.z + offsetZ;
    const group = new THREE.Group();
    const metal = new THREE.MeshStandardMaterial({ color: 0xdfe9ff, roughness: 0.24, metalness: 0.9, emissive: 0x9fe8ff, emissiveIntensity: 0.2 });
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 0.14, 20), metal);
    disc.rotation.x = Math.PI / 2;
    group.add(disc);
    const hub = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.28, radius * 0.28, 0.2, 10),
      new THREE.MeshStandardMaterial({ color: 0xff5c8a, emissive: 0xff5c8a, emissiveIntensity: 0.8, roughness: 0.3 }),
    );
    hub.rotation.x = Math.PI / 2;
    group.add(hub);
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const tooth = new THREE.Mesh(
        new THREE.ConeGeometry(radius * 0.2, radius * 0.46, 4),
        metal,
      );
      tooth.position.set(Math.cos(angle) * radius * 0.92, Math.sin(angle) * radius * 0.92, 0);
      tooth.rotation.z = angle - Math.PI / 2;
      group.add(tooth);
    }
    group.position.set(x, platform.top + 0.65, z);
    levelGroup.add(group);
    saws.push({
      group, x, z, top: platform.top, speed: 2.4 + rng() * 2.2,
      hazard: {
        minX: x - 0.44, maxX: x + 0.44,
        minY: platform.top + 0.12, maxY: platform.top + 1.1,
        minZ: z - 0.44, maxZ: z + 0.44,
      },
    });
  }

  function addLaserGate(a, b, rng) {
    const x = (a.x + b.x) / 2;
    const z = (a.z + b.z) / 2;
    const base = Math.min(a.top, b.top) + 0.15;
    const height = 3.1;
    const beam = boxMesh(0.22, height, 0.22, 0xff4d6d, 0xff4d6d, 1.0);
    beam.position.set(x, base + height / 2, z);
    beam.material.transparent = true;
    beam.material.opacity = 0.9;
    levelGroup.add(beam);
    for (const side of [-1, 1]) {
      const cap = boxMesh(0.5, 0.16, 0.5, 0x8a9baa, 0x0, 0);
      cap.position.set(x, base + (side > 0 ? height : 0), z);
      levelGroup.add(cap);
    }
    lasers.push({
      group: beam, x, z, base, height, phase: rng() * Math.PI * 2, active: false,
      hazard: {
        minX: x - 0.24, maxX: x + 0.24,
        minY: base + 0.1, maxY: base + height,
        minZ: z - 0.24, maxZ: z + 0.24,
      },
    });
  }

  function addSpikeTrap(platform, x, z) {
    const spikes = new THREE.Group();
    for (const [dx, dz] of [[-0.36, -0.36], [0.36, -0.36], [-0.36, 0.36], [0.36, 0.36]]) {
      const spike = new THREE.Mesh(
        new THREE.ConeGeometry(0.26, 0.65, 4),
        new THREE.MeshStandardMaterial({ color: 0xff7676, emissive: 0xff4d6d, emissiveIntensity: 0.65, roughness: 0.35 }),
      );
      spike.position.set(dx, 0.33, dz);
      spikes.add(spike);
    }
    spikes.position.set(x, platform.top + 0.02, z);
    levelGroup.add(spikes);
    spikeTraps.push({
      group: spikes,
      hazard: {
        minX: x - 0.62, maxX: x + 0.62,
        minY: platform.top, maxY: platform.top + 0.7,
        minZ: z - 0.62, maxZ: z + 0.62,
      },
    });
  }

  function addCourseObstacles(rng, difficulty) {
    // Saw blades on some hop platforms.
    for (const platform of platforms) {
      if (platform.role || platform === spawnPlatform) continue;
      if (rng() < 0.16 + difficulty * 0.3) addSawBlade(platform, rng);
    }
    // Guarantee at least one saw on early levels too.
    const sawCandidates = platforms.filter((platform) => !platform.role && platform !== spawnPlatform);
    if (saws.length === 0 && sawCandidates.length) addSawBlade(sawCandidates[Math.min(sawCandidates.length - 1, 2)], rng);
    // Timed laser gates over a few gaps.
    for (let i = 1; i < platforms.length - 1; i++) {
      if (rng() < 0.12 + difficulty * 0.22) addLaserGate(platforms[i], platforms[i + 1], rng);
    }
    // Spike traps in the corners of checkpoint pads.
    for (const checkpoint of checkpoints) {
      const platform = checkpoint.platform;
      for (const side of [-1, 1]) {
        addSpikeTrap(platform, platform.x + side * (platform.w * 0.32), platform.z + platform.d * 0.32);
      }
    }
  }

  function addCheckpoint(index, platform) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.15, 0.11, 10, 32),
      new THREE.MeshStandardMaterial({ color: COLORS.yellow, emissive: COLORS.yellow, emissiveIntensity: 0.9, roughness: 0.4 }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(platform.x, platform.top + 0.09, platform.z);
    levelGroup.add(ring);
    const beam = boxMesh(0.32, 3.4, 0.32, COLORS.yellow, COLORS.yellow, 0.85);
    beam.position.set(platform.x, platform.top + 1.7, platform.z);
    levelGroup.add(beam);
    const label = makeLabelSprite(`CHECKPOINT ${index}`, { accent: '#ffd166' });
    label.position.set(platform.x, platform.top + 3.4, platform.z);
    levelGroup.add(label);
    checkpoints.push({
      index, platform, x: platform.x, z: platform.z, top: platform.top,
      ring, beam, label,
      respawn: new THREE.Vector3(platform.x, platform.top + 0.06, platform.z),
    });
  }

  function addSpawnDressing(platform, theme) {
    const startLine = boxMesh(9, 0.1, 0.55, theme.startLine, theme.startLine, 0.8);
    startLine.position.set(platform.x, platform.top + 0.09, platform.z + 1.2);
    levelGroup.add(startLine);
    for (const [dx, dz, w, d] of [[0, -7.7, 15, 0.5], [0, 7.7, 15, 0.5], [-7.7, 0, 0.5, 15], [7.7, 0, 0.5, 15]]) {
      const trim = boxMesh(w, 0.16, d, theme.trim, theme.trim, 0.45);
      trim.position.set(platform.x + dx, platform.top + 0.06, platform.z + dz);
      levelGroup.add(trim);
    }
    spawnRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.2, 0.09, 10, 32),
      new THREE.MeshStandardMaterial({ color: COLORS.yellow, emissive: COLORS.yellow, emissiveIntensity: 0.75, roughness: 0.45 }),
    );
    spawnRing.rotation.x = -Math.PI / 2;
    spawnRing.position.set(platform.x, platform.top + 0.08, platform.z + 0.6);
    levelGroup.add(spawnRing);
    // Identity is painted onto the plaza instead of floating in the first jump sightline.
    const floorLabel = makeFloorLabel(`LEVEL ${level} · ${theme.name}`, { accent: theme.accent });
    floorLabel.position.set(platform.x, platform.top + 0.04, platform.z - 1.6);
    levelGroup.add(floorLabel);
    arrow = new THREE.Mesh(
      new THREE.ConeGeometry(0.65, 1.3, 4),
      new THREE.MeshStandardMaterial({ color: COLORS.yellow, emissive: COLORS.yellow, emissiveIntensity: 0.7, roughness: 0.4 }),
    );
    arrow.position.set(platform.x, platform.top + 1.2, platform.z - 5.6);
    arrow.rotation.x = Math.PI / 2;
    levelGroup.add(arrow);
  }

  function addFinish(platform) {
    for (const side of [-1, 1]) {
      const pillar = boxMesh(0.9, 5.4, 0.9, COLORS.coral, COLORS.coral, 0.4);
      pillar.position.set(platform.x + side * 4.1, platform.top + 2.7, platform.z - 4.5);
      levelGroup.add(pillar);
    }
    const banner = boxMesh(9.4, 1.5, 0.6, COLORS.coral, COLORS.coral, 0.5);
    banner.position.set(platform.x, platform.top + 5.5, platform.z - 4.5);
    levelGroup.add(banner);
    const label = makeLabelSprite('FINISH', { accent: '#ff5c4d' });
    label.scale.set(4.6, 1.15, 1);
    label.position.set(platform.x, platform.top + 7.1, platform.z - 4.5);
    levelGroup.add(label);
    finishPad = new THREE.Mesh(
      new THREE.CylinderGeometry(FINISH_RADIUS * 0.62, FINISH_RADIUS * 0.62, 0.12, 36),
      new THREE.MeshStandardMaterial({ color: COLORS.gold, emissive: COLORS.gold, emissiveIntensity: 0.7, roughness: 0.4 }),
    );
    finishPad.position.set(platform.x, platform.top + 0.07, platform.z);
    levelGroup.add(finishPad);
    finish = { x: platform.x, z: platform.z, top: platform.top, radius: FINISH_RADIUS };
  }

  // ---------------------------------------------- environment decoration -----
  const decorations = [];
  const pastelColors = [COLORS.teal, COLORS.yellow, COLORS.coral, COLORS.blue, COLORS.purple, COLORS.lime];
  for (let i = 0; i < 26; i++) {
    const wobble = 0.6 + (i % 5) * 0.35;
    const block = boxMesh(1.6 + (i % 4), 1.6 + (i % 3), 1.6 + (i % 2), pastelColors[i % pastelColors.length], 0x0, 0);
    const angle = (i / 26) * Math.PI * 2;
    const radius = 34 + (i % 6) * 11;
    block.position.set(Math.cos(angle) * radius, 8 + (i % 7) * 5.5, -40 + Math.sin(angle) * radius);
    block.rotation.set(i * 0.4, i * 0.7, i * 0.2);
    scene.add(block);
    decorations.push({ mesh: block, spin: 0.04 + wobble * 0.02, baseY: block.position.y });
  }
  for (let i = 0; i < 9; i++) {
    const cloud = boxMesh(6 + (i % 4) * 2, 1.1, 3 + (i % 3), 0xffffff, 0x9fb7c9, 0.05);
    cloud.material.transparent = true;
    cloud.material.opacity = 0.85;
    cloud.position.set(-70 + i * 17, 13 + (i % 4) * 6, 24 - (i % 5) * 22);
    scene.add(cloud);
    decorations.push({ mesh: cloud, drift: 0.6 + (i % 3) * 0.3, baseY: cloud.position.y, baseX: cloud.position.x, cloud: true });
  }

  // ------------------------------------------------------------- runners -----
  function resolveWaypoint(entry) {
    if (entry.platform) {
      return {
        x: entry.platform.mesh.position.x + (entry.dx || 0),
        y: entry.platform.mesh.position.y + entry.platform.h / 2,
        z: entry.platform.mesh.position.z + (entry.dz || 0),
      };
    }
    return entry;
  }

  function makeRunner({ name, shirt, accent, route, speed, startIndex = 0, direction = 1, hop = 0.9, missChance = 0.16, checkpoints: checkpointStops = [0] }) {
    if (!route.length) return null;
    const group = new THREE.Group();
    const torso = boxMesh(0.66, 0.9, 0.42, 0xffffff, 0x0, 0);
    torso.material.map = makeShirtTexture(`#${shirt.toString(16).padStart(6, '0')}`, accent);
    torso.material.needsUpdate = true;
    torso.position.y = 0.95;
    const skin = ['#f0c49d', '#d9a06f', '#b97a50', '#f6d7ba'][Math.floor(Math.random() * 4)];
    const hair = ['#2b1b14', '#5a3a1e', '#d8b26a', '#1c2230'][Math.floor(Math.random() * 4)];
    const faceTexture = makeFaceTexture(skin, hair);
    const headMaterials = [
      new THREE.MeshStandardMaterial({ color: skin, roughness: 0.72 }),
      new THREE.MeshStandardMaterial({ color: skin, roughness: 0.72 }),
      new THREE.MeshStandardMaterial({ color: hair, roughness: 0.85 }),
      new THREE.MeshStandardMaterial({ color: skin, roughness: 0.72 }),
      new THREE.MeshStandardMaterial({ map: faceTexture, roughness: 0.68 }),
      new THREE.MeshStandardMaterial({ color: hair, roughness: 0.85 }),
    ];
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.52, 0.52), headMaterials);
    head.position.y = 1.68;
    const mkLimb = (width, length, color, y) => {
      const pivot = new THREE.Group();
      pivot.position.y = y;
      const mesh = boxMesh(width, length, width * 0.95, color, 0x0, 0);
      mesh.position.y = -length / 2;
      pivot.add(mesh);
      group.add(pivot);
      return pivot;
    };
    const legLeft = mkLimb(0.24, 0.62, 0x2f3b57, 0.62);
    legLeft.position.x = -0.16;
    const legRight = mkLimb(0.24, 0.62, 0x2f3b57, 0.62);
    legRight.position.x = 0.16;
    for (const leg of [legLeft, legRight]) {
      const shoe = boxMesh(0.3, 0.14, 0.36, 0x1d242e, 0x0, 0);
      shoe.position.set(0, -0.6, 0.06);
      leg.add(shoe);
    }
    const armLeft = mkLimb(0.2, 0.52, shirt, 1.32);
    armLeft.position.x = -0.45;
    const armRight = mkLimb(0.2, 0.52, shirt, 1.32);
    armRight.position.x = 0.45;
    group.add(torso, head);
    const label = makeLabelSprite(name, { accent });
    label.position.y = 2.28;
    label.scale.set(1.9, 0.475, 1);
    group.add(label);

    const safeStart = Math.min(route.length - 1, Math.max(0, startIndex));
    const start = resolveWaypoint(route[safeStart]);
    group.position.set(start.x, start.y, start.z);
    levelGroup.add(group);
    const runner = {
      name, group, route, speed, hop,
      index: safeStart, next: Math.min(route.length - 1, safeStart + direction), direction,
      t: 0, from: new THREE.Vector3(start.x, start.y, start.z),
      duration: 0.6, phase: Math.random() * Math.PI * 2,
      legLeft, legRight, armLeft, armRight, distance: 0,
      state: 'run', miss: false, missAt: 0, missChance, checkpoints: checkpointStops,
      pause: 0.18 + Math.random() * 0.18, arrived: false,
      vy: 0, fallVx: 0, fallVz: 0, falls: 0, respawnAt: 0,
    };
    const firstTarget = resolveWaypoint(route[runner.next]);
    runner.distance = Math.hypot(firstTarget.x - start.x, firstTarget.z - start.z);
    runner.duration = Math.max(0.28, runner.distance / runner.speed);
    otherPlayers.push(runner);
    return runner;
  }

  function platformSupportAt(x, z) {
    for (const platform of platforms) {
      if (x >= platform.minX && x <= platform.maxX && z >= platform.minZ && z <= platform.maxZ) return true;
    }
    return false;
  }

  let lastFallToast = -Infinity;

  function respawnRunner(runner) {
    runner.falls++;
    let respawnIndex = runner.checkpoints[0] ?? 0;
    for (const stop of runner.checkpoints) if (stop <= runner.index) respawnIndex = stop;
    const spot = resolveWaypoint(runner.route[respawnIndex]);
    runner.group.position.set(spot.x, spot.y, spot.z);
    runner.index = respawnIndex;
    runner.direction = 1;
    runner.next = Math.min(runner.route.length - 1, respawnIndex + 1);
    runner.t = 0;
    runner.from.copy(runner.group.position);
    runner.state = 'run';
    runner.miss = false;
    runner.vy = 0;
    runner.pause = 0.3 + Math.random() * 0.2;
    runner.arrived = false;
    const target = resolveWaypoint(runner.route[runner.next]);
    runner.distance = Math.hypot(target.x - spot.x, target.z - spot.z);
    runner.duration = Math.max(0.28, runner.distance / runner.speed);
    const checkpointNumber = runner.checkpoints.indexOf(respawnIndex);
    if (courseTime - lastFallToast > 6) {
      lastFallToast = courseTime;
      showToast(`${runner.name} fell! · ${checkpointNumber > 0 ? `back at checkpoint ${checkpointNumber}` : 'back at the start'}`);
    }
  }

  function advanceRunner(runner) {
    runner.index = runner.next;
    if (runner.index + runner.direction < 0 || runner.index + runner.direction >= runner.route.length) {
      runner.direction *= -1;
    }
    runner.next = Math.min(runner.route.length - 1, Math.max(0, runner.index + runner.direction));
    runner.t = 0;
    runner.from.copy(runner.group.position);
    const target = resolveWaypoint(runner.route[runner.next]);
    runner.distance = Math.hypot(target.x - runner.from.x, target.z - runner.from.z);
    runner.duration = Math.max(0.28, runner.distance / runner.speed);
    const midX = (runner.from.x + target.x) / 2;
    const midZ = (runner.from.z + target.z) / 2;
    const crossesGap = runner.distance > 2 && !platformSupportAt(midX, midZ);
    runner.miss = crossesGap && Math.random() < runner.missChance;
    runner.missAt = runner.miss ? 0.42 + Math.random() * 0.28 : 0;
  }

  function updateRunner(runner, dt) {
    if (runner.state === 'falling') {
      runner.vy -= 30 * dt;
      runner.group.position.x += runner.fallVx * dt;
      runner.group.position.z += runner.fallVz * dt;
      runner.group.position.y += runner.vy * dt;
      runner.phase += dt * 14;
      const flail = Math.sin(runner.phase) * 1.15;
      runner.legLeft.rotation.x = flail;
      runner.legRight.rotation.x = -flail;
      runner.armLeft.rotation.x = -2.4;
      runner.armRight.rotation.x = -2.4;
      if (runner.group.position.y < -7) respawnRunner(runner);
      return;
    }

    // Grounded pause: stand on the platform between hops (prevents floating).
    if (runner.pause > 0) {
      runner.pause = Math.max(0, runner.pause - dt);
      runner.phase += dt * 2.4;
      const anchor = resolveWaypoint(runner.route[runner.index]);
      runner.group.position.set(anchor.x, anchor.y, anchor.z);
      const idle = Math.sin(runner.phase) * 0.08;
      runner.legLeft.rotation.x = idle;
      runner.legRight.rotation.x = -idle;
      runner.armLeft.rotation.x = idle * 0.6;
      runner.armRight.rotation.x = -idle * 0.6;
      if (runner.pause <= 0 && runner.arrived) {
        runner.arrived = false;
        advanceRunner(runner);
      }
      return;
    }

    const target = resolveWaypoint(runner.route[runner.next]);
    runner.t += dt / runner.duration;

    if (runner.miss && runner.t >= runner.missAt && !runner.missed) {
      runner.missed = true;
      runner.state = 'falling';
      runner.vy = 0.4;
      const dx = target.x - runner.from.x;
      const dz = target.z - runner.from.z;
      const length = Math.hypot(dx, dz) || 1;
      runner.fallVx = (dx / length) * runner.speed * 0.85;
      runner.fallVz = (dz / length) * runner.speed * 0.85;
      return;
    }

    if (runner.t >= 1) {
      runner.t = 0;
      runner.missed = false;
      const live = resolveWaypoint(runner.route[runner.next]);
      runner.group.position.set(live.x, live.y, live.z);
      runner.index = runner.next;
      runner.arrived = true;
      runner.pause = 0.16 + Math.random() * 0.22;
      return;
    }
    const t = runner.t;
    const x = runner.from.x + (target.x - runner.from.x) * t;
    const z = runner.from.z + (target.z - runner.from.z) * t;
    const baseY = runner.from.y + (target.y - runner.from.y) * t;
    const jump = Math.sin(Math.PI * t) * runner.hop;
    runner.group.position.set(x, baseY + jump, z);
    const dx = target.x - runner.from.x;
    const dz = target.z - runner.from.z;
    if (Math.abs(dx) + Math.abs(dz) > 0.001) runner.group.rotation.y = Math.atan2(dx, dz);
    runner.phase += dt * (runner.speed * 2.4);
    const swing = Math.sin(runner.phase) * 0.75;
    runner.legLeft.rotation.x = swing;
    runner.legRight.rotation.x = -swing;
    runner.armLeft.rotation.x = -swing * 0.8;
    runner.armRight.rotation.x = swing * 0.8;
  }

  function buildRunners() {
    const courseRoute = platforms.map((platform) => ({ platform }));
    const checkpointStops = [0, ...checkpoints.map((checkpoint) => platforms.indexOf(checkpoint.platform)).filter((index) => index > 0)];
    const earlyRoute = courseRoute.slice(0, Math.min(5, courseRoute.length));
    makeRunner({ name: 'NoobMaster99', shirt: 0x63e6d5, accent: '#63e6d5', route: earlyRoute, speed: 3.1, startIndex: 1, direction: 1, hop: 0.7, missChance: 0.15, checkpoints: [0] });
    makeRunner({ name: 'BlockBuilder', shirt: 0xffd166, accent: '#ffd166', route: courseRoute, speed: 3.7, startIndex: Math.min(2, courseRoute.length - 1), direction: 1, hop: 0.95, missChance: 0.07, checkpoints: checkpointStops });
    makeRunner({ name: 'xX_Runner_Xx', shirt: 0xff5c4d, accent: '#ff5c4d', route: courseRoute, speed: 4.6, startIndex: Math.min(checkpointStops[1] ?? 2, courseRoute.length - 1), direction: 1, hop: 1.0, missChance: 0.08, checkpoints: checkpointStops });
  }

  // -------------------------------------------------------- level builder ----
  function buildLevel(levelNumber) {
    level = Math.max(1, Math.floor(Number(levelNumber) || 1));
    disposeGroup(levelGroup);
    platforms.length = 0;
    hazards.length = 0;
    saws.length = 0;
    lasers.length = 0;
    spikeTraps.length = 0;
    checkpoints.length = 0;
    otherPlayers.length = 0;
    finish = null;
    finishPad = null;
    spawnRing = null;
    arrow = null;

    const rng = mulberry32((level * 7919 + 104729) | 0);
    const difficulty = Math.min(1, (level - 1) / 12);
    const sectionCount = 3 + Math.min(2, Math.floor((level - 1) / 3));
    const theme = THEMES[(level - 1) % THEMES.length];
    activeTheme = theme;
    scene.background.set(theme.sky);
    scene.fog.color.set(theme.fog);
    scene.fog.near = 70;
    scene.fog.far = 260;
    hemiLight.color.set(theme.hemiSky);
    hemiLight.groundColor.set(theme.hemiGround);
    hemiLight.intensity = theme.hemi;
    sunLight.color.set(theme.sun);
    sunLight.intensity = theme.sunPower;
    rimLight.color.set(theme.accent);
    rimLight.intensity = 0.55 + (theme.sunPower - 2) * 0.2;
    // Recolour the floating scenery so the whole skyline changes with the level.
    decorations.forEach((item, index) => {
      const color = item.cloud ? theme.cloud : theme.palette[index % theme.palette.length];
      item.mesh.material.color.set(color);
      if (!item.cloud) item.mesh.material.emissive.set(color);
    });

    spawnPlatform = addPlatform({ x: 0, z: 0, top: 0, w: 16, d: 16, h: 1.6, color: theme.spawn, emissive: theme.trim, emissiveIntensity: 0.12 });
    spawnPlatform.role = 'spawn';
    spawn = new THREE.Vector3(0, spawnPlatform.top + 0.06, 4.5);
    addSpawnDressing(spawnPlatform, theme);

    let x = 0;
    let z = -8.5;
    let top = 0;
    let previousHalf = 4;
    let colorIndex = 0;

    const placeHop = () => {
      const size = clamp(3.3 - difficulty * 0.9 - rng() * 0.4, 2.2, 3.3);
      const half = size / 2;
      // Alternating zig-zag keeps a course from reading as a straight corridor.
      const sway = Math.sin(colorIndex * 1.15 + level * 0.7) * (0.9 + difficulty * 1.1);
      let dx = (rng() * 2 - 1) * (1.0 + difficulty * 1.5) + sway;
      let dz = previousHalf + half + 1.1 + rng() * (0.5 + difficulty * 0.6);
      const distance = Math.hypot(dx, dz);
      if (distance > 4.1) { const scale = 4.1 / distance; dx *= scale; dz *= scale; }
      const rise = 0.15 + rng() * (0.5 + difficulty * 0.25);
      const mover = rng() < 0.05 + difficulty * 0.45;
      const moveAxis = rng() < 0.62 ? 'x' : 'y';
      const move = mover ? {
        axis: moveAxis,
        amp: moveAxis === 'y'
          ? 0.5 + rng() * 0.6
          : Math.min(2.3, 1.2 + rng() * (0.9 + difficulty * 0.8)),
        speed: 0.9 + rng() * (0.5 + difficulty * 0.7),
        phase: rng() * Math.PI * 2,
      } : null;
      x = clamp(x + dx, -15, 15);
      z -= dz;
      top += rise;
      addPlatform({ x, z, top, w: size, d: size, color: theme.palette[colorIndex++ % theme.palette.length], move });
      previousHalf = half;
    };

    for (let section = 0; section < sectionCount; section++) {
      const hops = 3 + Math.min(4, Math.floor(difficulty * 4 + rng() * 2));
      for (let hop = 0; hop < hops; hop++) placeHop();
      // Checkpoint platform at the end of the section.
      const cpSize = 6.5;
      z -= previousHalf + 2.0 + cpSize / 2;
      top += 0.35;
      x = clamp(x + (rng() * 2 - 1) * 1.5, -13, 13);
      const cpPlatform = addPlatform({ x, z, top, w: cpSize, d: cpSize, color: theme.checkpoint });
      cpPlatform.role = 'checkpoint';
      addCheckpoint(checkpoints.length + 1, cpPlatform);
      // Lava pools under later stretches (the first section stays friendly).
      if (section > 0) addHazard({ x: clamp(x, -10, 10), z: z + 10, y: 0.3, w: 30, h: 0.6, d: 24 });
      previousHalf = cpSize / 2;
    }

    // Final sprint to the finish.
    const finalHops = 2 + Math.min(3, Math.floor(difficulty * 3 + rng() * 2));
    for (let hop = 0; hop < finalHops; hop++) placeHop();
    const finishHalf = 5;
    z -= previousHalf + 2.2 + finishHalf;
    top += 0.5;
    x = clamp(x + (rng() * 2 - 1) * 1.2, -10, 10);
    const finishPlatform = addPlatform({ x, z, top, w: finishHalf * 2, d: finishHalf * 2, h: 1.4, color: COLORS.gold, emissive: COLORS.gold, emissiveIntensity: 0.28 });
    finishPlatform.role = 'finish';
    addFinish(finishPlatform);
    addCourseObstacles(rng, difficulty);

    buildRunners();

    if (element?.serverLabel) {
      const compactHud = innerWidth < 620;
      element.serverLabel.textContent = compactHud
        ? `L${level} · ${activeTheme.name}`
        : `Roblox Server · ${activeTheme.name} · Level ${level} · ${onlineCount} online`;
    }
    const pauseLine = document.querySelector('.parkour-server-line');
    if (pauseLine) pauseLine.textContent = `Parkour Obby · ${activeTheme.name} · Level ${level}`;
    bestTime = getBest?.(level) ?? null;
    updateHud();
  }

  // ------------------------------------------------------------- input -------
  const keys = new Set();
  const element = {
    screen: document.querySelector('#parkour-screen'),
    timer: document.querySelector('#parkour-timer'),
    checkpoints: document.querySelector('#parkour-checkpoints'),
    best: document.querySelector('#parkour-best-hud'),
    objective: document.querySelector('#parkour-objective'),
    toast: document.querySelector('#parkour-toast'),
    hint: document.querySelector('#parkour-click-hint'),
    pause: document.querySelector('#parkour-pause'),
    finish: document.querySelector('#parkour-finish'),
    finishTime: document.querySelector('#parkour-finish-time'),
    finishBest: document.querySelector('#parkour-finish-best'),
    finishTitle: document.querySelector('#parkour-finish-title'),
    serverLabel: document.querySelector('#parkour-server-label'),
  };

  const isTouch = matchMedia('(pointer: coarse)').matches;
  let active = false;
  let paused = false;
  let finished = false;
  let running = false;
  let locked = false;
  let elapsed = 0;
  let checkpointIndex = 0;
  let toastTimer = 0;
  let respawnTimer = 0;
  let cameraBob = 0;
  let courseTime = 0;
  let bestTime = getBest?.() ?? null;

  const player = {
    position: spawn.clone(),
    velocity: new THREE.Vector3(),
    yaw: 0,
    pitch: -0.05,
    onGround: false,
    ground: null,
    jumpBuffer: 0,
  };

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

  function updateHint() {
    if (!element.hint) return;
    const show = active && !isTouch && !locked && !paused && !finished;
    element.hint.hidden = !show;
    element.hint.style.display = show ? '' : 'none';
  }

  function objectiveText() {
    if (finished) return `Level ${level} complete!`;
    if (checkpointIndex >= checkpoints.length) return `Level ${level} · Reach the finish line`;
    if (checkpointIndex === 0) return running ? `Level ${level} · Reach checkpoint 1` : `Level ${level} · Move to start the timer`;
    return `Checkpoint ${checkpointIndex} reached · head for checkpoint ${checkpointIndex + 1}`;
  }

  function updateHud() {
    if (element.timer) element.timer.textContent = formatTime(running || finished ? elapsed : 0);
    if (element.checkpoints) element.checkpoints.textContent = `Checkpoint ${checkpointIndex}/${checkpoints.length}`;
    if (element.best) element.best.textContent = `Best L${level} ${bestTime != null ? formatTime(bestTime) : '–'}`;
    if (element.objective) element.objective.textContent = objectiveText();
  }

  function setRunning(value) {
    running = value;
    updateHud();
  }

  function respawnPoint() {
    return checkpointIndex > 0 ? checkpoints[checkpointIndex - 1].respawn : spawn;
  }

  function respawn(reason = 'You fell!') {
    if (respawnTimer > 0) return;
    respawnTimer = RESPAWN_DELAY;
    player.position.copy(respawnPoint()).add(new THREE.Vector3(0, 0.1, 0.6));
    player.velocity.set(0, 0, 0);
    player.onGround = false;
    player.ground = null;
    showToast(`${reason} · back to ${checkpointIndex > 0 ? `checkpoint ${checkpointIndex}` : 'the start'}`);
  }

  function resetRun() {
    player.position.copy(spawn);
    player.velocity.set(0, 0, 0);
    player.yaw = 0;
    player.pitch = -0.05;
    player.onGround = false;
    player.ground = null;
    player.jumpBuffer = 0;
    elapsed = 0;
    courseTime = 0;
    checkpointIndex = 0;
    finished = false;
    paused = false;
    running = false;
    respawnTimer = 0;
    keys.clear();
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    bestTime = getBest?.(level) ?? null;
    for (const checkpoint of checkpoints) checkpoint.ring.visible = true;
    updateHud();
    updateHint();
  }

  function pause() {
    if (!active || paused || finished) return;
    paused = true;
    keys.clear();
    setOverlay(element.pause, true);
    updateHint();
    if (document.pointerLockElement === canvas) document.exitPointerLock();
  }

  function resume() {
    if (!active || !paused) return;
    paused = false;
    setOverlay(element.pause, false);
    updateHint();
    requestLock();
  }

  function restart() {
    resetRun();
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    updateHint();
    requestLock();
  }

  function leave() {
    stop();
    onExit?.();
  }

  function lockFailed() {
    if (lockRefused) return;
    lockRefused = true;
    if (element.hint) element.hint.textContent = 'Drag to look · WASD to move';
    showToast('Mouse capture blocked · drag to look around');
    updateHint();
  }

  function requestLock() {
    if (isTouch || lockRefused) return;
    const now = performance.now();
    if (now - lastLockRequest < 500) return;
    lastLockRequest = now;
    try {
      const result = canvas.requestPointerLock();
      result?.catch?.(lockFailed);
      if (!result) {
        // Older browsers return undefined and signal failure via pointerlockerror.
        setTimeout(() => { if (document.pointerLockElement !== canvas) lockFailed(); }, 350);
      }
    } catch { lockFailed(); }
  }

  function finishRun() {
    finished = true;
    paused = false;
    running = false;
    setOverlay(element.pause, false);
    updateHint();
    if (document.pointerLockElement === canvas) document.exitPointerLock();
    const result = onFinish?.(level, elapsed) || { isBest: false, best: elapsed, nextLevel: level + 1 };
    bestTime = result.best;
    if (element.finishTitle) element.finishTitle.textContent = `Level ${level} Complete!`;
    if (element.finishTime) element.finishTime.textContent = formatTime(elapsed);
    if (element.finishBest) element.finishBest.textContent = result.isBest ? 'New best time!' : `Best ${formatTime(result.best)}`;
    setOverlay(element.finish, true);
    updateHud();
  }

  // --------------------------------------------------------- world updates ---
  const zero = new THREE.Vector3();
  function updatePlatforms(time) {
    for (const platform of platforms) {
      platform.prev.copy(platform.mesh.position);
      let px = 0;
      let py = 0;
      let pz = 0;
      if (platform.move) {
        const offset = Math.sin(time * platform.move.speed + (platform.move.phase || 0)) * platform.move.amp;
        if (platform.move.axis === 'x') px = offset;
        else if (platform.move.axis === 'y') py = offset;
        else pz = offset;
      }
      platform.mesh.position.set(platform.baseX + px, platform.baseY + py, platform.baseZ + pz);
      platform.minX = platform.baseX + px - platform.w / 2;
      platform.maxX = platform.baseX + px + platform.w / 2;
      platform.minY = platform.baseY + py - platform.h / 2;
      platform.maxY = platform.baseY + py + platform.h / 2;
      platform.minZ = platform.baseZ + pz - platform.d / 2;
      platform.maxZ = platform.baseZ + pz + platform.d / 2;
      platform.delta.copy(platform.mesh.position).sub(platform.prev);
    }
  }

  function playerBox() {
    const half = PLAYER.width / 2;
    return {
      minX: player.position.x - half, maxX: player.position.x + half,
      minY: player.position.y, maxY: player.position.y + PLAYER.height,
      minZ: player.position.z - half, maxZ: player.position.z + half,
    };
  }

  function overlaps(a, b) {
    return a.minX < b.maxX && a.maxX > b.minX && a.minY < b.maxY && a.maxY > b.minY && a.minZ < b.maxZ && a.maxZ > b.minZ;
  }

  function overlapsHazard(box, hazard) {
    return box.minX < hazard.maxX && box.maxX > hazard.minX && box.minY < hazard.maxY && box.maxY > hazard.minY && box.minZ < hazard.maxZ && box.maxZ > hazard.minZ;
  }

  function groundPlatformBelow(x, z, feetY) {
    let best = null;
    for (const platform of platforms) {
      if (x < platform.minX || x > platform.maxX || z < platform.minZ || z > platform.maxZ) continue;
      const gap = feetY - platform.maxY;
      if (gap >= -0.35 && gap <= 1.2 && (!best || platform.maxY > best.maxY)) best = platform;
    }
    return best;
  }

  function physics(dt) {
    const halfWidth = PLAYER.width / 2;
    const forward = new THREE.Vector3(-Math.sin(player.yaw), 0, -Math.cos(player.yaw));
    const right = new THREE.Vector3(Math.cos(player.yaw), 0, -Math.sin(player.yaw));
    const input = new THREE.Vector3();
    if (keys.has('forward')) input.add(forward);
    if (keys.has('back')) input.sub(forward);
    if (keys.has('right')) input.add(right);
    if (keys.has('left')) input.sub(right);
    if (input.lengthSq() > 1) input.normalize();
    const speed = keys.has('sprint') ? SPRINT_SPEED : WALK_SPEED;
    const targetX = input.x * speed;
    const targetZ = input.z * speed;
    const accel = player.onGround ? GROUND_ACCEL : AIR_ACCEL;
    const blend = clamp(accel * dt, 0, 1);
    player.velocity.x += (targetX - player.velocity.x) * blend;
    player.velocity.z += (targetZ - player.velocity.z) * blend;

    if (input.lengthSq() > 0.01 && !running) setRunning(true);
    if (player.jumpBuffer > 0) player.jumpBuffer -= dt;
    const wantsJump = keys.has('jump');
    if (wantsJump && player.onGround) {
      player.velocity.y = JUMP_SPEED;
      player.onGround = false;
      player.ground = null;
      player.jumpBuffer = 0;
      if (!running) setRunning(true);
    }
    player.velocity.y = Math.max(player.velocity.y - GRAVITY * dt, -26);

    // Moving platforms carry whoever is standing on them.
    if (player.ground) {
      player.position.add(player.ground.delta);
    }

    const step = (axis, amount) => {
      if (!amount) return;
      player.position[axis] += amount;
      const box = playerBox();
      for (const platform of platforms) {
        if (!overlaps(box, platform)) continue;
        if (axis === 'x') {
          player.position.x = amount > 0 ? platform.minX - halfWidth - 0.001 : platform.maxX + halfWidth + 0.001;
          player.velocity.x = 0;
        } else if (axis === 'z') {
          player.position.z = amount > 0 ? platform.minZ - halfWidth - 0.001 : platform.maxZ + halfWidth + 0.001;
          player.velocity.z = 0;
        }
        box.minX = player.position.x - halfWidth; box.maxX = player.position.x + halfWidth;
        box.minZ = player.position.z - halfWidth; box.maxZ = player.position.z + halfWidth;
      }
    };

    // Vertical first.
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
        player.position.y = platform.minY - PLAYER.height - 0.001;
        player.velocity.y = 0;
      }
      box = playerBox();
    }

    step('x', player.velocity.x * dt);
    step('z', player.velocity.z * dt);

    // Grounded on slopes while walking off a moving platform's edge.
    if (!player.onGround && player.velocity.y <= 0) {
      const below = groundPlatformBelow(player.position.x, player.position.z, feetBefore);
      if (below && player.position.y <= below.maxY + 0.08) {
        player.position.y = below.maxY;
        player.velocity.y = 0;
        player.onGround = true;
        player.ground = below;
      }
    }

    box = playerBox();
    for (const hazard of hazards) {
      if (overlapsHazard(box, hazard)) { respawn('You touched the lava!'); return; }
    }
    for (const saw of saws) {
      if (overlapsHazard(box, saw.hazard)) { respawn('Sliced by a saw blade!'); return; }
    }
    for (const trap of spikeTraps) {
      if (overlapsHazard(box, trap.hazard)) { respawn('Ouch — spike trap!'); return; }
    }
    for (const laser of lasers) {
      if (laser.active && overlapsHazard(box, laser.hazard)) { respawn('Zapped by a laser gate!'); return; }
    }
    if (player.position.y < VOID_Y) { respawn('You fell!'); return; }

    for (const checkpoint of checkpoints) {
      if (checkpoint.index <= checkpointIndex) continue;
      if (Math.abs(player.position.x - checkpoint.x) < CHECKPOINT_RADIUS &&
        Math.abs(player.position.z - checkpoint.z) < CHECKPOINT_RADIUS &&
        Math.abs(player.position.y - checkpoint.top) < 1.6) {
        checkpointIndex = checkpoint.index;
        checkpoint.ring.material.color.set(COLORS.teal);
        checkpoint.ring.material.emissive.set(COLORS.teal);
        checkpoint.beam.material.color.set(COLORS.teal);
        checkpoint.beam.material.emissive.set(COLORS.teal);
        showToast(`Checkpoint ${checkpointIndex} reached!`);
        updateHud();
      }
    }
    if (finish && !finished) {
      if (Math.abs(player.position.x - finish.x) < finish.radius && Math.abs(player.position.z - finish.z) < finish.radius && Math.abs(player.position.y - finish.top) < 1.6) {
        finishRun();
      }
    }
  }

  // ------------------------------------------------------------- camera -----
  function updateCamera(dt) {
    const moving = Math.hypot(player.velocity.x, player.velocity.z);
    if (player.onGround && moving > 1) cameraBob += dt * moving * 1.9;
    const bob = player.onGround ? Math.sin(cameraBob) * 0.028 : 0;
    camera.position.set(player.position.x, player.position.y + PLAYER.eye + bob, player.position.z);
    camera.rotation.set(player.pitch, player.yaw, 0);
  }

  // ------------------------------------------------------------- events -----
  const down = (event) => {
    if (!active) return;
    const tag = event.target?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (event.code === 'Escape') {
      event.preventDefault();
      if (finished) return;
      if (paused) resume(); else pause();
      return;
    }
    if (paused || finished) return;
    if (event.code === 'KeyW' || event.code === 'ArrowUp') { keys.add('forward'); event.preventDefault(); }
    else if (event.code === 'KeyS' || event.code === 'ArrowDown') { keys.add('back'); event.preventDefault(); }
    else if (event.code === 'KeyA' || event.code === 'ArrowLeft') { keys.add('left'); event.preventDefault(); }
    else if (event.code === 'KeyD' || event.code === 'ArrowRight') { keys.add('right'); event.preventDefault(); }
    else if (event.code === 'Space') { keys.add('jump'); player.jumpBuffer = 0.14; event.preventDefault(); }
    else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') keys.add('sprint');
    else if (event.code === 'KeyR') respawn('Respawned');
  };
  const up = (event) => {
    if (event.code === 'KeyW' || event.code === 'ArrowUp') keys.delete('forward');
    else if (event.code === 'KeyS' || event.code === 'ArrowDown') keys.delete('back');
    else if (event.code === 'KeyA' || event.code === 'ArrowLeft') keys.delete('left');
    else if (event.code === 'KeyD' || event.code === 'ArrowRight') keys.delete('right');
    else if (event.code === 'Space') keys.delete('jump');
    else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') keys.delete('sprint');
  };
  const move = (event) => {
    if (!active || !locked) return;
    player.yaw -= event.movementX * MOUSE_SENSITIVITY;
    player.pitch = clamp(player.pitch - event.movementY * MOUSE_SENSITIVITY, -1.45, 1.45);
  };
  const lockChange = () => {
    locked = document.pointerLockElement === canvas;
    if (locked) dragLook = null;
    updateHint();
    if (active && !locked && !paused && !finished) pause();
  };
  const mouseDown = (event) => {
    if (!active || isTouch) return;
    if (event.target.closest?.('button') && event.target.closest('.parkour-panel-actions, #parkour-click-hint')) return;
    if (!locked && !paused && !finished) {
      event.preventDefault();
      requestLock();
    }
  };
  const touchLook = { id: null, x: 0, y: 0 };
  let dragLook = null;
  let lockRefused = false;
  let lastLockRequest = 0;
  const touchDown = (event) => {
    if (!active || !isTouch) return;
    if (event.target.closest?.('button')) return;
    touchLook.id = event.pointerId;
    touchLook.x = event.clientX;
    touchLook.y = event.clientY;
  };
  const touchMove = (event) => {
    if (!active || !isTouch || touchLook.id !== event.pointerId) return;
    player.yaw -= (event.clientX - touchLook.x) * 0.007;
    player.pitch = clamp(player.pitch - (event.clientY - touchLook.y) * 0.007, -1.45, 1.45);
    touchLook.x = event.clientX;
    touchLook.y = event.clientY;
  };
  const touchUp = (event) => { if (touchLook.id === event.pointerId) touchLook.id = null; };

  // Pointer lock needs a user gesture. The HUD layer swallows clicks (pointer-events:
  // none on its wrappers), so listen at document level: clicking anywhere in the
  // course requests the lock, and if the browser refuses it we fall back to
  // drag-to-look so the game still starts.
  const anyPointerDown = (event) => {
    if (!active || isTouch || paused || finished) return;
    if (event.target.closest?.('button:not(#parkour-click-hint), a, input')) return;
    if (!locked) {
      requestLock();
      if (event.pointerType === 'mouse' || event.pointerType === '') {
        dragLook = { x: event.clientX, y: event.clientY };
      }
    }
  };
  const anyPointerMove = (event) => {
    if (!active || !dragLook || locked || paused || finished) return;
    if (element.hint && !element.hint.hidden) {
      element.hint.hidden = true;
      element.hint.style.display = 'none';
    }
    player.yaw -= (event.clientX - dragLook.x) * 0.0028;
    player.pitch = clamp(player.pitch - (event.clientY - dragLook.y) * 0.0028, -1.45, 1.45);
    dragLook.x = event.clientX;
    dragLook.y = event.clientY;
  };
  const anyPointerUp = () => { dragLook = null; };

  document.addEventListener('keydown', down);
  document.addEventListener('keyup', up);
  document.addEventListener('mousemove', move);
  document.addEventListener('pointerlockchange', lockChange);
  document.addEventListener('pointerlockerror', lockFailed);
  document.addEventListener('pointerdown', anyPointerDown);
  document.addEventListener('pointermove', anyPointerMove);
  document.addEventListener('pointerup', anyPointerUp);
  document.addEventListener('pointercancel', anyPointerUp);
  element.screen?.addEventListener('pointerdown', mouseDown);
  canvas.addEventListener('pointerdown', mouseDown);
  canvas.addEventListener('pointerdown', touchDown);
  canvas.addEventListener('pointermove', touchMove);
  canvas.addEventListener('pointerup', touchUp);
  canvas.addEventListener('pointercancel', touchUp);

  // Touch controls.
  for (const button of document.querySelectorAll('[data-parkour-move]')) {
    const key = button.dataset.parkourMove;
    const press = (event) => { event.preventDefault(); if (!active || paused || finished) return; keys.add(key); setRunning(true); button.setPointerCapture?.(event.pointerId); };
    const release = (event) => { keys.delete(key); if (button.hasPointerCapture?.(event.pointerId)) button.releasePointerCapture(event.pointerId); };
    button.addEventListener('pointerdown', press);
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    button.addEventListener('pointerleave', release);
  }
  for (const button of document.querySelectorAll('[data-parkour-jump]')) {
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      if (!active || paused || finished) return;
      keys.add('jump');
      player.jumpBuffer = 0.16;
      setRunning(true);
    });
    for (const type of ['pointerup', 'pointercancel', 'pointerleave']) button.addEventListener(type, () => keys.delete('jump'));
  }

  // HUD buttons.
  for (const button of document.querySelectorAll('[data-parkour-action]')) {
    button.addEventListener('click', () => {
      const action = button.dataset.parkourAction;
      if (action === 'resume') resume();
      else if (action === 'restart') restart();
      else if (action === 'next') nextLevel();
      else if (action === 'menu') leave();
    });
  }
  element.hint?.addEventListener('click', (event) => { event.preventDefault(); requestLock(); });

  // ---------------------------------------------------------------- API -----
  function start(levelNumber = 1) {
    active = true;
    lockRefused = false;
    dragLook = null;
    lastLockRequest = 0;
    if (element.hint) element.hint.textContent = 'Click to play · ESC for menu';
    buildLevel(levelNumber);
    resetRun();
    updateHint();
    requestLock();
  }

  function nextLevel() {
    if (!active) return;
    buildLevel(level + 1);
    resetRun();
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    updateHint();
    requestLock();
    showToast(`Level ${level}`);
  }

  function stop() {
    active = false;
    paused = false;
    finished = false;
    running = false;
    keys.clear();
    setOverlay(element.pause, false);
    setOverlay(element.finish, false);
    updateHint();
    if (document.pointerLockElement === canvas) document.exitPointerLock();
  }

  function update(dt) {
    if (!active) return;
    if (!paused && !finished) courseTime += dt;
    if (respawnTimer > 0) respawnTimer = Math.max(0, respawnTimer - dt);
    if (!paused && !finished) {
      updatePlatforms(courseTime);
      if (running) { elapsed += dt; }
      physics(dt);
      updateHud();
    } else {
      // Frozen world: keep movers where they are and cancel stale carry deltas.
      for (const platform of platforms) platform.delta.set(0, 0, 0);
    }
    for (const item of decorations) {
      item.mesh.rotation.y += item.spin * (item.spin ? 1 : 0) * dt;
      if (item.drift) item.mesh.position.x = item.baseX + Math.sin(courseTime * 0.08 * item.drift) * 9;
      else item.mesh.position.y = item.baseY + Math.sin(courseTime * 0.5 + item.mesh.position.x) * 0.35;
    }
    for (const saw of saws) saw.group.rotation.z += saw.speed * dt;
    for (const laser of lasers) {
      laser.active = Math.sin(courseTime * 2.4 + laser.phase) > 0.1;
      laser.group.material.opacity = laser.active ? 0.95 : 0.12;
      laser.group.scale.x = laser.active ? 1 : 0.55;
      laser.group.scale.z = laser.active ? 1 : 0.55;
    }
    for (const trap of spikeTraps) trap.group.rotation.y = Math.sin(courseTime * 1.6) * 0.18;
    if (!paused && !finished) for (const runner of otherPlayers) updateRunner(runner, dt);
    if (finishPad) finishPad.rotation.y += dt * 0.9;
    for (const checkpoint of checkpoints) {
      checkpoint.ring.rotation.z += dt * 1.4;
      checkpoint.ring.scale.setScalar(1 + Math.sin(courseTime * 2 + checkpoint.index) * 0.04);
      checkpoint.beam.position.y = checkpoint.top + 1.7 + Math.sin(courseTime * 1.5 + checkpoint.index) * 0.12;
    }
    if (spawnRing) spawnRing.rotation.z += dt * 0.6;
    if (arrow) arrow.position.y = spawnPlatform.top + 1.2 + Math.sin(courseTime * 2.4) * 0.18;
    updateCamera(dt);
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

  const api = { start, stop, update, render, get active() { return active; }, get paused() { return paused; }, get finished() { return finished; }, get state() { return { level, checkpointIndex, checkpoints: checkpoints.length, elapsed, running, finished, paused, yaw: player.yaw, pitch: player.pitch, position: player.position.toArray() }; } };
  // Dev-only helpers so automated checks can exercise checkpoints/finish without
  // walking the whole course.
  if (import.meta.env.DEV) {
    api.debugTeleport = (x, y, z) => { player.position.set(x, y, z); player.velocity.set(0, 0, 0); };
    api.debugPlayers = () => otherPlayers.map((runner) => ({ name: runner.name, position: runner.group.position.toArray(), index: runner.index, state: runner.state, falls: runner.falls, pause: runner.pause, arrived: runner.arrived }));
    api.debugFinish = () => finish ? { x: finish.x, y: finish.top + 0.1, z: finish.z } : null;
    api.debugLevel = () => level;
    api.debugCourse = () => ({
      level,
      platforms: platforms.map((platform) => ({
        x: platform.baseX, z: platform.baseZ, top: platform.top,
        w: platform.w, d: platform.d, move: platform.move ? platform.move.axis : null,
      })),
      checkpoints: checkpoints.map((checkpoint) => ({ x: checkpoint.x, z: checkpoint.z, top: checkpoint.top })),
      hazards: hazards.map((hazard) => ({ minX: hazard.minX, maxX: hazard.maxX, minY: hazard.minY, maxY: hazard.maxY, minZ: hazard.minZ, maxZ: hazard.maxZ })),
      saws: saws.length, lasers: lasers.length, spikeTraps: spikeTraps.length,
      obstacles: [...saws.map((saw) => ({ type: 'saw', x: saw.x, z: saw.z, top: saw.top })), ...lasers.map((laser) => ({ type: 'laser', x: laser.x, z: laser.z, top: laser.base })), ...spikeTraps.map((trap) => ({ type: 'spikes', x: trap.hazard.minX + 0.62, z: trap.hazard.minZ + 0.62 }))],
      finish: finish ? { x: finish.x, z: finish.z, top: finish.top } : null,
    });
    api.debugScene = () => ({ sceneChildren: scene.children.length, levelChildren: levelGroup.children.length });
    api.debugForceFall = (name) => {
      const runner = otherPlayers.find((entry) => entry.name === name) || otherPlayers[0];
      if (runner) { runner.miss = true; runner.missAt = 0.01; runner.missed = false; }
    };
    window.__parkour = api;
  }
  buildLevel(1);
  updatePlatforms(0);
  updateHud();
  return api;
}
