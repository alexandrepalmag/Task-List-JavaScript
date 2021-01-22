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

        //
        let itemText = document.createTextNode(task)

    }

}

renderTasks()
