# MariaDB

## Команди

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


## Інсталяція

Наступна команда встановлює плагін MariaDB:

```shell
ws plugin:install mariadb
```

Після інсталяції необхідно додати наступний рядок до файлу **hosts**:

```text
127.0.0.1 dbadmin-mariadb.workspace
```

На цьому хості буде відображатись phpmyadmin. Phpmyadmin буде автоматично запущений при виконанні команди `ws mariadb:start` та вимкнено при виконанні `ws mariadb:stop` для останнього сервісу.


## Детальний опис команд

### mariadb

Взаємодіє із зазначеним сервісом MariaDB, опціонально націлюючись на конкретну базу даних у цьому сервісі.

```shell
ws mariadb [service] [options]
```

**Опції:**
- `--database`, `-d` — Вказати базу даних для взаємодії.

### mariadb:init

Ініціалізує конфігурацію MariaDB.

```shell
ws mariadb:init [options]
```

**Опції:**
- `--admin-hostname`, `-A` — Вказує ім'я хоста для phpMyAdmin.

### mariadb:create

Створює сервіс MariaDB з можливістю налаштування облікових даних, хоста та параметрів зберігання.

```shell
ws mariadb:create <service> [options]
```

**Опції:**
- `--username`, `-u` — Ім'я користувача.
- `--password`, `-p` — Пароль.
- `--root-password`, `-P` — Пароль root.
- `--host`, `-h` — Зовнішній хост.
- `--storage`, `-s` — Тип сховища.
- `--image`, `-i` — Назва образу для запуску сервісу (наприклад, `mariadb:latest`).
- `--volume`, `-v` — Вказати назву тому (volume).
- `--container-port` — Порт, на якому контейнер бази даних буде доступний на хості.

> Починаючи з версії `1.0.23`, опцію `--image-version` було видалено. Тепер версію образу слід вказувати безпосередньо в опції `--image` у форматі `image:tag` (наприклад, `--image=mariadb:10.6`).

### mariadb:destroy

Видаляє зазначений екземпляр сервісу MariaDB.

```shell
ws mariadb:destroy <service> [options]
```

**Опції:**
- `--force`, `-f` — Примусове видалення.
- `--yes`, `-y` — Пропустити підтвердження.

### mariadb:upgrade

Оновлює конфігурацію сервісу MariaDB.

```shell
ws mariadb:upgrade [name] [options]
```

**Опції:**
- `--storage`, `-s` — Вказати тип сховища.
- `--volume`, `-v` — Вказати назву тому.
- `--image`, `-i` — Вказати назву образу та тег (наприклад, `mariadb:11.0`).
- `--container-port` — Порт, на якому контейнер бази даних буде доступний на хості.
- `--enable-admin` — Увімкнути phpMyAdmin.
- `--disable-admin` — Вимкнути phpMyAdmin.

### mariadb:use

Встановлює зазначений сервіс MariaDB як сервіс за замовчуванням або повертає назву поточного сервісу за замовчуванням.

```shell
ws mariadb:use [service]
```

### mariadb:start



```shell
ws mariadb:start [service] [options]
```


### mariadb:stop

Зупиняє зазначений екземпляр сервісу MariaDB.

```shell
ws mariadb:stop [service]
```

### mariadb:dump

Створює дамп зазначеного сервісу MariaDB.

```shell
ws mariadb:dump [service] [options]
```

**Опції:**
- `--database`, `-d` — Назва бази даних для дампу.

### mariadb:backup

Створює або видаляє бекап бази даних для сервісу MariaDB.

```shell
ws mariadb:backup [service] [options]
```

**Опції:**
- `--database`, `-d` — Назва бази даних для бекапу.
- `--filename`, `-f` — Назва файлу бекапу.
- `--delete`, `-D` — Видалити вказаний файл бекапу.
- `--yes`, `-y` — Автоматичне підтвердження видалення файлу.

### mariadb:restore

Відновлює базу даних MariaDB із зазначеного файлу бекапу.

```shell
ws mariadb:restore [service] [options]
```

**Опції:**
- `--database`, `-d` — Назва бази даних для відновлення.
- `--filename`, `-f` — Назва файлу бекапу для відновлення.

### mariadb:ls / mariadb:list

Виводить список усіх сервісів MariaDB.

```shell
ws mariadb:ls
# або
ws mariadb:list
```


## Створення сервісу

```shell
ws mariadb:create <service> --username=root --password=root --image=mariadb:latest
```

_username_ - ім'я користувача

_password_ - пароль від бази даних

_host_ - хост для зовнішнього екземпляра


## Видалення сервісу

> ⚠ Усі створені бази даних також будуть видалені.

```shell
ws mariadb:destroy <service>
```


## Запуск сервісу

```shell
ws mariadb:start [service]
```

**Опції:**
- `--restart`, `-r` — Перезапустити сервіс, якщо він уже працює.

Запускає зазначений сервіс MariaDB. е запущено сервіс із назвою контейнера: `mariadb-[service].ws`


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


### Видалення бекапу

Команда `mariadb:backup -D` видаляє файл із директорії `$WS_DIR`.

```shell
ws mariadb:backup [service] -D -d dbname -f filename
```


## Dump

The `mariadb:dump` command is used to dump a MariaDB database to a file.

```shell
ws mariadb:dump [service] -d dbname > dump.sql
```
