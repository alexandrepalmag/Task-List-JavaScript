let inputField = document.getElementById('task-register')
let btnRegister = document.getElementById('thisButton')
let listTotal = document.getElementById('list')

let tasks = [

    'make a coffe',
    'make a tea'

]

function renderTasks() {

    for (task of tasks) {

        //Creates the list item
        let itemList = document.createElement('li')

        //Add classes to the list item
        itemList.setAttribute('class', 'list-group-item list-group-item-action')

        //Creates text
        let itemText = document.createTextNode(task)

        //Adds text to the list item
        itemList.appendChild(itemText)

        //Adds the list item to the list
        listTotal.appendChild(itemList)

    }

}

renderTasks()

document.getElementById('thisButton').addEventListener('click', function () {

    let newTask = inputField.value

    tasks.push(newTask)

    renderTasks()

})
