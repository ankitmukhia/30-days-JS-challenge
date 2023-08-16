const inputValue = document.getElementById('taskField');
const submit = document.getElementById('subt');
const showResult = document.getElementById('item-container');
const taskContainer = document.getElementById('task-list')

let tskList = [];

function addTask() {
    taskContainer.innerHTML = ''
    console.log(tskList);
    tskList.map((item, index) => {
        const newItem = document.createElement('li');
        newItem.classList.add('list-item');
        newItem.innerHTML = `<h2>${item.tasks}</h2>`;
        taskContainer.appendChild(newItem)
        completedTask(newItem, index)
        removeTask(index)
    })
}

function removeTask(index) {
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete'
    taskContainer.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        tskList.splice(index, 1);
        addTask();
    })
}

function completedTask(newItem) {
    const completeMarkButton = document.createElement('button');
    completeMarkButton.classList.add('complete-button');
    completeMarkButton.textContent = 'Completed';
    taskContainer.appendChild(completeMarkButton);
    completeMarkButton.addEventListener('click', (e) => {
        completeMarkButton.style.backgroundColor = '#ADE792'
        completeMarkButton.style.color = 'white';
        newItem.style.textDecoration = "line-through";
        newItem.style.textDecorationThickness = '4px'
        //TODO: when I create new task with the existing line through, it refresh itself :-
    })
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputValue.value === '') {
        alert('Please create some task first')
        return
    }

    const newTask = { tasks: inputValue.value }
    tskList.push(newTask)
    addTask()

    // clear
    inputValue.value = ''
})