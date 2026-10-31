import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import './style.css';
import { BLOCK_CATALOG, BLOCKS, BLOCK_CATEGORIES } from './blocks.js';
import textureNames from './texture-names.json';
import { findMobGround } from './mob-spawn.js';
import templates from './structure-templates.json';
import { createParkour, formatTime as formatParkourTime } from './parkour.js';
import { createDozen } from './dozen.js';

// Public asset URLs must respect the deployment base (e.g. /blockbound/ on GitHub
// Pages) as well as the root deployment used locally and on Vercel.
const ASSET_BASE = import.meta.env.BASE_URL || '/';
const assetUrl = (path) => `${ASSET_BASE}${String(path).replace(/^\/+/, '')}`;

// This game keeps its state in module variables. A partial Vite update can leave the
// old screen visible after those variables reset, which makes controls appear frozen.
if (import.meta.hot) import.meta.hot.accept(() => window.location.reload());

const canvas = document.querySelector('#world');
// Keep keyboard controls available in embedded browsers even when mouse capture is unavailable.
canvas.tabIndex = 0;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9bb8c5);
scene.fog = new THREE.Fog(0x9bb8c5, 32, 76);

const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.08, 180);
camera.rotation.order = 'YXZ';
scene.add(camera);

const hemi = new THREE.HemisphereLight(0xcde1e8, 0x5a4937, 2.1);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffe5bd, 2.4);
sun.position.set(-28, 48, 20);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -45;
sun.shadow.camera.right = 45;
sun.shadow.camera.top = 45;
sun.shadow.camera.bottom = -45;
scene.add(sun);
scene.add(sun.target);

function pixelTexture(base, flecks, topStripe = null, type = '', face = 'side') {
  const size = 16;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);
  if (topStripe) {
    ctx.fillStyle = topStripe;
    ctx.fillRect(0, 0, size, 4);
  }
  let seed = base.charCodeAt(1) * 97;
  for (let i = 0; i < 42; i++) {
    seed = (seed * 16807) % 2147483647;
    const x = seed % size;
    seed = (seed * 16807) % 2147483647;
    const y = seed % size;
    ctx.globalAlpha = .22 + (seed % 30) / 100;
    ctx.fillStyle = flecks[seed % flecks.length];
    ctx.fillRect(x, y, seed % 3 === 0 ? 2 : 1, 1);
  }
  ctx.globalAlpha = 1;
  if (type === 'chest') {
    ctx.fillStyle = '#563516'; ctx.fillRect(0, 0, 16, 2); ctx.fillRect(0, 8, 16, 1); ctx.fillRect(0, 14, 16, 2);
    ctx.fillStyle = '#d9c37c'; ctx.fillRect(7, 7, 2, 3);
  } else if (type === 'red_bed') {
    ctx.fillStyle = face === 'top' ? '#b52828' : '#873b2a'; ctx.fillRect(0, 0, 16, 16);
    ctx.fillStyle = '#ece9df'; ctx.fillRect(0, 0, 16, face === 'top' ? 4 : 3);
  } else if (type === 'grass_block' && face === 'side') {
    ctx.fillStyle = '#548332'; ctx.fillRect(0, 0, 16, 4);
    ctx.fillRect(2, 4, 3, 2); ctx.fillRect(10, 4, 2, 3);
  } else if (type.endsWith('_log')) {
    if (face === 'top') {
      ctx.fillStyle = '#bd9860'; ctx.fillRect(0, 0, 16, 16);
      ctx.strokeStyle = '#795331'; ctx.strokeRect(2.5, 2.5, 11, 11); ctx.strokeRect(5.5, 5.5, 5, 5);
    } else {
      ctx.fillStyle = type.startsWith('birch') ? '#625d52' : '#4b3421';
      for (const x of [1, 5, 10, 14]) { ctx.fillRect(x, 0, 1, 16); ctx.fillRect((x + 1) % 16, 3, 1, 5); }
    }
  } else if (type.endsWith('_planks')) {
    ctx.fillStyle = '#553b27';
    for (const y of [0, 5, 10, 15]) ctx.fillRect(0, y, 16, 1);
    ctx.fillRect(5, 1, 1, 4); ctx.fillRect(11, 6, 1, 4); ctx.fillRect(3, 11, 1, 4);
  } else if (type === 'stone_bricks' || type === 'bricks') {
    ctx.fillStyle = type === 'bricks' ? '#674039' : '#555b57';
    for (const y of [0, 5, 10, 15]) ctx.fillRect(0, y, 16, 1);
    ctx.fillRect(7, 1, 1, 4); ctx.fillRect(3, 6, 1, 4); ctx.fillRect(12, 6, 1, 4); ctx.fillRect(7, 11, 1, 4);
  } else if (type.endsWith('_leaves')) {
    ctx.fillStyle = '#365c2d';
    for (const [x, y] of [[1, 1], [8, 2], [4, 6], [12, 8], [1, 12], [9, 13]]) ctx.fillRect(x, y, 3, 2);
  }
  const texture = new THREE.CanvasTexture(c);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapNearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const materials = {};
const availableTextures = new Set(textureNames);
const textureCache = new Map();
const textureLoader = new THREE.TextureLoader();

function textureName(type, face = 'side') {
  const aliases = { suspicious_sand: 'suspicious_sand_0', suspicious_gravel: 'suspicious_gravel_0', moss_carpet: 'moss_block', pointed_dripstone: 'pointed_dripstone_up_tip', magma_block: 'magma', smooth_quartz: 'quartz_block_bottom', chiseled_quartz: 'chiseled_quartz_block', crimson_leaves: 'nether_wart_block', warped_leaves: 'warped_wart_block', bamboo_leaves: 'bamboo_large_leaves', chiseled_bamboo: 'bamboo_mosaic' };
  type = aliases[type] || type;
  type = type.replace(/^(.*)_stripped_(log|wood|stem|hyphae)$/, 'stripped_$1_$2');
  type = type.replace(/_hyphae$/, '_stem').replace(/_wood$/, '_log');
  type = type.replace(/_hanging_sign$/, '_planks');
  if (type === 'water') return 'water_still';
  if (type === 'dirt_path') return face === 'top' ? 'dirt_path_top' : face === 'bottom' ? 'dirt' : 'dirt_path_side';
  if (type === 'podzol') return face === 'top' ? 'podzol_top' : face === 'bottom' ? 'dirt' : 'podzol_side';
  if (type === 'mycelium') return face === 'top' ? 'mycelium_top' : face === 'bottom' ? 'dirt' : 'mycelium_side';
  if (type === 'blast_furnace') return face === 'top' || face === 'bottom' ? 'blast_furnace_top' : face === 'front' ? 'blast_furnace_front' : 'blast_furnace_side';
  if (type === 'bell') return face === 'top' ? 'bell_top' : face === 'bottom' ? 'bell_bottom' : 'bell_side';
  if (type === 'grindstone') return face === 'top' || face === 'bottom' ? 'grindstone_round' : 'grindstone_side';
  if (type === 'white_carpet' || type === 'white_wall_banner') return 'white_wool';
  if (type === 'light_gray_carpet') return 'light_gray_wool';
  if (type.endsWith('_wall')) return textureName(type.replace(/_wall$/, ''), face);
  if (type === 'crafting_table') return face === 'top' ? 'crafting_table_top' : face === 'bottom' ? 'oak_planks' : face === 'front' ? 'crafting_table_front' : 'crafting_table_side';
  if (type === 'furnace') return face === 'top' || face === 'bottom' ? 'furnace_top' : face === 'front' ? 'furnace_front' : 'furnace_side';
  if (type === 'chest' || type === 'red_bed') return null;
  if (type === 'grass_block') return face === 'top' ? 'grass_block_top' : face === 'bottom' ? 'dirt' : 'grass_block_side';
  if (type === 'snow_block') return 'snow';
  if (type === 'powder_snow') return 'powder_snow';
  if (type === 'bamboo_block' || type === 'stripped_bamboo_block') {
    const name = face === 'side' ? type : `${type}_top`;
    if (availableTextures.has(name)) return name;
  }
  if ((type.endsWith('_log') || type.endsWith('_stem') || type.endsWith('_hyphae')) && face !== 'side' && availableTextures.has(`${type}_top`)) return `${type}_top`;
  if (type.endsWith('_wood')) {
    const log = type.replace(/_wood$/, '_log');
    if (availableTextures.has(log)) return log;
  }
  if (availableTextures.has(type)) return type;
  const woodVariant = type.match(/^(.*)_(stairs|slab|fence|fence_gate|button|pressure_plate|sign|hanging_sign)$/);
  if (woodVariant && availableTextures.has(`${woodVariant[1]}_planks`)) return `${woodVariant[1]}_planks`;
  const candidates = [`${type}_side`, `${type}_top`, `${type}_bottom`, type.replace(/_stairs$|_slab$/, '')];
  return candidates.find((name) => availableTextures.has(name)) || null;
}

function officialTexture(name) {
  if (!name) return null;
  if (!textureCache.has(name)) {
    const texture = textureLoader.load(assetUrl(`textures/block/${name}.png`));
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestMipmapNearestFilter;
    texture.colorSpace = THREE.SRGBColorSpace;
    if (name === 'water_still') { texture.repeat.y = 1 / 32; texture.offset.y = 31 / 32; }
    textureCache.set(name, texture);
  }
  return textureCache.get(name);
}

function materialFor(type) {
  if (materials[type]) return materials[type];
  const block = BLOCKS[type] || BLOCKS.stone;
  const makeFace = (face) => {
    const name = textureName(type, face);
    return new THREE.MeshLambertMaterial({
      map: officialTexture(name) || pixelTexture(block.color, [block.accent, block.color, '#d6d0bd'], null, type, face),
      color: type === 'water' ? 0x4d80d5 : (type === 'grass_block' && face === 'top') || (type.endsWith('_leaves') && !type.startsWith('cherry') && !type.startsWith('pale_oak')) ? 0x83bb52 : 0xffffff,
      transparent: block.transparent || type.endsWith('_leaves'),
      opacity: type === 'water' ? .7 : 1,
      alphaTest: block.transparent || type.endsWith('_leaves') ? .1 : 0,
    });
  };
  const side = makeFace('side');
  materials[type] = [side, side, makeFace('top'), makeFace('bottom'), side, ['furnace', 'blast_furnace', 'crafting_table'].includes(type) ? makeFace('front') : side];
  return materials[type];
}

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const slabGeometry = new THREE.BoxGeometry(1, .5, 1);
// A Minecraft stair is two rectangular steps: a full lower half and a raised back half.
// Joining real boxes avoids the warped, sideways silhouette made by the old extrusion.
const lowerStair = new THREE.BoxGeometry(1, .5, 1);
lowerStair.translate(0, -.25, 0);
const upperStair = new THREE.BoxGeometry(1, .5, .5);
upperStair.translate(0, .25, .25);
const stairGeometry = mergeGeometries([lowerStair, upperStair], false);
const thinGeometry = new THREE.BoxGeometry(1, 1, .1875);
const postGeometry = new THREE.BoxGeometry(.25, 1, .25);
const plateGeometry = new THREE.BoxGeometry(.75, .125, .75);
const buttonGeometry = new THREE.BoxGeometry(.25, .25, .125);
function blockModel(type) {
  if (type.endsWith('_slab')) return { geometry: slabGeometry, offset: -.25 };
  if (type.endsWith('_stairs')) return { geometry: stairGeometry, offset: 0 };
  if (type.endsWith('_door') || type.endsWith('_trapdoor') || type.endsWith('_sign') || type.endsWith('_hanging_sign')) return { geometry: thinGeometry, offset: 0 };
  if (type.endsWith('_fence') || type.endsWith('_fence_gate')) return { geometry: postGeometry, offset: 0 };
  if (type.endsWith('_pressure_plate') || type.endsWith('_carpet')) return { geometry: plateGeometry, offset: -.4375 };
  if (type.endsWith('_wall')) return { geometry: postGeometry, offset: 0 };
  if (type.endsWith('_button')) return { geometry: buttonGeometry, offset: 0 };
  return { geometry: cubeGeometry, offset: 0 };
}
// These models use the original entity texture atlases, cropped per face.
function atlasGeometry(size, faces) {
  const geometry = new THREE.BoxGeometry(...size);
  const uv = geometry.attributes.uv;
  faces.forEach(([x, y, w, h], face) => {
    [[x, y], [x + w, y], [x, y + h], [x + w, y + h]].forEach(([u, v], i) => uv.setXY(face * 4 + i, u / 64, 1 - v / 64));
  });
  return geometry;
}
const chestGeometry = atlasGeometry([.875, .875, .875], [[0,33,14,10],[28,33,14,10],[14,19,14,14],[28,19,14,14],[42,33,14,10],[14,33,14,10]]);
const bedFootGeometry = atlasGeometry([1, .5625, 1], [[0,28,6,16],[22,28,6,16],[6,28,16,16],[22,28,16,16],[6,44,16,6],[6,44,16,6]]);
const bedHeadGeometry = atlasGeometry([1, .5625, 1], [[0,6,6,16],[22,6,6,16],[6,6,16,16],[22,6,16,16],[6,22,16,6],[6,22,16,6]]);
function entityMaterial(path) {
  const texture = textureLoader.load(assetUrl(`textures/entity/${path}`));
  texture.magFilter = THREE.NearestFilter; texture.minFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshLambertMaterial({ map: texture });
}
const chestMaterial = entityMaterial('chest/normal.png');
const bedMaterial = entityMaterial('bed/red.png');
const worldGroup = new THREE.Group();
scene.add(worldGroup);
const blocks = new Map();
const sourceWater = new Set();
const waterLevels = new Map();
const blockOrientations = new Map();
const edits = new Map();
const meshes = [];
const CHUNK = 8;
let renderDistance = 4;
let lastChunk = '';
let activeBounds = { minX: -32, maxX: 40, minZ: -32, maxZ: 40 };

const blockKey = (x, y, z) => `${x},${y},${z}`;
const hash = (x, z) => {
  let n = x * 374761393 + z * 668265263;
  n = (n ^ (n >> 13)) * 1274126177;
  return ((n ^ (n >> 16)) >>> 0) / 4294967295;
};

const BIOMES = {
  plains: { label: 'Plains', surface: 'grass_block', soil: 'dirt', sky: 0x9bb8c5, fog: 0x9bb8c5 },
  forest: { label: 'Oak Forest', surface: 'grass_block', soil: 'dirt', sky: 0x88aeb1, fog: 0x88aeb1 },
  savanna: { label: 'Savanna', surface: 'grass_block', soil: 'coarse_dirt', sky: 0xb9c29a, fog: 0xb9c29a },
  jungle: { label: 'Jungle', surface: 'grass_block', soil: 'dirt', sky: 0x78a889, fog: 0x78a889 },
  swamp: { label: 'Swamp', surface: 'grass_block', soil: 'mud', sky: 0x718b73, fog: 0x718b73 },
  badlands: { label: 'Badlands', surface: 'red_sand', soil: 'red_sand', sky: 0xc5ac8e, fog: 0xc5ac8e },
  desert: { label: 'Desert', surface: 'sand', soil: 'sand', sky: 0xb9c7c0, fog: 0xc8bea0 },
  taiga: { label: 'Taiga', surface: 'podzol', soil: 'dirt', sky: 0x849fa8, fog: 0x849fa8 },
  snowy: { label: 'Snowy Peaks', surface: 'snow_block', soil: 'stone', sky: 0xb8cad2, fog: 0xc5d2d5 },
};

function biomeAt(x, z) {
  const climate = Math.sin(x * .017) + Math.cos(z * .019) + Math.sin((x - z) * .009);
  const moisture = Math.sin((x + 40) * .027) - Math.cos((z - 20) * .023);
  if (climate > 1.35) return 'snowy';
  if (climate < -1.15) return 'badlands';
  if (climate < -.82) return 'desert';
  if (climate > .85 && moisture < -.28) return 'savanna';
  if (climate > .52 && moisture > .62) return 'jungle';
  if (moisture < -.9) return 'swamp';
  if (moisture > .72) return 'forest';
  if (moisture < -.7) return 'taiga';
  return 'plains';
}

function terrainHeight(x, z) {
  const biome = biomeAt(x, z);
  const rolling = Math.sin(x * .13) * 1.35 + Math.cos(z * .11) * 1.15 + Math.sin((x + z) * .055) * 1.35;
  if (biome === 'desert' || biome === 'badlands') return Math.floor(2.5 + rolling * .48);
  if (biome === 'savanna') return Math.floor(4 + rolling * .72);
  if (biome === 'jungle') return Math.floor(4 + rolling * .9);
  if (biome === 'swamp') return Math.floor(1 + rolling * .32);
  if (biome === 'snowy') return Math.floor(5 + rolling * 1.35 + Math.abs(Math.sin(x * .037) * 2.2));
  if (biome === 'taiga') return Math.floor(3.5 + rolling * .8);
  return Math.floor(3 + rolling);
}

function generatedType(x, y, z) {
  const h = terrainHeight(x, z);
  if (y > h || y < -16) return null;
  if (y === -16) return 'bedrock';
  const biome = BIOMES[biomeAt(x, z)];
  if (y === h) return biome.surface;
  if (y >= h - 2) return biome.soil;
  const ore = hash(x * 17 + y * 31, z * 19 - y * 23);
  if (ore > .985) return y < -7 ? 'diamond_ore' : 'gold_ore';
  if (ore > .96) return y < -4 ? 'redstone_ore' : 'iron_ore';
  if (ore > .92) return 'coal_ore';
  if (ore > .90) return 'copper_ore';
  return 'stone';
}

function getBlock(x, y, z) {
  const key = blockKey(x, y, z);
  if (edits.has(key)) return edits.get(key);
  return blocks.get(key) || null;
}

function setGenerated(x, y, z, type) {
  const key = blockKey(x, y, z);
  if (!edits.has(key)) blocks.set(key, type);
}

