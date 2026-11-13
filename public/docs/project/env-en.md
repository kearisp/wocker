# Environment

It is possible to add environment variables for each project.

```shell
ws config [-n <name>] [-g] [-s <service>]
ws config:get <KEY> [...KEYS] [-n <name>] [-g]
ws config:set <KEY>=<value> [...KEY2=value2] [-n <name>] [-g] [-l] [-s <service>]
ws config:unset <KEY> [...KEYS] [-n <name>] [-g] [-l] [-s <service>]
```


## Layers

Variables are stored in layers. When the same key exists in several layers, the layer with the higher priority wins:

| Layer      | Where it is stored                                   | Priority |
|------------|------------------------------------------------------|----------|
| Data       | Wocker's own data for the project (default target)   | highest  |
| Repository | `wocker.config.json` in the project directory        | middle   |
| Global     | Global variables set with `--global`                 | lowest   |

`config:set` and `config:unset` write to the **Data** layer by default. Use `--local` to write to the **Repository** layer, or `--global` to change the global variables.


## List

```shell
$ ws config
┌────────────┬──────────────────────┬────────────┐
│ LAYER      │ KEY                  │ VALUE      │
├────────────┼──────────────────────┼────────────┤
│ Data       │ APACHE_DOCUMENT_ROOT │ /var/www   │
├────────────┼──────────────────────┼────────────┤
│ Repository │ EXAMPLE_VALUE        │ test-value │
└────────────┴──────────────────────┴────────────┘
```

When a key is defined in more than one layer, the lower-priority rows are marked `(Overridden)` and shown in gray. They are displayed only in an interactive terminal; when the output is piped or redirected, only the effective values are printed.

The `SERVICE` column is added for projects with the `compose` type (or when the `projectComposeType` experimental feature is enabled). Use `--service` to show only the variables of one service.

Use `--global` to list only the global variables.


## One

```shell
$ ws config:get KEY
```

Prints the value of each requested key for every layer that defines it, in the same table format as `ws config`. Prints `No environment variables found.` when nothing matches.


## Set config

```shell
$ ws config:set KEY=value KEY2=value2
$ ws config:set --local KEY=value
$ ws config:set --global KEY=value
```

A variable without a value is skipped with a warning.


## Deletion

```shell
$ ws config:unset KEY1 KEY2
$ ws config:unset --local KEY1
$ ws config:unset --global KEY1
```


## Options

- `-n, --name <name>` — the name of the project (the current project by default).
- `-g, --global` — work with the global variables instead of a project.
- `-l, --local` — (`config:set`, `config:unset`) write to the Repository layer (`wocker.config.json`) instead of the Data layer.
- `-s, --service <service>` — the name of the service.
