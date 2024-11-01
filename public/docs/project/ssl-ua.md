# SSL

> ⚠ Coming soon with Wocker 1.0.20

## Commands

```shell
ws cert:generate <name> -d <domain> -d <domain>
ws cert:delete <name>
```

## Створення сертифіката

```shell
ws cert:generate example.workspace -d *.example.workspace
```

Додайте `~/.workspace/certs/ca/Wocker-CA.crt` до довірених.


## Видалення сертифіката

Для видалення сертифіката використайте цю команду:

```shell
ws cert:delete example.workspace
```