function placeWaterfall(x, z) {
  const h = terrainHeight(x, z);
  // A source block above an open column demonstrates gravity-driven water flow.
  for (let y = h + 1; y <= h + 6; y++) setGenerated(x, y, z, null);
  for (let ox = -1; ox <= 1; ox++) for (let oz = -1; oz <= 1; oz++) if (ox || oz) setGenerated(x + ox, h + 5, z + oz, 'stone');
  setGenerated(x, h + 6, z, 'water');
  sourceWater.add(blockKey(x, h + 6, z));
}

function placeTree(x, z, biome) {
  const h = terrainHeight(x, z);
  const family = biome === 'taiga' || biome === 'snowy' ? 'spruce' : biome === 'forest' && hash(x + 9, z - 4) > .82 ? 'birch' : 'oak';
  const trunkHeight = family === 'spruce' ? 5 : 4;
  for (let y = h + 1; y <= h + trunkHeight; y++) setGenerated(x, y, z, `${family}_log`);
  if (family === 'spruce') {
    for (let oy = 2; oy <= 5; oy++) {
      const radius = oy === 5 ? 0 : oy % 2 ? 1 : 2;
      for (let ox = -radius; ox <= radius; ox++) for (let oz = -radius; oz <= radius; oz++) {
        if (Math.abs(ox) + Math.abs(oz) <= radius + 1 && (ox || oz || oy === 5)) setGenerated(x + ox, h + oy, z + oz, 'spruce_leaves');
      }
    }
    return;
  }
  for (let ox = -2; ox <= 2; ox++) for (let oz = -2; oz <= 2; oz++) for (let oy = 3; oy <= 5; oy++) {
    if ((ox || oz || oy > trunkHeight) && Math.abs(ox) + Math.abs(oz) + Math.max(0, oy - 4) < 4) setGenerated(x + ox, h + oy, z + oz, `${family}_leaves`);
  }
}

function placeStructure(x, z, biome) {
  const h = terrainHeight(x, z);
  // Clear trees and uneven terrain inside the building's footprint.
  for (let ox = -3; ox <= 3; ox++) for (let oz = -2; oz <= 2; oz++) {
    for (let y = h - 2; y <= h; y++) setGenerated(x + ox, y, z + oz, biome === 'desert' ? 'sand' : 'cobblestone');
    for (let y = h + 1; y <= h + 7; y++) setGenerated(x + ox, y, z + oz, null);
  }
  if (biome === 'desert') {
    for (let ox = -2; ox <= 2; ox++) for (let oz = -2; oz <= 2; oz++) {
      setGenerated(x + ox, h, z + oz, 'sand');
      if (Math.abs(ox) === 2 || Math.abs(oz) === 2) setGenerated(x + ox, h + 1, z + oz, 'smooth_quartz');
    }
    for (let oy = 2; oy <= 4; oy++) for (const [ox, oz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) setGenerated(x + ox, h + oy, z + oz, 'smooth_quartz');
    for (let ox = -2; ox <= 2; ox++) for (let oz = -2; oz <= 2; oz++) if (Math.abs(ox) + Math.abs(oz) < 4) setGenerated(x + ox, h + 5, z + oz, 'red_sand');
    return;
  }

  if (biome === 'snowy') {
    for (let oy = 1; oy <= 5; oy++) for (let ox = -2; ox <= 2; ox++) for (let oz = -2; oz <= 2; oz++) {
      if (Math.abs(ox) === 2 || Math.abs(oz) === 2) setGenerated(x + ox, h + oy, z + oz, oy === 5 ? 'snow_block' : 'cobblestone');
    }
    for (let oy = 1; oy <= 2; oy++) setGenerated(x, h + oy, z - 2, null);
    return;
  }

  const wood = biome === 'taiga' ? 'spruce' : 'oak';
  for (let ox = -3; ox <= 3; ox++) for (let oz = -2; oz <= 2; oz++) {
    setGenerated(x + ox, h, z + oz, 'cobblestone');
    for (let oy = 1; oy <= 3; oy++) {
      const wall = Math.abs(ox) === 3 || Math.abs(oz) === 2;
      const doorway = oz === -2 && ox === 0 && oy < 3;
      const window = oy === 2 && ((Math.abs(ox) === 3 && oz === 0) || (Math.abs(oz) === 2 && Math.abs(ox) === 2));
      if (wall && !doorway && !window) setGenerated(x + ox, h + oy, z + oz, `${wood}_planks`);
      if (window) setGenerated(x + ox, h + oy, z + oz, 'glass');
    }
  }
  setGenerated(x - 2, h + 1, z + 1, 'chest');
  setGenerated(x - 1, h + 1, z + 1, 'crafting_table');
  setGenerated(x + 1, h + 1, z + 1, 'furnace');
  setGenerated(x + 2, h + 1, z + 1, 'red_bed');
  setGenerated(x + 2, h + 1, z, 'red_bed_head');
  for (let ox = -4; ox <= 4; ox++) for (let oz = -3; oz <= 3; oz++) {
    const roofY = h + 4 + Math.max(0, 2 - Math.abs(oz));
    setGenerated(x + ox, roofY, z + oz, 'bricks');
  }
}

function placeWell(x, z) {
  const h = terrainHeight(x, z);
  for (let ox = -2; ox <= 2; ox++) for (let oz = -2; oz <= 2; oz++) {
    for (let y = h - 2; y <= h; y++) setGenerated(x + ox, y, z + oz, 'cobblestone');
    for (let y = h + 1; y <= h + 6; y++) setGenerated(x + ox, y, z + oz, null);
    if (Math.abs(ox) === 2 || Math.abs(oz) === 2) setGenerated(x + ox, h + 1, z + oz, 'stone_bricks');
    if (Math.abs(ox) === 2 && Math.abs(oz) === 2) for (let y = 2; y <= 4; y++) setGenerated(x + ox, h + y, z + oz, 'oak_log');
    setGenerated(x + ox, h + 5, z + oz, 'oak_planks');
  }
  for (let ox = -1; ox <= 1; ox++) for (let oz = -1; oz <= 1; oz++) setGenerated(x + ox, h + 1, z + oz, 'water');
}

function placeRuins(x, z) {
  const h = terrainHeight(x, z);
  for (let ox = -3; ox <= 3; ox++) for (let oz = -3; oz <= 3; oz++) {
    for (let y = h - 2; y <= h; y++) setGenerated(x + ox, y, z + oz, 'stone_bricks');
    for (let y = h + 1; y <= h + 5; y++) setGenerated(x + ox, y, z + oz, null);
    if (Math.abs(ox) === 3 && Math.abs(oz) === 3) {
      const height = 2 + Math.floor(hash(x + ox, z + oz) * 3);
      for (let y = 1; y <= height; y++) setGenerated(x + ox, h + y, z + oz, y === 1 ? 'mossy_stone_bricks' : 'stone_bricks');
    }
  }
}

function clearFootprint(x, z, radius, height = 12) {
  // Legacy structures use this height helper too. Never erase natural terrain here.
  return terrainHeight(x, z);
}

// Structure layout registry: every placed building reserves its footprint (plus a
// safety gap) so later structures search for free ground instead of growing into
// each other. Rebuilt on each generateWorld() call, so generation stays deterministic.
const placedStructures = [];
const STRUCTURE_GAP = 3;
const VILLAGE_WIDTH = 50;
const VILLAGE_DEPTH = 50;
const LEGACY_STRUCTURE_AREAS = {
  ruins: [10, 10],
  well: [8, 8],
  stronghold: [14, 14],
  pyramid: [16, 16],
  jungle_temple: [14, 14],
  swamp_hut: [10, 10],
};

function structureArea(x, z, width, depth, padding) {
  return {
    minX: x - width / 2 - padding,
    maxX: x + width / 2 + padding,
    minZ: z - depth / 2 - padding,
    maxZ: z + depth / 2 + padding,
  };
}

function isStructureAreaFree(x, z, width, depth, padding = STRUCTURE_GAP) {
  const area = structureArea(x, z, width, depth, padding);
  return !placedStructures.some((other) =>
    area.minX < other.maxX && area.maxX > other.minX && area.minZ < other.maxZ && area.maxZ > other.minZ);
}

function reserveStructureArea(x, z, width, depth, padding = 0) {
  placedStructures.push(structureArea(x, z, width, depth, padding));
}

// Find the closest ground of the right kind that is not already inside a structure
// plot. Searching outward is what lets a building relocate instead of crossing one.
function findFreeStructureSite(x, z, width, depth, radius, isWater, search) {
  for (let distance = 0; distance <= search; distance += 2) {
    for (let ox = -distance; ox <= distance; ox += 2) for (let oz = -distance; oz <= distance; oz += 2) {
      if (Math.max(Math.abs(ox), Math.abs(oz)) !== distance) continue;
      const sx = x + ox, sz = z + oz;
      const groundOk = isWater
        ? hasNaturalWater(sx, sz, Math.min(radius, 4))
        : hasNaturalLand(sx, sz, Math.min(radius, 6), 2);
      if (!groundOk) continue;
      if (!isStructureAreaFree(sx, sz, width, depth)) continue;
      return [sx, sz];
    }
  }
  return null;
}

function placeTemplate(name, x, z, baseY = null) {
  const template = templates[name];
  if (!template) return false;
  const [width, , depth] = template.size;
  const radius = Math.ceil(Math.max(width, depth) / 2);
  const isVillagePart = name.startsWith('village_');
  if (!isVillagePart) {
    // Terrain is never levelled: the building anchors to whatever surface exists at
    // its final site, and the site must also be free of other structures' plots.
    const isWater = name === 'shipwreck';
    const site = findFreeStructureSite(x, z, width, depth, radius, isWater, isWater ? 28 : 14);
    if (!site) return false;
    [x, z] = site;
  }
  const h = baseY ?? terrainHeight(x, z);
  // Preserve naturally generated terrain. Structures add their own blocks only;
  // they never level, clear, or build a platform under the surrounding land.
  for (const [tx, ty, tz, type, rotation = 0] of template.blocks) {
    const bx = x + tx - Math.floor(width / 2), by = h + ty + 1, bz = z + tz - Math.floor(depth / 2);
    setGenerated(bx, by, bz, type);
    if (rotation) blockOrientations.set(blockKey(bx, by, bz), rotation);
  }
  if (!isVillagePart) reserveStructureArea(x, z, width, depth);
  return true;
}

function hasNaturalLand(x, z, radius = 5, allowedVariation = 2) {
  let low = Infinity;
  let high = -Infinity;
  for (let ox = -radius; ox <= radius; ox++) for (let oz = -radius; oz <= radius; oz++) {
    const h = terrainHeight(x + ox, z + oz);
    low = Math.min(low, h); high = Math.max(high, h);
  }
  return low > 1 && high - low <= allowedVariation;
}

function hasNaturalWater(x, z, radius = 4) {
  for (let ox = -radius; ox <= radius; ox++) for (let oz = -radius; oz <= radius; oz++) {
    if (terrainHeight(x + ox, z + oz) >= 1) return false;
  }
  return true;
}

function findNaturalLandSite(x, z, radius = 5, search = 12) {
  for (let distance = 0; distance <= search; distance += 2) {
    for (let ox = -distance; ox <= distance; ox += 2) for (let oz = -distance; oz <= distance; oz += 2) {
      if (Math.max(Math.abs(ox), Math.abs(oz)) !== distance) continue;
      if (hasNaturalLand(x + ox, z + oz, radius)) return [x + ox, z + oz];
    }
  }
  return null;
}

function findNaturalWaterSite(x, z, radius = 4, search = 18) {
  for (let distance = 0; distance <= search; distance += 2) {
    for (let ox = -distance; ox <= distance; ox += 2) for (let oz = -distance; oz <= distance; oz += 2) {
      if (Math.max(Math.abs(ox), Math.abs(oz)) !== distance) continue;
      if (hasNaturalWater(x + ox, z + oz, radius)) return [x + ox, z + oz];
    }
  }
  return null;
}

function placeDesertPyramid(x, z) {
  const h = clearFootprint(x, z, 6, 10);
  for (let level = 0; level < 5; level++) for (let ox = -6 + level; ox <= 6 - level; ox++) for (let oz = -6 + level; oz <= 6 - level; oz++) {
    if (level === 0 || Math.abs(ox) === 6 - level || Math.abs(oz) === 6 - level) setGenerated(x + ox, h + level + 1, z + oz, level === 2 && (Math.abs(ox) + Math.abs(oz) < 2) ? 'red_sand' : 'sand');
  }
}
function placeIgloo(x, z) {
  if (templates.igloo) return placeTemplate('igloo', x, z);
  const h = clearFootprint(x, z, 4, 7);
  for (let oy = 1; oy <= 5; oy++) for (let ox = -3; ox <= 3; ox++) for (let oz = -3; oz <= 3; oz++) {
    const radius = Math.hypot(ox, oz, oy - 2);
    if (radius > 2.8 && radius < 3.7) setGenerated(x + ox, h + oy, z + oz, 'snow_block');
  }
  setGenerated(x, h + 1, z - 3, null); setGenerated(x, h + 2, z - 3, null);
  setGenerated(x, h + 1, z, 'red_bed'); setGenerated(x, h + 1, z - 1, 'red_bed_head');
}
function placeJungleTemple(x, z) {
  const h = clearFootprint(x, z, 5, 9);
  for (let ox = -5; ox <= 5; ox++) for (let oz = -5; oz <= 5; oz++) for (let oy = 1; oy <= 4; oy++) {
    if (Math.abs(ox) === 5 || Math.abs(oz) === 5 || oy === 4) setGenerated(x + ox, h + oy, z + oz, (ox + oz + oy) % 3 ? 'mossy_cobblestone' : 'stone_bricks');
  }
  for (let oy = 1; oy <= 3; oy++) { setGenerated(x, h + oy, z - 5, null); }
  setGenerated(x, h + 1, z + 2, 'chest');
}
function placeOutpost(x, z) {
  if (templates.outpost) return placeTemplate('outpost', x, z);
  const h = clearFootprint(x, z, 4, 14);
  for (const [ox, oz] of [[-3,-3],[-3,3],[3,-3],[3,3]]) for (let oy = 1; oy <= 10; oy++) setGenerated(x + ox, h + oy, z + oz, 'oak_log');
  for (let ox = -4; ox <= 4; ox++) for (let oz = -4; oz <= 4; oz++) if (Math.abs(ox) === 4 || Math.abs(oz) === 4) setGenerated(x + ox, h + 8, z + oz, 'oak_planks');
  for (let ox = -3; ox <= 3; ox++) for (let oz = -3; oz <= 3; oz++) setGenerated(x + ox, h + 10, z + oz, 'oak_planks');
  setGenerated(x, h + 1, z, 'chest');
}
function placeRuinedPortal(x, z) {
  if (templates.portal) return placeTemplate('portal', x, z);
  const h = clearFootprint(x, z, 3, 8);
  for (let oy = 1; oy <= 5; oy++) for (const ox of [-2, 2]) if (!(oy === 4 && ox === 2)) setGenerated(x + ox, h + oy, z, oy % 3 ? 'obsidian' : 'crying_obsidian');
  for (let ox = -2; ox <= 2; ox++) { setGenerated(x + ox, h + 1, z, 'obsidian'); setGenerated(x + ox, h + 6, z, 'obsidian'); }
  setGenerated(x + 1, h + 1, z + 1, 'chest');
}

function placeSwampHut(x, z) {
  const h = clearFootprint(x, z, 4, 9);
  for (const [ox, oz] of [[-3,-3],[-3,3],[3,-3],[3,3]]) for (let oy = 1; oy <= 5; oy++) setGenerated(x + ox, h + oy, z + oz, 'oak_log');
  for (let ox = -3; ox <= 3; ox++) for (let oz = -3; oz <= 3; oz++) if (Math.abs(ox) === 3 || Math.abs(oz) === 3 || Math.abs(ox) + Math.abs(oz) > 3) setGenerated(x + ox, h + 5, z + oz, 'oak_planks');
  setGenerated(x, h + 2, z, 'crafting_table');
}
function placeShipwreck(x, z) {
  if (!hasNaturalWater(x, z)) return false;
  if (templates.shipwreck) return placeTemplate('shipwreck', x, z);
  const h = clearFootprint(x, z, 6, 6);
  for (let ox = -5; ox <= 5; ox++) for (let oz = -2; oz <= 2; oz++) if (Math.abs(oz) === 2 || (Math.abs(ox) > 3 && oz === 0)) setGenerated(x + ox, h + 1 + Math.max(0, Math.abs(ox) - 3), z + oz, 'oak_planks');
  for (let ox = -5; ox <= 5; ox++) setGenerated(x + ox, h + 3, z, 'oak_log');
  setGenerated(x, h + 2, z, 'chest');
}
function placeMansion(x, z) {
  if (templates.mansion) return placeTemplate('mansion', x, z);
  const h = clearFootprint(x, z, 8, 12);
  for (let oy = 1; oy <= 6; oy++) for (let ox = -8; ox <= 8; ox++) for (let oz = -6; oz <= 6; oz++) {
    if (Math.abs(ox) === 8 || Math.abs(oz) === 6 || oy === 6) setGenerated(x + ox, h + oy, z + oz, oy === 6 ? 'dark_oak_planks' : 'dark_oak_log');
  }
  for (let oy = 1; oy <= 2; oy++) setGenerated(x, h + oy, z - 6, null);
  setGenerated(x - 3, h + 1, z + 2, 'chest'); setGenerated(x + 3, h + 1, z + 2, 'chest');
}
function placeTrailRuins(x, z) {
  if (templates.trail) return placeTemplate('trail', x, z);
  const h = clearFootprint(x, z, 4, 5);
  for (let ox = -4; ox <= 4; ox++) for (let oz = -4; oz <= 4; oz++) if (hash(x + ox, z + oz) > .52) setGenerated(x + ox, h + 1 + Math.floor(hash(z + oz, x + ox) * 3), z + oz, (ox + oz) % 2 ? 'mud_bricks' : 'mossy_stone_bricks');
  setGenerated(x, h + 1, z, 'chest');
}
function placeStronghold(x, z) {
  const h = clearFootprint(x, z, 5, 7);
  for (let ox = -5; ox <= 5; ox++) for (let oz = -5; oz <= 5; oz++) for (let oy = 1; oy <= 4; oy++) if (Math.abs(ox) === 5 || Math.abs(oz) === 5 || oy === 4) setGenerated(x + ox, h + oy, z + oz, 'stone_bricks');
  for (let oy = 1; oy <= 2; oy++) setGenerated(x, h + oy, z - 5, null);
  setGenerated(x, h + 1, z, 'chest');
}
const villageLocations = [];

// Real village templates need room to sit flat, so look a little further than the
// immediate cell and prefer plains/forest ground (where the template village fits).
function findVillageSite(x, z, search = 20) {
  // Villages are wide (houses reach ~13 blocks from the centre), so a site is scored
  // by how flat its whole plot is and how much of it stays plains/forest. The best
  // candidate wins instead of the first one found, which keeps villages coherent
  // instead of half-buried in a neighbouring snow slope.
  const candidates = [];
  for (let dx = -search; dx <= search; dx += 4) for (let dz = -search; dz <= search; dz += 4) {
    const sx = x + dx, sz = z + dz;
    // Keep the spawn clearing open: players should start near a village, not inside one.
    if (Math.hypot(sx, sz) < 26) continue;
    const biome = biomeAt(sx, sz);
    if (biome !== 'plains' && biome !== 'forest') continue;
    if (!hasNaturalLand(sx, sz, 8, 3)) continue;
    if (!isStructureAreaFree(sx, sz, VILLAGE_WIDTH, VILLAGE_DEPTH, 4)) continue;
    // The village core (where the houses sit) must stay dry; water beyond the
    // houses' reach is fine and does not disqualify the site.
    if (!hasNaturalLand(sx, sz, 12, 99)) continue;
    let low = Infinity;
    let high = -Infinity;
    let mixed = 0;
    let samples = 0;
    for (let px = -20; px <= 20; px += 5) for (let pz = -20; pz <= 20; pz += 5) {
      const h = terrainHeight(sx + px, sz + pz);
      low = Math.min(low, h);
      high = Math.max(high, h);
      const plotBiome = biomeAt(sx + px, sz + pz);
      samples++;
      if (plotBiome !== 'plains' && plotBiome !== 'forest') mixed++;
    }
    candidates.push({
      x: sx, z: sz,
      score: (high - low) + (mixed / samples) * 4,
      distance: Math.hypot(dx, dz),
    });
  }
  if (!candidates.length) return null;
  candidates.sort((a, b) => a.score - b.score || a.distance - b.distance);
  return [candidates[0].x, candidates[0].z];
}

function placeVillage(x, z, biome) {
  const wantsTemplates = biome === 'plains' || biome === 'forest';
  const villageSite = findVillageSite(x, z, wantsTemplates ? 60 : 24);
  if (!villageSite) return false;
  [x, z] = villageSite;
  biome = biomeAt(x, z);
  // Reserve the whole village plot before the parts are placed; village_* templates
  // bypass the registry so they cannot conflict with their own reservation.
  reserveStructureArea(x, z, VILLAGE_WIDTH, VILLAGE_DEPTH, 4);
  villageLocations.push({ x, z });
  if (biome === 'plains' || biome === 'forest') {
    placeTemplate('village_fountain', x, z);
    placeTemplate('village_crossroad', x, z);
    placeTemplate('village_house', x + 11, z); placeTemplate('village_library', x - 11, z);
    placeTemplate('village_armorer', x, z + 12); placeTemplate('village_weaponsmith', x, z - 13);
    placeTemplate('village_butcher', x + 13, z + 12); placeTemplate('village_stable', x - 13, z - 12);
  } else {
    placeWell(x, z); placeStructure(x + 10, z, biome); placeStructure(x - 10, z, biome); placeStructure(x, z + 10, biome);
  }
  return true;
}

// Weighted structure mix. Every eligible cell rolls once; weights only decide which
// building appears, so no single type (previously the outpost fall-through) dominates.
const LAND_STRUCTURES = [
  ['ruins', 6], ['well', 5], ['outpost', 2], ['ruined_portal', 3], ['trail', 3], ['stronghold', 2], ['village', 1],
];
const BIOME_STRUCTURES = {
  desert: [['pyramid', 8]],
  snowy: [['igloo', 7]],
  forest: [['jungle_temple', 6], ['swamp_hut', 5]],
  taiga: [['mansion', 6]],
};

function pickStructure(biome, roll) {
  const options = [...LAND_STRUCTURES, ...(BIOME_STRUCTURES[biome] || [])];
  const total = options.reduce((sum, [, weight]) => sum + weight, 0);
  let pick = roll * total;
  for (const [kind, weight] of options) {
    pick -= weight;
    if (pick < 0) return kind;
  }
  return options[options.length - 1][0];
}

function placeStructureKind(kind, x, z, biome) {
  // Legacy (non-template) buildings reserve an approximate plot too.
  const area = LEGACY_STRUCTURE_AREAS[kind];
  if (area && !isStructureAreaFree(x, z, area[0], area[1])) return false;
  let placed = false;
  switch (kind) {
    case 'ruins': placeRuins(x, z); placed = true; break;
    case 'well': placeWell(x, z); placed = true; break;
    case 'outpost': placed = placeOutpost(x, z) !== false; break;
    case 'ruined_portal': placed = placeRuinedPortal(x, z) !== false; break;
    case 'trail': placed = placeTrailRuins(x, z) !== false; break;
    case 'stronghold': placeStronghold(x, z); placed = true; break;
    case 'village': placed = placeVillage(x, z, biome); break;
    case 'pyramid': placeDesertPyramid(x, z); placed = true; break;
    case 'igloo': placed = placeIgloo(x, z) !== false; break;
    case 'jungle_temple': placeJungleTemple(x, z); placed = true; break;
    case 'swamp_hut': placeSwampHut(x, z); placed = true; break;
    case 'mansion': placed = placeMansion(x, z) !== false; break;
  }
  if (placed && area) reserveStructureArea(x, z, area[0], area[1]);
  return placed;
}

function generateWorld(centerX, centerZ) {
  blocks.clear();
  sourceWater.clear();
  waterLevels.clear();
  blockOrientations.clear();
  villageLocations.length = 0;
  placedStructures.length = 0;
  const minX = (centerX - renderDistance) * CHUNK;
  const maxX = (centerX + renderDistance + 1) * CHUNK;
  const minZ = (centerZ - renderDistance) * CHUNK;
  const maxZ = (centerZ + renderDistance + 1) * CHUNK;
  activeBounds = { minX, maxX, minZ, maxZ };

  for (let x = minX; x < maxX; x++) {
    for (let z = minZ; z < maxZ; z++) {
      const h = terrainHeight(x, z);
      for (let y = -16; y <= h; y++) setGenerated(x, y, z, generatedType(x, y, z));
      if (h < 1) for (let y = h + 1; y <= 1; y++) setGenerated(x, y, z, 'water');

      const biome = biomeAt(x, z);
      const treeChance = biome === 'forest' ? .965 : biome === 'taiga' ? .972 : biome === 'plains' ? .991 : biome === 'snowy' ? .988 : 2;
      if (hash(x, z) > treeChance && h > 1 && Math.abs(x) + Math.abs(z) > 8) {
        placeTree(x, z, biome);
      }
    }
  }

  // Keep a reachable oak tree and flowing-water landmark near the starting point.
  if (minX <= 5 && maxX > 5 && minZ <= -4 && maxZ > -4) placeTree(5, -4, 'plains');
  if (minX <= 7 && maxX > 7 && minZ <= 5 && maxZ > 5) placeWaterfall(7, 5);

  // A structure trail near spawn makes real template layouts easy to find.
  if (minX - 16 <= 18 && maxX + 16 > 18 && minZ - 16 <= -14 && maxZ + 16 > -14) placeVillage(18, -14, 'plains');
  if (minX <= 28 && maxX > 28 && minZ <= 8 && maxZ > 8) placeOutpost(28, 8);
  if (minX <= -18 && maxX > -18 && minZ <= 14 && maxZ > 14) placeRuinedPortal(-18, 14);

  const minCellX = Math.floor((minX - 16) / 24);
  const maxCellX = Math.ceil((maxX + 16) / 24);
  const minCellZ = Math.floor((minZ - 16) / 24);
  const maxCellZ = Math.ceil((maxZ + 16) / 24);
  for (let cellX = minCellX; cellX <= maxCellX; cellX++) for (let cellZ = minCellZ; cellZ <= maxCellZ; cellZ++) {
    let x = cellX * 24 + Math.floor(hash(cellX, cellZ) * 8) - 4;
    let z = cellZ * 24 + Math.floor(hash(cellX + 51, cellZ - 23) * 8) - 4;
    // Keep the spawn showcase clear of scattered structures.
    if (Math.abs(x) + Math.abs(z) <= 38 || Math.hypot(x - 18, z + 14) <= 28) continue;

    // Open-water cells can hold a shipwreck; otherwise the cell may roll for a land building.
    if (hash(cellX + 137, cellZ - 91) < .06) {
      const waterSite = findNaturalWaterSite(x, z, 4, 40);
      if (waterSite) { placeShipwreck(...waterSite); continue; }
    }
    const selection = hash(cellX - 71, cellZ + 41);
    // Only a minority of cells hold a structure: the world should feel sparse, not
    // wallpapered, and the plot reservation below keeps neighbours from overlapping.
    if (selection > .32) continue;
    const landSite = findNaturalLandSite(x, z, 5, 12);
    if (!landSite) continue;
    [x, z] = landSite;
    const biome = biomeAt(x, z);
    placeStructureKind(pickStructure(biome, selection / .32), x, z, biome);
  }
  rebuildMeshes();
  rebuildMobs();
}

let nextWaterFlow = 0;
function flowWater(elapsed) {
  if (elapsed < nextWaterFlow || !inWorld || currentScreen !== null) return;
  nextWaterFlow = elapsed + .22;
  const px = Math.round(player.position.x), py = Math.round(player.position.y), pz = Math.round(player.position.z);
  let changed = false;
  const fill = (x, y, z, level) => {
    if (y < -15 || y > 24 || getBlock(x, y, z)) return false;
    const key = blockKey(x, y, z);
    edits.set(key, 'water'); waterLevels.set(key, level); changed = true;
    lanSend('edit', { key, block: 'water' });
    return true;
  };
  for (let x = px - 12; x <= px + 12; x++) for (let z = pz - 12; z <= pz + 12; z++) for (let y = py - 12; y <= py + 8; y++) {
    if (getBlock(x, y, z) !== 'water') continue;
    const key = blockKey(x, y, z);
    // Lakes, wells, and oceans stay still. Only waterfall sources and their water move.
    if (!sourceWater.has(key) && !waterLevels.has(key)) continue;
    const level = waterLevels.get(key) ?? (sourceWater.has(key) ? 0 : 7);
    if (!waterLevels.has(key)) waterLevels.set(key, level);
    // Water always falls first, then spreads outward up to seven blocks from a source.
    if (fill(x, y - 1, z, level)) continue;
    if (level >= 7) continue;
    const below = getBlock(x, y - 1, z);
    if (below && below !== 'water') for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) fill(x + dx, y, z + dz, level + 1);
  }
  if (changed) rebuildMeshes();
}

