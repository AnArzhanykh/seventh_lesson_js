const inputRef = document.querySelector('input#name-input');
const nameRef = document.querySelector('#name-output');
console.dir(nameRef.innerText);

inputRef.addEventListener('input',handlerChangeName );


function handlerChangeName (e) {
    
    nameRef.innerText = e.target.value

    if(nameRef.innerText === '') {
        nameRef.innerText = 'незнакомец'
    }
}