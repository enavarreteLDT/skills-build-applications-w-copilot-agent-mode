# OctoFit Tracker frontend

React 19 presentation tier powered by Vite.

## Configuration

In Codespaces, define `VITE_CODESPACE_NAME` in `.env.local`. The frontend then uses `https://$VITE_CODESPACE_NAME-8000.app.github.dev/api/`. When the variable is unset, it safely falls back to `http://localhost:8000/api/`.

Start the frontend with `npm run dev` on port 5173.