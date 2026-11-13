# Аргументи збірки

```shell
ws build-args [-n <name>] [-s <service>]
ws build-args:get <KEY> [...KEYS] [-n <name>]
ws build-args:set <KEY>=<value> [...KEY2=value] [-n <name>] [-s <service>] [-l]
ws build-args:unset <KEY> [...KEYS] [-n <name>] [-s <service>] [-l]
```


## Шари

Аргументи збірки зберігаються в тих самих шарах, що й [змінні середовища](/docs/project/env). Перемагає шар з вищим пріоритетом: спочатку **Data** (ціль за замовчуванням), потім **Repository** (`wocker.config.json` у директорії проєкту).

`build-args:set` і `build-args:unset` за замовчуванням записують у шар **Data**. Використайте `--local`, щоб записати в шар **Repository**.


## Список

```shell
$ ws build-args
┌────────────┬──────────────┬──────────┐
│ LAYER      │ KEY          │ VALUE    │
├────────────┼──────────────┼──────────┤
│ Data       │ PHP_VERSION  │ 8.2      │
├────────────┼──────────────┼──────────┤
│ Repository │ NODE_VERSION │ v18.16.0 │
└────────────┴──────────────┴──────────┘
```

Якщо ключ визначено в кількох шарах, рядки з нижчим пріоритетом позначаються `(Overridden)` і виводяться сірим. Вони показуються лише в інтерактивному терміналі; коли вивід перенаправлено або передано через pipe, друкуються тільки чинні значення.

Колонка `SERVICE` додається для проєктів типу `compose` (або коли увімкнено експериментальну функцію `projectComposeType`). Використайте `--service`, щоб показати аргументи збірки лише одного сервісу.


## Один аргумент

```shell
$ ws build-args:get PHP_VERSION
```

Виводить значення кожного запитаного ключа для кожного шару, де він визначений. Якщо нічого не знайдено, виводить `No build args found!`


## Встановлення

```shell
$ ws build-args:set PHP_VERSION=8.2
$ ws build-args:set --local NODE_VERSION=v18.16.0
```


## Видалення

```shell
$ ws build-args:unset PHP_VERSION
$ ws build-args:unset --local NODE_VERSION
```


## Опції

- `-n, --name <name>` — назва проєкту (за замовчуванням поточний проєкт).
- `-s, --service <service>` — назва сервісу.
- `-l, --local` — (`build-args:set`, `build-args:unset`) записувати в шар Repository (`wocker.config.json`) замість шару Data.
