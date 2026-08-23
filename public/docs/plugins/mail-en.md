# Mail Plugin

## Commands

```shell
ws mail:ls
ws mail:create [name] [-t <type>] [-i <image>]
ws mail:upgrade [name] [-t <type>] [-i <image>]
ws mail:destroy <name> [-f|--force] [-y|--yes]
ws mail:start [name] [-r|--restart]
ws mail:stop [name]
ws mail:use [name]
```

Manage mail-catching services (MailDev or MailHog) in your Wocker workspace: create, start/stop, set default, and upgrade.

## Installation

```shell
ws plugin:install mail
```

## Quick start

```shell
# 1) Create a service
ws mail:create mymail -t maildev

# 2) Set as default
ws mail:use mymail

# 3) Start it
ws mail:start
```

## Commands

```shell
# List all mail services
ws mail:ls

# Create / upgrade / destroy a service
ws mail:create [name] [-t <type>] [-i <image>]
ws mail:upgrade [name] [-t <type>] [-i <image>]
ws mail:destroy <name> [-f|--force] [-y|--yes]

# Manage lifecycle
ws mail:start [name] [-r|--restart]
ws mail:stop [name]

# Set default service
ws mail:use [name]
```

## Options reference

- mail:create / mail:upgrade
  - `-t, --type <type>` — service type: `maildev` or `mailhog`
  - `-i, --image <image>` — custom Docker image to use

- mail:destroy
  - `-f, --force` — force destruction
  - `-y, --yes` — skip confirmation prompt

- mail:start
  - `-r, --restart` — restart if already running

## Notes

- When a `name` argument is omitted, commands use the default mail service (set with `ws mail:use [name]`).
- Supported provider types: `maildev`, `mailhog`.
