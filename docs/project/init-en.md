# Project initialization


```shell
ws init
```


## Creating a project

First, you need to go to the appropriate directory of the project:

```shell
cd ~/project-dir
```

In the corresponding directory, execute the `ws init` command:

```shell
$ ws init
? Project name: (example)
```


### Project type

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

With the help of presets, it is possible to deploy projects with preset settings for docker. Presets also have support for additional settings.

> TODO: Add support for custom presets

```shell
? Project type:  Preset
? Choose preset: (Use arrow keys)
❯ apache
  go
  node
  php-apache
  shopify
```


## Next steps

- [Project Management](/projects/management)
