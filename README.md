приложение группы 0384 СПБГЭТУ.
чтобы запустить его на локальной машине потребуется установленный Node.js, npm и сервер mysql (дамп базы прилагается в папке server)
приложение будет запущено на порту 3000, сервер Node - на порту 3555. 
Для установки нужно перейти в папку с проектом и запустить npm install, чтобы установились все модули и зависимости.
Для запуска сервера предусмотрена команда npm run server
Для запуска клиента npm run start (эти две команды следует запускать в разных терминалах)

Настройки подключения к БД по умолчанию такие (изменить можно в файле /server/index.js):
  host: 'localhost',
  user: 'root',
  database: '0384_group',
  password: 'root'
