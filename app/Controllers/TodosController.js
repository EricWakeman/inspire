// @ts-nocheck
import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

function draw() {
    let template = ''
    let taskElem = document.getElementById('todo')
    let todos = ProxyState.todos
    if (todos.length > 0) {
        todos.forEach(t => template += t.Template)

        taskElem.innerHTML = template

    }

    updateTracker()
}
function updateTracker() {
    let trackerElem = document.getElementById('tracker')
    let totalTasks = ProxyState.todos.length
    let currentTasks = totalTasks

    ProxyState.todos.forEach(t => {
        if (t.completed == true) {
            currentTasks--
        }
    }
    )

    trackerElem.innerHTML = `<span>${currentTasks}/${totalTasks}</span>`

}


function drawDefault() {
    let taskElem = document.getElementById('todo')
    taskElem.innerHTML = `<h6> Your tasks will appear here!</h6>`
}
export class TodosController {

    constructor() {
        todosService.getTodos()
        ProxyState.on('todos', draw)
        updateTracker()
    }

    addTodo(event) {
        event.preventDefault()
        console.log('task button works')
        let task = event.target
        let newTask = {
            description: task.taskInput.value
        }
        console.log(newTask)
        todosService.addTodos(newTask)
        task.reset()
    }

    checkTask(id) {
        let task = document.getElementById(id)
        task.toggleAttribute('checked')
        let todoToUpdate = ProxyState.todos.find(t => t.id == id)
        if (todoToUpdate.completed == false) {
            todoToUpdate.completed = true
        }
        else {
            todoToUpdate.completed = false
        }
        todosService.checkTask(todoToUpdate)
        updateTracker()
    }

    deleteTask(id) {
        if (window.confirm('Are you sure you want to delete?')) {
            if (ProxyState.todos.length == 1) {
                drawDefault()
            }
            todosService.deleteTask(id)
        }

    }

}