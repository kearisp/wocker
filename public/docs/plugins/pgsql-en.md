# PostgreSQL Plugin

## Commands

```shell
ws pgsql [service]
ws pgsql:init [--admin-enabled | --admin-disabled] [-e <email>] [-p <password>] [-s]
ws pgsql:create [service] -u <user> -p <password> -h <host> -P <port> [-i <image>] [--container-port <port>]
ws pgsql:upgrade [service] [-i <image>] [--container-port <port>]
ws pgsql:destroy <service> [-y|--yes] [-f|--force]
ws pgsql:start [service] [-r|--restart]
ws pgsql:stop [service]
ws pgsql:use [service]
ws pgsql:ls
ws pgsql:dump [service]
ws pgsql:backup [service] [-d <database>] [-f <filename>] [-D|--delete]
ws pgsql:restore [service] [-d <database>] [-f <filename>]
```

Manage PostgreSQL services in your Wocker workspace: create, start/stop, set default, upgrade, backup/restore, and open the admin interface (pgAdmin).

## Installation

```shell
ws plugin:add pgsql
```

## Quick start

```shell
# 1) Create a service
ws pgsql:create mydb -u app -p secret -h localhost -P 5432

# 2) Set as default
ws pgsql:use mydb

# 3) Start it (and open admin)
ws pgsql:start

# 4) Connect to the database shell
ws pgsql
```

## Commands

```shell
# Initialize admin interface (pgAdmin)
ws pgsql:init [--admin-enabled | --admin-disabled] [-e <email>] [-p <password>] [-s]

# Interact with a service (psql inside the container)
ws pgsql [service]

# Create/upgrade/destroy service
ws pgsql:create <service> -u <user> -p <password> -h <host> -P <port> [-i <image>] [--container-port <port>]
ws pgsql:upgrade [service] [-i <image>] [--container-port <port>]
ws pgsql:destroy <service> [-y|--yes] [-f|--force]

# Manage lifecycle
ws pgsql:start [service] [-r|--restart]
ws pgsql:stop [service]

# Set default service
ws pgsql:use [service]

# List tables of the current/default service
ws pgsql:ls

# Dumps, backups, and restore
ws pgsql:dump [service]
ws pgsql:backup [service] [-d <database>] [-f <filename>] [-D|--delete]
ws pgsql:restore [service] [-d <database>] [-f <filename>]
```

## Options reference

- pgsql:init
  - `--admin-enabled` / `--admin-disabled` — toggle admin (pgAdmin) availability
  - `-e, --email <email>` — admin email
  - `-p, --password <password>` — admin password
  - `-s, --skip-password` — skip password prompt

- pgsql:create
  - `-u, --user <user>` — database user
  - `-p, --password <password>` — database password
  - `-h, --host <host>` — external host to connect to. If `--host` is provided, the service is treated as external: no Docker container will be created for this service, but the database will be available in the admin interface (pgAdmin).
  - `-P, --port <port>` — external port for connecting to the specified host
  - `-i, --image <image>` — Docker image name with tag (e.g. `postgres:16`)
  - `--container-port <port>` — port exposed by the container on the host

- pgsql:upgrade
  - `-i, --image <image>` — Docker image name with tag (e.g. `postgres:17`)
  - `--container-port <port>` — port exposed by the container on the host

- pgsql:destroy
  - `-y, --yes` — do not ask for confirmation
  - `-f, --force` — force removal

- pgsql:start
  - `-r, --restart` — restart if already running

- pgsql:backup / pgsql:restore
  - `-d, --database <name>` — target database name
  - `-f, --filename <path>` — path to backup file
  - `-D, --delete` (backup only) — optionally delete older backups


## Notes

- When a `service` argument is omitted, commands use the default PostgreSQL service (set with `ws pgsql:use [service]`).
- If `--host` is provided to `ws pgsql:create`, the service is treated as external: no Docker container will be created for it; lifecycle commands like `start/stop/upgrade/destroy` do not manage it; container-specific options (e.g., `--container-port`) are ignored. The database will still be available in the admin interface (pgAdmin).
- The admin interface (pgAdmin) is opened automatically after certain operations (e.g., `init`, `start`, `destroy`).
- Shell completion is available for the `service` parameter in several commands.
