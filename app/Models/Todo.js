import { generateId } from "../Utils/GenerateId.js"

export class Todo {

    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed
    }


    get Template() {
        if (this.completed == false) {
            return /*html*/ `
            <li>${this.description}
             <input type="checkbox" name="" id="${this.id}" onclick="app.todosController.checkTask('${this.id}')">
             <i class="bi bi-file-earmark-x-fill" onclick="app.todosController.deleteTask('${this.id}')"></i>
            </li>
            `
        }
        return /*html*/ `
        <li>${this.description}
         <input type="checkbox" name="" id="${this.id}" onclick="app.todosController.checkTask('${this.id}')" checked>
             <i class="bi bi-file-earmark-x-fill" onclick="app.todosController.deleteTask('${this.id}')"></i>
        </li>
        `
    }
}