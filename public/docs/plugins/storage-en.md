# Storage

## Commands

```shell
ws storage:create [name] [--type <type>] [--style <style>] [-u <user>] [-p <password>] [-i <image>]
ws storage:upgrade [name] [--style <style>] [-v <volume>] [-i <image>]
ws storage:destroy <name> [-y|--yes] [-f|--force]
ws storage:start [name] [-r|--restart]
ws storage:stop [name]
ws storage:use <name>
ws storage:ls
ws storage:create-bucket [bucket]
ws storage:create-bucket <name>/<bucket>
ws storage:delete-bucket [bucket] [-y|--yes] [-f|--force]
ws storage:delete-bucket <name>/<bucket> [-y|--yes] [-f|--force]
```

Manage S3-compatible object storage services in your Wocker workspace: create, start/stop, set a default, upgrade, and manage buckets, all exposed through the Wocker reverse proxy.

## Installation

```shell
ws plugin:install storage
```

## Providers

Each storage service is backed by one of two providers, picked with `--type` when creating it:

- **`minio`** (default image `minio/minio:latest`) — runs MinIO in a single container, exposing the S3 API on port `80` and its web console on port `9000`. Bucket operations use the `mc` client bundled with the image.
- **`seaweedfs`** (default image `chrislusf/seaweedfs:latest`) — runs SeaweedFS (`weed server -s3`) in a single container, exposing the S3 API on port `8333` and the filer web UI (used as the console) on port `8888`. Credentials are written to a generated identity file mounted into the container. Bucket operations use the `weed shell` client bundled with the image. Use this provider if `minio/minio` images are unavailable to you.

Both providers behave the same from the CLI: same commands, same bucket/style semantics.

## Quick start

```shell
# 1) Create a storage service
ws storage:create example -u admin -p supersecret --type minio

# 2) Set it as default
ws storage:use example

# 3) Start it
ws storage:start

# 4) Create a bucket
ws storage:create-bucket example/mybucket
```

```text
# add to hosts file (printed after `storage:start`)

127.0.0.1 minio-example.ws
```

## Commands

```shell
# Create/upgrade/destroy a storage service
ws storage:create [name] [--type <type>] [--style <style>] [-u <user>] [-p <password>] [-i <image>]
ws storage:upgrade [name] [--style <style>] [-v <volume>] [-i <image>]
ws storage:destroy <name> [-y|--yes] [-f|--force]

# Manage lifecycle
ws storage:start [name] [-r|--restart]
ws storage:stop [name]

# Set default service / list configured services
ws storage:use <name>
ws storage:ls

# Manage buckets
ws storage:create-bucket [bucket]
ws storage:create-bucket <name>/<bucket>
ws storage:delete-bucket [bucket] [-y|--yes] [-f|--force]
ws storage:delete-bucket <name>/<bucket> [-y|--yes] [-f|--force]
```

## Options reference

- storage:create
  - `--type <minio|seaweedfs>` — storage provider; prompted interactively when omitted
  - `--style <path|subdomain>` — storage address style; prompted interactively when omitted
  - `-u, --user <user>` — username / access key, at least 3 characters; prompted interactively when omitted
  - `-p, --password <password>` — password / secret key, at least 8 characters, confirmed twice when entered interactively; prompted interactively when omitted
  - `-i, --image <image>` — Docker image (name:tag) to run the service with; defaults to `minio/minio:latest` or `chrislusf/seaweedfs:latest` depending on `--type`

- storage:upgrade
  - `--style <path|subdomain>` — change the storage address style
  - `-v, --volume <volume>` — change the Docker volume used for data
  - `-i, --image <image>` — change the image (name:tag)

- storage:destroy
  - `-y, --yes` — do not ask for confirmation
  - `-f, --force` — allow deleting the default storage service

- storage:start
  - `-r, --restart` — restart the container if it's already running

- storage:create-bucket / storage:delete-bucket
  - `<name>/<bucket>` — target a bucket in a specific storage service instead of the default one; if `bucket` is omitted or invalid, you're prompted for it
  - `-y, --yes` (delete only) — do not ask for confirmation
  - `-f, --force` (delete only) — delete the bucket even if it's not empty


## Notes

- When `name` is omitted, commands operate on the default storage service (set with `ws storage:use <name>`). Running `ws storage:start` with no default configured yet launches `ws storage:create` interactively first.
- Container names follow the pattern `<type>-<name>.ws` (e.g. `minio-example.ws`, `seaweedfs-example.ws`).
- Address style controls how buckets are exposed: `path` serves buckets at `http://<type>-<name>.ws/<bucket>` with the console at `http://console.<type>-<name>.ws`; `subdomain` serves each bucket at its own `http://<bucket>.<type>-<name>.ws` subdomain, with the console at `http://<type>-<name>.ws`. Adding or removing a bucket under `subdomain` style automatically restarts the service so the new subdomain routing takes effect.
- After `ws storage:start`, add the printed `127.0.0.1 <domain>` line(s) to your hosts file so the printed URLs resolve locally.
- Credentials (`--user`/`--password`) are baked into the container at creation time and can't be changed via the CLI afterwards; destroy and recreate the service to rotate them.
- `ws storage:ls` lists all configured services with their type, container name, and running/stopped status; the default service is marked `(default)`.