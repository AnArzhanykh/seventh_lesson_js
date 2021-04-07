const inputRef = document.querySelector('input#font-size-control');

const spanRef = document.querySelector('span#text');


spanRef.style.fontSize =`${inputRef.value}px`;



inputRef.addEventListener('click', e =>{

    spanRef.style.fontSize = `${e.target.value}px`;
})
