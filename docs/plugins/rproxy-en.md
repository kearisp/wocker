# RProxy

The launcher plugin can work with [ngrok](https://ngrok.com), [serveo.net](https://serveo.net) or [localtunnel](https://theboroer.github.io/localtunnel-www), with its help you can create a tunnel for the project.


## Commands

```shell
ws rproxy:init
ws rproxy:start [-rb]
ws rproxy:stop
ws rproxy:build
ws rproxy:logs
```


## Installation

```shell
ws plugin:add rproxy
```


## Setup up

Go to the directory with your project.

```shell
cd /project-dir
```

Запустіть команду ініціалізацію плагіну.

```shell
$ ws rproxy:init
? Enable reverse proxy? (Y/n) Yes
? Reverse proxy: (Use arrow keys)
❯ Ngrok
  Serveo
  LocalTunnel
```


### Ngrok

```shell
? Reverse proxy: Ngrok
? Auth token: ****
? Enable subdomain? (y/N)
```


### Serveo

```shell
? Reverse proxy: Serveo
? Subdomain:  https://example.serveo.net
```


### LocalTunnel

```shell
? Reverse proxy: LocalTunnel
? Subdomain:  https://example.loca.lt
? Do you want to skip the IP confirmation form automatically? (Y/n)
```


## Start/Stop

When activated, the reverse proxy will start every time the [project is started](/project/management#starting-project) and stop automatically every time the [project is stopped](/project/management#stopping-project).
