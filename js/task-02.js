const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];



const ingredientsRef = document.querySelector('#ingredients');

const createIngridientsRef = arr => {
    const newArray = []
    arr.map(item =>{
        const elem = document.createElement('li');
        elem.textContent = item;
        newArray.push(elem)
    })
    ingredientsRef.append(...newArray)
}

createIngridientsRef(ingredients);