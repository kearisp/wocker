# CLAUDE.md

This file provides guidance to Claude Code when working in this `docs/` directory.

## Execution Environment

The docs site runs inside a Docker container managed by `ws` (the `wocker` CLI, installed globally on the host). All `npm` commands **must** be run through `ws exec` from this directory, not directly on the host:

```bash
ws exec npm start          # Vite dev server
ws exec npm run build      # Production build
ws exec npm run preview    # Preview the production build
```

Running `npm` directly on the host bypasses the container's environment and dependencies — don't do it.
