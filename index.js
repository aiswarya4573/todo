const toDoForm = document.querySelector('#todoForm');
const toDoInput = document.querySelector('#todoInput');
const toDoItem = document.querySelector('.todo-item-container');
const toDoList = document.querySelector('.todo-list');
const itemsRemaining= document.querySelector('#items-remaining');



calculateItemsRemaining();

toDoForm.addEventListener('submit', event =>{
    event.preventDefault();

    const newtoDoItem = toDoItem.cloneNode(true);
    
   
    newtoDoItem.querySelector('.todo-item-label').textContent = toDoInput.value;
    toDoList.append(newtoDoItem);
  
    toDoInput.value = '';
    

    calculateItemsRemaining();

});

function calculateItemsRemaining(){
    const todoitemsLabels = document.querySelectorAll('.todo-item-label');
    let count=0;

    todoitemsLabels.forEach(todoitemsLabel => {
        if(!todoitemsLabel.classList.contains('line-through')){
            count=count+1;
        }
    });
    itemsRemaining.textContent = count;
}

toDoList.addEventListener('click', () => {
    if(event.target.classList.contains('todo-check')){
        const toDoItemTOComplete= event.target.nextElementSibling;
        toDoItemTOComplete.classList.toggle('line-through');
        calculateItemsRemaining();
    }





    if(event.target.classList.contains('x-button')){
        const toDoItemTODelete = event.target.closest('.todo-item-container');
        toDoItemTODelete.remove();
        calculateItemsRemaining();
    }

});