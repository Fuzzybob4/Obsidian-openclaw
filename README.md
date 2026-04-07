# OpenClaw Mission Control

This is a Next.js starter shell that uses the exact generated Mission Control images as the visual basis for the app.

## Included
- Main map screen
- Room detail pages for all generated rooms
- Static room metadata to help Kal or a developer wire real services later
- Public image assets already organized in `/public/rooms`

## Run locally
```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Recommended next build steps
1. Add authentication and organization scoping.
2. Move `data/rooms.ts` into a database or CMS.
3. Wire real metrics into:
   - Command Bridge
   - Finance Tower
   - Operations Deck
   - Texting Mission Control HQ
4. Add agent routing and task execution logic.
5. Add archive auto-capture and research ingestion.

## GitHub workflow
Create a new repo, then copy this project into it:
```bash
git init
git add .
git commit -m "Initial Mission Control prototype"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## Notes
- Images are intentionally used exactly as provided.
- The current app is a polished prototype shell, not yet a live data system.
