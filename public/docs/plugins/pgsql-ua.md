# Плагін PostgreSQL

## Команди

```shell
ws pgsql [service]
ws pgsql:init [--admin-enabled | --admin-disabled] [-e <email>] [-p <password>] [-s]
ws pgsql:create [service] -u <user> -p <password> -h <host> -P <port> [-i <image>] [--container-port <port>]
ws pgsql:upgrade [service] [-i <image>] [--container-port <port>]
ws pgsql:destroy <service> [-y|--yes] [-f|--force]
ws pgsql:start [service] [-r|--restart]
ws pgsql:stop [service]
ws pgsql:use [service]
ws pgsql:ls
ws pgsql:dump [service]
ws pgsql:backup [service] [-d <database>] [-f <filename>] [-D|--delete]
ws pgsql:restore [service] [-d <database>] [-f <filename>]
```

Керуйте сервісами PostgreSQL у робочому просторі Wocker: створення, запуск/зупинка, вибір сервісу за замовчуванням, оновлення, резервні копії/відновлення та відкриття адмін-інтерфейсу (pgAdmin).

## Інсталяція

```shell
ws plugin:add pgsql
```

## Швидкий старт

```shell
# 1) Створити сервіс
ws pgsql:create mydb -u app -p secret -h localhost -P 5432

# 2) Зробити сервісом за замовчуванням
ws pgsql:use mydb

# 3) Запустити (і відкрити адмінку)
ws pgsql:start

# 4) Підключитися до консолі БД
ws pgsql
```

## Команди

```shell
# Ініціалізація адмін-інтерфейсу (pgAdmin)
ws pgsql:init [--admin-enabled | --admin-disabled] [-e <email>] [-p <password>] [-s]

# Взаємодія з сервісом (psql всередині контейнера)
ws pgsql [service]

# Створення/оновлення/видалення сервісу
ws pgsql:create <service> -u <user> -p <password> -h <host> -P <port> [-i <image>] [--container-port <port>]
ws pgsql:upgrade [service] [-i <image>] [--container-port <port>]
ws pgsql:destroy <service> [-y|--yes] [-f|--force]

# Керування життєвим циклом
ws pgsql:start [service] [-r|--restart]
ws pgsql:stop [service]

# Встановлення сервісу за замовчуванням
ws pgsql:use [service]

# Список таблиць поточного сервісу або сервісу за замовчуванням
ws pgsql:ls

# Дампи, бекапи та відновлення
ws pgsql:dump [service]
ws pgsql:backup [service] [-d <database>] [-f <filename>] [-D|--delete]
ws pgsql:restore [service] [-d <database>] [-f <filename>]
```

## Опис опцій

- pgsql:init
  - `--admin-enabled` / `--admin-disabled` — перемкнути доступність адмінки (pgAdmin)
  - `-e, --email <email>` — email адміністратора
  - `-p, --password <password>` — пароль адміністратора
  - `-s, --skip-password` — пропустити запит пароля

- pgsql:create
  - `-u, --user <user>` — користувач БД
  - `-p, --password <password>` — пароль БД
  - `-h, --host <host>` — зовнішній хост для підключення. Якщо передано `--host`, сервіс вважається зовнішнім: контейнер Docker для цього сервісу створюватися не буде, але база даних буде доступна в адмінці (pgAdmin).
  - `-P, --port <port>` — зовнішній порт для підключення до вказаного хоста
  - `-i, --image <image>` — назва Docker-образу разом із тегом (напр. `postgres:16`)
  - `--container-port <port>` — порт контейнера, доступний на хості

- pgsql:upgrade
  - `-i, --image <image>` — назва Docker-образу разом із тегом (напр. `postgres:17`)
  - `--container-port <port>` — порт контейнера, доступний на хості

- pgsql:destroy
  - `-y, --yes` — не питати підтвердження
  - `-f, --force` — примусове видалення

- pgsql:start
  - `-r, --restart` — перезапустити, якщо вже працює

- pgsql:backup / pgsql:restore
  - `-d, --database <name>` — назва цільової БД
  - `-f, --filename <path>` — шлях до файлу резервної копії
  - `-D, --delete` (лише backup) — за потреби видаляти старі бекапи

## Приклади

```shell
# Створити з кастомним образом (назва:тег)
ws pgsql:create analytics -u app -p s3cr3t -h 127.0.0.1 -P 5542 -i postgres:16

# Оновити дефолтний сервіс до новішої версії образу
ws pgsql:upgrade -i postgres:17

# Запустити конкретний сервіс і перезапустити, якщо він вже працює
ws pgsql:start analytics -r

# Зробити логічний бекап бази
ws pgsql:backup -d mydb -f backups/mydb_$(date +%F).sql

# Відновити з файлу резервної копії у сервіс
ws pgsql:restore analytics -d mydb -f backups/mydb.sql

# Видалити сервіс без підтверджень
ws pgsql:destroy analytics -y
```

## Нотатки

- Якщо аргумент `service` пропущено, команди використовують дефолтний сервіс PostgreSQL (встановлюється командою `ws pgsql:use [service]`).
- Якщо `--host` передано у `ws pgsql:create`, сервіс вважається зовнішнім: контейнер Docker для нього не створюватиметься; команди життєвого циклу (`start/stop/upgrade/destroy`) ним не керують; специфічні для контейнера опції (наприклад, `--container-port`) ігноруються. База даних все одно буде доступна в адмін-інтерфейсі (pgAdmin).
- Адмін-інтерфейс (pgAdmin) автоматично відкривається після деяких операцій (наприклад, `init`, `start`, `destroy`).
- Доступне автодоповнення для параметра `service` у кількох командах.
