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

