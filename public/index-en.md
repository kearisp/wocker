# Wocker

[@wocker/ws](https://www.npmjs.com/package/@wocker/ws)


## What is Wocker?

Wocker is a wrapper for [docker](https://www.docker.com) that allows you to quickly deploy almost any project locally.


## What is Wocker for?

Wocker allows you to run projects locally as microservices.


## Requirements

- [node.js](https://nodejs.org)
- [docker](https://www.docker.com)


## Quick Start

1. **Install Wocker**

   ```shell
   npm install -g @wocker/ws
   ```

2. **Initialize your project**

   ```shell
   cd ~/your-project
   ws init
   ```

3. **Start the project**

   ```shell
   ws start
   ```

Learn more about [project initialization](/docs/project/init).


## Key Features

- 🚀 **Quick Setup** - Deploy projects in minutes with presets
- 🔧 **Flexible Configuration** - Support for custom Dockerfiles and images
- 🌐 **Domain Management** - Easy local domain configuration
- 🔒 **SSL Support** - Generate and manage SSL certificates
- 🔌 **Plugin System** - Extend functionality with plugins (PostgreSQL, MariaDB, Redis, MongoDB, Elasticsearch, and more)


## Documentation

### Getting Started
- [Installation](/docs/installation)
- [Project Initialization](/docs/project/init)
- [Project Management](/docs/project/management)
- [Logging](/docs/project/logs)


### Configuration
- [Domains](/docs/project/domains)
- [SSL Certificates](/docs/project/ssl)
- [Environment Variables](/docs/project/env)
- [Build Arguments](/docs/project/build-args)


## Blog

- [Project Deployment Example](/blog/posts/1)
- [Connecting to a Database in PhpStorm](/blog/posts/2)


## Community & Support

- [GitHub Repository](https://github.com/kearisp/wocker)
- [Report Issues](https://github.com/kearisp/wocker/issues)
- [NPM Package](https://www.npmjs.com/package/@wocker/ws)
