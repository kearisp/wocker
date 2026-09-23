# Storage

## Команди

```shell
ws storage:create [name] [--type <type>] [--style <style>] [-u <user>] [-p <password>] [-i <image>]
ws storage:upgrade [name] [--style <style>] [-v <volume>] [-i <image>]
ws storage:destroy <name> [-y|--yes] [-f|--force]
ws storage:start [name] [-r|--restart]
ws storage:stop [name]
ws storage:use <name>
ws storage:ls
ws storage:create-bucket [bucket]
ws storage:create-bucket <name>/<bucket>
ws storage:delete-bucket [bucket] [-y|--yes] [-f|--force]
ws storage:delete-bucket <name>/<bucket> [-y|--yes] [-f|--force]
```

Керуйте S3-сумісними сервісами об'єктного сховища у робочому просторі Wocker: створення, запуск/зупинка, вибір сервісу за замовчуванням, оновлення та керування бакетами — усе доступне через реверс-проксі Wocker.

## Інсталяція

```shell
ws plugin:install storage
```

## Провайдери

Кожен сервіс сховища працює на одному з двох провайдерів, який обирається через `--type` при створенні:

- **`minio`** (образ за замовчуванням `minio/minio:latest`) — запускає MinIO в одному контейнері, надаючи S3 API на порту `80` та веб-консоль на порту `9000`. Операції з бакетами виконуються через клієнт `mc`, вбудований в образ.
- **`seaweedfs`** (образ за замовчуванням `chrislusf/seaweedfs:latest`) — запускає SeaweedFS (`weed server -s3`) в одному контейнері, надаючи S3 API на порту `8333` та веб-інтерфейс filer (використовується як консоль) на порту `8888`. Облікові дані записуються у згенерований файл ідентичностей, який монтується в контейнер. Операції з бакетами виконуються через клієнт `weed shell`, вбудований в образ. Використовуйте цей провайдер, якщо образи `minio/minio` для вас недоступні.

Обидва провайдери працюють однаково з боку CLI: ті самі команди, та сама семантика бакетів і стилю адрес.

## Швидкий старт

```shell
# 1) Створити сервіс сховища
ws storage:create example -u admin -p supersecret --type minio

# 2) Зробити сервісом за замовчуванням
ws storage:use example

# 3) Запустити
ws storage:start

# 4) Створити бакет
ws storage:create-bucket example/mybucket
```

```text
# додати до hosts-файлу (виводиться після `storage:start`)

127.0.0.1 minio-example.ws
```

## Команди

```shell
# Створення/оновлення/видалення сервісу сховища
ws storage:create [name] [--type <type>] [--style <style>] [-u <user>] [-p <password>] [-i <image>]
ws storage:upgrade [name] [--style <style>] [-v <volume>] [-i <image>]
ws storage:destroy <name> [-y|--yes] [-f|--force]

# Керування життєвим циклом
ws storage:start [name] [-r|--restart]
ws storage:stop [name]

# Встановлення сервісу за замовчуванням / список налаштованих сервісів
ws storage:use <name>
ws storage:ls

# Керування бакетами
ws storage:create-bucket [bucket]
ws storage:create-bucket <name>/<bucket>
ws storage:delete-bucket [bucket] [-y|--yes] [-f|--force]
ws storage:delete-bucket <name>/<bucket> [-y|--yes] [-f|--force]
```

## Опис опцій

- storage:create
  - `--type <minio|seaweedfs>` — провайдер сховища; якщо не вказано, запитується інтерактивно
  - `--style <path|subdomain>` — стиль адрес сховища; якщо не вказано, запитується інтерактивно
  - `-u, --user <user>` — ім'я користувача / ключ доступу, щонайменше 3 символи; якщо не вказано, запитується інтерактивно
  - `-p, --password <password>` — пароль / секретний ключ, щонайменше 8 символів, підтверджується двічі при інтерактивному введенні; якщо не вказано, запитується інтерактивно
  - `-i, --image <image>` — Docker-образ (назва:тег) для запуску сервісу; за замовчуванням `minio/minio:latest` або `chrislusf/seaweedfs:latest` залежно від `--type`

- storage:upgrade
  - `--style <path|subdomain>` — змінити стиль адрес сховища
  - `-v, --volume <volume>` — змінити Docker-том, що використовується для даних
  - `-i, --image <image>` — змінити образ (назва:тег)

- storage:destroy
  - `-y, --yes` — не питати підтвердження
  - `-f, --force` — дозволити видалення сервісу за замовчуванням

- storage:start
  - `-r, --restart` — перезапустити контейнер, якщо він вже працює

- storage:create-bucket / storage:delete-bucket
  - `<name>/<bucket>` — вказати бакет у конкретному сервісі сховища замість сервісу за замовчуванням; якщо `bucket` не вказано або він некоректний, буде запропоновано ввести його
  - `-y, --yes` (лише delete) — не питати підтвердження
  - `-f, --force` (лише delete) — видалити бакет, навіть якщо він не порожній


## Нотатки

- Якщо аргумент `name` пропущено, команди використовують сервіс сховища за замовчуванням (встановлюється командою `ws storage:use <name>`). Якщо запустити `ws storage:start` без налаштованого сервісу за замовчуванням, спочатку інтерактивно запуститься `ws storage:create`.
- Назви контейнерів мають формат `<type>-<name>.ws` (наприклад, `minio-example.ws`, `seaweedfs-example.ws`).
- Стиль адрес визначає, як надаються бакети: `path` надає бакети за адресою `http://<type>-<name>.ws/<bucket>`, консоль — за адресою `http://console.<type>-<name>.ws`; `subdomain` надає кожен бакет на власному піддомені `http://<bucket>.<type>-<name>.ws`, консоль — за адресою `http://<type>-<name>.ws`. Додавання або видалення бакета в стилі `subdomain` автоматично перезапускає сервіс, щоб маршрутизація нового піддомену набула чинності.
- Після `ws storage:start` додайте виведений(і) рядок(и) `127.0.0.1 <domain>` до hosts-файлу, щоб виведені URL-адреси розпізнавалися локально.
- Облікові дані (`--user`/`--password`) вбудовуються в контейнер при створенні і не можуть бути змінені через CLI пізніше; щоб їх оновити, видаліть сервіс і створіть його заново.
- `ws storage:ls` виводить список усіх налаштованих сервісів з їх типом, назвою контейнера та статусом (запущено/зупинено); сервіс за замовчуванням позначається `(default)`.