function isExposed(x, y, z, type) {
  return [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].some(([dx, dy, dz]) => {
    const neighbor = getBlock(x + dx, y + dy, z + dz);
    return !neighbor || (neighbor !== type && BLOCKS[neighbor]?.transparent);
  });
}

function rebuildMeshes() {
  while (worldGroup.children.length) worldGroup.remove(worldGroup.children[0]);
  meshes.length = 0;
  const byType = {};
  for (const type of Object.keys(BLOCKS)) byType[type] = [];

  const all = new Map(blocks);
  for (const [key, value] of edits) {
    const [x, , z] = key.split(',').map(Number);
    if (x < activeBounds.minX || x >= activeBounds.maxX || z < activeBounds.minZ || z >= activeBounds.maxZ) continue;
    if (value) all.set(key, value); else all.delete(key);
  }
  for (const [key, type] of all) {
    const [x, y, z] = key.split(',').map(Number);
    if (isExposed(x, y, z, type) && byType[type]) byType[type].push({ x, y, z });
  }

  const matrix = new THREE.Matrix4();
  for (const [type, positions] of Object.entries(byType)) {
    if (!positions.length) continue;
    const specialBed = type === 'red_bed' || type === 'red_bed_head';
    const model = blockModel(type);
    const geometry = type === 'chest' ? chestGeometry : type === 'red_bed' ? bedFootGeometry : type === 'red_bed_head' ? bedHeadGeometry : model.geometry;
    const mesh = new THREE.InstancedMesh(geometry, type === 'chest' ? chestMaterial : specialBed ? bedMaterial : materialFor(type), positions.length);
    mesh.userData.positions = positions;
    mesh.userData.type = type;
    positions.forEach((p, i) => {
      matrix.makeRotationY(blockOrientations.get(blockKey(p.x, p.y, p.z)) || 0);
      matrix.setPosition(p.x, p.y - (specialBed ? .21875 : type === 'chest' ? .0625 : 0) + model.offset, p.z);
      mesh.setMatrixAt(i, matrix);
    });
    mesh.castShadow = type.includes('log') || type.includes('leaves');
    mesh.receiveShadow = true;
    mesh.instanceMatrix.needsUpdate = true;
    worldGroup.add(mesh);
    meshes.push(mesh);
  }
}

const player = {
  position: new THREE.Vector3(0, terrainHeight(0, 0) + .8, 0),
  velocity: new THREE.Vector3(),
  yaw: 0,
  pitch: 0,
  grounded: false,
  health: 20,
  hunger: 20,
  xp: 0,
  level: 1,
  highestY: 0,
  hurtCooldown: 0,
  hungerClock: 0,
  regenClock: 0,
};
camera.position.copy(player.position).add(new THREE.Vector3(0, 1.55, 0));

const lan = { source: null, id: null, name: 'Player', peers: new Map(), lastSent: 0 };
const peerGroup = new THREE.Group();
scene.add(peerGroup);

