# Blockbound — Game Launcher

A browser game launcher built with Vite + three.js. Two playable games live behind one
menu:

- **Minecraft** — a fan-made voxel world with survival/creative/peaceful modes, mining,
  building, crafting, mobs, procedural structures (villages, outposts, shipwrecks, …)
  and deterministic worlds saved in the browser.
- **Parkour Obby** — an endless Roblox-style obstacle course: three to five checkpoints
  per level, moving platforms, lava, timer, per-level best times, rotating visual
  themes and simulated online players who actually run, fall and respawn.
- **12 Dozen** — a 3D math platformer with **twelve levels** and a math question at
  every gate: step on `+ − × ÷` pads for **math powers** (multiples of 3 climb, 4 push,
  5 swim, 9 jump tall, negatives flip gravity), then choose the right answer from the
  answer pads. Targets include 24, 72 and the final **156 = 12 odd dozen (12 × 13)**.
  Best time saved per level.
- **Jelly Run 2048** — a 3D merge-runner in the spirit of Jelly Run 2048 with **seven
  themed stages** that double the target every time (32 → 64 → 128 → 256 → 512 → 1024 →
  2048): auto-run the jelly lane, switch tracks, merge matching number cubes to double,
  dodge the pink blockers, and split in half if you hit the wrong number. 3 hearts; best
  jelly saved per stage, with an explicit “next goal” button after each clear.
- **Kart Rush** — an original 3D kart-racing tribute to Mario Kart with **three
  circuits** and a full race loop: 3-2-1 countdown, three laps, boost pads, item-box
  turbo charges, and three AI rivals that follow the racing line with rubber-banding.
  Best lap/race saved per circuit; finish one race to unlock the next circuit button.
- **Super Block Bros.** — an original side-scrolling platformer tribute to Super Mario
  Bros. with **five hand-built levels**: run, jump, bonk coin blocks, stomp angry blobs,
  hit the checkpoint and raise the flag with 3 lives. The jump arc now clears block tops
  and every pit; best flag time saved per level.
- **Neon Dash** — an original Geometry Dash–style one-button auto-runner with **three
  neon courses** packed with spikes, spinning and bobbing saw blades, hanging ceiling
  spikes, death pits, three-block gaps, floating platforms you can land on, rideable
  moving lifts and air portals: tap/space to jump, crash restarts instantly, attempts and best progress
  saved per level.
- **Road Hopper** — a Crossy Road–style endless desktop time-killer: hop a blocky
  character across grass and traffic, dodge cars, and push your lane count as high as
  possible. WASD / arrows / Space; best run saved.
- **Blockbound Studio** — a 3D modeling sandbox, not a game: add boxes, spheres,
  cylinders, cones, tori and wedges; **drag parts directly in the viewport** (Shift-drag
  to lift), or move/rotate/scale on X/Y/Z axles; change
  colours and finishes; start from console, controller, car, house or room templates;
  save designs, export JSON and snapshots. Build anything from a games console to a
  whole house interior.

These are original tributes: no Nintendo characters, sprites, music or other assets
are used.

Live sites:

- **HTTPS (Railway): https://blockbound-production.up.railway.app/**
- GitHub Pages (HTTP only): http://yichen.net/blockbound/

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
- `M` or the **2D** button — top-down map of the whole course (run pauses)

Math powers come from the number on your block:

| Power | Rule | Used for |
| --- | --- | --- |
| Climb | multiple of 3 | scaling the green wall |
| Push | multiple of 4 | shoving the crate off the bridge |
| Swim | multiple of 5 | crossing the pool (25 from 24 + 1) |
| Tall jump | multiple of 9 | leaping to the high gold ledge |
| Upside down | negative number | walking the ceiling at `-72` |
- `R` — reset to the last gate checkpoint
- `ESC` — pause menu
- On touch devices use the on-screen D-pad and JUMP button.

## Jelly Run 2048 controls

- `A` / `D` or `←` / `→` — switch lane
- `SPACE` — jump over pink jelly blockers
- `R` — restart the run · `ESC` — pause
- Touch: ◀ / JUMP / ▶ buttons, or swipe left/right and up.

## Kart Rush controls

- `W` / `S` — accelerate / brake · `A` / `D` — steer
- `SPACE` — spend a boost item (collected from spinning boxes)
- `R` — restart race · `ESC` — pause
- Touch: ◀ / BOOST / ▶ buttons; swipe left/right to steer.

## Super Block Bros. controls

- `A` / `D` or `←` / `→` — run · `SPACE` — jump
- `R` — restart level · `ESC` — pause
- Touch: ◀ / JUMP / ▶ buttons.

## Neon Dash controls

- `SPACE` / `W` / `↑` / click / tap — jump (hold to auto-jump on landing)
- `R` — restart level · `ESC` — pause
- Touch: JUMP button.

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
