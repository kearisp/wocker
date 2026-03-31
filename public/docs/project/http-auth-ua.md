# HTTP Auth

Команди `http-auth` дозволяють керувати HTTP Basic Authentication для ваших проектів та доменів. Це забезпечує додатковий рівень безпеки, вимагаючи логін та пароль для доступу до веб-ресурсів.

## Команди

### Увімкнення та вимкнення

#### http-auth:enable
Увімкнути автентифікацію для проекту.

```shell
ws http-auth:enable [--domain|-d <domain>]
```
- `--domain`, `-d`: Домен, для якого потрібно увімкнути автентифікацію. Якщо не вказано, застосовується до всього проекту.

#### http-auth:disable
Вимкнути автентифікацію для проекту.

```shell
ws http-auth:disable [--domain|-d <domain>]
```
- `--domain`, `-d`: Домен, для якого потрібно вимкнути автентифікацію.

### Керування користувачами

#### http-auth:add-user
Додати користувача для HTTP Basic Auth.

```shell
ws http-auth:add-user [user]
ws http-auth:add-user [user]:[password]
```

Опції:
- `--global`, `-g`: Додати користувача глобально (для всіх проектів).
- `--algorithm`, `-a`: Алгоритм хешування пароля (`md5`, `sha1`, `sha256`, `sha512`, `bcrypt`).

Приклади:
```shell
# Додати користувача (пароль буде запитано інтерактивно)
ws http-auth:add-user admin

# Додати користувача з паролем
ws http-auth:add-user admin:secret123

# Додати глобального користувача з використанням bcrypt
ws http-auth:add-user admin:secret123 --global --algorithm bcrypt
```

#### http-auth:remove
Видалити користувача з проекту.

```shell
ws http-auth:remove [user]
```

#### http-auth:clear
Очистити список користувачів (функціонал в розробці).

```shell
ws http-auth:clear
```
