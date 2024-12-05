# Під'єднання бази даних до phpstorm


## Активація ssh

Для початку потрібно увімкнути ssh у проксі контейнері:

```shell
ws proxy:init
? Http port: 80
? Https port: 443
? Enable ssh proxy? Yes
? SSH Password: ***
? SSH port: 22
```



```shell
ws proxy:start -r
```


## Створення з'єднання

### Оберіть тип бази даних

![Крок 1](/blog/posts/1-img-1.png "Крок 1")


### Заповніть доступи до бази даних

![Крок 2](/blog/posts/1-img-2.png "Крок 2")

![Крок 3](/blog/posts/1-img-3.png "Крок 3")


### Створіть ssh з'єднання

![Крок 4](/blog/posts/1-img-4.png "Крок 4")

![Крок 5](/blog/posts/1-img-5.png "Крок 5")
