# Ollama plugin

This plugin provides integration with [ollama](https://ollama.com) services that run in Docker containers. This allows users to quickly launch and manage isolated environments with Ollama through a convenient command interface.

## Commands

```shell
ws ollama:ls
ws ollama:create [name]
ws ollama:destroy <name>
ws ollama:start [name]
ws ollama:stop [name]
ws ollama:use <name>
ws ollama:run <name> [model]
```

## Installation

The following command installs the Ollama plugin:

```shell
ws plugin:add ollama
```

## Creating a Service

To create a new Ollama service, run the following command in the terminal:

```shell
$ ws ollama:create
```

After this, you will be asked to enter the service name. For example:

```text
? Ollama service name: example
```

To be able to send requests to the Ollama service from the host machine, you need to add the appropriate entry to the `hosts` file. This will allow for proper routing of requests:

```hosts
# /etc/hosts
127.0.0.1 ollama-example.ws
```

## Starting a Service

This command starts the specified Docker container containing the Ollama service. The parameter `[name]` is optional. If it is not specified, the default container will be used.

**Without parameter:** Uses and starts the default container.

```shell
ws ollama:start
```

**With parameter:** Starts the container named "example".

```shell
ws ollama:start example
```

## Stopping a Service

This command stops the specified Ollama Docker container. As with the previous command, `[name]` is optional, and if not specified, the default container will be stopped.

**Without parameter:** Stops the default container.

```shell
ws ollama:stop
```

**With parameter:** Stops the container named "example".

```shell
ws ollama:stop example
```