function lanSend(kind, data) {
  if (!lan.source || lan.source.readyState !== EventSource.OPEN) return;
  fetch(`/lan/${kind}?id=${encodeURIComponent(lan.id)}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).catch(() => showToast('Connection lost. Rejoin the shared world.'));
}

function closeLan() {
  if (lan.source) lan.source.close();
  lan.source = null; lan.id = null;
  peerGroup.clear(); lan.peers.clear();
}

function updatePeer(id, player) {
  if (id === lan.id) return;
  let peer = lan.peers.get(id);
  if (!peer) {
    peer = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(.52, .75, .28), new THREE.MeshLambertMaterial({ color: 0x299a9a }));
    const head = new THREE.Mesh(new THREE.BoxGeometry(.5, .5, .5), new THREE.MeshLambertMaterial({ color: 0xc88960 }));
    body.position.y = .95; head.position.y = 1.57;
    peer.add(body, head);
    for (const x of [-.14, .14]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(.2, .6, .24), new THREE.MeshLambertMaterial({ color: 0x334b87 })); leg.position.set(x, .3, 0); peer.add(leg); }
    lan.peers.set(id, peer); peerGroup.add(peer);
  }
  peer.position.fromArray(player.position); peer.rotation.y = player.yaw;
}

function joinLan() {
  closeLan();
  lan.name = document.querySelector('#lan-player-name').value.trim().slice(0, 16) || 'Player';
  lan.id = crypto.randomUUID?.() || `p-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  const source = new EventSource(`/lan/events?id=${encodeURIComponent(lan.id)}`);
  lan.source = source;
  let joined = false;
  showScreen('connecting');
  document.querySelector('#connection-title').textContent = 'Joining shared world...';
  document.querySelector('#connection-detail').textContent = 'Connecting on your local network';
  source.onmessage = (event) => {
    if (lan.source !== source) return;
    const data = JSON.parse(event.data);
    if (data.type === 'snapshot') {
      if (!joined) {
        let world = worlds.find((item) => item.id === 'shared-local-world');
        if (!world) { world = { id: 'shared-local-world', name: 'Shared World', mode: 'survival', difficulty: 'peaceful', peacefulDefaultApplied: true, created: Date.now(), edits: [] }; worlds.push(world); }
        enterWorld(world.id); joined = true;
      }
      edits.clear(); for (const [key, value] of data.edits) edits.set(key, value);
      lastChunk = ''; peerGroup.clear(); lan.peers.clear();
      for (const [id, player] of data.players) updatePeer(id, player);
      showToast('Joined the shared world');
    } else if (data.type === 'edit') {
      edits.set(data.key, data.block); rebuildMeshes(); updateTarget();
    } else if (data.type === 'move') updatePeer(data.id, data.player);
    else if (data.type === 'leave') { const peer = lan.peers.get(data.id); if (peer) peerGroup.remove(peer); lan.peers.delete(data.id); }
  };
  source.onerror = () => {
    if (!joined) { closeLan(); document.querySelector('#connection-title').textContent = 'Could not join'; document.querySelector('#connection-detail').textContent = 'Open the host’s game link while on the same Wi-Fi.'; }
    else showToast('Connection lost; reconnecting…');
  };
}

const keys = new Set();
let locked = false;
let lastCreativeJump = 0;
let selectedBlock = 'grass_block';

function activeWorld() {
  return worlds?.find((world) => world.id === currentWorldId) || null;
}

function isSurvivalMode() {
  return activeWorld()?.mode !== 'creative';
}

function isPeaceful() { return activeWorld()?.difficulty === 'peaceful'; }

function takeDamage(amount, source = 'the world') {
  if (!inWorld || !isSurvivalMode() || player.hurtCooldown > 0) return;
  player.health = Math.max(0, player.health - amount);
  player.hurtCooldown = .65;
  canvas.classList.remove('hurt');
  void canvas.offsetWidth;
  canvas.classList.add('hurt');
  renderVitals();
  if (player.health <= 0) {
    showToast(`You were defeated by ${source}. Respawning…`);
    const spawn = activeWorld()?.spawn;
    const bed = activeWorld()?.spawnBed;
    if (spawn && bed && ['red_bed', 'red_bed_head'].includes(getBlock(...bed))) player.position.fromArray(spawn);
    else player.position.set(0, terrainHeight(0, 0) + .8, 0);
    player.velocity.set(0, 0, 0);
    player.health = 20;
    player.hunger = 20;
  }
}

function collides(position) {
  const minX = Math.floor(position.x - .3 + .5);
  const maxX = Math.floor(position.x + .3 + .5);
  const minY = Math.floor(position.y + .5);
  const maxY = Math.floor(position.y + 1.75 + .5);
  const minZ = Math.floor(position.z - .3 + .5);
  const maxZ = Math.floor(position.z + .3 + .5);
  for (let x = minX; x <= maxX; x++) for (let y = minY; y <= maxY; y++) for (let z = minZ; z <= maxZ; z++) {
    if (getBlock(x, y, z) && getBlock(x, y, z) !== 'water') return true;
  }
  return false;
}

function movePlayer(delta) {
  // Older saved worlds can leave the player inside newly generated terrain or a structure.
  if (collides(player.position)) {
    player.position.y = terrainHeight(Math.round(player.position.x), Math.round(player.position.z)) + .8;
    player.velocity.set(0, 0, 0);
  }
  const sprinting = (keys.has('ControlLeft') || keys.has('ControlRight')) && (!isSurvivalMode() || player.hunger > 3);
  const sneaking = keys.has('ShiftLeft') || keys.has('ShiftRight');
  player.sneaking = sneaking;
  const speed = sneaking ? 1.45 : sprinting ? 6.4 : 4.5;
  const forward = Number(keys.has('KeyW')) - Number(keys.has('KeyS'));
  const strafe = Number(keys.has('KeyD')) - Number(keys.has('KeyA'));
  const len = Math.hypot(forward, strafe) || 1;
  const sin = Math.sin(player.yaw);
  const cos = Math.cos(player.yaw);
  player.velocity.x = ((strafe / len) * cos - (forward / len) * sin) * speed;
  player.velocity.z = (-(forward / len) * cos - (strafe / len) * sin) * speed;
  if (player.flying && !isSurvivalMode()) {
    player.velocity.y = keys.has('Space') ? 5.5 : sneaking ? -5.5 : 0;
  } else {
    player.velocity.y -= 18 * delta;
  }

  if (keys.has('Space') && player.grounded && !player.flying) {
    player.velocity.y = 7;
    player.grounded = false;
  }

  for (const axis of ['x', 'z']) {
    const next = player.position.clone();
    next[axis] += player.velocity[axis] * delta;
    if (!collides(next)) {
      player.position[axis] = next[axis];
    } else if (player.grounded) {
      const step = next.clone();
      step.y += 1;
      if (!collides(step)) player.position.copy(step);
      else player.velocity[axis] = 0;
    } else {
      player.velocity[axis] = 0;
    }
  }

  const nextY = player.position.clone();
  nextY.y += player.velocity.y * delta;
  if (player.flying && !isSurvivalMode()) {
    player.position.y = nextY.y;
    player.grounded = false;
  } else if (!collides(nextY)) {
    player.position.y = nextY.y;
    player.grounded = false;
    player.highestY = Math.max(player.highestY, player.position.y);
  } else {
    if (player.velocity.y < 0) {
      if (!player.grounded) {
        const fallDistance = player.highestY - player.position.y;
        if (fallDistance > 3.4) takeDamage(Math.ceil(fallDistance - 3.4), 'a hard fall');
      }
      player.grounded = true;
      player.highestY = player.position.y;
    }
    player.velocity.y = 0;
  }
  if (isSurvivalMode() && !isPeaceful() && (forward || strafe)) {
    player.hungerClock += delta * (sprinting ? 2.4 : .65);
    if (player.hungerClock >= 18) {
      player.hunger = Math.max(0, player.hunger - 1);
      player.hungerClock = 0;
      renderVitals();
    }
  }
  if (player.position.y < -12) {
    takeDamage(20, 'the void');
  }
}

const raycaster = new THREE.Raycaster();
raycaster.far = 6;
const selectionBox = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1.012, 1.012, 1.012)),
  new THREE.LineBasicMaterial({ color: 0xf4f0e5, transparent: true, opacity: .92 })
);
selectionBox.visible = false;
scene.add(selectionBox);
let targeted = null;

function updateTarget() {
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const hit = raycaster.intersectObjects(meshes, false).find((intersection) => intersection.object.userData.type !== 'water');
  const label = document.querySelector('#block-label');
  if (!hit || hit.instanceId == null) {
    targeted = null;
    selectionBox.visible = false;
    label.classList.remove('visible');
    return;
  }
  const pos = hit.object.userData.positions[hit.instanceId];
  targeted = { ...pos, normal: hit.face.normal.clone(), type: hit.object.userData.type };
  selectionBox.position.set(pos.x, pos.y, pos.z);
  selectionBox.visible = true;
  const usable = ['chest', 'red_bed', 'red_bed_head', 'crafting_table', 'furnace'].includes(targeted.type);
  label.textContent = BLOCKS[targeted.type].label + (usable ? ' · E / right-click to use' : '');
  label.classList.add('visible');
}

let chestKey = null;
let furnaceOpen = false;
let craftingTableOpen = false;
const chestPanel = document.createElement('section');
chestPanel.className = 'creative-inventory';
chestPanel.innerHTML = `<div class="inventory-panel"><header class="inventory-header"><h2>Chest</h2><button class="inventory-close" type="button" aria-label="Close chest">×</button></header><p>Click an item to move one between your backpack and this chest.</p><h3>Chest</h3><div class="crafting-recipes" data-chest-items></div><h3>Backpack</h3><div class="crafting-recipes" data-backpack-items></div></div>`;
document.querySelector('#app').append(chestPanel);
function renderChest() {
  const contents = activeWorld().chests[chestKey];
  const draw = (entries, destination) => entries.filter(([, count]) => count > 0).map(([id, count]) => `<button type="button" data-transfer="${destination}" data-item="${escapeHtml(id)}">${escapeHtml(BLOCKS[id]?.label || id)} ×${count}</button>`).join('') || '<span>Empty</span>';
  chestPanel.querySelector('[data-chest-items]').innerHTML = draw(Object.entries(contents), 'backpack');
  chestPanel.querySelector('[data-backpack-items]').innerHTML = draw([...inventoryCounts.entries()], 'chest');
}
function closeChest() {
  if (!chestKey) return;
  chestKey = null; chestPanel.classList.remove('open'); inventoryOpen = false;
  saveCurrentWorld(); renderHotbar(); resumeGame();
}
chestPanel.addEventListener('click', (event) => {
  if (event.target.closest('.inventory-close')) return closeChest();
  const button = event.target.closest('[data-transfer]');
  if (!button) return;
  const id = button.dataset.item, contents = activeWorld().chests[chestKey];
  if (button.dataset.transfer === 'chest' && (inventoryCounts.get(id) || 0) > 0) {
    inventoryCounts.set(id, inventoryCounts.get(id) - 1); contents[id] = (contents[id] || 0) + 1;
  } else if (button.dataset.transfer === 'backpack' && contents[id] > 0) {
    contents[id]--; inventoryCounts.set(id, (inventoryCounts.get(id) || 0) + 1);
  }
  renderChest(); saveCurrentWorld();
});
const furnaceRecipes = [
  ['iron_ore', 'iron_ingot'], ['gold_ore', 'gold_ingot'], ['copper_ore', 'copper_ingot'],
  ['deepslate_iron_ore', 'iron_ingot'], ['deepslate_gold_ore', 'gold_ingot'], ['deepslate_copper_ore', 'copper_ingot'],
  ['cobblestone', 'stone'], ['stone', 'smooth_stone'],
];
const furnacePanel = document.createElement('section');
furnacePanel.className = 'creative-inventory';
furnacePanel.innerHTML = `<div class="station-window"><div class="station-art furnace-art"><span class="station-title">Furnace</span><span class="station-inventory-title">Inventory</span><button class="station-close" type="button" aria-label="Close furnace">×</button></div><div class="station-recipes"><p>Choose an item to smelt · 1 coal ore per item</p><div class="crafting-recipes" data-smelting></div></div></div>`;
document.querySelector('#app').append(furnacePanel);
function renderFurnace() {
  furnacePanel.querySelector('[data-smelting]').innerHTML = furnaceRecipes.map(([input, output], index) => {
    const available = !isSurvivalMode() || ((inventoryCounts.get(input) || 0) > 0 && (inventoryCounts.get('coal_ore') || 0) > 0);
    return `<button type="button" data-smelt="${index}" ${available ? '' : 'disabled'}>${escapeHtml(BLOCKS[input].label)} → ${escapeHtml(BLOCKS[output].label)}</button>`;
  }).join('');
}
function closeFurnace() {
  furnaceOpen = false; furnacePanel.classList.remove('open'); inventoryOpen = false;
  saveCurrentWorld(); renderHotbar(); resumeGame();
}
furnacePanel.addEventListener('click', (event) => {
  if (event.target.closest('.station-close')) return closeFurnace();
  const button = event.target.closest('[data-smelt]');
  if (!button) return;
  const recipe = furnaceRecipes[Number(button.dataset.smelt)];
  if (!recipe) return;
  const [input, output] = recipe;
  if (isSurvivalMode()) {
    if (!(inventoryCounts.get(input) > 0) || !(inventoryCounts.get('coal_ore') > 0)) return;
    inventoryCounts.set(input, inventoryCounts.get(input) - 1);
    inventoryCounts.set('coal_ore', inventoryCounts.get('coal_ore') - 1);
  }
  inventoryCounts.set(output, (inventoryCounts.get(output) || 0) + 1);
  saveCurrentWorld(); renderFurnace(); showToast(`Smelted ${BLOCKS[output].label}`);
});
function useTarget() {
  if (!targeted) return;
  if (targeted.type === 'crafting_table') { openCraftingTable(); return; }
  if (targeted.type === 'furnace') {
    furnaceOpen = true; inventoryOpen = true; suppressPause = Boolean(document.pointerLockElement); keys.clear();
    if (document.pointerLockElement) document.exitPointerLock();
    renderFurnace(); furnacePanel.classList.add('open'); return;
  }
  if (targeted.type === 'chest') {
    const world = activeWorld(); world.chests ||= {};
    chestKey = blockKey(targeted.x, targeted.y, targeted.z); world.chests[chestKey] ||= {};
    inventoryOpen = true; suppressPause = Boolean(document.pointerLockElement); keys.clear();
    if (document.pointerLockElement) document.exitPointerLock();
    renderChest(); chestPanel.classList.add('open');
  } else if (targeted.type === 'red_bed' || targeted.type === 'red_bed_head') {
    const footZ = targeted.z + (targeted.type === 'red_bed_head' ? 1 : 0);
    activeWorld().spawn = player.position.toArray();
    activeWorld().spawnBed = [targeted.x, targeted.y, footZ];
    const phase = worldTime % 240;
    if (phase >= 120) { worldTime += 240 - phase + 10; showToast('Good morning! Respawn point set.'); }
    else showToast('Respawn point set. You can sleep at night.');
    saveCurrentWorld();
  }
}

function editTarget(place) {
  if (!targeted) return;
  if (place) {
    if (isSurvivalMode() && (inventoryCounts.get(selectedBlock) || 0) <= 0) {
      showToast(`Mine ${BLOCKS[selectedBlock].label} before placing it.`);
      return;
    }
    const x = targeted.x + Math.round(targeted.normal.x);
    const y = targeted.y + Math.round(targeted.normal.y);
    const z = targeted.z + Math.round(targeted.normal.z);
    const probe = player.position.clone();
    const key = blockKey(x, y, z);
    const previous = edits.has(key) ? edits.get(key) : undefined;
    if (getBlock(x, y, z)) return showToast('There is already a block there.');
    if (selectedBlock === 'red_bed' && (getBlock(x, y, z - 1) || !getBlock(x, y - 1, z) || !getBlock(x, y - 1, z - 1))) return showToast('A bed needs two clear blocks on solid ground.');
    edits.set(key, selectedBlock);
    if (selectedBlock === 'red_bed') edits.set(blockKey(x, y, z - 1), 'red_bed_head');
    if (collides(probe)) {
      if (previous === undefined) edits.delete(key); else edits.set(key, previous);
      if (selectedBlock === 'red_bed') edits.delete(blockKey(x, y, z - 1));
      return;
    }
    if (isSurvivalMode()) inventoryCounts.set(selectedBlock, (inventoryCounts.get(selectedBlock) || 0) - 1);
    lanSend('edit', { key: blockKey(x, y, z), block: selectedBlock });
    if (selectedBlock === 'red_bed') lanSend('edit', { key: blockKey(x, y, z - 1), block: 'red_bed_head' });
  } else {
    if (targeted.type === 'water') return;
    if (targeted.type === 'bedrock') { showToast('Bedrock cannot be mined.'); return; }
    if (targeted.type === 'chest' && Object.values(activeWorld()?.chests?.[blockKey(targeted.x, targeted.y, targeted.z)] || {}).some(count => count > 0)) return showToast('Empty the chest before mining it.');
    if (targeted.type === 'red_bed' || targeted.type === 'red_bed_head') {
      const otherZ = targeted.z + (targeted.type === 'red_bed' ? -1 : 1);
      const otherKey = blockKey(targeted.x, targeted.y, otherZ);
      edits.set(otherKey, null); lanSend('edit', { key: otherKey, block: null });
    }
    edits.set(blockKey(targeted.x, targeted.y, targeted.z), null);
    lanSend('edit', { key: blockKey(targeted.x, targeted.y, targeted.z), block: null });
    if (isSurvivalMode()) {
      const collected = targeted.type === 'red_bed_head' ? 'red_bed' : targeted.type;
      inventoryCounts.set(collected, (inventoryCounts.get(collected) || 0) + 1);
      player.xp += 1;
      if (player.xp >= player.level * 8) {
        player.xp = 0;
        player.level += 1;
      }
    }
  }
  swingHand();
  renderHotbar();
  renderVitals();
  rebuildMeshes();
  updateTarget();
  saveCurrentWorld();
}

const hotbarBlocks = [
  'grass_block', 'dirt', 'stone', 'oak_planks', 'oak_log',
  'glass', 'bricks', 'diamond_block', 'redstone_block',
];
let selectedHotbarIndex = 0;
let inventoryOpen = false;
let inventoryCategory = 'All';
let offhandBlock = 'oak_log';
let handSwing = 0;
const inventoryCounts = new Map();
let foodCount = 0;

const handMaterial = new THREE.MeshBasicMaterial({ color: 0xb87a56 });
const sleeveMaterial = new THREE.MeshBasicMaterial({ color: 0x3f8f88 });
const viewModel = new THREE.Group();
viewModel.position.set(0, 0, -1);
camera.add(viewModel);

function makeArm(x, mirrored = false) {
  const group = new THREE.Group();
  const sleeve = new THREE.Mesh(new THREE.BoxGeometry(.24, .48, .24), sleeveMaterial);
  sleeve.position.y = -.08;
  const hand = new THREE.Mesh(new THREE.BoxGeometry(.23, .28, .23), handMaterial);
  hand.position.y = -.43;
  group.add(sleeve, hand);
  group.position.set(x, -.32, -.34);
  group.rotation.set(-.42, 0, mirrored ? -.22 : .22);
  return group;
}

const rightArm = makeArm(.62);
const leftArm = makeArm(-.62, true);
const mainHeld = new THREE.Mesh(new THREE.BoxGeometry(.24, .24, .24));
mainHeld.position.set(-.03, -.58, -.11);
mainHeld.rotation.set(.35, .55, 0);
rightArm.add(mainHeld);
const offHeld = new THREE.Mesh(new THREE.BoxGeometry(.2, .2, .2));
offHeld.position.set(.03, -.56, -.1);
offHeld.rotation.set(.25, -.5, 0);
leftArm.add(offHeld);
viewModel.add(rightArm, leftArm);

function heldMaterial(type) {
  const source = materialFor(type)[0];
  return new THREE.MeshBasicMaterial({
    map: source.map,
    color: 0xffffff,
    transparent: source.transparent,
    opacity: source.opacity,
    alphaTest: source.alphaTest,
  });
}

function updateHeldItems() {
  mainHeld.material = heldMaterial(selectedBlock);
  offHeld.material = heldMaterial(offhandBlock);
  const offhandIcon = document.querySelector('#offhand-icon');
  if (offhandIcon) {
    const block = BLOCKS[offhandBlock] || BLOCKS.stone;
    offhandIcon.setAttribute('style', swatchStyle(block));
  }
}

function swingHand() {
  handSwing = 1;
}

function swatchStyle(block) {
  const name = textureName(block.id);
  return `--block-color:${block.color};--block-accent:${block.accent}${name ? `;--block-image:url(${assetUrl(`textures/block/${name}.png`)})` : ''}`;
}

