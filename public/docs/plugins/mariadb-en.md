# MariaDB

## Commands

```shell
ws mariadb [service]
ws mariadb:init
ws mariadb:create <service>
ws mariadb:destroy <service>
ws mariadb:upgrade [name]
ws mariadb:use <service>
ws mariadb:start [service]
ws mariadb:stop [service]
ws mariadb:dump [service]
ws mariadb:backup [service]
ws mariadb:restore [service]
ws mariadb:ls
ws mariadb:list
```


## Installation

The following command installs the MariaDB plugin:

```shell
ws plugin:install mariadb
```

After installation, you need to add the following line to the **hosts** file:

```text
127.0.0.1 dbadmin-mariadb.workspace
```

This host will show phpmyadmin. Phpmyadmin will be automatically started when `ws mariadb:start` is executed and disabled when `ws mariadb:stop` is executed for the last service.


## Detailed Command Descriptions

### mariadb

Interacts with a specified MariaDB service, optionally targeting a specific database within that service.

```shell
ws mariadb [service] [options]
```

**Options:**
- `--database`, `-d` — Specify the database to target within the service.

### mariadb:init

Initializes the MariaDB configuration.

```shell
ws mariadb:init [options]
```

**Options:**
- `--admin-hostname`, `-A` — Specifies the phpmyadmin hostname.

### mariadb:create

Creates a MariaDB service with configurable credentials, host, and storage options.

```shell
ws mariadb:create <service> [options]
```

**Options:**
- `--username`, `-u` — User name.
- `--password`, `-p` — Password.
- `--root-password`, `-P` — Root password.
- `--host`, `-h` — External host.
- `--storage`, `-s` — Storage type.
- `--image`, `-i` — The image name to start the service with (e.g., `mariadb:latest`).
- `--volume`, `-v` — Specify volume name.
- `--container-port` — Port on which the database container will be accessible on the host.

> Since version `1.0.23`, the `--image-version` option has been removed. The image version should now be specified directly in the `--image` option using the format `image:tag` (e.g., `--image=mariadb:10.6`).

### mariadb:destroy

Destroys a specified MariaDB service instance.

```shell
ws mariadb:destroy <service> [options]
```

**Options:**
- `--force`, `-f` — Force deletion.
- `--yes`, `-y` — Skip confirmation.

### mariadb:upgrade

Upgrades the MariaDB service configuration.

```shell
ws mariadb:upgrade [name] [options]
```

**Options:**
- `--storage`, `-s` — Specify storage type.
- `--volume`, `-v` — Specify volume name.
- `--image`, `-i` — Specify image name and tag (e.g., `mariadb:11.0`).
- `--container-port` — Port on which the database container will be accessible on the host.
- `--enable-admin` — Enable phpMyAdmin.
- `--disable-admin` — Disable phpMyAdmin.

### mariadb:use

Sets a specified MariaDB service as the default or retrieves the current default service name.

```shell
ws mariadb:use [service]
```

### mariadb:start

Starts a specified MariaDB service.

```shell
ws mariadb:start [service] [options]
```

**Options:**
- `--restart`, `-r` — Restart the service if already running.

### mariadb:stop

Stops a specified MariaDB service instance.

```shell
ws mariadb:stop [service]
```

### mariadb:dump

Creates a dump of the specified MariaDB service.

```shell
ws mariadb:dump [service] [options]
```

**Options:**
- `--database`, `-d` — Name of the database to dump.

### mariadb:backup

Creates or deletes a database backup for a MariaDB service.

```shell
ws mariadb:backup [service] [options]
```

**Options:**
- `--database`, `-d` — Database name to back up.
- `--filename`, `-f` — Name of the backup file.
- `--delete`, `-D` — Delete the specified backup file.
- `--yes`, `-y` — Auto confirm file deletion.

### mariadb:restore

Restores a MariaDB database from specified backup file.

```shell
ws mariadb:restore [service] [options]
```

**Options:**
- `--database`, `-d` — The name of the database to restore.
- `--filename`, `-f` — The name of the backup file to restore.

### mariadb:ls / mariadb:list

Lists all MariaDB services.

```shell
ws mariadb:ls
# or
ws mariadb:list
```


## Creating a service

```shell
ws mariadb:create <service> --username=root --password=root --image=mariadb:latest
```

_username_ - user name

_password_ - password

_host_ - the host for the external instance

> ⚠


## Deleting a service

> ⚠ All created databases will also be deleted.

```shell
ws mariadb:destroy <service>
```


## Starting service

```shell
ws maridb:start [service]
```

Will be started the service with the following container name: `mariadb-[service].ws`


## Backup

A backup in the plugin's sense is nothing more than just the result of the `mysqldump` (`mariadb-dump`) command, but the dump file will be saved in the plugin directory for later recovery.
The `mariadb:backup` command can be used to create a MariaDB database backup.

```shell
ws mariadb:backup [service] --database=dbname --filename=filename
```

_service_ - mariadb instance name

_filename_ - the name of the file under which the database dump will be created, if you do not specify a name, then the name of the dump file will be specified automatically based on the current time:
- ``yyyy-MM-dd HH-mm``.

_database_ - the name of the database for which you need to create a backup.

If the name of the database is omitted, the command line interface asks for the name of the database:

```shell
$ ws mariadb:backup example
? Database:  (Use arrow keys)
❯ example_database1
  example_database2
  example_database3
```


### Backup Location

The backup file will be saved in the following directory:

> ${WS_DIR}/plugins/mariadb/dump/**\[service]**/**\[dbname]**/**\[filename]**.sql


### Delete backup

The `mariadb:backup -D` command will remove file from `$WS_DIR` directory.

```shell
ws mariadb:backup [service] -D -d dbname -f filename
```


## Dump

The `mariadb:dump` command is used to dump a MariaDB database to a file.

```shell
ws mariadb:dump [service] -d dbname > dump.sql
```
