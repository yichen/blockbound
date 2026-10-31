# Blockbound — Game Launcher

A browser game launcher built with Vite + three.js. Two playable games live behind one
menu:

- **Minecraft** — a fan-made voxel world with survival/creative/peaceful modes, mining,
  building, crafting, mobs, procedural structures (villages, outposts, shipwrecks, …)
  and deterministic worlds saved in the browser.
- **Parkour Obby** — an endless Roblox-style obstacle course: three to five checkpoints
  per level, moving platforms, lava, timer, per-level best times, rotating visual
  themes and simulated online players who actually run, fall and respawn.

There is also a shared-world LAN mode for local development (see below).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

The Vite dev server includes the LAN multiplayer plugin, so "Join a World" only works
when running through `npm run dev` on the same Wi-Fi network.

## Production build

```bash
npm run build      # outputs dist/
npm run preview    # serves the production build locally
```

## Deploy

The repository includes a `vercel.json` for Vercel and builds as a pure static site.

```bash
vercel deploy --prod
```

For Netlify, use build command `npm run build` and publish directory `dist`.
For any static host, upload the contents of `dist/` and serve at the domain root (the
app uses absolute `/textures`, `/fonts` and `/assets` paths).

## Notes

- Progress (worlds, parkour level progress, best times, settings) is stored in
  `localStorage` — per browser, no account required.
- LAN multiplayer is development-only; the public build hides the "Join a World" entry.
- Not affiliated with Mojang, Microsoft or Roblox. Fan-built demo.
