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

