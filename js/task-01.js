// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const listRef = document.querySelector('ul')
// console.log(listRef);
console.log(`В списке ${listRef.children.length} категории.`);

const setItemsRef = document.querySelectorAll('.item')



const setItems = (arr) =>{
    for(let i =0; i< arr.length; i+=1){
        console.log(`Категория: ${arr[i].firstElementChild.textContent}`);
        console.log(`Количество элементов: ${arr[i].lastElementChild.children.length}`);
    }
}



setItems(setItemsRef);

