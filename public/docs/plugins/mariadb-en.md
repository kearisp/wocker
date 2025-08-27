# Mariadb

## Commands

```shell
ws mariadb [service]
ws mariadb:create <service>
ws mariadb:destroy <service>
ws mariadb:use <service>
ws mariadb:start [service]
ws mariadb:backup [service]
ws mariadb:dump [database]
ws mariadb:upgrade [service]
```


## Installation

The following command installs the MariaDB plugin:

```shell
ws plugin:add mariadb
```

After installation, you need to add the following line to the **hosts** file:

```text
127.0.0.1 dbadmin-mariadb.workspace
```

This host will show phpmyadmin. Phpmyadmin will be automatically started when `ws mariadb:start` is executed and disabled when `ws mariadb:stop` is executed for the last service.


## Creating a service

```shell
ws mariadb:create <service> --user=root --password=root
```

_user_ - user name

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
ws mariadb:backup -D [database] [filename]
```


## Dump

The `mariadb:dump` command is used to dump a MariaDB database to a file.

```shell
ws mariadb:dump [service] -d dbname > dump.sql
```
