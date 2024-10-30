# Storage


## Commands

```shell
ws storage:start [name]
ws storage:stop [name]
ws storga:use <name>
ws storage:create <name> -u=username -p=password -t=minio
ws storage:destroy <name>
```

## Installation

```shell
ws plugin:add storage
```

## Creation

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
