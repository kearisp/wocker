# RProxy

Плагін може працювати з [ngrok](https://ngrok.com), [serveo.net](https://serveo.net) або [localtunnel](https://theboroer.github.io/localtunnel-www), з його допомогою ви зможете створити тунель для проєкту.


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


## Налаштування

Перейдіть у директорію з вашим проєктом.

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


## Запуск/Зупинка

При активації реверс проксі буде запускатись кожного разу при [старті проєкту](/docs/project/management#запуск-проєкту) і зупинятись кожного разу при [зупинці проєкту](/project/management#зупинення-проєкту) автоматично.
