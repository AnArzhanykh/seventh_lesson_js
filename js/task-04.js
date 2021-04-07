// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue  = 0 ;


const btnIncRef = document.querySelector('[data-action="increment"]');
const btnDecRef = document.querySelector('[data-action="decrement"]');

const counterRef =document.querySelector('#value');


function handlerIncrement (e) {
    counterValue += 1;
    counterRef.innerText = counterValue;
};

function handlerDecrement (e) {
    counterValue -= 1;
    counterRef.innerText = counterValue;
};

btnIncRef.addEventListener('click', handlerIncrement )
btnDecRef.addEventListener('click', handlerDecrement )

