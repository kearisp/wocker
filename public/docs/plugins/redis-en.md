# Redis

## Commands

```shell
ws redis [service]
ws redis:create [service] [-h <host>] [-s <storage>] [-i <image>] [--container-port <port>] [-p <password>]
ws redis:upgrade [service] [-s <storage>] [-v <volume>] [-i <image>] [--container-port <port>] [-p <password>] [--enable-admin] [--disable-admin]
ws redis:destroy <service> [-f|--force] [-y|--yes]
ws redis:start [service] [-r|--restart]
ws redis:stop [service]
ws redis:use [service]
ws redis:ls
ws redis:set-domain <domain>
```

Manage Redis services in your Wocker workspace: create, start/stop, set default, upgrade, and browse them through the built-in admin interface (Redis Commander).

## Installation

```shell
ws plugin:install redis
```

## Quick start

```shell
# 1) Create a service
ws redis:create mycache -p secret

# 2) Set as default
ws redis:use mycache

# 3) Start it (and open admin)
ws redis:start

# 4) Connect to the redis-cli shell
ws redis
```

## Commands

```shell
# Interact with a service (redis-cli inside the container)
ws redis [service]

# Create/upgrade/destroy service
ws redis:create [service] [-h <host>] [-s <storage>] [-i <image>] [--container-port <port>] [-p <password>]
ws redis:upgrade [service] [-s <storage>] [-v <volume>] [-i <image>] [--container-port <port>] [-p <password>] [--enable-admin] [--disable-admin]
ws redis:destroy <service> [-f|--force] [-y|--yes]

# Manage lifecycle
ws redis:start [service] [-r|--restart]
ws redis:stop [service]

# Set default service
ws redis:use [service]

# List all services
ws redis:ls

# Change the admin (Redis Commander) domain
ws redis:set-domain <domain>
```

## Options reference

- redis:create
  - `-h, --host <host>` — external Redis host. If provided, the service is treated as external: no Docker container is created for it, but it's still listed in the admin interface (Redis Commander).
  - `-s, --storage <storage>` — storage type: `volume` or `filesystem`. Ignored for external services; defaults to `filesystem` for local ones.
  - `-i, --image <image>` — Docker image name with tag (e.g. `redis:7-alpine`). Defaults to `redis:8.6.2`.
  - `--container-port <port>` — port exposed by the container on the host (maps to the container's `6379`).
  - `-p, --password <password>` — password to protect the service with (sets `redis-server --requirepass`).

- redis:upgrade
  - `-s, --storage <storage>` — change storage type: `volume` or `filesystem`.
  - `-v, --volume <volume>` — volume name (used when storage is `volume`).
  - `-i, --image <image>` — Docker image name with tag (e.g. `redis:7-alpine`).
  - `--container-port <port>` — port exposed by the container on the host.
  - `-p, --password <password>` — password to protect the service with.
  - `--enable-admin` / `--disable-admin` — toggle the admin interface (Redis Commander).

- redis:destroy
  - `-f, --force` — force destruction (required to delete the default service).
  - `-y, --yes` — skip confirmation prompt.

- redis:start
  - `-r, --restart` — restart the container if it's already running (removes and recreates it).

## Notes

- When a `service` argument is omitted, commands use the default Redis service (set with `ws redis:use [service]`).
- If `--host` is provided to `ws redis:create`, the service is treated as external: no Docker container is created for it, and `start`/`stop`/`destroy` skip container management for it. It's still shown in `redis:ls` and listed in the admin interface.
- **Admin interface (Redis Commander)**: automatically started/refreshed after `redis:start`, `redis:stop`, `redis:destroy`, and `redis:set-domain`, listing every reachable service (running local containers and external hosts). It only runs when enabled (default: enabled — toggle with `redis:upgrade --enable-admin`/`--disable-admin`) and at least one service is reachable. It's served at the domain set by `ws redis:set-domain <domain>` (default: `redis-commander.workspace`) through Wocker's proxy.
- Shell completion is available for the `service` parameter.
