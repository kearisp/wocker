# Ініціалізація проєкту


```shell
ws init
```


## Створення проєкту

Спочатку, потрібно перейти у відповідну директорію проєкту:

```shell
$ cd ~/project-dir
```

У відповідній директорії виконайте команду `ws init`:

```shell
$ ws init
? Project name: (example)
```


### Тип проєкту

```shell
? Project type:  (Use arrow keys)
❯ Image
  Dockerfile
  Preset
```


#### Image

```shell
? Project type:  Image
? Image Name:
```


#### Dockerfile

```shell
? Project type:  Dockerfile
? Dockerfile:  (Use arrow keys)
❯ Dockerfile
  Dockerfile_dev
  dev.dockerfile
```


#### Preset

З допомогою пресетів є можливість розгорнути проєкти із заздалегідь передвстановленими налаштуваннями для докеру. Пресети також мають підтримку додаткових налаштувань.

> TODO: Додати підтримку кастомних пресетів

```shell
? Project type:  Preset
? Choose preset: (Use arrow keys)
❯ apache
  go
  node
  php-apache
  shopify
```


## Наступні кроки

- [Керування проєктами](/docs/project/management)
