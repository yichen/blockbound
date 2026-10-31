const titleCase = (id) => id
  .split('_')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

const shade = (hex, amount) => {
  const value = Number.parseInt(hex.slice(1), 16);
  const channel = (shift) => Math.max(0, Math.min(255, ((value >> shift) & 255) + amount));
  return `#${[16, 8, 0].map((shift) => channel(shift).toString(16).padStart(2, '0')).join('')}`;
};

const catalog = [];
const add = (id, color, category, options = {}) => {
  catalog.push({
    id,
    label: options.label || titleCase(id),
    color,
    accent: options.accent || shade(color, -24),
    category,
    transparent: Boolean(options.transparent),
  });
};

[
  ['grass_block', '#698546'], ['dirt', '#765039'], ['coarse_dirt', '#6b4934'],
  ['podzol', '#59422d'], ['mycelium', '#6f616a'], ['rooted_dirt', '#725239'],
  ['mud', '#3e4245'], ['packed_mud', '#876e50'], ['mud_bricks', '#8a684c'],
  ['clay', '#9ca6ad'], ['gravel', '#77736f'], ['sand', '#d9ca8c'],
  ['red_sand', '#b9652e'], ['suspicious_sand', '#cdbc80'], ['suspicious_gravel', '#77716d'],
  ['snow_block', '#edf3f3'], ['powder_snow', '#f2f7f7'], ['ice', '#7dafdf'],
  ['packed_ice', '#5d93cf'], ['blue_ice', '#3f74cc'], ['moss_block', '#617d31'],
  ['moss_carpet', '#6e8b38'], ['calcite', '#ddd9cf'], ['tuff', '#59625d'],
  ['dripstone_block', '#866858'], ['pointed_dripstone', '#8e6d58'], ['magma_block', '#9a3f1f'],
  ['obsidian', '#252033'], ['crying_obsidian', '#392260'], ['netherrack', '#703538'],
  ['soul_sand', '#4b3a31'], ['soul_soil', '#40342e'], ['basalt', '#48474a'],
  ['smooth_basalt', '#55545a'], ['blackstone', '#29272c'], ['end_stone', '#d8d89c'],
  ['sculk', '#0c3439'], ['sculk_catalyst', '#174950'],
].forEach(([id, color]) => add(id, color, 'Natural', {
  transparent: ['ice', 'powder_snow'].includes(id),
}));

[
  ['stone', '#7c817c'], ['cobblestone', '#6f736f'], ['mossy_cobblestone', '#63715a'],
  ['smooth_stone', '#969a96'], ['stone_bricks', '#787b78'], ['mossy_stone_bricks', '#697261'],
  ['cracked_stone_bricks', '#70736f'], ['chiseled_stone_bricks', '#777a76'],
  ['deepslate', '#4c5052'], ['cobbled_deepslate', '#45494b'], ['polished_deepslate', '#55595a'],
  ['deepslate_bricks', '#414547'], ['cracked_deepslate_bricks', '#3e4244'],
  ['deepslate_tiles', '#353a3c'], ['cracked_deepslate_tiles', '#34383a'],
  ['chiseled_deepslate', '#414648'], ['andesite', '#858786'], ['polished_andesite', '#929493'],
  ['diorite', '#b5b5b1'], ['polished_diorite', '#c0c0bb'], ['granite', '#9a6858'],
  ['polished_granite', '#a87362'], ['bricks', '#965746'], ['prismarine', '#65a394'],
  ['prismarine_bricks', '#6cb2a2'], ['dark_prismarine', '#315d50'], ['sea_lantern', '#b8d6c8'],
  ['quartz_block', '#e5e0d5'], ['smooth_quartz', '#eee9df'], ['quartz_bricks', '#ded9ce'],
  ['chiseled_quartz', '#ddd8cd'], ['purpur_block', '#a276a4'], ['purpur_pillar', '#a77baa'],
  ['end_stone_bricks', '#c9ca8e'],
].forEach(([id, color]) => add(id, color, 'Stone'));

const woodFamilies = [
  ['oak', '#9a7546', '#55713c'],
  ['spruce', '#65482d', '#365536'],
  ['birch', '#c4b77b', '#6f8548'],
  ['jungle', '#9a7047', '#4c753b'],
  ['acacia', '#a85b39', '#62713b'],
  ['dark_oak', '#4c3524', '#30472f'],
  ['mangrove', '#743d37', '#4b693f'],
  ['cherry', '#d39b94', '#d58391'],
  ['pale_oak', '#c2bfb1', '#81907c'],
  ['crimson', '#713749', '#8b3153'],
  ['warped', '#2f7772', '#1f8b78'],
  ['bamboo', '#c0a845', '#7d9341'],
];

const woodVariants = [
  ['planks', 8], ['log', -22], ['stripped_log', 12], ['wood', -30],
  ['stripped_wood', 2], ['leaves', 0], ['stairs', 6], ['slab', 10],
  ['fence', -2], ['fence_gate', -5], ['door', 4], ['trapdoor', -4],
  ['pressure_plate', 12], ['button', -12], ['sign', 14], ['hanging_sign', -8],
];

