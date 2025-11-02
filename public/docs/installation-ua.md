# Встановлення

## Необхідні інструменти

Перш ніж встановлювати Wocker, переконайтеся, що у вас встановлено:

- **Node.js** (версія 14 або новіша) — [Завантажити](https://nodejs.org)
- **Docker** — [Завантажити](https://www.docker.com/get-started)


### Перевірка інструментів

Перевірте, чи встановлено і працює Docker:

```shell
docker --version
docker ps
```

Перевірте версію Node.js та npm:

```shell
node --version
npm --version
```

## Встановлення Wocker

Встановіть Wocker за допомогою улюбленого менеджера пакетів:

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

## Перевірка встановлення

Після встановлення перевірте, що Wocker встановлено коректно:

```shell
ws
```

З'явиться список доступних команд і опцій.

## Оновлення Wocker

Щоб оновити Wocker до останньої версії:

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

## Видалення

Якщо потрібно видалити Wocker:

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

## Примітки для різних платформ

### macOS

Якщо на macOS виникають проблеми з правами доступу, можливо, доведеться використати `sudo`:

```shell
sudo npm install -g @wocker/ws
```

Або налаштуйте npm для встановлення глобальних пакетів без sudo, [змінивши каталог за замовчуванням](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

### Windows

⚠️ **Важливо**: Wocker працює на Windows тільки через [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux).

Щоб використовувати Wocker на Windows:
1. Встановіть WSL2 за [офіційною інструкцією](https://docs.microsoft.com/en-us/windows/wsl/install)
2. Встановіть Docker Desktop з увімкненою підтримкою WSL2
3. Встановіть Node.js у вашому дистрибутиві WSL2
4. Встановлюйте та запускайте Wocker з термінала WSL2

### Linux

У Linux можливо доведеться додати вашого користувача до групи docker, щоб запускати Docker без sudo:

```shell
sudo usermod -aG docker $USER
```

Вийдіть із системи та зайдіть знову, щоб зміни набрали чинності.

## Усунення несправностей

### Команду не знайдено

Якщо після встановлення з'являється помилка "command not found":

1. Перевірте, чи знаходиться глобальний каталог npm bin у вашому PATH:

    ```shell script
    npm config get prefix
    ```

2. Додайте його до PATH у `~/.bashrc` або `~/.zshrc`:

    ```shell script
    export PATH="$PATH:$(npm config get prefix)/bin"
    ```

3. Перезавантажте налаштування оболонки:

    ```shell script
    source ~/.bashrc  # або ~/.zshrc
    ```

### Проблеми з підключенням до Docker

Якщо Wocker не може під'єднатися до Docker:

1. Переконайтеся, що Docker запущено:

    ```shell script
    docker ps
    ```

2. Перевірте права доступу до сокета Docker (Linux):

    ```shell script
    ls -l /var/run/docker.sock
    ```

## Де отримати допомогу

Якщо виникли питання або проблеми:

- Перевірте [GitHub Issues](https://github.com/kearisp/wocker/issues)
- Прочитайте [документацію](/docs)
- Поставте запитання в спільноті

## Наступні кроки

Після встановлення ви можете:

1. [Ініціалізувати перший проєкт](/docs/project/init)
2. [Дізнатися про керування проєктом](/docs/project/management)
3. [Налаштувати домени](/docs/project/domains)




