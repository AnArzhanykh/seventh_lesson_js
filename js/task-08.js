const  inputRef = document.querySelector('input');
const btnCreate = document.querySelector('[data-action="render"]');
const btnDelete = document.querySelector('[data-action="destroy"]');
const menyRef = document.querySelector('#boxes')
let amount = Number(inputRef.value);


btnCreate.addEventListener('click', e => createBoxes(amount));
btnDelete.addEventListener('click', destroyBoxes);
inputRef.addEventListener('change', e => amount = Number(e.target.value));


function createBoxes(amount){
    console.log(amount);
    const arr = [];
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
}

function randomColor(){
    const color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    return color;
}

