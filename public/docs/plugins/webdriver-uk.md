# Webdriver

Надає постійно доступний headless-браузер, з яким можна працювати через
протокол Chrome DevTools (CDP), використовуючи один з трьох провайдерів:

- **`container`** (за замовчуванням) — запускає та керує Docker-контейнером
  `browserless/chrome` з мережею хоста (host networking), тому його CDP
  endpoint завжди доступний за фіксованою адресою `http://localhost:<port>`.
- **`local`** — запускає браузер, який вже встановлений на цій машині
  (наприклад, `/usr/bin/google-chrome`), відстежуючи його між викликами CLI.
  Docker при цьому не використовується.
- **`url`** — вказує на браузер, який вже запущений десь ще; wocker жодним
  чином не керує його життєвим циклом, лише зберігає його CDP URL.

Мета плагіна — надати будь-якому інструменту, якому потрібен браузер
(тест-раннеру агента, скрипту для скриншотів тощо), спільний, вже запущений
браузер, щоб кожному проєкту не доводилося встановлювати й завантажувати
власний бінарник Puppeteer/Playwright. Плагін постачається з власним
`puppeteer-core` і надає доступ до нього через `browser:eval`/`browser:exec`,
тож скриптам також не потрібна власна залежність, пов'язана з браузером.


## Інсталяція

```shell
ws plugin:install webdriver
```


## Команди

```shell
ws browser:create                            # створити сервіс (запитає ім'я, провайдер, ...)
ws browser:create --provider local           # запропонує список автоматично знайдених браузерів або ручне введення шляху
ws browser:create --provider local --path /usr/bin/google-chrome --headful
ws browser:create --provider url --url http://192.168.1.10:9222
ws browser:start [service]                   # запустити (лише для провайдерів container/local)
ws browser:stop [service]                    # зупинити (лише для провайдерів container/local)
ws browser:use [service]                     # встановити/вивести сервіс за замовчуванням
ws browser:list                              # список налаштованих сервісів
ws browser:destroy [service]                 # видалити сервіс
ws browser:cdp [service]                     # вивести CDP endpoint URL, напр. http://localhost:3000
ws browser:pages [service]                   # список відкритих вкладок (#, активна, заголовок, URL)
ws browser:exec <file> [service]             # виконати файл скрипту в браузері
ws browser:eval <code> [service]             # виконати вбудований JS-код у браузері
ws browser:screenshot [service]              # зробити скриншот сторінки (або --selector) на диск
ws browser:hide [service]                    # приховати вікно браузера (лише для провайдера local)
ws browser:show [service]                    # показати його знову
```


## Створення сервісу `local`

Якщо обрати провайдер `local` і не передати `--path`, wocker просканує
машину на наявність встановлених браузерів (Chrome, Chromium, Edge, Brave —
перевіряється через `which`, а на macOS ще й у стандартних `.app`
директоріях) і запропонує їх у вигляді списку вибору, а також опцію
**"Enter path manually..."**:

```shell
ws browser:create --provider local
# ? Browser:
#   Google Chrome (/usr/bin/google-chrome-stable)
#   Enter path manually...
```

Передайте `--path`, щоб повністю пропустити запит (корисно для
скриптів/CI).

За замовчуванням браузер працює в режимі **headless**. Передайте
`--headful` у `browser:create`/`browser:upgrade`, щоб натомість відкрити
справжнє видиме вікно (зручно, коли хочете бачити, що робить браузер/агент,
або передати авторизовану сесію — див. нижче). `--headless` також доступний,
щоб повернути headless-режим назад.


## `browser:exec` проти `browser:eval`

Обидві команди підключаються через власний `puppeteer-core` плагіна,
передають вашому коду Puppeteer-об'єкт `page`, а потім від'єднуються (ніколи
не викликаючи `browser.close()` — браузер спільний). Сама вкладка **ніколи
не закривається** — яка б вкладка не використовувалася (активна, обрана
через `--tab`, або нова `--new`), вона залишиться відкритою й після
завершення команди.

- **`exec <file>`** — файл повинен експортувати асинхронну функцію:

  ```js
  // screenshot.js
  module.exports = async (page) => {
      await page.goto("http://localhost:5173");
      await page.waitForSelector("text=Dashboard");
      await page.screenshot({path: "screenshot.png"});
  };
  ```

  ```shell
  ws browser:exec screenshot.js
  ```

- **`eval <code>`** — `code` є *тілом* асинхронної функції, `page` доступна
  в області видимості:

  ```shell
  ws browser:eval "await page.goto('http://localhost:5173'); return await page.title();"
  ```

  Якщо ваш код не робить `await`/`return` проміс (наприклад, простий
  виклик `page.goto(...)`), він перерветься одразу після від'єднання від
  браузера — команда при цьому не завершиться помилкою, але замість
  результату ви побачите попередження в stderr.


## Яка вкладка використовується

`exec`, `eval` та `screenshot` завжди працюють з якоюсь вкладкою, яка
обирається в такому порядку:

- **за замовчуванням (без `--tab`/`--new`)** — поточна **активна** вкладка,
  тобто та, що на передньому плані вікна браузера. Це те, що потрібно, коли
  агент має продовжити роботу з вкладкою, яку ви (чи попередня команда) вже
  відкрили й авторизували, без потреби заходити в систему заново.
- **`--tab <index|url-substring>`** — конкретна відкрита вкладка, за
  індексом (див. `ws browser:pages`) або за підрядком її URL.
- **`--new`** — завжди відкривати нову вкладку.

```shell
ws browser:pages
# ┌───┬────────┬────────────────┬────────────────────────┐
# │ # │ Active │ Title          │ URL                     │
# ├───┼────────┼────────────────┼────────────────────────┤
# │ 0 │ *      │ My Dashboard   │ https://app.local/home  │
# └───┴────────┴────────────────┴────────────────────────┘

ws browser:eval "return await page.title();"                   # активна вкладка
ws browser:eval --tab 0 "return await page.title();"            # за індексом
ws browser:eval --tab app.local "return await page.title();"    # за підрядком URL
ws browser:eval --new "return await page.title();"              # завжди нова вкладка
```

`--tab` і `--new` є взаємовиключними. Жодна вкладка не закривається
автоматично — яка б вкладка не використовувалась, вона залишиться відкритою
після завершення команди.


## Порти

`container`/`local` обидва слухають напряму на хості (Docker host
networking для першого, звичайний локальний процес для другого), тому лише
один сервіс може використовувати заданий порт одночасно. Сервіс за
замовчуванням не потребує налаштування порту; передавайте `--port` у
`browser:create`/`browser:upgrade` лише якщо потрібно запустити кілька
браузерних сервісів паралельно.