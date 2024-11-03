# SSL

> ⚠ Coming soon with Wocker 1.0.20

## Commands

```shell
ws cert:generate <name> [-d <domain> ...-d <domain>]
ws cert:use <name> [-n <project-name>]
ws cert:delete <name>
```

## Створення сертифіката

Для створення сертифіката використовується команда `ws cert:generate <name>`.

### Опції

| Опція       | Опис                                   | Приклад                                          |
|-------------|----------------------------------------|--------------------------------------------------|
| `-d, --dns` | Домени для яких призначено сертифікат. | `-d example.localhost`, `-d *.example.localhost` |


```shell
ws cert:generate example.workspace -d example.workspace -d *.example.workspace
```

```shell
cd ~/project/dir
ws domain:add example.workspace
ws domain:add subdomain.example.workspace
```

Додайте відповідні домени до файлу `hosts`:

```hosts
127.0.0.1       example.workspace
127.0.0.1       subdomain.example.workspace
```

```shell
ws start -r
```

Додайте `~/.workspace/certs/ca/Wocker-CA.crt` до довірених.


## Видалення сертифіката

Для видалення сертифіката використайте цю команду:

```shell
ws cert:delete example.workspace
```