function renderVitals() {
  const survival = isSurvivalMode();
  const bars = document.querySelector('#survival-bars');
  bars?.classList.toggle('creative', !survival);
  const world = activeWorld();
  const mode = world?.mode || 'survival';
  const modeLabel = document.querySelector('#mode-label');
  if (modeLabel) modeLabel.textContent = `${mode.toUpperCase()} · ${(world?.difficulty || 'peaceful').toUpperCase()}`;
  const foodLabel = document.querySelector('#food-count');
  if (foodLabel) foodLabel.textContent = survival ? `Food: ${foodCount} · R to eat` : '';
  const inventoryHint = document.querySelector('#open-inventory');
  if (inventoryHint) inventoryHint.innerHTML = survival ? '<kbd>E</kbd> BACKPACK' : `<kbd>E</kbd> ${BLOCK_CATALOG.length} BLOCKS`;

  const health = document.querySelector('#health-bar');
  const hunger = document.querySelector('#hunger-bar');
  if (health) health.innerHTML = Array.from({ length: 10 }, (_, index) => {
    const value = player.health - index * 2;
    return `<i class="heart ${value <= 0 ? 'empty' : value === 1 ? 'half' : ''}">♥</i>`;
  }).join('');
  if (hunger) hunger.innerHTML = Array.from({ length: 10 }, (_, index) => {
    const value = player.hunger - index * 2;
    return `<i class="food ${value <= 0 ? 'empty' : value === 1 ? 'half' : ''}">◆</i>`;
  }).join('');
  const levelTarget = Math.max(1, player.level * 8);
  document.querySelector('#xp-fill')?.style.setProperty('width', `${player.xp / levelTarget * 100}%`);
  const level = document.querySelector('#xp-level');
  if (level) level.textContent = player.level;
}

const mobGroup = new THREE.Group();
scene.add(mobGroup);
let mobs = [];

const mobTextureLoader = new THREE.TextureLoader();
const mobMaterials = {};
for (const [name, file] of Object.entries({
  cow: 'cow/temperate_cow.png', pig: 'pig/temperate_pig.png',
  sheep: 'sheep/sheep.png', wool: 'sheep/sheep_wool.png',
  chicken: 'chicken/temperate_chicken.png', villager: 'villager/villager.png',
})) {
  const texture = mobTextureLoader.load(assetUrl(`textures/entity/${file}`));
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  mobMaterials[name] = new THREE.MeshLambertMaterial({ map: texture, transparent: name === 'wool', alphaTest: .1 });
}
mobMaterials.iron_golem = new THREE.MeshLambertMaterial({ color: 0xd7d5c8, flatShading: true });

// Minecraft's entity skins are cube nets; each part uses its own region of the skin.
function mobPart(material, dimensions, uv, textureHeight = 64) {
  const [w, h, d] = dimensions;
  const [u, v] = uv;
  const geometry = new THREE.BoxGeometry(w / 16, h / 16, d / 16);
  const coords = geometry.attributes.uv;
  const rectangles = [
    [u + d + w, v + d, d, h], [u, v + d, d, h],
    [u + d, v, w, d], [u + d + w, v, w, d],
    [u + 2 * d + w, v + d, w, h], [u + d, v + d, w, h],
  ];
  rectangles.forEach(([left, top, width, height], face) => {
    const x1 = left / 64, x2 = (left + width) / 64;
    const y1 = 1 - top / textureHeight, y2 = 1 - (top + height) / textureHeight;
    [[x1, y1], [x2, y1], [x1, y2], [x2, y2]].forEach(([x, y], i) => coords.setXY(face * 4 + i, x, y));
  });
  return new THREE.Mesh(geometry, mobMaterials[material]);
}

function createMob(type, x, z, groundY) {
  const mob = new THREE.Group();
  const legs = [];
  const height = type === 'chicken' || type === 'sheep' ? 32 : 64;
  function part(material, size, uv, position, textureHeight = height) {
    const mesh = mobPart(material, size, uv, textureHeight);
    mesh.position.set(...position);
    mob.add(mesh);
    return mesh;
  }
  function leg(material, size, uv, position) {
    const pivot = new THREE.Group();
    pivot.position.set(position[0], position[1] + size[1] / 32, position[2]);
    const mesh = mobPart(material, size, uv, height);
    mesh.position.y = -size[1] / 32;
    pivot.add(mesh); mob.add(pivot);
    legs.push(pivot);
  }
  if (type === 'iron_golem') {
    part(type, [18, 12, 6], [0, 0], [0, 1.5, 0]);
    part(type, [8, 10, 8], [0, 0], [0, 2.2, -.03]);
    for (const lx of [-.69, .69]) part(type, [4, 30, 6], [0, 0], [lx, 1.1, 0]);
    for (const lx of [-.22, .22]) leg(type, [6, 16, 5], [0, 0], [lx, .5, 0]);
  } else if (type === 'villager') {
    part(type, [8, 12, 6], [16, 20], [0, .75, 0]);
    part(type, [8, 10, 8], [0, 0], [0, 1.43, 0]);
    part(type, [2, 4, 2], [24, 0], [0, 1.36, -.31]);
    part(type, [8, 4, 4], [44, 22], [0, .91, -.25]);
    for (const lx of [-.125, .125]) leg(type, [4, 12, 4], [0, 22], [lx, .375, 0]);
  } else if (type === 'chicken') {
    part(type, [6, 8, 6], [0, 9], [0, .48, 0]);
    part(type, [4, 6, 3], [0, 0], [0, .85, -.20]);
    part(type, [4, 2, 2], [14, 0], [0, .79, -.35]);
    part(type, [2, 2, 2], [14, 4], [0, .67, -.35]);
    for (const lx of [-.14, .14]) leg(type, [3, 5, 3], [26, 0], [lx, .16, 0]);
    for (const lx of [-.22, .22]) part(type, [1, 4, 6], [24, 13], [lx, .5, 0]);
  } else {
    const cow = type === 'cow';
    const sheep = type === 'sheep';
    const bodySize = cow ? [12, 18, 10] : sheep ? [8, 16, 6] : [10, 16, 8];
    const body = part(sheep ? 'wool' : type, bodySize, cow ? [18, 4] : [28, 8], [0, cow ? .82 : .65, 0], sheep ? 32 : 64);
    body.rotation.x = Math.PI / 2;
    const headY = cow ? 1.125 : sheep ? .75 : .75;
    const headZ = cow ? -.6875 : sheep ? -.6875 : -.625;
    part(type, cow ? [8, 8, 6] : sheep ? [6, 6, 8] : [8, 8, 8], [0, 0], [0, headY, headZ]);
    if (type === 'pig') part(type, [4, 3, 1], [16, 16], [0, headY - .04, headZ - .28]);
    if (cow) {
      for (const lx of [-.22, .22]) part(type, [1, 3, 1], [22, 0], [lx, 1.32, headZ]);
      const udder = part(type, [4, 6, 1], [52, 0], [0, .49, .22]);
      udder.rotation.x = Math.PI / 2;
    }
    // A small wool cap leaves the sheep's eyes and muzzle visible.
    if (sheep) part('wool', [6, 2, 8], [0, 0], [0, headY + .22, headZ + .03], 32);
    const legHeight = cow ? 12 : 6;
    for (const lx of [-.22, .22]) for (const lz of [-.36, .36]) {
      leg(type, [4, legHeight, 4], [0, 16], [lx, legHeight / 32, lz]);
    }
  }
  const data = {
    type, health: 4, speed: .48,
    direction: hash(x, z) * Math.PI * 2,
    turnClock: 1 + hash(x + 5, z - 8) * 4,
    attackClock: 0, legs,
  };
  mob.userData.mob = data;
  mob.position.set(x, groundY, z);
  mob.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.userData.mobRoot = mob;
    }
  });
  mobGroup.add(mob);
  mobs.push(mob);
}

function spawnNearPlayer() {
  if (!inWorld || currentScreen !== null || inventoryOpen) return;
  const nearby = mobs.filter((mob) => mob.position.distanceTo(player.position) < 15).length;
  if (nearby >= 4) return;
  const animals = ['cow', 'pig', 'sheep', 'chicken'];
  let created = 0;
  // Check in front first, then to either side and behind, so animals are visible.
  for (const offset of [0, .65, -.65, 1.3, -1.3, 2.2, -2.2, Math.PI]) {
    const angle = player.yaw + offset;
    const distance = 5 + created * 1.5;
    const x = Math.round(player.position.x - Math.sin(angle) * distance);
    const z = Math.round(player.position.z - Math.cos(angle) * distance);
    const ground = findMobGround(getBlock, activeBounds, x, z, player.position.y - .5, 2);
    if (ground === null || mobs.some((mob) => Math.hypot(mob.position.x - x, mob.position.z - z) < 2)) continue;
    createMob(animals[(mobs.length + created) % animals.length], x, z, ground);
    if (++created >= Math.min(2, 4 - nearby)) break;
  }
}

function rebuildMobs() {
  mobGroup.clear();
  mobs = [];
  for (let x = activeBounds.minX + 6; x < activeBounds.maxX - 6; x += 13) {
    for (let z = activeBounds.minZ + 6; z < activeBounds.maxZ - 6; z += 13) {
      const roll = hash(x + 77, z - 33);
      if (roll < .55 || Math.hypot(x - player.position.x, z - player.position.z) < 8) continue;
      const bx = Math.round(x + hash(x, z) * 4);
      const bz = Math.round(z + hash(z, x) * 4);
      const ground = findMobGround(getBlock, activeBounds, bx, bz, terrainHeight(bx, bz), 4);
      if (ground === null) continue;
      const biome = biomeAt(bx, bz);
      const type = roll > .9 ? 'chicken' : biome === 'forest' ? 'pig' : biome === 'taiga' || biome === 'snowy' ? 'sheep' : 'cow';
      createMob(type, bx, bz, ground);
    }
  }
  for (const village of villageLocations) {
    let count = 0;
    for (const [dx, dz] of [[4, 0], [-4, 0], [0, -4], [4, 4], [-4, -4]]) {
      const x = village.x + dx, z = village.z + dz;
      const ground = findMobGround(getBlock, activeBounds, x, z, terrainHeight(x, z), 4);
      if (ground === null || mobs.some((mob) => Math.hypot(mob.position.x - x, mob.position.z - z) < 2)) continue;
      createMob('villager', x, z, ground);
      if (++count === 3) break;
    }
    const golemX = village.x + 5, golemZ = village.z + 5;
    const golemGround = findMobGround(getBlock, activeBounds, golemX, golemZ, terrainHeight(golemX, golemZ), 4);
    if (golemGround !== null) createMob('iron_golem', golemX, golemZ, golemGround);
  }
  spawnNearPlayer();
}

function updateMobs(delta, elapsed) {
  for (const mob of mobs) {
    const data = mob.userData.mob;
    const dx = player.position.x - mob.position.x;
    const dz = player.position.z - mob.position.z;
    const distance = Math.hypot(dx, dz);
    data.turnClock -= delta;
    data.attackClock = Math.max(0, data.attackClock - delta);
    if (data.turnClock <= 0) {
      data.direction += (hash(Math.floor(mob.position.x + elapsed), Math.floor(mob.position.z)) - .5) * 2.8;
      data.turnClock = 2 + hash(Math.floor(mob.position.z), Math.floor(elapsed * 3)) * 5;
    }
    const moving = distance > 3;
    if (moving) {
      const nextX = mob.position.x + Math.sin(data.direction) * data.speed * delta;
      const nextZ = mob.position.z + Math.cos(data.direction) * data.speed * delta;
      const ground = findMobGround(getBlock, activeBounds, nextX, nextZ, mob.position.y - .5, 1);
      if (ground !== null && Math.abs(ground - mob.position.y) <= 1) {
        mob.position.set(nextX, ground, nextZ);
      } else {
        data.direction += Math.PI;
      }
      mob.rotation.y = data.direction + Math.PI;
      data.legs.forEach((leg, index) => { leg.rotation.x = Math.sin(elapsed * 7 + index * Math.PI) * .48; });
    } else {
      data.legs.forEach((leg) => { leg.rotation.x = 0; });
    }
  }
}

function attackMob() {
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const previousFar = raycaster.far;
  raycaster.far = 3.2;
  const hit = raycaster.intersectObjects(mobGroup.children, true)[0];
  raycaster.far = previousFar;
  if (!hit) return false;
  const root = hit.object.userData.mobRoot;
  if (!root?.userData.mob) return false;
  root.userData.mob.health -= 2;
  swingHand();
  root.position.add(new THREE.Vector3(
    Math.sin(player.yaw + Math.PI) * .55,
    .18,
    Math.cos(player.yaw + Math.PI) * .55,
  ));
  if (root.userData.mob.health <= 0) {
    const type = root.userData.mob.type;
    mobGroup.remove(root);
    mobs = mobs.filter((mob) => mob !== root);
    player.xp += 3;
    if (isSurvivalMode() && type !== 'villager') { foodCount += 2; showToast('Collected 2 food · press R to eat'); }
    else showToast(`${type[0].toUpperCase() + type.slice(1)} defeated`);
    renderVitals();
  }
  return true;
}

function renderHotbar() {
  const hotbar = document.querySelector('#hotbar');
  hotbar.innerHTML = hotbarBlocks.map((type, index) => {
    const block = BLOCKS[type] || BLOCKS.stone;
    const count = inventoryCounts.get(type) || 0;
    return `
      <button class="slot ${index === selectedHotbarIndex ? 'selected' : ''}" data-hotbar-index="${index}" data-block="${block.id}" type="button" title="${escapeHtml(block.label)}">
        <kbd>${index + 1}</kbd><i class="block-icon" style="${swatchStyle(block)}"></i><b>${isSurvivalMode() ? count : '∞'}</b>
      </button>`;
  }).join('');
  updateHeldItems();
}

function selectHotbar(index) {
  selectedHotbarIndex = (index + hotbarBlocks.length) % hotbarBlocks.length;
  selectedBlock = hotbarBlocks[selectedHotbarIndex];
  renderHotbar();
}

function swapOffhand() {
  const previous = offhandBlock;
  offhandBlock = selectedBlock;
  hotbarBlocks[selectedHotbarIndex] = previous;
  selectedBlock = previous;
  renderHotbar();
  showToast(`${BLOCKS[offhandBlock].label} moved to offhand`);
}

function equipBlock(type) {
  if (!BLOCKS[type]) return;
  hotbarBlocks[selectedHotbarIndex] = type;
  selectedBlock = type;
  renderHotbar();
  renderInventory();
}

const craftingRecipes = [
  ...['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'pale_oak'].flatMap((wood) => [
    { input: `${wood}_log`, cost: 1, output: `${wood}_planks`, count: 4 },
    { input: `${wood}_planks`, cost: 3, output: `${wood}_slab`, count: 6 },
    { input: `${wood}_planks`, cost: 6, output: `${wood}_stairs`, count: 4 },
  ]),
  { input: 'stone', cost: 4, output: 'stone_bricks', count: 4 },
  { input: 'oak_planks', cost: 8, output: 'chest', count: 1 },
  { input: 'oak_planks', cost: 4, output: 'crafting_table', count: 1 },
  { input: 'cobblestone', cost: 8, output: 'furnace', count: 1 },
  { input: 'red_wool', cost: 3, output: 'red_bed', count: 1 },
];

const craftingPanel = document.createElement('section');
craftingPanel.className = 'creative-inventory';
craftingPanel.innerHTML = `<div class="station-window"><div class="station-art crafting-art"><span class="station-title">Crafting</span><span class="station-inventory-title">Inventory</span><button class="station-close" type="button" aria-label="Close crafting table">×</button></div><div class="station-recipes"><p>Choose a recipe</p><div class="crafting-recipes" data-table-recipes></div></div></div>`;
document.querySelector('#app').append(craftingPanel);
function openCraftingTable() {
  craftingTableOpen = true; inventoryOpen = true; suppressPause = Boolean(document.pointerLockElement); keys.clear();
  if (document.pointerLockElement) document.exitPointerLock();
  renderCrafting(); craftingPanel.classList.add('open');
}
function closeCraftingTable() {
  craftingTableOpen = false; craftingPanel.classList.remove('open'); inventoryOpen = false;
  saveCurrentWorld(); renderHotbar(); resumeGame();
}
craftingPanel.addEventListener('click', (event) => {
  if (event.target.closest('.station-close')) return closeCraftingTable();
  const button = event.target.closest('[data-recipe]');
  if (button) craftRecipe(Number(button.dataset.recipe));
});
function renderCrafting() {
  const container = document.querySelector('#crafting-recipes');
  const recipesHtml = craftingRecipes.map((recipe, index) => {
    const available = !isSurvivalMode() || (inventoryCounts.get(recipe.input) || 0) >= recipe.cost;
    return `<button type="button" data-recipe="${index}" ${available ? '' : 'disabled'}>${recipe.cost} ${escapeHtml(BLOCKS[recipe.input].label)} → ${recipe.count} ${escapeHtml(BLOCKS[recipe.output].label)}</button>`;
  }).join('');
  container.innerHTML = recipesHtml;
  craftingPanel.querySelector('[data-table-recipes]').innerHTML = recipesHtml;
}

function craftRecipe(index) {
  const recipe = craftingRecipes[index];
  if (!recipe) return;
  if (isSurvivalMode()) {
    const count = inventoryCounts.get(recipe.input) || 0;
    if (count < recipe.cost) return;
    inventoryCounts.set(recipe.input, count - recipe.cost);
    inventoryCounts.set(recipe.output, (inventoryCounts.get(recipe.output) || 0) + recipe.count);
    saveCurrentWorld();
  }
  equipBlock(recipe.output);
  renderCrafting();
  showToast(`Crafted ${recipe.count} ${BLOCKS[recipe.output].label}`);
}

