import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { BLOCKS } from './src/blocks.js';

// One shared local world, separate from the browser's single-player saves.
function localWorld() {
  const worldPath = path.resolve('.lan-world.json');
  const clients = new Map();
  const positions = new Map();
  let edits = new Map();
  try { edits = new Map(JSON.parse(fs.readFileSync(worldPath, 'utf8')).edits); } catch { /* A new world starts empty. */ }
  const broadcast = (data) => {
    const frame = `data: ${JSON.stringify(data)}\n\n`;
    for (const response of clients.values()) response.write(frame);
  };
  function readBody(request) {
    return new Promise((resolve, reject) => {
      let body = '';
      request.on('data', (part) => { body += part; if (body.length > 16384) request.destroy(); });
      request.on('end', () => { try { resolve(JSON.parse(body)); } catch { reject(new Error('Invalid request')); } });
      request.on('error', reject);
    });
  }
  return {
    name: 'local-multiplayer-world',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://localhost');
        if (url.pathname === '/.lan-world.json') { res.writeHead(404).end(); return; }
        if (!url.pathname.startsWith('/lan/')) return next();
        const id = url.searchParams.get('id');
        if (!id || !/^[a-zA-Z0-9-]{1,64}$/.test(id)) { res.writeHead(400).end(); return; }
        if (req.method === 'GET' && url.pathname === '/lan/events') {
          if (clients.has(id)) clients.get(id).end();
          res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
          clients.set(id, res);
          res.write(`data: ${JSON.stringify({ type: 'snapshot', edits: [...edits], players: [...positions] })}\n\n`);
          req.on('close', () => { if (clients.get(id) === res) { clients.delete(id); positions.delete(id); broadcast({ type: 'leave', id }); } });
          return;
        }
        if (req.method !== 'POST' || !clients.has(id)) { res.writeHead(400).end(); return; }
        try {
          const data = await readBody(req);
          if (url.pathname === '/lan/move' && Array.isArray(data.position) && data.position.length === 3 && data.position.every(n => Number.isFinite(n) && Math.abs(n) < 100000) && Number.isFinite(data.yaw)) {
            const player = { position: data.position, yaw: data.yaw, name: String(data.name || 'Player').slice(0, 16) };
            positions.set(id, player); broadcast({ type: 'move', id, player });
          } else if (url.pathname === '/lan/edit' && /^-?\d{1,5},-?\d{1,5},-?\d{1,5}$/.test(data.key) && (data.block === null || Object.hasOwn(BLOCKS, data.block))) {
            edits.set(data.key, data.block);
            fs.writeFileSync(worldPath, JSON.stringify({ edits: [...edits] }));
            broadcast({ type: 'edit', key: data.key, block: data.block });
          } else { res.writeHead(400).end(); return; }
          res.writeHead(204).end();
        } catch { res.writeHead(400).end(); }
      });
    },
  };
}
export default defineConfig({ plugins: [localWorld()] });