for (const [family, woodColor, leafColor] of woodFamilies) {
  for (const [variant, offset] of woodVariants) {
    let id = `${family}_${variant}`;
    let color = shade(woodColor, offset);
    let label;
    if (variant === 'leaves') {
      color = leafColor;
      label = family === 'crimson'
        ? 'Nether Wart Block'
        : family === 'warped'
          ? 'Warped Wart Block'
          : family === 'bamboo'
            ? 'Bamboo Shoots'
            : `${titleCase(family)} Leaves`;
    }
    if (family === 'crimson' || family === 'warped') {
      id = id
        .replace('_stripped_log', '_stripped_stem')
        .replace('_log', '_stem')
        .replace('_stripped_wood', '_stripped_hyphae')
        .replace('_wood', '_hyphae');
    }
    if (family === 'bamboo') {
      id = id
        .replace('bamboo_stripped_log', 'stripped_bamboo_block')
        .replace('bamboo_log', 'bamboo_block')
        .replace('bamboo_stripped_wood', 'chiseled_bamboo')
        .replace('bamboo_wood', 'bamboo_mosaic');
    }
    add(id, color, 'Wood', {
      label,
      accent: shade(color, variant === 'leaves' ? 24 : -28),
      transparent: variant === 'leaves',
    });
  }
}

const dyes = [
  ['white', '#e7e7df'], ['light_gray', '#9d9d97'], ['gray', '#51565a'], ['black', '#25282c'],
  ['brown', '#754b2f'], ['red', '#a12e32'], ['orange', '#d66a21'], ['yellow', '#e5bd27'],
  ['lime', '#70ae32'], ['green', '#4d6f2a'], ['cyan', '#238693'], ['light_blue', '#54a7cf'],
  ['blue', '#354d9a'], ['purple', '#713c91'], ['magenta', '#a94ca7'], ['pink', '#d27b99'],
];

for (const [dye, color] of dyes) {
  add(`${dye}_wool`, color, 'Colored');
  add(`${dye}_terracotta`, shade(color, -12), 'Colored', { accent: '#704c3e' });
  add(`${dye}_concrete`, shade(color, 6), 'Colored');
}

add('glass', '#b9d8db', 'Glass', { accent: '#edfafa', transparent: true });
for (const [dye, color] of dyes) {
  add(`${dye}_stained_glass`, color, 'Glass', { accent: shade(color, 32), transparent: true });
}

[
  ['coal_ore', '#666966'], ['deepslate_coal_ore', '#444849'],
  ['iron_ore', '#8d8177'], ['deepslate_iron_ore', '#5c5652'],
  ['copper_ore', '#8a7567'], ['deepslate_copper_ore', '#5b5651'],
  ['gold_ore', '#8b8161'], ['deepslate_gold_ore', '#5d584b'],
  ['redstone_ore', '#776466'], ['deepslate_redstone_ore', '#51484a'],
  ['emerald_ore', '#6d8273'], ['deepslate_emerald_ore', '#4b5850'],
  ['lapis_ore', '#606d83'], ['deepslate_lapis_ore', '#48505d'],
  ['diamond_ore', '#6c8b8a'], ['deepslate_diamond_ore', '#4b6060'],
  ['nether_gold_ore', '#82463b'], ['nether_quartz_ore', '#864d4d'],
  ['coal_block', '#252729'], ['raw_iron_block', '#9a806c'], ['iron_block', '#c5c7c2'],
  ['raw_copper_block', '#9c684b'], ['copper_block', '#b46847'], ['raw_gold_block', '#c29a42'],
  ['gold_block', '#e1b82f'], ['redstone_block', '#a11c16'], ['emerald_block', '#27a65d'],
  ['lapis_block', '#27549e'], ['diamond_block', '#45bfc2'], ['netherite_block', '#454043'],
].forEach(([id, color]) => add(id, color, 'Minerals', {
  accent: id.includes('ore') ? shade(color, 38) : shade(color, -30),
}));

add('water', '#3f76c7', 'Natural', { transparent: true });
add('chest', '#9c6a32', 'Wood');
add('crafting_table', '#a57843', 'Wood');
add('furnace', '#777777', 'Stone');
add('iron_ingot', '#d8d8d8', 'Minerals');
add('gold_ingot', '#e1b935', 'Minerals');
add('copper_ingot', '#bd754e', 'Minerals');
add('red_bed', '#b52b2b', 'Colored');
add('bedrock', '#484848', 'Stone');
add('dirt_path', '#896b45', 'Natural');
add('bell', '#d9aa2f', 'Structures');
add('blast_furnace', '#55585a', 'Structures');
add('grindstone', '#77736f', 'Structures');
[
  ['cobblestone_slab', '#6f736f'], ['cobblestone_stairs', '#6f736f'], ['cobblestone_wall', '#6f736f'],
  ['stone_slab', '#969a96'], ['stone_brick_slab', '#787b78'], ['stone_brick_stairs', '#787b78'],
  ['torch', '#dfb45a'], ['redstone_torch', '#a72b22'], ['white_carpet', '#e7e7df'], ['light_gray_carpet', '#9d9d97'], ['white_wall_banner', '#e7e7df'],
].forEach(([id, color]) => add(id, color, 'Structures'));


if (new Set(catalog.map((block) => block.id)).size !== catalog.length) {
  throw new Error('Duplicate block IDs in the catalog.');
}

export const BLOCK_CATALOG = Object.freeze(catalog);
export const BLOCKS = Object.freeze({ ...Object.fromEntries(catalog.map((block) => [block.id, block])), red_bed_head: { ...catalog.find((block) => block.id === 'red_bed'), id: 'red_bed_head' } });
export const BLOCK_CATEGORIES = Object.freeze(['All', ...new Set(catalog.map((block) => block.category))]);
