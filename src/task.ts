import { current } from './workflow'

type TaskHandler = (context) => any

interface TaskMeta {
    label: string;
    type: 'task' | 'function';
    branch?: boolean;
    nodes: TaskMeta[];
}

class Task {
    label: string = '<anonymous>'
    handler: TaskHandler

    constructor(handler: TaskHandler) {
        this.handler = handler
    }

    clone() {
        return new Task(this.handler)
    }

    get meta(): TaskMeta {
        return {
            label: this.label,
            type: 'task',
            nodes: [],
        }
    }
}

const task = (label, handler: Task | TaskHandler) => {
    const _current = current()
    const task = handler instanceof Task ? handler.clone() : new Task(handler)
    task.label = label
    _current.task(label, task)
}

export { task }