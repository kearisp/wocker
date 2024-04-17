# MariaDB

## Інсталяція

Наступна команда встановлює плагін MariaDB:

```shell
ws plugin:add mariadb
```

Після інсталяції необхідно додати наступний рядок до файлу **hosts**:

```text
127.0.0.1 dbadmin-mariadb.workspace
```

На цьому хості буде відображатись phpmyadmin. Phpmyadmin буде автоматично запущений при виконанні команди `ws mariadb:start` та вимкнено при виконанні `ws mariadb:stop` для останнього сервісу.


## Команди

```shell
ws mariadb [service]
ws mariadb:create <service>
ws mariadb:destroy <service>
ws mariadb:use <service>
ws mariadb:start [service]
ws mariadb:backup [service]
ws mariadb:dump [database]
```


## Створення сервісу

```shell
ws mariadb:create <service> --user=root --password=root
```

_user_ - ім'я користувача

_password_ - пароль від бази даних

_host_ - хост для зовнішнього екземпляра

> ⚠


## Видалення сервісу

> ⚠ Усі створені бази даних також будуть видалені.

```shell
ws mariadb:destroy <service>
```


## Запуск сервісу

```shell
ws mariadb:start [service]
```

Буде запущено сервіс із назвою контейнера: `mariadb-[service].ws`


## Резервні копії

Бекап у розумінні плагіну це ніщо інше як просто результат роботи команди `mysqldump` (`mariadb-dump`), але файл з дампом буде збережено у директорію плагіну для подальшої можливості відновлення.
Команду `mariadb:backup` можна використовувати для створення бекапу бази даних MariaDB.

```shell
ws mariadb:backup [service] --database=dbname --filename=filename
```

_service_ - назва інстансу mariadb

_filename_ - назва файлу під яким буде створено дамп бд, якщо не вказувати назву, то дамп назва файлу буде вказана автоматично на основі поточного часу:
- ``yyyy-MM-dd HH-mm``.

_database_ - назва бази даних для якої необхідно створити бекап.

При пропуску назви бд інтерфейс командного рядка запитає назву бд:

```shell
$ ws mariadb:backup example
? Database:  (Use arrow keys)
❯ example_database1
  example_database2
  example_database3
```


### Розташування бекапів

Файли з бекапами будуть збережені у наступну директорію:

> ${WS_DIR}/plugins/mariadb/dump/**\[service]**/**\[dbname]**/**\[filename]**.sql


### Delete backup

The `mariadb:backup -D` command will remove file from `$WS_DIR` directory.

```shell
ws mariadb:backup -D [service]
```


## Dump

The `mariadb:dump` command is used to dump a MariaDB database to a file.

```shell
ws mariadb:dump [service] -d dbname > dump.sql
```
