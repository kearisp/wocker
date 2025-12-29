# Project initialization

The `ws init` command is used to initialize a new project in the current directory. It creates a `.wocker.json` configuration file that contains the main settings for the project and its infrastructure.

```shell
ws init
```


## Creating a project

First, you need to go to your project directory:

```shell
$ cd ~/project-dir
```

In this directory, execute the `ws init` command:

```shell
$ ws init
? Project name: (example)
```

The system will prompt you to enter a project name (the current directory name is used by default).


### Project type

Next, you need to choose the project type. This determines how Wocker will run your container:

```shell
? Project type:  (Use arrow keys)
❯ Image
  Dockerfile
  Preset
```


#### Image

Choose this option if you want to use a ready-made Docker image from Docker Hub or another registry.

```shell
? Project type:  Image
? Image Name:
```

You will need to specify the full name of the image (e.g., `nginx:latest` or `mysql:8.0`).


#### Dockerfile

Choose this option if your project has its own `Dockerfile`. Wocker will build the image automatically before running.

```shell
? Project type:  Dockerfile
? Dockerfile:  (Use arrow keys)
❯ Dockerfile
  Dockerfile_dev
  dev.dockerfile
```

The system will scan the current directory and prompt you to choose one of the found Dockerfiles.


#### Preset

Presets are ready-made configuration templates for popular technology stacks. They allow you to quickly deploy a project with predefined settings.

```shell
? Project type:  Preset
? Choose preset: (Use arrow keys)
❯ apache
  go
  node
  php-apache
  shopify
```

Each preset may have its own additional questions (e.g., programming language version or additional modules).

> TODO: Add support for custom presets


## Next steps

- [Project Management](/docs/project/management)
