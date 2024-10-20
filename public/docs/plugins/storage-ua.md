# Storage


> ⚠ Coming soon with Wocker 1.0.19

## Команди

```shell
ws storage:start [name]
ws storage:stop [name]
ws storga:use <name>
ws storage:create <name> -u=username -p=password -t=minio
ws storage:destroy <name>
```

## Інсталяція

```shell
ws plugin:add storage
```

## Створення

```shell
ws storage:create example
```

```text
# add to hosts

121.0.0.1 minio-example.ws
```


## Запуск

```shell
ws storage:start
```
