# Installation

## Prerequisites

Before installing Wocker, make sure you have the following installed:

- **Node.js** (version 14 or higher) — [Download](https://nodejs.org)
- **Docker** — [Download](https://www.docker.com/get-started)


### Verify Prerequisites

Check if Docker is installed and running:

```shell
docker --version
docker ps
```

Check Node.js version:

```shell
node --version
npm --version
```

## Install Wocker

Install Wocker using your favorite package manager:

<codeblock storageKey="package-manager">

```bash title="npm"
npm install -g @wocker/ws
```

```bash title="yarn"
yarn global add @wocker/ws
```

```bash title="pnpm"
pnpm add -g @wocker/ws
```

</codeblock>


## Verify Installation

After installation, verify that Wocker is installed correctly:

```shell
ws
```

This will display a list of available commands and options.


## Update Wocker

To update Wocker to the latest version:

<codeblock storageKey="package-manager">

```shell title="npm"
npm update -g @wocker/ws
```

```shell title="yarn"
yarn global upgrade @wocker/ws
```

```shell title="pnpm"
pnpm update -g @wocker/ws
```

</codeblock>


## Uninstall

If you need to uninstall Wocker:

<codeblock storageKey="package-manager">

```shell title="npm"
npm uninstall -g @wocker/ws
```

```shell title="yarn"
yarn global remove @wocker/ws
```

```shell title="pnpm"
pnpm remove -g @wocker/ws
```

</codeblock>


## Platform-Specific Notes

### macOS

If you're using macOS and encounter permission issues, you may need to use `sudo`:

```shell
sudo npm install -g @wocker/ws
```

Or configure npm to install global packages without sudo by [changing the default directory](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).


### Windows

⚠️ **Important**: Wocker only works on Windows through [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux).

To use Wocker on Windows:
1. Install WSL2 following the [official guide](https://docs.microsoft.com/en-us/windows/wsl/install)
2. Install Docker Desktop with WSL2 backend enabled
3. Install Node.js inside your WSL2 distribution
4. Install and run Wocker from within WSL2 terminal


### Linux

On Linux, you may need to add your user to the docker group to run Docker without sudo:

```shell
sudo usermod -aG docker $USER
```

Log out and back in for the changes to take effect.


## Troubleshooting

### Command Not Found

If you get "command not found" error after installation:

1. Check if the global npm bin directory is in your PATH:

    ```shell script
    npm config get prefix
    ```

2. Add it to your PATH in `~/.bashrc` or `~/.zshrc`:

    ```shell script
    export PATH="$PATH:$(npm config get prefix)/bin"
    ```

3. Reload your shell configuration:

    ```shell script
    source ~/.bashrc  # or ~/.zshrc
    ```

### Docker Connection Issues

If Wocker cannot connect to Docker:

1. Make sure Docker is running:

    ```shell script
    docker ps
    ```

2. Check Docker socket permissions (Linux):

    ```shell script
    ls -l /var/run/docker.sock
    ```


## Getting Help

If you encounter any issues:

- Check the [GitHub Issues](https://github.com/kearisp/wocker/issues)
- Read the [documentation](/docs)
- Ask questions in the community


## Next Steps

Now that you have Wocker installed, you can:

1. [Initialize your first project](/docs/project/init)
2. [Learn about project management](/docs/project/management)
3. [Configure domains](/docs/project/domains)
