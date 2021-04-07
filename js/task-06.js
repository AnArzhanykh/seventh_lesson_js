const inputRef = document.querySelector('input#validation-input')

const lengthinput = inputRef.dataset.length



inputRef.addEventListener('change', handlerChangeValue) 


function handlerChangeValue(e) {
    if(lengthinput > e.target.value.length){
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    } 
    if(lengthinput <= e.target.value.length){
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
}
