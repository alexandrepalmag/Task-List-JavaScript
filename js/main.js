let inputField = document.getElementById('task-register')
let btnRegister = document.getElementById('thisButton')
let listTotal = document.getElementById('list')

let tasks = [

    'make a coffe',
    'make a tea'

]

function renderTasks() {

    //clears the list before inserting a new element to avoid duplication
    listTotal.innerHTML = ''

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

document.getElementById('thisButton').addEventListener('click', () => {

    event.preventDefault()

    let newTask = inputField.value

    if (newTask !== '') {

        tasks.push(newTask)

        renderTasks()

        removeSpanWarning()

    } else {

        removeSpanWarning()

        let cardMain = document.querySelector(".card")

        let spanElement = document.createElement('span')

        spanElement.setAttribute('class', 'alert alert-warning')

        let msgError = document.createTextNode('Please inform the task!')

        spanElement.appendChild(msgError)

        cardMain.appendChild(spanElement)

    }

    inputField.value = ''

})

function removeSpanWarning() {

    let spans = document.querySelectorAll('span')

    let card = document.querySelector('.card')

    for (let i = 0; i < spans.length; i++) {

        card.removeChild(spans[i])

    }

}

function deletetask(taskToBeRemoved) {

    //Remove the task from the array
    tasks.splice(tasks.indexOf(taskToBeRemoved.textContent, 1))

    //render
    renderTasks()
}
