// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('input#validation-input')

const lengthinput = Number(inputRef.dataset.length);

inputRef.addEventListener('change', handlerChangeValue) 


function handlerChangeValue(e) {
    if(lengthinput < e.target.value.length || lengthinput > e.target.value.length){
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    } 
    if(lengthinput === e.target.value.length){
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
}
