# Build-args

```shell
ws build-args [-n <name>] [-s <service>]
ws build-args:get <KEY> [...KEYS] [-n <name>]
ws build-args:set <KEY>=<value> [...KEY2=value] [-n <name>] [-s <service>] [-l]
ws build-args:unset <KEY> [...KEYS] [-n <name>] [-s <service>] [-l]
```


## Layers

Build args are stored in the same layers as [environment variables](/docs/project/env). The layer with the higher priority wins: **Data** (default target), then **Repository** (`wocker.config.json` in the project directory).

`build-args:set` and `build-args:unset` write to the **Data** layer by default. Use `--local` to write to the **Repository** layer.


## List

```shell
$ ws build-args
┌────────────┬──────────────┬──────────┐
│ LAYER      │ KEY          │ VALUE    │
├────────────┼──────────────┼──────────┤
│ Data       │ PHP_VERSION  │ 8.2      │
├────────────┼──────────────┼──────────┤
│ Repository │ NODE_VERSION │ v18.16.0 │
└────────────┴──────────────┴──────────┘
```

When a key is defined in more than one layer, the lower-priority rows are marked `(Overridden)` and shown in gray. They are displayed only in an interactive terminal; when the output is piped or redirected, only the effective values are printed.

The `SERVICE` column is added for projects with the `compose` type (or when the `projectComposeType` experimental feature is enabled). Use `--service` to show only the build args of one service.


## One

```shell
$ ws build-args:get PHP_VERSION
```

Prints the value of each requested key for every layer that defines it. Prints `No build args found!` when nothing matches.


## Set

```shell
$ ws build-args:set PHP_VERSION=8.2
$ ws build-args:set --local NODE_VERSION=v18.16.0
```


## Deletion

```shell
$ ws build-args:unset PHP_VERSION
$ ws build-args:unset --local NODE_VERSION
```


## Options

- `-n, --name <name>` — the name of the project (the current project by default).
- `-s, --service <service>` — the name of the service.
- `-l, --local` — (`build-args:set`, `build-args:unset`) write to the Repository layer (`wocker.config.json`) instead of the Data layer.
