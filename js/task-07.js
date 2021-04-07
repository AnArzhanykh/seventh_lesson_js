// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('input#font-size-control');

const spanRef = document.querySelector('span#text');


spanRef.style.fontSize =`${inputRef.value}px`;



inputRef.addEventListener('click', e =>{

    spanRef.style.fontSize = `${e.target.value}px`;
})
