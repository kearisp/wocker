# Redis

## Команди

```shell
ws redis [service]
ws redis:create [service] [-h <host>] [-s <storage>] [-i <image>] [--container-port <port>] [-p <password>]
ws redis:upgrade [service] [-s <storage>] [-v <volume>] [-i <image>] [--container-port <port>] [-p <password>] [--enable-admin] [--disable-admin]
ws redis:destroy <service> [-f|--force] [-y|--yes]
ws redis:start [service] [-r|--restart]
ws redis:stop [service]
ws redis:use [service]
ws redis:ls
ws redis:set-domain <domain>
```

Керуйте сервісами Redis у робочому просторі Wocker: створення, запуск/зупинка, вибір сервісу за замовчуванням, оновлення та перегляд через вбудований адмін-інтерфейс (Redis Commander).

## Інсталяція

```shell
ws plugin:install redis
```

## Швидкий старт

```shell
# 1) Створити сервіс
ws redis:create mycache -p secret

# 2) Зробити сервісом за замовчуванням
ws redis:use mycache

# 3) Запустити (і відкрити адмінку)
ws redis:start

# 4) Підключитися до консолі redis-cli
ws redis
```

## Команди

```shell
# Взаємодія з сервісом (redis-cli всередині контейнера)
ws redis [service]

# Створення/оновлення/видалення сервісу
ws redis:create [service] [-h <host>] [-s <storage>] [-i <image>] [--container-port <port>] [-p <password>]
ws redis:upgrade [service] [-s <storage>] [-v <volume>] [-i <image>] [--container-port <port>] [-p <password>] [--enable-admin] [--disable-admin]
ws redis:destroy <service> [-f|--force] [-y|--yes]

# Керування життєвим циклом
ws redis:start [service] [-r|--restart]
ws redis:stop [service]

# Встановлення сервісу за замовчуванням
ws redis:use [service]

# Список усіх сервісів
ws redis:ls

# Зміна домену адмінки (Redis Commander)
ws redis:set-domain <domain>
```

## Опис опцій

- redis:create
  - `-h, --host <host>` — зовнішній хост Redis. Якщо передано, сервіс вважається зовнішнім: контейнер Docker для нього не створюється, але він все одно буде доступний в адмін-інтерфейсі (Redis Commander).
  - `-s, --storage <storage>` — тип сховища: `volume` або `filesystem`. Ігнорується для зовнішніх сервісів; для локальних за замовчуванням `filesystem`.
  - `-i, --image <image>` — назва Docker-образу разом із тегом (напр. `redis:7-alpine`). За замовчуванням `redis:8.6.2`.
  - `--container-port <port>` — порт контейнера, доступний на хості (відображається на порт `6379` контейнера).
  - `-p, --password <password>` — пароль для захисту сервісу (встановлює `redis-server --requirepass`).

- redis:upgrade
  - `-s, --storage <storage>` — змінити тип сховища: `volume` або `filesystem`.
  - `-v, --volume <volume>` — назва тому (використовується, якщо сховище `volume`).
  - `-i, --image <image>` — назва Docker-образу разом із тегом (напр. `redis:7-alpine`).
  - `--container-port <port>` — порт контейнера, доступний на хості.
  - `-p, --password <password>` — пароль для захисту сервісу.
  - `--enable-admin` / `--disable-admin` — увімкнути/вимкнути адмін-інтерфейс (Redis Commander).

- redis:destroy
  - `-f, --force` — примусове видалення (обов'язкове для видалення сервісу за замовчуванням).
  - `-y, --yes` — не питати підтвердження.

- redis:start
  - `-r, --restart` — перезапустити контейнер, якщо він вже працює (видаляє і створює заново).

## Нотатки

- Якщо аргумент `service` пропущено, команди використовують дефолтний сервіс Redis (встановлюється командою `ws redis:use [service]`).
- Якщо `--host` передано у `ws redis:create`, сервіс вважається зовнішнім: контейнер Docker для нього не створюється, а команди `start`/`stop`/`destroy` ним не керують. Він все одно відображається у `redis:ls` та в адмін-інтерфейсі.
- **Адмін-інтерфейс (Redis Commander)**: автоматично запускається/оновлюється після `redis:start`, `redis:stop`, `redis:destroy` та `redis:set-domain`, показуючи всі доступні сервіси (запущені локальні контейнери та зовнішні хости). Працює лише якщо увімкнено (за замовчуванням увімкнено — перемикається через `redis:upgrade --enable-admin`/`--disable-admin`) і є хоча б один доступний сервіс. Обслуговується на домені, встановленому через `ws redis:set-domain <domain>` (за замовчуванням: `redis-commander.workspace`), через проксі Wocker.
- Доступне автодоповнення для параметра `service`.