function renderInventory() {
  const search = document.querySelector('#block-search')?.value.trim().toLowerCase() || '';
  const matches = BLOCK_CATALOG.filter((block) => (
    (inventoryCategory === 'All' || block.category === inventoryCategory)
    && (!search || block.label.toLowerCase().includes(search) || block.id.includes(search.replaceAll(' ', '_')))
    && (!isSurvivalMode() || (inventoryCounts.get(block.id) || 0) > 0)
  ));
  const grid = document.querySelector('#block-grid');
  if (!grid) return;
  grid.innerHTML = matches.length ? matches.map((block) => `
    <button class="inventory-slot ${block.id === selectedBlock ? 'selected' : ''}" data-inventory-block="${block.id}" type="button" title="${escapeHtml(block.label)}">
      <i class="block-icon" style="${swatchStyle(block)}"></i>
      <span>${escapeHtml(block.label)}${isSurvivalMode() ? ` ×${inventoryCounts.get(block.id)}` : ''}</span>
    </button>`).join('') : '<p class="inventory-empty">Mine blocks to fill your backpack.</p>';
  document.querySelector('#inventory-result-count').textContent = isSurvivalMode()
    ? `${matches.length} collected block types`
    : `${matches.length} / ${BLOCK_CATALOG.length} blocks`;
}

function buildInventory() {
  const categories = document.querySelector('#block-categories');
  categories.innerHTML = BLOCK_CATEGORIES.map((category) => `
    <button class="inventory-tab ${category === inventoryCategory ? 'selected' : ''}" data-block-category="${category}" type="button">${category}</button>
  `).join('');
  renderInventory();
  renderHotbar();
}

function openInventory() {
  if (!inWorld || inventoryOpen) return;
  document.querySelector('.inventory-header h2').textContent = isSurvivalMode() ? 'Backpack' : 'Creative Inventory';
  document.querySelector('.inventory-footer').innerHTML = isSurvivalMode()
    ? 'Mine blocks to collect them · choose a slot with <kbd>1–9</kbd> · <kbd>E</kbd> to close'
    : 'Choose a hotbar slot with <kbd>1–9</kbd>, then click a block to equip it · <kbd>E</kbd> to close';
  renderInventory();
  renderCrafting();
  inventoryOpen = true;
  suppressPause = Boolean(document.pointerLockElement);
  keys.clear();
  const inventory = document.querySelector('#creative-inventory');
  inventory.classList.add('open');
  inventory.setAttribute('aria-hidden', 'false');
  if (document.pointerLockElement) document.exitPointerLock();
  document.querySelector('#block-search').blur();
}

function closeInventory() {
  if (!inventoryOpen) return;
  inventoryOpen = false;
  const inventory = document.querySelector('#creative-inventory');
  inventory.classList.remove('open');
  inventory.setAttribute('aria-hidden', 'true');
  document.querySelector('#block-search').value = '';
  renderInventory();
  resumeGame();
}

const app = document.querySelector('#app');
const STORAGE = {
  worlds: 'java-menu-worlds-v1',
  servers: 'java-menu-servers-v1',
  settings: 'java-menu-settings-v1',
  parkour: 'java-menu-parkour-v1',
  dozen: 'java-menu-dozen-v1',
};
const defaultSettings = { fov: 72, distance: 4, volume: 70, bobbing: true, highContrast: false, blur: true, autoJump: false, narrator: false, language: 'en' };

function readStore(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}

function writeStore(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { showToast('Browser storage is unavailable.'); }
}

// Every game in the launcher exposes a shareable launch link, e.g. /?play=minecraft
// or /?play=parkour, which boots straight into that game.
const LAUNCH_PARAM = 'play';
const GAMES = {
  minecraft: {
    name: 'Minecraft',
    version: 'Java Edition 1.21.8',
    linkLabel: '/?play=minecraft',
    movement: true,
    controls: [
      { keys: ['W', 'A', 'S', 'D'], label: 'Move' },
      { keys: ['SPACE'], label: 'Jump' },
      { keys: ['SHIFT'], label: 'Sprint' },
      { keys: ['E'], label: 'Inventory' },
      { keys: ['ESC'], label: 'Pause menu' },
    ],
  },
  parkour: {
    name: 'Parkour Obby',
    version: 'Roblox Server · Obby #1',
    linkLabel: '/?play=parkour',
    movement: true,
    controls: [
      { keys: ['W', 'A', 'S', 'D'], label: 'Move' },
      { keys: ['SPACE'], label: 'Jump' },
      { keys: ['SHIFT'], label: 'Sprint' },
      { keys: ['R'], label: 'Respawn at checkpoint' },
      { keys: ['ESC'], label: 'Pause menu' },
    ],
  },
  dozen: {
    name: '12 Dozen',
    version: 'Math Platformer · 144',
    linkLabel: '/?play=dozen',
    movement: true,
    controls: [
      { keys: ['W', 'A', 'S', 'D'], label: 'Move' },
      { keys: ['SPACE'], label: 'Jump' },
      { keys: ['M'], label: 'Toggle 2D map view' },
      { keys: ['R'], label: 'Reset to checkpoint' },
      { keys: ['ESC'], label: 'Pause menu' },
    ],
  },
};

function syncLaunchUrl(game) {
  const url = new URL(location.href);
  if (game) url.searchParams.set(LAUNCH_PARAM, game);
  else url.searchParams.delete(LAUNCH_PARAM);
  try { history.replaceState(null, '', url); } catch { /* Some local file URLs refuse history changes. */ }
}

function parkourRecord() {
  const record = readStore(STORAGE.parkour, {}) || {};
  // Migrate older single-run saves ({ best, runs }) to the endless-level shape.
  if (!record.levels || typeof record.levels !== 'object') {
    const levels = {};
    if (typeof record.best === 'number') levels[1] = record.best;
    record.levels = levels;
  }
  if (typeof record.highest !== 'number') {
    record.highest = Object.keys(record.levels).reduce((max, key) => Math.max(max, Number(key) || 0), 0);
  }
  return record;
}

function parkourLevelBest(level) {
  return parkourRecord().levels?.[level] ?? null;
}

function parkourNextLevel() {
  return Math.max(1, (parkourRecord().highest || 0) + 1);
}

function saveParkourFinish(level, seconds) {
  const record = parkourRecord();
  const previous = record.levels[level];
  const isBest = previous == null || seconds < previous;
  record.levels[level] = isBest ? seconds : previous;
  record.highest = Math.max(record.highest || 0, level);
  record.runs = (record.runs || 0) + 1;
  writeStore(STORAGE.parkour, record);
  renderLauncher();
  return { isBest, best: record.levels[level], nextLevel: level + 1 };
}

// A stable, hour-based "players online" count so the server card feels alive.
function parkourOnline() {
  const hour = Math.floor(Date.now() / 3600000);
  return 6 + ((hour * 7 + 3) % 19);
}

function dozenRecord() {
  return readStore(STORAGE.dozen, {}) || {};
}

function dozenBest() {
  const record = dozenRecord();
  return typeof record.best === 'number' ? record.best : null;
}

function saveDozenFinish(seconds) {
  const record = dozenRecord();
  const isBest = typeof record.best !== 'number' || seconds < record.best;
  const best = isBest ? seconds : record.best;
  writeStore(STORAGE.dozen, { best, runs: (record.runs || 0) + 1 });
  renderLauncher();
  return { isBest, best };
}

let settings = { ...defaultSettings, ...readStore(STORAGE.settings, {}) };
let worlds = readStore(STORAGE.worlds, [{
  id: 'first-world', name: 'My World', mode: 'survival', difficulty: 'peaceful', cheats: false,
  created: Date.now(), lastPlayed: Date.now(), edits: [], position: [0, terrainHeight(0, 0) + .8, 0],
}]);
// Apply the requested peaceful default once to previously saved worlds.
for (const world of worlds) {
  if (!world.peacefulDefaultApplied) {
    if (world.mode !== 'hardcore') world.difficulty = 'peaceful';
    world.peacefulDefaultApplied = true;
  }
}
let servers = readStore(STORAGE.servers, [{ id: 'local-demo', name: 'Local Test Server', address: 'localhost:25565' }]);
let currentScreen = 'launcher';
let currentWorldId = null;
let selectedWorldId = worlds[0]?.id ?? null;
let selectedServerId = servers[0]?.id ?? null;
let editingServerId = null;
let inWorld = false;
let optionsReturn = 'launcher';
let accessibilityReturn = 'launcher';
let languageReturn = 'launcher';
let createReturn = 'singleplayer';
let confirmCallback = null;
let connectTimer = null;
let suppressPause = false;
let toastTimer = null;
let walkTime = 0;
renderDistance = settings.distance;
camera.fov = settings.fov;
camera.updateProjectionMatrix();

const translations = {
  en: { launch: 'Play', singleplayer: 'Worlds', multiplayer: 'Join a World', options: 'Settings', quit: 'Quit', splash: 'Now with twelve dozen math!' },
  zh: { launch: '开始游戏', singleplayer: '世界', multiplayer: '加入世界', options: '设置', quit: '退出', splash: '现在有十二打数学了！' },
  es: { launch: 'Jugar', singleplayer: 'Mundos', multiplayer: 'Unirse a un mundo', options: 'Ajustes', quit: 'Salir', splash: '¡Ahora con doce docenas de mates!' },
  de: { launch: 'Spielen', singleplayer: 'Welten', multiplayer: 'Welt beitreten', options: 'Einstellungen', quit: 'Beenden', splash: 'Jetzt mit zwölf Dutzend Mathe!' },
};

function applyLanguage() {
  const copy = translations[settings.language] || translations.en;
  document.documentElement.lang = settings.language;
  for (const key of ['launch', 'singleplayer', 'multiplayer', 'options', 'quit']) {
    for (const button of document.querySelectorAll(`#launcher-screen [data-action="${key}"]`)) button.textContent = copy[key];
  }
  document.querySelector('#splash-text').textContent = copy.splash;
  document.querySelectorAll('[data-lang]').forEach((button) => button.classList.toggle('selected', button.dataset.lang === settings.language));
}

function applySettings() {
  renderDistance = Number(settings.distance);
  camera.fov = Number(settings.fov);
  camera.updateProjectionMatrix();
  scene.fog.near = renderDistance * CHUNK * .7;
  scene.fog.far = (renderDistance * 2 + 1) * CHUNK * .9;
  app.classList.toggle('high-contrast', settings.highContrast);
  app.classList.toggle('no-blur', !settings.blur);
  document.querySelector('#fov-slider').value = settings.fov;
  document.querySelector('#render-distance').value = settings.distance;
  document.querySelector('#volume-slider').value = settings.volume;
  document.querySelector('#fov-value').textContent = settings.fov;
  document.querySelector('#fov-label').textContent = settings.fov === 72 ? 'Normal' : settings.fov >= 100 ? 'Quake Pro' : settings.fov;
  document.querySelector('#distance-value').textContent = `${settings.distance} chunks`;
  document.querySelector('#volume-value').textContent = settings.volume ? `${settings.volume}%` : 'OFF';
  setToggleLabel('#bob-toggle', 'View Bobbing', settings.bobbing);
  setToggleLabel('#high-contrast', 'High Contrast', settings.highContrast);
  setToggleLabel('#menu-background', 'Menu Background Blur', settings.blur);
  setToggleLabel('#auto-jump', 'Auto-Jump', settings.autoJump);
  setToggleLabel('#narrator', 'Narrator', settings.narrator);
  document.querySelector('#fullscreen-toggle').textContent = `Fullscreen: ${document.fullscreenElement ? 'ON' : 'OFF'}`;
  applyLanguage();
  lastChunk = '';
}

function setToggleLabel(selector, label, value) {
  const button = document.querySelector(selector);
  button.dataset.value = String(value);
  button.textContent = `${label}: ${value ? 'ON' : 'OFF'}`;
}

function saveSettings() {
  writeStore(STORAGE.settings, settings);
  applySettings();
}

function showScreen(name, { focus = true } = {}) {
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.remove('active'));
  currentScreen = name;
  const screen = name ? document.querySelector(`#${name}-screen`) : null;
  screen?.classList.add('active');
  app.dataset.screen = name || 'game';
  app.classList.toggle('gameplay', !name || (inWorld && name === 'pause'));
  app.scrollTop = 0;
  if (name === 'launcher') renderLauncher();
  if (focus && screen) requestAnimationFrame(() => (screen.querySelector('[data-autofocus]') || screen.querySelector('button:not(:disabled), input'))?.focus({ preventScroll: true }));
  if (settings.narrator && screen) speak(screen.querySelector('h1')?.textContent || name);
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function speak(message) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  speechSynthesis.speak(new SpeechSynthesisUtterance(message));
}

let audioContext;
function playClick() {
  if (!settings.volume) return;
  try {
    audioContext ||= new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(170, audioContext.currentTime);
    gain.gain.setValueAtTime(settings.volume / 2500, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + .045);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(); oscillator.stop(audioContext.currentTime + .05);
  } catch { /* Sound is optional. */ }
}

function friendlyDate(timestamp) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(timestamp));
}

function mostRecentWorld() {
  return [...worlds].sort((a, b) => (b.lastPlayed || 0) - (a.lastPlayed || 0))[0] || null;
}

// The launcher is the app's home screen: the game library (Minecraft + the parkour
// server) plus fast access to the world list, LAN play, settings and quit.
function renderLauncher() {
  // --- Minecraft card -----------------------------------------------------
  const world = mostRecentWorld();
  const count = worlds.length;
  const title = document.querySelector('#game-card-title');
  if (title) title.textContent = GAMES.minecraft.name;
  const link = document.querySelector('#game-launch-link');
  if (link) {
    const href = `?${LAUNCH_PARAM}=minecraft`;
    link.setAttribute('href', href);
    link.textContent = `/${href}`;
    link.title = `Direct launch link for ${GAMES.minecraft.name}`;
  }
  const version = document.querySelector('[data-game-card="minecraft"] .game-version');
  if (version) version.textContent = GAMES.minecraft.version;
  document.querySelector('#launcher-world-count').textContent = `${count} world${count === 1 ? '' : 's'}`;
  document.querySelector('#launcher-last-played').textContent = world ? `Last played ${friendlyDate(world.lastPlayed)}` : 'No worlds yet';
  document.querySelector('#launch-hint').innerHTML = world
    ? `Continue <strong>${escapeHtml(world.name)}</strong>`
    : 'Create your first world to start playing';

  // --- Parkour Obby server card ------------------------------------------
  const record = parkourRecord();
  const nextLevel = Math.max(1, (record.highest || 0) + 1);
  const nextBest = record.levels?.[nextLevel];
  const best = nextBest != null ? formatParkourTime(nextBest) : null;
  const parkourLink = document.querySelector('#parkour-launch-link');
  if (parkourLink) {
    const href = `?${LAUNCH_PARAM}=parkour`;
    parkourLink.setAttribute('href', href);
    parkourLink.textContent = `/${href}`;
    parkourLink.title = `Direct launch link for ${GAMES.parkour.name}`;
  }
  const parkourBest = document.querySelector('#parkour-best');
  if (parkourBest) parkourBest.textContent = record.highest > 0 ? `Level ${nextLevel} · ${best ? `Best ${best}` : 'not cleared'}` : 'No best time yet';
  const parkourOnlineNode = document.querySelector('#parkour-online');
  if (parkourOnlineNode) parkourOnlineNode.textContent = `${parkourOnline()} online`;
  const parkourHint = document.querySelector('#parkour-hint');
  if (parkourHint) {
    parkourHint.innerHTML = record.highest > 0
      ? `Endless levels · next up <strong>Level ${nextLevel}</strong>${record.runs ? ` · ${record.runs} run${record.runs === 1 ? '' : 's'}` : ''}`
      : 'Endless levels · timer · best time';
  }

  // --- 12 Dozen math platformer card --------------------------------------
  const dozenTime = dozenBest();
  const dozenLink = document.querySelector('#dozen-launch-link');
  if (dozenLink) {
    const href = `?${LAUNCH_PARAM}=dozen`;
    dozenLink.setAttribute('href', href);
    dozenLink.textContent = `/${href}`;
    dozenLink.title = `Direct launch link for ${GAMES.dozen.name}`;
  }
  const dozenBestNode = document.querySelector('#dozen-best');
  if (dozenBestNode) dozenBestNode.textContent = dozenTime != null ? `Best ${formatParkourTime(dozenTime)}` : 'No best time yet';
  const dozenHint = document.querySelector('#dozen-hint');
  if (dozenHint) {
    const runs = dozenRecord().runs || 0;
    dozenHint.innerHTML = dozenTime != null
      ? `Target <strong>144</strong> · best ${formatParkourTime(dozenTime)}${runs ? ` · ${runs} run${runs === 1 ? '' : 's'}` : ''}`
      : 'Start at 12 · build up to 144';
  }

  renderGameControlsRows();
}

// Every game that includes movement advertises its WASD/controls in the menu. The row
// is generated from GAMES metadata, so newly added movement games get it automatically.
function keyChips(keys) {
  return keys.map((key) => `<kbd>${key}</kbd>`).join('');
}

function renderGameControlsRows() {
  for (const card of document.querySelectorAll('[data-game-card]')) {
    const game = card.dataset.gameCard;
    const info = GAMES[game];
    let row = card.querySelector('.game-controls-row');
    if (!info?.movement) { row?.remove(); continue; }
    if (!row) {
      row = document.createElement('p');
      row.className = 'game-controls-row';
      // The launch-link row lives inside .game-actions, so the controls row is
      // simply appended to the card details — never use a nested node as an
      // insertBefore reference (that threw and broke the boot sequence).
      card.querySelector('.game-details')?.append(row);
    }
    const move = info.controls[0];
    const jump = info.controls[1];
    row.innerHTML = `
      <span class="game-controls-label">Controls</span>
      <span class="game-controls-keys">${keyChips(move.keys)} <span>${move.label}</span> · ${keyChips(jump.keys)} <span>${jump.label}</span></span>
      <button class="game-link-copy game-controls-open" type="button" data-action="game-controls" data-game="${game}">View</button>`;
  }
}

let lastControlsGame = null;

