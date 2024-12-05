# Domains

## Description

Domain logic is based on the `nginxproxy/nginx-proxy` image.
When the [env](/docs/project/config) variables `VIRTUAL_HOST` and `VIRTUAL_PORT` are present in a container, the [proxy](/docs/plugins/proxy) will automatically redirect the request to the corresponding container.

Commands for managing the domain list are created for convenient management of the `VIRTUAL_HOST` env variable content.


```shell
ws domains
ws domain:add <domain> [...domains]
ws domain:remove <domain> [...domains]
ws domain:clear
```


## Domains list

```shell
$ ws domains
┌─────────────────────┐
│ Domain              │
├─────────────────────┤
│ example.workspace   │
├─────────────────────┤
│ example-2.workspace │
└─────────────────────┘
```

```shell
$ ws config:get VIRTUAL_HOST
┌──────────────┬───────────────────────────────────────┐
│ KEY          │ VALUE                                 │
├──────────────┼───────────────────────────────────────┤
│ VIRTUAL_HOST │ example.workspace,example-2.workspace │
└──────────────┴───────────────────────────────────────┘
```


## Add domain

```shell
ws domain:add example.workspace
```

```text
127.0.0.1 example.workspace
```


## Remove domain

```shell
ws domain:remove example.workspace
```


## Removing all domains

```shell
ws domain:clear
```
