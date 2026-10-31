// A block is centered on each integer coordinate. Find solid ground with two
// empty blocks above it, close to the player's height and in loaded terrain.
export function findMobGround(getBlock, bounds, x, z, height, range = 3) {
  const bx = Math.floor(x + .5);
  const bz = Math.floor(z + .5);
  if (bx < bounds.minX || bx >= bounds.maxX || bz < bounds.minZ || bz >= bounds.maxZ) return null;
  const start = Math.floor(height + .5);
  for (let y = start + range; y >= start - range; y--) {
    const ground = getBlock(bx, y, bz);
    if (ground && !ground.includes('leaves') && !getBlock(bx, y + 1, bz) && !getBlock(bx, y + 2, bz)) return y + .5;
  }
  return null;
}
