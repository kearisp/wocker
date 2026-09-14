# Mount Permissions

Previously, Wocker would silently bind-mount any host directory a project asked for into a container. Since project config can come from a repository you don't fully trust, that's a supply-chain risk — a malicious `config.json` could mount sensitive paths like your home directory or `/etc` into a container. Mount Permissions closes this gap: every host path must be explicitly trusted, via an allow/deny list and interactive confirmation prompts, before Wocker will ever mount it.

## How it works

Trusted paths are stored in the global config file, `wocker.config.json`, under `WOCKER_DATA_DIR` (`~/.workspace` by default):

```json
{
    "permissions": {
        "mounts": {
            "allow": ["/home/user/projects"],
            "deny": ["/home/user/projects/secrets"]
        }
    }
}
```

- **Default-deny**: if both `allow` and `deny` are empty or missing, no host path can be mounted until it's explicitly allowed.
- **Subpath matching**: allowing a directory allows everything under it. Allowing `/home/user/projects` also allows `/home/user/projects/api`, but not `/home/user/other-projects`.
- **Deny wins**: if a path matches both an allow and a deny entry, it is denied.

## Sensitive paths

Some paths require extra confirmation before they can be allowed:
- the filesystem root (`/`)
- any direct child of root (e.g. `/etc`, `/root`, `/home`)
- the current user's home directory

Granting mount access to one of these requires retyping the exact path to confirm.

## Trust prompt on `ws init`

When you run `ws init` in a directory that isn't already allowed, you're asked to confirm you trust the project's code before Wocker will mount anything from it:

```
You're initialising a project in:
  /home/user/projects/some-repo

Do you trust the authors of the code in this directory?
```

- Declining aborts initialisation immediately — nothing is written to the config.
- Accepting for a [sensitive path](#sensitive-paths) additionally asks you to retype the path (see below).
- On success, the directory is added to the allow list and saved — future `ws init`/mount operations there won't prompt again.

For a sensitive path, you'll see an additional prompt:

```
You are granting mount access to a sensitive path:
  /home

Type the path again to confirm
```

A mismatched confirmation aborts with `Confirmation doesn't match "/home", aborting`.

## Mount rejection on `ws volume:mount`

`ws volume:mount` checks every host-path volume (named Docker volumes are never checked) against the allow/deny list before mounting. If the resolved path isn't allowed:

```shell
$ ws volume:mount ~/Downloads:/data

Mount path "/home/user/Downloads" is not allowed.
Run "ws mount:allow /home/user/Downloads" to allow it.
```

## Commands

### mount:allow

List currently allowed paths:

```shell
ws mount:allow
```

```
┌──────────────────────┐
│ Path                 │
├──────────────────────┤
│ /home/user/projects  │
└──────────────────────┘
```

If nothing is allowed yet, this prints `No allowed mount paths`.

Allow a path:

```shell
ws mount:allow [path]
```

- `path`: host path to allow. `~` is expanded to your home directory.
- Adding an allow entry removes any matching deny entry for the same path.
- If the resolved path is a [sensitive path](#sensitive-paths), you must retype it to confirm, same as the `ws init` flow above.

Examples:

```shell
ws mount:allow ~/projects
ws mount:allow /var/data
```

### mount:deny

List currently denied paths:

```shell
ws mount:deny
```

If nothing is denied, this prints `No denied mount paths`.

Deny a path:

```shell
ws mount:deny [path]
```

- `path`: host path to deny. `~` is expanded to your home directory.
- Adding a deny entry removes any matching allow entry for the same path.
- No confirmation is required, even for sensitive paths.

Examples:

```shell
ws mount:deny ~/projects/secrets
```

## Editing the config directly

`permissions.mounts.allow`/`.deny` can also be edited by hand in `wocker.config.json`, but the `ws mount:allow`/`ws mount:deny` commands (and the automatic prompts) are the recommended way, since they normalise paths and enforce the sensitive-path confirmation for you.

## See also

- [Initialisation](/docs/project/init)
