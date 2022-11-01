// импортируем модуль fs для работы с файлами
//const { create } = require('domain');
const fs = require('fs');
const { listenerCount } = require('process');

// передадим в констансы три аргумента - название метода, название заметки, содержание заметки
const [command, title, content] = process.argv.slice(2);

// создадим переключатель switch, который будет вызывать соответствующие функции для разных методов
switch (command) {
    case 'list':
        list();
        break;
    case 'view':
        view(title);
        break;
    case 'create':
        create(title, content);
        break;
    case 'remove':
        remove(title);
        break;
    default: console.log('Неизвестная команда');
}

function init() {

    fs.writeFile('notes.json', '[]', (error) => {
        if (error) return console.error(error.message);
    })

}

// напишем функцию create(), которая создаст новую заметку
function create(title, content) {
    fs.access('notes.json', fs.constants.F_OK, (err) => {
      if (err) init();
  
      fs.readFile('notes.json', (error, data) => {
        if (error) return console.error(error.message);
        const notes = JSON.parse(data);
        notes.push({ title, content });
        const json = JSON.stringify(notes);
  
        fs.writeFile('notes.json', json, (error) => {
          if (error) return console.error(error.message);
          console.log('Заметка создана');
        });
      });
    });
  }


//create('title2', 'notes2');




function list() {
    fs.readFile('notes.json', (error, data) => {
        if (error) return console.error(error.message);
        const notes = JSON.parse(data);
        notes.forEach((note, index) => console.log(`${index + 1} ${note.title}`))
    });
}

function view(title) {
    fs.readFile('notes.json', (error, data) => {
        if (error) return console.error(error.message);
        const notes = JSON.parse(data);
        const note = notes.find(note  => note.title = title);
        if (!note) {
            console.log('Заметка не найдена');
        } else {
            console.log(note.content);
        }

    })
}

function remove(title) {
    fs.readFile('notes.json', (error, data) => {
        if (error) return console.error(error.message);
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.title != title);
        const json = JSON.stringify(notes);

        fs.writeFile('notes.json', json, (error) => {
            if (error) return console.error(error.message);
            console.log('Заметка удалена');
        })
    })
}

