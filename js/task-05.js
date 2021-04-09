// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('input#name-input');
const nameRef = document.querySelector('#name-output');
console.dir(nameRef.innerText);

inputRef.addEventListener('input',handlerChangeName );


function handlerChangeName (e) {
    nameRef.innerText = e.target.value
    nameRef.innerText === ''? nameRef.innerText = 'незнакомец' :  nameRef.innerText;
}