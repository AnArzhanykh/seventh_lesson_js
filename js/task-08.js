// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const  inputRef = document.querySelector('input');
const btnCreate = document.querySelector('[data-action="render"]');
const btnDelete = document.querySelector('[data-action="destroy"]');
const menyRef = document.querySelector('#boxes')
let amount = Number(inputRef.value);
let arr = [];

btnCreate.addEventListener('click', e => createBoxes(amount));
btnDelete.addEventListener('click', destroyBoxes);
inputRef.addEventListener('change', e => amount = Number(e.target.value));


function createBoxes(amount){
    console.log(amount);
    
    if(arr.length > 0) {
        console.log('очистите поле кнопкой');
        return
    }

    for(let i =0; i < amount; i+=1){
        const count = (i+1)*30;
        const newDiv = document.createElement('div');
        newDiv.style.width = `${count}px`;
        newDiv.style.height =`${count}px`;
        newDiv.style.backgroundColor = randomColor();
        arr.push(newDiv)
    }
    menyRef.append(...arr)
}

function destroyBoxes(){
    menyRef.remove()
    inputRef.value = '';
    arr = [];
    console.log(amount);
}

function randomColor(){
    const color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    return color;
}

