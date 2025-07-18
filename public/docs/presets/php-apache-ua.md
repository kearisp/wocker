# Php Apache

## Інсталяція

```shell
ws preset:add php-apache
```

## Використання:

У цьому розділі описано, як правильно використовувати пресет `php-apache` для ініціалізації та запуску PHP-проєкту з
Apache. Виконавши наведені нижче кроки, ви зможете швидко налаштувати середовище для вашого проєкту.

### 1. Клонування репозиторію та ініціалізація проєкту

```shell
git clone https://github.com/kearisp/timer.git
cd timer
```

### 2. Ініціалізація проєкту з використанням пресету php-apache

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

### 3. Додавання запису до файлу hosts

Щоб проєкт працював локально у вашому середовищі, необхідно додати запис до файлу `hosts`. Файл `hosts` зазвичай
знаходиться за наступними шляхами:

- **Windows**: `C:\Windows\System32\drivers\etc\hosts`
- **Linux та macOS**: `/etc/hosts`

Додайте наступний запис до файлу `hosts`:

```text
# hosts
127.0.0.1 timer.workspace
```

### 4. Запуск проєкту

```shell
ws start
```

### 5. Перевірка проєкту в браузері

Готовий запущений проєкт, доступний через веб-інтерфейс.

![php-apache-img.png](/docs/presets/php-apache-img.png)
