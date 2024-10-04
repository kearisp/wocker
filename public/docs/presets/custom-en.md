# Custom preset

## Initialisation

```shell
cd ~/preset-dir
ws preset:init
```

## Deinitialisation

```shell
cd ~/preset-dir
ws preset:deinit
```


## config.json

```json
{
    "name": "preset-name",
    "version": "1.0.0"
}
```


### type

```json
{
    "type": "dockerfile",
    "dockerfile": "./Dockerfile"
}
```

```json
{
    "type": "image",
    "image": "image:tag"
}
```

### Options

#### Build-args options

```json
{
    "buildOptions": {
        "EXAMPLE_ARG": {
            "message": "Message",
            "type": "string",
            "default": "value"
        }
    }
}
```


#### Env options

```json
{
    "envOptions": {
        "EXAMPLE_ENV": {
            "message": "Message:",
            "type": "string",
            "default": "value"
        }
    }
}
```


#### Option types

| Option type |
|-------------|
| `string`    |
| `number`    |
| `password`  |
| `select`    |
| `boolean`   |

##### String

```json
{
    "OPTION_NAME": {
        "message": "Type value:",
        "type": "string",
        "default": "Default value"
    }
}
```

##### Select

```json
{
    "OPTION_NAME": {
        "message": "Select value",
        "options": [
            {"label": "Example 1", "value": "1"},
            {"label": "Example 2", "value": "2"}
        ],
        "defaultValue": "1"
    }
}
```


### Volumes

```json
{
    "volumes": [
        "./:/var/www/html"
    ]
}
```
