//Модуль path
const path = require('path');  
//console.log(path.basename(__filename)) // index.js - имя файла на Windows, полный путь к файлу на POSIX-системах
//console.log(path.dirname(__filename)) // C:\Users\Admin\Desktop\nodejs-basic - название папки
//console.log(path.extname(__filename)) // .js - расширение файла
//console.log(path.parse(__filename)); // возвращает объект в котором указывается корень диска, имя папки, имя файла, расширение файла, имя файла без расширения

//конкатенация путей, объединение путей
//console.log(path.join(__dirname, 'test', 'second.html'));
//console.log(path.resolve(__dirname, './test', 'second.html'));


//Модуль fs
const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err;
//     console.log('Папка была создана');
// })

// fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     (err) => {
//         if (err) throw err;
//         console.log('Файл переименован');
//     }
// );



//Модуль http
const http = require('http');

// PORT = 3000;

// const requestHandler = (request, response) => {
//     const { method, url } = request;
//     const heading = `<h1 style="color: red">${url} page</h1>`;
//     const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
//     console.log(`Получен ${method}-запрос на ${url}`);
//     response.write(heading);
//     response.end(content);
// }

// const server = http.createServer(requestHandler);

// server.listen(PORT, 'localhost', () => {
//     console.log(`Сервер запущен на порту ${PORT}`);
// })


//Установка модулей через npm
 require('colors');
// const text = 'Hello, world';
// console.log(text.rainbow);



//экспорт из user.js
// const { user } = require('./user.js');

// user.sayHi();




//События
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('start', message => console.log(message));

// emitter.emit('start', 'Start message');



//Поток чтения
// const readableStream = fs.createReadStream('source.txt');
// readableStream.on('data', chunk => console.log(chunk));