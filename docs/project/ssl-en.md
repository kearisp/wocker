# SSL

> ⚠ Coming soon with Wocker 1.0.20

## Commands

```shell
ws cert:generate <name> -d <domain> -d <domain>
ws cert:delete <name>
```

## Creating a Certificate

```shell
ws cert:generate example.workspace -d *.example.workspace
```

Add `~/.workspace/certs/ca/Wocker-CA.crt` to trusted certificates.

## Deleting a Certificate

To delete a certificate, use this command:

```shell
ws cert:delete example.workspace
```