function openGameControls(game) {
  const info = GAMES[game];
  const dialog = document.querySelector('#game-controls-dialog');
  if (!info || !dialog) return;
  lastControlsGame = game;
  dialog.dataset.game = game;
  document.querySelector('#game-controls-game').textContent = `${info.name} · ${info.version}`;
  document.querySelector('#game-controls-list').innerHTML = info.controls
    .map(({ keys, label }) => `<div><span>${label}</span><span class="game-controls-chips">${keyChips(keys)}</span></div>`)
    .join('');
  dialog.classList.add('open');
  dialog.setAttribute('aria-hidden', 'false');
  document.querySelector('[data-action="close-game-controls"]')?.focus();
  if (settings.narrator) speak(`Controls for ${info.name}`);
}

function closeGameControls() {
  const dialog = document.querySelector('#game-controls-dialog');
  if (!dialog?.classList.contains('open')) return;
  dialog.classList.remove('open');
  dialog.setAttribute('aria-hidden', 'true');
  if (lastControlsGame) document.querySelector(`[data-game-card="${lastControlsGame}"] [data-action="game-controls"]`)?.focus();
}

function launchMinecraft() {
  const world = mostRecentWorld();
  if (!world) {
    createReturn = 'launcher';
    prepareWorldForm();
    showScreen('create-world');
    showToast('Create a world to start playing');
    return;
  }
  enterWorld(world.id);
}

let parkour = null;
// The shared-world multiplayer mode is served by the Vite dev plugin (/lan/*), which
// only exists locally. On the public build hide the join entry rather than offering a
// broken screen.
function applyProductionScope() {
  if (import.meta.env.DEV) return;
  const joinButton = document.querySelector('#launcher-screen [data-action="multiplayer"]');
  joinButton?.remove();
  const actions = document.querySelector('.launcher-actions');
  if (actions) actions.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))';
}

function launchParkour() {
  parkour ??= createParkour({
    canvas,
    renderer,
    onlineCount: parkourOnline(),
    getBest: (level) => parkourLevelBest(level),
    onFinish: (level, seconds) => saveParkourFinish(level, seconds),
    onExit: () => {
      showScreen('launcher');
      syncLaunchUrl(null);
    },
  });
  inWorld = false;
  closeLan();
  showScreen('parkour', { focus: false });
  syncLaunchUrl('parkour');
  parkour.start(parkourNextLevel());
}

let dozen = null;
function launchDozen() {
  dozen ??= createDozen({
    canvas,
    renderer,
    getBest: () => dozenBest(),
    onFinish: (seconds) => saveDozenFinish(seconds),
    onExit: () => {
      showScreen('launcher');
      syncLaunchUrl(null);
    },
  });
  inWorld = false;
  closeLan();
  showScreen('dozen', { focus: false });
  syncLaunchUrl('dozen');
  dozen.start();
}

function launchGame(game = 'minecraft') {
  if (game === 'parkour') launchParkour();
  else if (game === 'dozen') launchDozen();
  else launchMinecraft();
}

async function copyLaunchLink(game = 'minecraft') {
  const link = new URL(`?${LAUNCH_PARAM}=${game}`, location.href).href;
  try {
    await navigator.clipboard.writeText(link);
    showToast('Launch link copied');
  } catch {
    // Clipboard access can be blocked; at least show the link so it can be copied by hand.
    showToast(link);
  }
}

function renderWorlds() {
  const list = document.querySelector('#world-list');
  if (!worlds.length) {
    list.innerHTML = '<div class="empty-state">No worlds found.<br>Create one to begin.</div>';
    selectedWorldId = null;
  } else {
    if (!worlds.some((world) => world.id === selectedWorldId)) selectedWorldId = worlds[0].id;
    list.innerHTML = worlds.map((world) => `
      <button class="list-item ${world.id === selectedWorldId ? 'selected' : ''}" data-world-id="${world.id}" role="option" aria-selected="${world.id === selectedWorldId}" type="button">
        <i class="world-icon ${world.mode}"></i>
        <span><strong>${escapeHtml(world.name)}</strong><small>${friendlyDate(world.lastPlayed)}<br>${capitalize(world.mode)} · ${capitalize(world.difficulty)}${world.cheats ? ' · Cheats' : ''}</small></span>
        <small>v1.21.8</small>
      </button>`).join('');
  }
  for (const id of ['play-world', 'edit-world', 'delete-world', 'recreate-world']) document.querySelector(`#${id}`).disabled = !selectedWorldId;
}

function renderServers() {
  const list = document.querySelector('#server-list');
  if (!servers.length) {
    list.innerHTML = '<div class="empty-state">Scanning for games on your local network...</div>';
    selectedServerId = null;
  } else {
    if (!servers.some((server) => server.id === selectedServerId)) selectedServerId = servers[0].id;
    list.innerHTML = servers.map((server) => `
      <button class="list-item ${server.id === selectedServerId ? 'selected' : ''}" data-server-id="${server.id}" role="option" aria-selected="${server.id === selectedServerId}" type="button">
        <i class="server-icon"></i><span><strong>${escapeHtml(server.name)}</strong><small>${escapeHtml(server.address)}</small></span><i class="ping-bars">▂▄▆█</i>
      </button>`).join('');
  }
  for (const id of ['join-server', 'edit-server', 'delete-server']) document.querySelector(`#${id}`).disabled = !selectedServerId;
}

function escapeHtml(value) {
  const element = document.createElement('span');
  element.textContent = String(value);
  return element.innerHTML;
}

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

function enterWorld(worldId) {
  const world = worlds.find((item) => item.id === worldId);
  if (!world) return;
  currentWorldId = world.id;
  selectedWorldId = world.id;
  edits.clear();
  for (const [key, value] of world.edits || []) edits.set(key, value);
  const start = world.position || [0, terrainHeight(0, 0) + .8, 0];
  player.position.fromArray(start);
  const groundY = terrainHeight(Math.round(player.position.x), Math.round(player.position.z)) + .8;
  if (player.position.y > groundY + .4 || collides(player.position)) player.position.y = groundY;
  player.velocity.set(0, 0, 0);
  player.yaw = world.yaw || 0;
  player.pitch = 0;
  player.health = world.health ?? 20;
  player.hunger = isPeaceful() ? 20 : (world.hunger ?? 20);
  foodCount = world.foodCount ?? 0;
  player.xp = world.xp ?? 0;
  player.level = world.level ?? 1;
  player.highestY = player.position.y;
  inventoryCounts.clear();
  for (const [type, count] of world.inventory || []) inventoryCounts.set(type, count);
  offhandBlock = world.offhand || 'oak_log';
  world.lastPlayed = Date.now();
  writeStore(STORAGE.worlds, worlds);
  inWorld = true;
  lastChunk = '';
  syncLaunchUrl('minecraft');
  renderHotbar();
  renderVitals();
  showScreen(null);
  canvas.focus({ preventScroll: true });
  if (matchMedia('(pointer: coarse)').matches) return;
  const result = canvas.requestPointerLock();
  result?.catch(() => showToast('Use WASD to move and E for inventory.'));
}

function saveCurrentWorld() {
  const world = worlds.find((item) => item.id === currentWorldId);
  if (!world) return;
  world.position = player.position.toArray();
  world.yaw = player.yaw;
  world.health = player.health;
  world.hunger = player.hunger;
  world.foodCount = foodCount;
  world.xp = player.xp;
  world.level = player.level;
  world.inventory = [...inventoryCounts.entries()];
  world.offhand = offhandBlock;
  world.lastPlayed = Date.now();
  world.edits = [...edits.entries()].slice(-3000);
  writeStore(STORAGE.worlds, worlds);
}

function resumeGame() {
  showScreen(null);
  if (matchMedia('(pointer: coarse)').matches) return;
  const result = canvas.requestPointerLock();
  result?.catch(() => showToast('Mouse capture was blocked by the browser.'));
}

function saveAndQuit() {
  saveCurrentWorld();
  closeLan();
  inWorld = false;
  currentWorldId = null;
  suppressPause = true;
  if (document.pointerLockElement) document.exitPointerLock();
  syncLaunchUrl(false);
  showScreen('launcher');
  showToast('World saved');
}

function openConfirm(title, message, callback) {
  const dialog = document.querySelector('#confirm-dialog');
  document.querySelector('#confirm-title').textContent = title;
  document.querySelector('#confirm-message').textContent = message;
  confirmCallback = callback;
  dialog.classList.add('open');
  dialog.setAttribute('aria-hidden', 'false');
  document.querySelector('#confirm-no').focus();
}

function closeConfirm(accepted) {
  const dialog = document.querySelector('#confirm-dialog');
  dialog.classList.remove('open');
  dialog.setAttribute('aria-hidden', 'true');
  if (accepted) confirmCallback?.();
  confirmCallback = null;
}

function prepareWorldForm(source = null) {
  const name = source ? `${source.name} Copy` : 'New World';
  document.querySelector('#world-name').value = name;
  document.querySelector('#folder-name').textContent = name;
  const mode = source?.mode || 'survival';
  const difficulty = source?.difficulty || 'peaceful';
  const cheats = source?.cheats || false;
  updateWorldFormButton('game-mode', mode);
  updateWorldFormButton('difficulty', difficulty);
  setFormBoolean('allow-cheats', 'Allow Cheats', cheats);
}

function updateWorldFormButton(id, value) {
  const button = document.querySelector(`#${id}`);
  button.dataset.value = value;
  const label = id === 'game-mode' ? 'Game Mode' : 'Difficulty';
  button.textContent = `${label}: ${capitalize(value)}`;
  if (id === 'game-mode') {
    const help = {
      survival: 'Search for resources, craft, gain levels, health and hunger.',
      creative: 'Unlimited resources, free flying and destroy blocks instantly.',
      hardcore: 'Survival locked to Hard difficulty. One life only.',
    };
    document.querySelector('#game-mode-help').textContent = help[value];
    if (value === 'hardcore') updateWorldFormButton('difficulty', 'hard');
  }
}

function setFormBoolean(id, label, value) {
  const button = document.querySelector(`#${id}`);
  button.dataset.value = String(value);
  button.textContent = `${label}: ${value ? 'ON' : 'OFF'}`;
}

function startConnection(address) {
  if (!address.trim()) return showToast('Enter a server address.');
  document.querySelector('#connection-detail').textContent = address;
  showScreen('connecting');
  clearTimeout(connectTimer);
  connectTimer = setTimeout(() => {
    document.querySelector('#connection-title').textContent = 'Failed to connect to the server';
    document.querySelector('#connection-detail').textContent = 'Native Java servers cannot connect directly to a browser client.';
    document.querySelector('#connecting-screen [data-action="cancel-connect"]').textContent = 'Back to Server List';
  }, 1300);
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button || button.disabled) return;
  playClick();
  const action = button.dataset.action;
  if (!action) return;

  if (action === 'launcher') { inWorld = false; syncLaunchUrl(false); showScreen('launcher'); }
  if (action === 'launch') launchGame(button.dataset.game);
  if (action === 'copy-launch-link') copyLaunchLink(button.dataset.game);
  if (action === 'game-controls') openGameControls(button.dataset.game);
  if (action === 'close-game-controls') closeGameControls();
  if (action === 'singleplayer') { renderWorlds(); showScreen('singleplayer'); }
  if (action === 'multiplayer') { renderServers(); showScreen('multiplayer'); }
  if (action === 'create-world') { createReturn = 'singleplayer'; prepareWorldForm(); showScreen('create-world'); }
  if (action === 'create-world-cancel') showScreen(createReturn);
  if (action === 'add-server') { editingServerId = null; document.querySelector('#server-form-title').textContent = 'Add Server'; document.querySelector('#server-name').value = 'Minecraft Server'; document.querySelector('#server-address').value = ''; showScreen('server-form'); }
  if (action === 'direct-connect') showScreen('direct-connect');
  if (action === 'options') { document.querySelector('#world-difficulty').hidden = !inWorld; if (inWorld) document.querySelector('#world-difficulty').textContent = `Difficulty: ${capitalize(activeWorld().difficulty)}`; optionsReturn = currentScreen === 'pause' || (inWorld && currentScreen === 'controls') ? 'pause' : 'launcher'; showScreen('options'); }
  if (action === 'options-done') showScreen(optionsReturn);
  if (action === 'controls') showScreen('controls');
  if (action === 'language') { languageReturn = currentScreen === 'options' ? 'options' : 'launcher'; showScreen('language'); }
  if (action === 'language-done') showScreen(languageReturn);
  if (action === 'accessibility') { accessibilityReturn = currentScreen === 'options' ? 'options' : currentScreen === 'pause' ? 'pause' : 'launcher'; showScreen('accessibility'); }
  if (action === 'accessibility-done') showScreen(accessibilityReturn);
  if (action === 'resume') resumeGame();
  if (action === 'save-quit') saveAndQuit();
  if (action === 'quit') { try { window.close(); } catch { /* Browsers normally block this. */ } showScreen('quit'); }
  if (action === 'cancel-connect') { closeLan(); clearTimeout(connectTimer); document.querySelector('#connection-title').textContent = 'Connecting to the server...'; button.textContent = 'Cancel'; renderServers(); showScreen('multiplayer'); }
});

document.querySelector('#world-list').addEventListener('click', (event) => {
  const row = event.target.closest('[data-world-id]');
  if (!row) return;
  selectedWorldId = row.dataset.worldId;
  renderWorlds();
});
document.querySelector('#world-list').addEventListener('dblclick', (event) => {
  const row = event.target.closest('[data-world-id]');
  if (row) enterWorld(row.dataset.worldId);
});
document.querySelector('#play-world').addEventListener('click', () => enterWorld(selectedWorldId));
document.querySelector('#edit-world').addEventListener('click', () => {
  const world = worlds.find((item) => item.id === selectedWorldId);
  if (!world) return;
  document.querySelector('#edit-world-name').value = world.name;
  showScreen('edit-world');
});
document.querySelector('#edit-world-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const world = worlds.find((item) => item.id === selectedWorldId);
  if (world) world.name = document.querySelector('#edit-world-name').value.trim() || 'World';
  writeStore(STORAGE.worlds, worlds); renderWorlds(); showScreen('singleplayer');
});
document.querySelector('#delete-world').addEventListener('click', () => {
  const world = worlds.find((item) => item.id === selectedWorldId);
  if (!world) return;
  openConfirm('Delete World?', `'${world.name}' will be lost forever! (A long time!)`, () => {
    worlds = worlds.filter((item) => item.id !== selectedWorldId);
    selectedWorldId = worlds[0]?.id ?? null;
    writeStore(STORAGE.worlds, worlds); renderWorlds();
  });
});
document.querySelector('#recreate-world').addEventListener('click', () => {
  const world = worlds.find((item) => item.id === selectedWorldId);
  if (world) { createReturn = 'singleplayer'; prepareWorldForm(world); showScreen('create-world'); }
});
document.querySelector('#world-name').addEventListener('input', (event) => {
  document.querySelector('#folder-name').textContent = event.target.value.trim().replace(/[\\/:*?"<>|]/g, '_') || 'World';
});
document.querySelector('#game-mode').addEventListener('click', (event) => {
  const modes = ['survival', 'creative', 'hardcore'];
  updateWorldFormButton('game-mode', modes[(modes.indexOf(event.currentTarget.dataset.value) + 1) % modes.length]);
});
document.querySelector('#world-difficulty').addEventListener('click', () => {
  const world = activeWorld();
  if (!world) return;
  if (world.mode === 'hardcore') return showToast('Hardcore is locked to Hard difficulty.');
  const levels = ['peaceful', 'easy', 'normal', 'hard'];
  world.difficulty = levels[(levels.indexOf(world.difficulty) + 1) % levels.length];
  document.querySelector('#world-difficulty').textContent = `Difficulty: ${capitalize(world.difficulty)}`;
  if (isPeaceful()) player.hunger = 20;
  rebuildMobs(); renderVitals(); saveCurrentWorld();
});
document.querySelector('#difficulty').addEventListener('click', (event) => {
  if (document.querySelector('#game-mode').dataset.value === 'hardcore') return showToast('Hardcore is locked to Hard difficulty.');
  const levels = ['peaceful', 'easy', 'normal', 'hard'];
  updateWorldFormButton('difficulty', levels[(levels.indexOf(event.currentTarget.dataset.value) + 1) % levels.length]);
});
document.querySelector('#allow-cheats').addEventListener('click', (event) => setFormBoolean('allow-cheats', 'Allow Cheats', event.currentTarget.dataset.value !== 'true'));
document.querySelector('#world-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#world-name').value.trim() || 'New World';
  const world = {
    id: `world-${Date.now()}`, name, mode: document.querySelector('#game-mode').dataset.value,
    difficulty: document.querySelector('#difficulty').dataset.value, cheats: document.querySelector('#allow-cheats').dataset.value === 'true',
    created: Date.now(), lastPlayed: Date.now(), edits: [], position: [0, terrainHeight(0, 0) + .8, 0], peacefulDefaultApplied: true,
  };
  worlds.unshift(world); selectedWorldId = world.id; writeStore(STORAGE.worlds, worlds); enterWorld(world.id);
});

document.querySelector('#lan-join').addEventListener('click', joinLan);
document.querySelector('#server-list').addEventListener('click', (event) => {
  const row = event.target.closest('[data-server-id]');
  if (!row) return;
  selectedServerId = row.dataset.serverId; renderServers();
});
document.querySelector('#server-list').addEventListener('dblclick', () => document.querySelector('#join-server').click());
document.querySelector('#join-server').addEventListener('click', () => {
  const server = servers.find((item) => item.id === selectedServerId);
  if (server) startConnection(server.address);
});
document.querySelector('#edit-server').addEventListener('click', () => {
  const server = servers.find((item) => item.id === selectedServerId);
  if (!server) return;
  editingServerId = server.id;
  document.querySelector('#server-form-title').textContent = 'Edit Server Info';
  document.querySelector('#server-name').value = server.name;
  document.querySelector('#server-address').value = server.address;
  showScreen('server-form');
});
document.querySelector('#delete-server').addEventListener('click', () => {
  const server = servers.find((item) => item.id === selectedServerId);
  if (!server) return;
  openConfirm('Delete Server?', `Remove '${server.name}' from your server list?`, () => {
    servers = servers.filter((item) => item.id !== selectedServerId);
    selectedServerId = servers[0]?.id ?? null; writeStore(STORAGE.servers, servers); renderServers();
  });
});
document.querySelector('#server-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#server-name').value.trim() || 'Minecraft Server';
  const address = document.querySelector('#server-address').value.trim();
  if (!address) return showToast('Enter a server address.');
  if (editingServerId) Object.assign(servers.find((item) => item.id === editingServerId), { name, address });
  else { const server = { id: `server-${Date.now()}`, name, address }; servers.push(server); selectedServerId = server.id; }
  writeStore(STORAGE.servers, servers); renderServers(); showScreen('multiplayer');
});
document.querySelector('#direct-form').addEventListener('submit', (event) => { event.preventDefault(); startConnection(document.querySelector('#direct-address').value); });

