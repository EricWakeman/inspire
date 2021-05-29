import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./SandboxAPI.js"

let url = 'eric1994/todos/'

class TodosService {
    async deleteTask(id) {
        await sandboxApi.delete(url + id)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)

    }
    async checkTask(task) {
        let res = await sandboxApi.put(url + task.id, task)

    }

    async getTodos() {
        let res = await sandboxApi.get(url)
        ProxyState.todos = res.data.map(t => new Todo(t))

    }

    async addTodos(newTask) {
        let res = await sandboxApi.post(url, newTask)
        console.log(res.data)
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]

    }
}

export const todosService = new TodosService()