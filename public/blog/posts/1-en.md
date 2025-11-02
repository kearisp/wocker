# Project Deployment Example

This guide shows how to deploy a project with **wocker** using the
[timer](https://github.com/kearisp/timer) repository as an example. We’ll go from cloning the repo to starting the
stack, explain what each command does, and share a few troubleshooting tips.

## 1) Clone the repository

```shell
git clone https://github.com/kearisp/timer.git
cd timer
```

- Clones the code locally and moves into the project directory.

## 2) Initialize wocker for the project

```shell
ws init
```

- Generates the baseline `.wocker` configuration (containers, services, environment templates).
- Detects common tech stacks and suggests defaults where possible.
- Safe to run multiple times; it will not destroy your work.

## 3) Mount your source code into the container

```shell
ws volume:mount ./:/var/www/html
```

- Binds the current directory (`./`) to `/var/www/html` inside the container.
- This enables live‑reload workflows: edits on your host become visible to the running services immediately.
- You can list existing mounts later via:

```shell
ws volumes
```

## 4) Start the project

```shell
ws start
```

- Pulls/builds required images if missing.
- Creates networks, volumes, and starts all defined services.
- On first start, this may take a bit longer due to image pulls and dependency setup.

### Checking status and logs

After `ws start`, you can verify everything is healthy:

```shell
ws ps                     # list running projects
ws logs                   # show logs for the project in the current directory
ws logs -n=<project-name> # show logs for a project by its name (run from any directory)
```

If something fails to start, use the diagnostic commands instead:

- `ws logs` — view logs for the project in the current directory.
- `ws logs -n=<project-name>` — view logs for a project by name from any directory.
- `ws ps` — check which projects are running.

### Stopping and cleaning up

```shell
ws stop          # stop this project
```

---

The short screen‑capture below demonstrates the flow from init to start:

<video style="max-width: 100%" controls>
<source type="video/mp4" src="/blog/posts/1-1.mp4" />
</video>
