# Php Apache

## Installation

```shell
ws preset:add php-apache
```

## Usage:

This section describes how to properly use the `php-apache` preset to initialize and launch a PHP project with Apache.
By following the steps below, you will quickly set up the environment for your project.

### 1. Clone the repository and initialize the project

```shell
git clone https://github.com/kearisp/timer.git
cd timer
```

### 2. Initialize the project using the php-apache preset

```shell
ws init
? Project name: timer
? Project type: Preset
? Choose preset: php-apache
? Preset mode: For project only
? PHP version 8.3
? Extensions
? Install composer? No
? Node version none
? Apache document root /var/www
? Volume: ./:/var/www
? App port: 80
```

### 3. Add an entry to the hosts file

To make the project work locally in your environment, you need to add an entry to the `hosts` file. The `hosts` file is
usually located at the following paths:

- **Windows**: `C:\Windows\System32\drivers\etc\hosts`
- **Linux and macOS**: `/etc/hosts`

Add the following entry to the `hosts` file:

```text
# hosts
127.0.0.1 timer.workspace
```

### 4. Start the project

```shell
ws start
```

### 5. Check the project in the browser

The running project is accessible via the web interface.

![php-apache-img.png](/docs/presets/php-apache-img.png)
