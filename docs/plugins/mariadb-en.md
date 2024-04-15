# Mariadb

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


## Commands

```shell
ws mariadb [service]
ws mariadb:create <service>
ws mariadb:destroy <service>
ws mariadb:use <service>
ws mariadb:start [service]
ws mariadb:backup [service]
ws mariadb:dump [database]
```


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


## Starting MariaDB

```shell
ws maridb:start [service]
```

Will be started the service with the following container name: `mariadb-[service].ws`


## Backup db

The `mariadb:backup` command is used to create a backup of a MariaDB database.

```shell
ws mariadb:backup [database]
```

### Backup Location

The backup file will be saved in the following directory:

> $WS_DIR/plugins/mariadb/dump/**\[dbname]**/yyyy-MM-dd HH-mm.sql


### Delete backup

The `mariadb:delete-backup` command will remove file from `$WS_DIR` directory.

```shell
ws mariadb:delete-backup [database] [filename]
```

## Dump

The `mariadb:dump` command is used to dump a MariaDB database to a file.

```shell
ws mairadb:dump [database] > dump.sql
```
