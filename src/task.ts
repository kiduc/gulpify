import { current } from './workflow'

type TaskHandler = (context) => any

class Task {
    name: string = '<anonymous>'
    handler: TaskHandler

    constructor(handler: TaskHandler) {
        this.handler = handler
    }

    clone() {
        return new Task(this.handler)
    }
}

const task = (name, handler: Task | TaskHandler) => {
    const _current = current()
    const task = handler instanceof Task ? handler.clone() : new Task(handler)
    task.name = name
    _current.task(name)
}

const next = () => {

}

export { task, next }