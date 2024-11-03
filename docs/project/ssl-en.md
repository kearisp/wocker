# SSL

> ⚠ Coming soon with Wocker 1.0.20

## Commands

```shell
ws cert:generate <name> [-d <domain> ...-d <domain>]
ws cert:use <name> [-n <project-name>]
ws cert:delete <name>
```

## Certificate Generation

To generate a certificate, use the command `ws cert:generate <name>`.

### Options

| Option      | Description                                    | Example                                          |
|-------------|------------------------------------------------|--------------------------------------------------|
| `-d, --dns` | Domains for which the certificate is intended. | `-d example.localhost`, `-d *.example.localhost` |

```shell
ws cert:generate example.workspace -d example.workspace -d *.example.workspace
```

```shell
cd ~/project/dir
ws domain:add example.workspace
ws domain:add subdomain.example.workspace
```

Add the corresponding domains to the `hosts` file:

```hosts
127.0.0.1       example.workspace
127.0.0.1       subdomain.example.workspace
```

```shell
ws start -r
```

Add `~/.workspace/certs/ca/Wocker-CA.crt` to trusted certificates.

## Certificate Deletion

To delete a certificate, use this command:

```shell
ws cert:delete example.workspace
```
