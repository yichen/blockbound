# Blockbound — Game Launcher

A browser game launcher built with Vite + three.js. Two playable games live behind one
menu:

- **Minecraft** — a fan-made voxel world with survival/creative/peaceful modes, mining,
  building, crafting, mobs, procedural structures (villages, outposts, shipwrecks, …)
  and deterministic worlds saved in the browser.
- **Parkour Obby** — an endless Roblox-style obstacle course: three to five checkpoints
  per level, moving platforms, lava, timer, per-level best times, rotating visual
  themes and simulated online players who actually run, fall and respawn.
- **12 Dozen** — a 3D math platformer: you start as the number 12, step on `+ − × ÷`
  pads to change your value, and pass gates that only open at exactly **24**, **72**
  and **144** (a dozen dozens). Timed runs, best time saved.

Live site (GitHub Pages): https://yichen.github.io/blockbound/

There is also a shared-world LAN mode for local development (see below).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

The Vite dev server includes the LAN multiplayer plugin, so "Join a World" only works
when running through `npm run dev` on the same Wi-Fi network.

## 12 Dozen controls

- `W` `A` `S` `D` or arrow keys — move (it is a 3D game but uses a fixed chase camera)
- `SPACE` — jump
- `R` — reset to the last gate checkpoint
- `ESC` — pause menu
- On touch devices use the on-screen D-pad and JUMP button.

## Production build

```bash
npm run build      # outputs dist/
npm run preview    # serves the production build locally
```

## Deploy

### AWS Amplify Hosting

This repo includes `amplify.yml` and `scripts/deploy-amplify.sh` for Amplify Hosting.

Git-based deploy: AWS Console → Amplify → Host web app → GitHub → repository
`yichen/blockbound`, branch `main`. The included `amplify.yml` builds `dist/`.

CLI deploy (manual zip, no Git connection):

```bash
aws configure          # or: export AWS_PROFILE=...
./scripts/deploy-amplify.sh
```

The script creates the `blockbound` Amplify app/branch if needed, uploads the build,
waits for the deployment job and prints the `https://<branch>.<app-id>.amplifyapp.com`
URL. The build is also available as `blockbound-amplify.zip` for Amplify's
"Deploy without Git" upload.

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
