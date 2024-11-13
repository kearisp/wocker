# Cron


## Інсталяція

```shell
ws plugin:add cron
```

## Команди

```shell
ws cron:start
ws cron:stop
ws crontab -e
ws crontab -l
ws crontab -r
```


## Запуск cron сервісу

У crontab сервісу буде автоматично додаватися crontab запущених проєктів.

```shell
ws cron:start
```


## Зупинка cron сервісу

```shell
ws cron:stop
```


## Редагування crontab

```shell
ws crontab -e
```
