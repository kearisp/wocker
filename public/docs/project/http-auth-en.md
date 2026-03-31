# HTTP Auth

The `http-auth` commands allow you to manage HTTP Basic Authentication for your projects and domains. This provides an additional layer of security by requiring a username and password to access web resources.

## Commands

### Enable and Disable

#### http-auth:enable
Enable authentication for the project.

```shell
ws http-auth:enable [--domain|-d <domain>]
```
- `--domain`, `-d`: Domain to apply authentication to. If not specified, it applies to the entire project.

#### http-auth:disable
Disable authentication for the project.

```shell
ws http-auth:disable [--domain|-d <domain>]
```
- `--domain`, `-d`: Domain to disable authentication for.

### User Management

#### http-auth:add-user
Add a user for HTTP Basic Auth.

```shell
ws http-auth:add-user [user]
ws http-auth:add-user [user]:[password]
```

Options:
- `--global`, `-g`: Add the user globally (for all projects).
- `--algorithm`, `-a`: Password hashing algorithm (`md5`, `sha1`, `sha256`, `sha512`, `bcrypt`).

Examples:
```shell
# Add user (password will be prompted interactively)
ws http-auth:add-user admin

# Add user with password
ws http-auth:add-user admin:secret123

# Add a global user using bcrypt algorithm
ws http-auth:add-user admin:secret123 --global --algorithm bcrypt
```

#### http-auth:remove
Remove a user from the project.

```shell
ws http-auth:remove [user]
```

#### http-auth:clear
Clear the list of users (feature in development).

```shell
ws http-auth:clear
```
