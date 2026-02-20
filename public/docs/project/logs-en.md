# Logging

```shell
ws logs [options]
```

The `ws logs` command is used to view project logs or global `wocker` logs.

### Options

- `-n, --name <name>` — Project name. Allows viewing logs of a specific project from any directory.
- `-f, --follow` — Follow log output in real-time (stream).
- `-g, --global` — Display global `wocker` logs (CLI system messages).
- `-c, --clear` — Clear the log file. Works only in conjunction with the `--global` option.
- `-d, --detach` — Run log viewing in the background (applies to project containers).

### Examples

View logs of the current project:
```shell
ws logs
```

View global `wocker` logs in real-time:
```shell
ws logs -g -f
```

Clear global logs:
```shell
ws logs -g -c
```
