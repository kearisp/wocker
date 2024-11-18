# Ollama plugin

Цей плагін забезпечує інтеграцію з сервісами [ollama](https://ollama.com), які виконуються в Docker-контейнерах. Це дозволяє користувачам швидко запускати та керувати ізольованими середовищами з Ollama через зручний командний інтерфейс.

## Команди

```shell
ws ollama:ls
ws ollama:create [name]
ws ollama:destroy <name>
ws ollama:start [name]
ws ollama:stop [name]
ws ollama:use <name>
ws ollama:run <name> [model]
```

## Встановлення

Наступна команда встановлює плагін Ollama:

```shell
ws plugin:add ollama
```

## Створення сервісу

Для створення нового сервісу Ollama, запустіть наступну команду в терміналі:

```shell
$ ws ollama:create
```

Після цього вас попросять ввести ім'я сервісу. Наприклад:

```text
? Ollama service name: example
```

Щоб мати можливість надсилати запити до сервісу Ollama з хост-машини, необхідно додати відповідний запис у файл `hosts`. Це дозволить правильно налаштувати маршрутизацію запитів:

```hosts
# /etc/hosts
127.0.0.1 ollama-example.ws
```

## Запуск сервісу

Ця команда запускає вказаний Docker-контейнер, у якому міститься сервіс Ollama. Параметр `[name]` є необов'язковим. Якщо він не вказаний, буде використано контейнер за замовчуванням.

**Без параметра:** Використовує і запускає контейнер за замовчуванням.

```shell
ws ollama:start
```

**З параметром:** Запускає контейнер із назвою "example".

```shell
ws ollama:start example
```

## Зупинення сервісу

Ця команда зупиняє вказаний Docker-контейнер Ollama. Як і у попередній команді, `[name]` не обов'язковий, і за відсутності вказування буде зупинено контейнер за замовчуванням.

**Без параметра:** Зупиняє контейнер за замовчуванням.

```shell
ws ollama:stop
```

**З параметром:** Зупиняє контейнер із назвою "example".

```shell
ws ollama:stop example
```