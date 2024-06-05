import {Task} from './task.js'

class SeriesTask extends Task {

}


export const series = (...nodes) => {
    return new SeriesTask(nodes)
}