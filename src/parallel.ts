import { Task } from './task.js'
import { current } from './workflow'

class ParallelTask extends Task {
    sttaic

    constructor(nodes: string[]) {
        super()
    }
}


export const parallel = (...nodes: string[]) => {
    const _current = current()
    ParallelTask.return
    new ParallelTask(nodes)
}