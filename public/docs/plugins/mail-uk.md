# Плагін Mail

## Команди

```shell
ws mail:ls
ws mail:create [name] [-t <type>] [-i <image>]
ws mail:upgrade [name] [-t <type>] [-i <image>]
ws mail:destroy <name> [-f|--force] [-y|--yes]
ws mail:start [name] [-r|--restart]
ws mail:stop [name]
ws mail:use [name]
```

Керуйте сервісами перехоплення пошти (MailDev або MailHog) у робочому просторі Wocker: створення, запуск/зупинка, вибір сервісу за замовчуванням та оновлення.

## Інсталяція

```shell
ws plugin:install mail
```

## Швидкий старт

```shell
# 1) Створити сервіс
ws mail:create mymail -t maildev

# 2) Зробити сервісом за замовчуванням
ws mail:use mymail

# 3) Запустити
ws mail:start
```

## Команди

```shell
# Список усіх поштових сервісів
ws mail:ls

# Створення / оновлення / видалення сервісу
ws mail:create [name] [-t <type>] [-i <image>]
ws mail:upgrade [name] [-t <type>] [-i <image>]
ws mail:destroy <name> [-f|--force] [-y|--yes]

# Керування життєвим циклом
ws mail:start [name] [-r|--restart]
ws mail:stop [name]

# Встановлення сервісу за замовчуванням
ws mail:use [name]
```

## Опис опцій

- mail:create / mail:upgrade
  - `-t, --type <type>` — тип сервісу: `maildev` або `mailhog`
  - `-i, --image <image>` — кастомний Docker-образ

- mail:destroy
  - `-f, --force` — примусове видалення
  - `-y, --yes` — пропустити запит підтвердження

- mail:start
  - `-r, --restart` — перезапустити, якщо вже працює

## Нотатки

- Якщо аргумент `name` пропущено, команди використовують дефолтний поштовий сервіс (встановлюється командою `ws mail:use [name]`).
- Підтримувані типи провайдерів: `maildev`, `mailhog`.
