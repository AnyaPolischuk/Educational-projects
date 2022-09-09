let users = [
    {name: 'Kate',  surname: 'surname1',  age: 31},
    {name: 'John',  surname: 'surname2',  age: 10},
    {name: 'Elisabeth',  surname: 'surname3',  age: 16},
    {name: 'Ann',  surname: 'surname4',  age: 65},
    {name: 'Mark',  surname: 'surname5',  age: 30},
    {name: 'Sophia',  surname: 'surname6',  age: 23},
    {name: 'Polina',  surname: 'surname7',  age: 26},
    {name: 'Albina',  surname: 'surname8',  age: 65},
    {name: 'Max',  surname: 'surname9',  age: 44},
    {name: 'Oleg', surname: 'surname10', age: 23},
    {name: 'Sasha', surname: 'surname11', age: 32},
    {name: 'Slava', surname: 'surname12', age: 36},
    {name: 'Daria', surname: 'surname13', age: 72},
    {name: 'Sophia',  surname: 'surname14',  age: 23},
    {name: 'Polina',  surname: 'surnam15',  age: 26}
];

let table = document.querySelector('#table');
let pagination = document.querySelector('#pagination');

let notesOnPage = 3;

let items = [];

//динамическое создание выводимых на странице li в зависимости от того, сколько будет notesOnPage
for (let i = 1; i <= Math.ceil(users.length / notesOnPage); i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li); //все созданные li мы пушим в массив
}

showPage(items[0]); // при загрузке страница мы показываем наши li

// клик на номер страницы
for (let item of items) {
    item.addEventListener('click', function() {
        showPage(this);

    }); 
}

    function showPage(item) {
        let active = document.querySelector('#pagination li.active');
        if (active) {
            active.classList.remove('active');
        }
        

        item.classList.add('active'); // при нажатии добавляем класс
        let numPage = +item.innerHTML; // достает номер страницы, по которой был клик

        let start = (numPage - 1) * notesOnPage;
        let end = start + notesOnPage;
        let notes = users.slice(start, end); // режем массив на нужное количество выводимых на странице массивов
        
        let td;

        table.innerHTML = '';

        

        for (let note of notes) {
            let tr = document.createElement('tr');

            createCell(note.name, tr);
            createCell(note.surname, tr);
            createCell(note.age, tr);

            table.appendChild(tr);
        }
    
}

// функция, которая создает 1 строку инфы
function createCell(text, tr) {
    let td = document.createElement('td');
    td.innerHTML = text;
    tr.appendChild(td);
}