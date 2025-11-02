# PostgreSQL Plugin

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
ws pgsql:create <service> -u <user> -p <password> -h <host> -P <port> [-i <image>] [-I <version>] [--container-port <port>]
ws pgsql:upgrade [service] [-i <image>] [-I <version>] [--container-port <port>]
ws pgsql:destroy <service> [-y|--yes] [-f|--force]

# Manage lifecycle
ws pgsql:start [service] [-r|--restart]
ws pgsql:stop [service]

# Set default service
ws pgsql:use <service>

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
  - `-i, --image <image>` — Docker image name (e.g. `postgres`)
  - `-I, --image-version <version>` — image tag/version (e.g. `16`)
  - `--container-port <port>` — port exposed by the container on the host

- pgsql:upgrade
  - `-i, --image <image>`
  - `-I, --image-version <version>`
  - `--container-port <port>`

- pgsql:destroy
  - `-y, --yes` — do not ask for confirmation
  - `-f, --force` — force removal

- pgsql:start
  - `-r, --restart` — restart if already running

- pgsql:backup / pgsql:restore
  - `-d, --database <name>` — target database name
  - `-f, --filename <path>` — path to backup file
  - `-D, --delete` (backup only) — optionally delete older backups

## Examples

```shell
# Create with custom image and version
ws pgsql:create analytics -u app -p s3cr3t -h 127.0.0.1 -P 5542 -i postgres -I 16

# Upgrade default service to a newer image version
ws pgsql:upgrade -I 17

# Start specific service and restart if running
ws pgsql:start analytics -r

# Make a logical backup of a database
ws pgsql:backup -d mydb -f backups/mydb_$(date +%F).sql

# Restore from a backup file into a service
ws pgsql:restore analytics -d mydb -f backups/mydb.sql

# Drop a service without prompts
ws pgsql:destroy analytics -y
```

## Notes

- When a `service` argument is omitted, commands use the default PostgreSQL service (set with `ws pgsql:use <service>`).
- If `--host` is provided to `ws pgsql:create`, the service is treated as external: no Docker container will be created for it; lifecycle commands like `start/stop/upgrade/destroy` do not manage it; container-specific options (e.g., `--container-port`) are ignored. The database will still be available in the admin interface (pgAdmin).
- The admin interface (pgAdmin) is opened automatically after certain operations (e.g., `init`, `start`, `destroy`).
- Shell completion is available for the `service` parameter in several commands.
