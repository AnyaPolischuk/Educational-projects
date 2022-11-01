//console.log('Hello, world');

//выводит в консоль текст
//const { stdout } = process;
//stdout.write('Node.js kek');


//Выведем информацию в консоль при помощи process.stdout
// const { stdin, stdout } = process;
// stdin.on('data', data => stdout.write(data));

// process.exit('exit', () => stdout.write('Удачи в изучении Node.js!'));




// const { stdout, stderr } = process;

// process.on('exit', code => {
//     if (code === 0) {
//         stdout.write('Все в порядке');
//     } else {
//         stderr.write(`Что-то пошло не так. Программа завершилась с кодом ${code}`);
//     }
// })


//Задание 1
// const { stdin, stdout } = process;

// stdout.write('Как тебя зовут?\n');
// stdin.on('data', data => {stdout.write('Привет, ');
// stdout.write(data.toUpperCase());
// process.exit();
// });
// process.on('exit', () => stdout.write('Удачи!'));




// const { stdin, stdout } = process;

// stdin.on('data', data => {
//     const dataStringified = data.toString();
//     stdout.write('Cообщение в верхнем регистре: ');
//     stdout.write(dataStringified.toUpperCase());
// });




// // создадим буфер из строки, вторым параметром передав кодировку (по умолчанию будет использована utf-8)
// const myBuffer = Buffer.from('Hi Node.js!', 'utf-8');
// // получим <Buffer 48 69 20 4e 6f 64 65 2e 6a 73 21>
// console.log(myBuffer);
// // приведем к строке
// const bufferStringified = myBuffer.toString();
// // Hi Node.js!
// console.log(bufferStringified);




//Задание 2 Напишите программу, которая спрашивает у пользователя его имя, после ввода имени возвращает указанное пользователем имя наоборот и прекращает работу.

// const { stdin, stdout } = process;

// stdout.write('Как тебя зовут?\n');
// stdin.on('data', data => {
//     const dataStringified = data.toString();
//     stdout.write(data);
//     stdout.write(dataStringified.split("").reverse().join(""));

//     process.exit();

// })





// Аргументы командной строки

//console.log(process.argv.slice(2)); //получает доступ к аргументам

// const flagIndex = process.argv.indexOf('-m');
// if (flagIndex !== -1) {
//     const message = process.argv[flagIndex + 1];
//     console.log(message);
// }

//то же самое, только переписано в функцию
// function getValue(flag) {
//     const flagIndex = process.argv.indexOf(flag);
//     return flagIndex !== -1 ? process.argv[flagIndex + 1] : null; 
// }
// const message = getValue('-m');
// console.log(message);


//Переменные окружения
/*const productionMode = process.env.PRODUCTION === 'true';
if (productionMode) {
    console.log('Application is running in production mode');
} else {
    console.log('Application is running in development mode');
}*/

// Задача
// const { stdin, stdout, exit }  = process;
// const flag = process.argv[2];
// const allowFlags = ['-m', '-s'];

// if (!allowFlags.includes(flag)) {
//     stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
//     exit();
// }

// stdout.write('Введите, пожалуйста, два числа\n');

// stdin.on('data', data => {
//     const numString = data.toString();
//     const numStringArray = numString.split(' ');
//     const hasIncorrectLength = numStringArray.length !== 2;
//     const hasIncorrectValues = numStringArray.some(numStr => Number.isNaN(+numStr));
//     if (hasIncorrectValues || hasIncorrectLength) {
//         stdout.write('Нужно ввести 2 числа, разделенных пробелом');
//         exit();
//     }
//     const [firstNum, secondNum] = numStringArray.map(numStr => +numStr);
//     if (flag === '-s') {
//         const sum = firstNum + secondNum;
//         stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
//     } else {
//         const mult = firstNum * secondNum;
//         stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
//     }
//     exit();
// });


//Доступ к абсолютному и относительному пути
//console.log(__dirname);
//console.log(__filename);


//Задание
// const { stdout, stdin, exit } = process;

// const flag = process.argv[2];
// if (flag === '-d') {
//     stdout.write(__dirname);
//     exit();
// }
// if (flag === '-f') {
//     stdout.write(__filename);
//     exit();
// }
// if (flag !== '-f' || flag !== '-d' || flag === '') {
//     stdout.write('Запустите программу с флагом -d или -f');
//     exit();
// }


// Тема: модули
// Примеры подключения модулей
const path = require('path');
const fs = require('fs');
const os = require('os');