document.querySelector('#fov-slider').addEventListener('input', (event) => { settings.fov = Number(event.target.value); saveSettings(); });
document.querySelector('#render-distance').addEventListener('input', (event) => { settings.distance = Number(event.target.value); saveSettings(); });
document.querySelector('#volume-slider').addEventListener('input', (event) => { settings.volume = Number(event.target.value); saveSettings(); });
document.querySelector('#bob-toggle').addEventListener('click', () => { settings.bobbing = !settings.bobbing; saveSettings(); });
document.querySelector('#high-contrast').addEventListener('click', () => { settings.highContrast = !settings.highContrast; saveSettings(); });
document.querySelector('#menu-background').addEventListener('click', () => { settings.blur = !settings.blur; saveSettings(); });
document.querySelector('#auto-jump').addEventListener('click', () => { settings.autoJump = !settings.autoJump; saveSettings(); });
document.querySelector('#narrator').addEventListener('click', () => { settings.narrator = !settings.narrator; saveSettings(); if (settings.narrator) speak('Narrator on'); });
document.querySelector('#reset-settings').addEventListener('click', () => { settings = { ...defaultSettings, language: settings.language }; saveSettings(); showToast('Settings reset'); });
document.querySelector('#fullscreen-toggle').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen();
  } catch { showToast('Fullscreen is unavailable.'); }
  applySettings();
});
document.addEventListener('fullscreenchange', applySettings);
document.querySelector('#language-list').addEventListener('click', (event) => {
  const button = event.target.closest('[data-lang]');
  if (!button) return;
  settings.language = button.dataset.lang; saveSettings();
});

document.querySelector('#confirm-yes').addEventListener('click', () => closeConfirm(true));
document.querySelector('#confirm-no').addEventListener('click', () => closeConfirm(false));
document.querySelector('#game-controls-dialog').addEventListener('click', (event) => {
  if (event.target === document.querySelector('#game-controls-dialog')) closeGameControls();
});
document.querySelector('#hotbar').addEventListener('click', (event) => {
  const slot = event.target.closest('[data-hotbar-index]');
  if (slot) selectHotbar(Number(slot.dataset.hotbarIndex));
});
document.querySelector('#block-grid').addEventListener('click', (event) => {
  const slot = event.target.closest('[data-inventory-block]');
  if (slot) equipBlock(slot.dataset.inventoryBlock);
});
document.querySelector('#block-categories').addEventListener('click', (event) => {
  const tab = event.target.closest('[data-block-category]');
  if (!tab) return;
  inventoryCategory = tab.dataset.blockCategory;
  document.querySelectorAll('[data-block-category]').forEach((button) => {
    button.classList.toggle('selected', button.dataset.blockCategory === inventoryCategory);
  });
  renderInventory();
});
document.querySelector('#block-search').addEventListener('input', renderInventory);
document.querySelector('#crafting-recipes').addEventListener('click', (event) => {
  const button = event.target.closest('[data-recipe]');
  if (button) craftRecipe(Number(button.dataset.recipe));
});
document.querySelector('#open-inventory').addEventListener('click', openInventory);
document.querySelector('#close-inventory').addEventListener('click', closeInventory);

document.addEventListener('pointerlockchange', () => {
  locked = document.pointerLockElement === canvas;
  keys.clear();
  // Embedded browsers often refuse pointer lock. Losing it must not freeze the game;
  // Escape still opens the pause menu when the player wants it.
  if (!locked && suppressPause) suppressPause = false;
});
document.addEventListener('mousemove', (event) => {
  if (!inWorld || currentScreen !== null || inventoryOpen) return;
  player.yaw -= event.movementX * .0022;
  player.pitch -= event.movementY * .0022;
  player.pitch = THREE.MathUtils.clamp(player.pitch, -Math.PI / 2 + .02, Math.PI / 2 - .02);
});
window.addEventListener('keydown', (event) => {
  const movementKey = ({ w: 'KeyW', a: 'KeyA', s: 'KeyS', d: 'KeyD', ArrowUp: 'KeyW', ArrowLeft: 'KeyA', ArrowDown: 'KeyS', ArrowRight: 'KeyD' })[event.key?.toLowerCase?.() || event.key] || ({ ArrowUp: 'KeyW', ArrowLeft: 'KeyA', ArrowDown: 'KeyS', ArrowRight: 'KeyD' })[event.key];
  if (document.querySelector('#confirm-dialog').classList.contains('open') && event.code === 'Escape') return closeConfirm(false);
  if (document.querySelector('#game-controls-dialog')?.classList.contains('open') && event.code === 'Escape') return closeGameControls();
  if (inventoryOpen) {
    if (chestKey) { if (event.code === 'Escape' || event.code === 'KeyE') { event.preventDefault(); closeChest(); } return; }
    if (furnaceOpen) { if (event.code === 'Escape' || event.code === 'KeyE') { event.preventDefault(); closeFurnace(); } return; }
    if (craftingTableOpen) { if (event.code === 'Escape' || event.code === 'KeyE') { event.preventDefault(); closeCraftingTable(); } return; }
    if (event.code === 'Escape' || (event.code === 'KeyE' && event.target !== document.querySelector('#block-search'))) {
      event.preventDefault();
      closeInventory();
    } else if (event.target !== document.querySelector('#block-search') && event.code.startsWith('Digit')) {
      const index = Number(event.code.slice(5)) - 1;
      if (index >= 0 && index < hotbarBlocks.length) selectHotbar(index);
    }
    return;
  }
  if (!inWorld || currentScreen !== null) return;
  if (event.code === 'Space' && !isSurvivalMode() && !event.repeat) {
    const now = performance.now();
    if (now - lastCreativeJump < 320) {
      player.flying = !player.flying;
      player.velocity.y = 0;
      showToast(player.flying ? 'Flying enabled · Space up · Shift down' : 'Flying disabled');
    }
    lastCreativeJump = now;
  }
  if (movementKey) {
    event.preventDefault();
    keys.add(movementKey);
    return;
  }
  if (event.code === 'Escape' && !locked) {
    event.preventDefault(); keys.clear(); showScreen('pause'); return;
  }
  if (event.code === 'KeyE') {
    event.preventDefault();
    if (!event.repeat && targeted && ['chest', 'red_bed', 'red_bed_head', 'crafting_table', 'furnace'].includes(targeted.type)) useTarget();
    else if (!event.repeat) openInventory();
    return;
  }
  if (event.code === 'KeyF' && targeted && ['chest', 'red_bed', 'red_bed_head', 'crafting_table', 'furnace'].includes(targeted.type)) { event.preventDefault(); if (!event.repeat) useTarget(); return; }
  if (event.code === 'KeyT') {
    event.preventDefault();
    if (!event.repeat) editTarget(true);
    return;
  }
  if (event.code === 'KeyR') {
    event.preventDefault();
    if (event.repeat || !isSurvivalMode()) return;
    if (!foodCount) return showToast('No food yet. Defeat a cow, pig, sheep or chicken to collect food.');
    if (player.hunger >= 20) return showToast('Your hunger is full.');
    foodCount--; player.hunger = Math.min(20, player.hunger + 6);
    renderVitals(); saveCurrentWorld(); showToast('Ate food');
    return;
  }
  if (event.code === 'KeyF') {
    event.preventDefault();
    swapOffhand();
    return;
  }
  keys.add(event.code);
  if (event.code.startsWith('Digit')) {
    const index = Number(event.code.slice(5)) - 1;
    if (index >= 0 && index < hotbarBlocks.length) selectHotbar(index);
  }
});
window.addEventListener('keyup', (event) => {
  keys.delete(event.code);
  const movementKey = ({ w: 'KeyW', a: 'KeyA', s: 'KeyS', d: 'KeyD' })[event.key?.toLowerCase?.()];
  if (movementKey) keys.delete(movementKey);
  const arrowKey = ({ ArrowUp: 'KeyW', ArrowLeft: 'KeyA', ArrowDown: 'KeyS', ArrowRight: 'KeyD' })[event.key];
  if (arrowKey) keys.delete(arrowKey);
});
document.addEventListener('mousedown', (event) => {
  if (event.target !== canvas) return;
  canvas.focus({ preventScroll: true });
  if (!locked && inWorld && currentScreen === null && !inventoryOpen && event.target === canvas) {
    canvas.requestPointerLock()?.catch(() => showToast('Mouse capture is unavailable in this browser.'));
  }
  if (!inWorld || currentScreen !== null || inventoryOpen) return;
  if (event.button === 0 && !attackMob()) editTarget(false);
  if (event.button === 2) useTarget();
});
document.addEventListener('contextmenu', (event) => { if (locked) event.preventDefault(); });
document.addEventListener('wheel', (event) => {
  if (!locked || !inWorld || currentScreen !== null) return;
  selectHotbar(selectedHotbarIndex + (event.deltaY > 0 ? 1 : -1));
}, { passive: true });

// Touch buttons support multiple simultaneous fingers; drag the world to look around.
document.querySelectorAll('[data-move]').forEach((button) => {
  const release = (event) => { keys.delete(button.dataset.move); if (button.hasPointerCapture(event.pointerId)) button.releasePointerCapture(event.pointerId); };
  button.addEventListener('pointerdown', (event) => { event.preventDefault(); button.setPointerCapture(event.pointerId); keys.add(button.dataset.move); });
  button.addEventListener('pointerup', release);
  button.addEventListener('pointercancel', release);
});
document.querySelectorAll('[data-touch]').forEach((button) => button.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  if (!inWorld || currentScreen !== null || inventoryOpen) return;
  const action = button.dataset.touch;
  if (action === 'jump') { keys.add('Space'); button.setPointerCapture(event.pointerId); }
  else if (action === 'mine') { if (!attackMob()) editTarget(false); }
  else if (action === 'place') editTarget(true);
  else if (action === 'use') useTarget();
  else if (action === 'inventory') openInventory();
  else if (action === 'pause') { keys.clear(); showScreen('pause'); }
  else if (action === 'eat') {
    if (foodCount && player.hunger < 20) { foodCount--; player.hunger = Math.min(20, player.hunger + 6); renderVitals(); saveCurrentWorld(); showToast('Ate food'); }
    else showToast(foodCount ? 'Your hunger is full.' : 'Collect food from animals first.');
  }
}));
document.querySelector('[data-touch="jump"]').addEventListener('pointerup', () => keys.delete('Space'));
document.querySelector('[data-touch="jump"]').addEventListener('pointercancel', () => keys.delete('Space'));
let touchLook = null;
canvas.addEventListener('pointerdown', (event) => { if (event.pointerType === 'touch' && inWorld && currentScreen === null && !inventoryOpen) { event.preventDefault(); touchLook = { id: event.pointerId, x: event.clientX, y: event.clientY }; canvas.setPointerCapture(event.pointerId); } });
canvas.addEventListener('pointermove', (event) => {
  if (!touchLook || touchLook.id !== event.pointerId) return;
  player.yaw -= (event.clientX - touchLook.x) * .006;
  player.pitch = THREE.MathUtils.clamp(player.pitch - (event.clientY - touchLook.y) * .006, -Math.PI / 2 + .02, Math.PI / 2 - .02);
  touchLook.x = event.clientX; touchLook.y = event.clientY;
});
canvas.addEventListener('pointerup', (event) => { if (touchLook?.id === event.pointerId) touchLook = null; });
canvas.addEventListener('pointercancel', () => { touchLook = null; });

const clock = new THREE.Clock();
let worldTime = 65;
let nextAnimalSpawn = 0;
function animate() {
  const delta = Math.min(clock.getDelta(), .05);
  if (dozen?.active) {
    dozen.update(delta);
    dozen.render();
    requestAnimationFrame(animate);
    return;
  }
  if (parkour?.active) {
    parkour.update(delta);
    parkour.render();
    requestAnimationFrame(animate);
    return;
  }
  const elapsed = clock.elapsedTime;
  if (lan.source && inWorld && elapsed - lan.lastSent > .15) { lan.lastSent = elapsed; lanSend('move', { position: player.position.toArray(), yaw: player.yaw, name: lan.name }); }
  if (inWorld && currentScreen === null && !inventoryOpen) {
    movePlayer(delta);
    player.hurtCooldown = Math.max(0, player.hurtCooldown - delta);
  }

  if (inWorld) {
    worldTime += delta;
    updateMobs(delta, elapsed);
    flowWater(elapsed);
    if (elapsed >= nextAnimalSpawn) { spawnNearPlayer(); nextAnimalSpawn = elapsed + 15; }
    if (isSurvivalMode() && isPeaceful()) {
      if (player.hunger !== 20) { player.hunger = 20; renderVitals(); }
      if (player.health < 20) { player.regenClock += delta; if (player.regenClock >= 2) { player.health = Math.min(20, player.health + 1); player.regenClock = 0; renderVitals(); } }
    } else if (inWorld && currentScreen === null && !inventoryOpen && isSurvivalMode()) {
      player.regenClock += delta;
      if (player.hunger >= 18 && player.health < 20 && player.regenClock >= 5) {
        player.health = Math.min(20, player.health + 1);
        player.hunger = Math.max(0, player.hunger - 1);
        player.regenClock = 0;
        renderVitals();
      } else if (player.hunger === 0 && player.regenClock >= 4) {
        takeDamage(1, 'starvation');
        player.regenClock = 0;
      }
    }
    if (locked && settings.bobbing && (keys.has('KeyW') || keys.has('KeyA') || keys.has('KeyS') || keys.has('KeyD'))) walkTime += delta * 10;
    const bob = locked && settings.bobbing ? Math.sin(walkTime) * .028 : 0;
    camera.position.copy(player.position).add(new THREE.Vector3(0, (player.sneaking ? 1.27 : 1.55) + bob, 0));
    camera.rotation.set(player.pitch, player.yaw, 0);
    viewModel.visible = locked;
    handSwing = Math.max(0, handSwing - delta * 4.8);
    const swing = Math.sin(handSwing * Math.PI);
    rightArm.rotation.x = -.42 - swing * 1.05;
    rightArm.rotation.z = .22 - swing * .32;
    leftArm.position.y = Math.sin(walkTime + Math.PI) * .015;
  } else {
    viewModel.visible = false;
    const radius = 18;
    camera.position.set(Math.cos(elapsed * .035) * radius, 12.5, Math.sin(elapsed * .035) * radius);
    camera.lookAt(0, 3.8, 0);
  }

  const worldPosition = inWorld ? player.position : new THREE.Vector3(0, 0, 0);
  const cx = Math.floor(worldPosition.x / CHUNK);
  const cz = Math.floor(worldPosition.z / CHUNK);
  const chunkKey = `${cx},${cz},${renderDistance}`;
  if (chunkKey !== lastChunk) { lastChunk = chunkKey; generateWorld(cx, cz); }

  const biomeId = biomeAt(worldPosition.x, worldPosition.z);
  const biome = BIOMES[biomeId];
  const skyTarget = new THREE.Color(biome.sky);
  scene.background.lerp(skyTarget, .02);
  scene.fog.color.lerp(new THREE.Color(biome.fog), .02);
  const biomeLabel = document.querySelector('#biome-label');
  if (biomeLabel) biomeLabel.textContent = biome.label;
  const dayPhase = (worldTime % 240) / 240;
  const sunAngle = dayPhase * Math.PI * 2;
  const daylight = THREE.MathUtils.clamp(Math.sin(sunAngle) * .75 + .45, .22, 1);
  sun.intensity = 2.4 * daylight;
  hemi.intensity = 1.25 + daylight * .85;
  sun.position.set(worldPosition.x + Math.cos(sunAngle) * 42, 12 + Math.sin(sunAngle) * 38, worldPosition.z + 20);
  sun.target.position.copy(worldPosition);
  const dayLabel = document.querySelector('#day-label');
  if (dayLabel) dayLabel.textContent = `Day ${Math.floor(worldTime / 240) + 1}`;
  if (inWorld && currentScreen === null && !inventoryOpen) updateTarget(); else { selectionBox.visible = false; document.querySelector('#block-label').classList.remove('visible'); }
  document.querySelector('#coordinates').textContent = `${Math.floor(player.position.x)} / ${Math.floor(player.position.y)} / ${Math.floor(player.position.z)}`;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

writeStore(STORAGE.worlds, worlds);
writeStore(STORAGE.servers, servers);
applySettings();
renderWorlds();
renderServers();
buildInventory();
applyProductionScope();
renderLauncher();
generateWorld(0, 0);
animate();
const requestedGame = new URLSearchParams(location.search).get(LAUNCH_PARAM);
if (import.meta.env.DEV) window.__world = { generateWorld, placedStructures, terrainHeight, biomeAt, player, enterWorld, worlds, blocks, villageLocations, scene, findVillageSite, placeVillage, hasNaturalLand, isStructureAreaFree };
if (requestedGame && GAMES[requestedGame]) launchGame(requestedGame);
else requestAnimationFrame(() => document.querySelector('#launcher-screen [data-autofocus]')?.focus({ preventScroll: true }));
