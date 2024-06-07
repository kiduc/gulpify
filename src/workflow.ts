interface TaskInterface {

}

class Workflow {
    name?: string = ''

    constructor(name?: string) {
        this.name = name
    }
}

let _current
const next = (name?) => {
    return _current = new Workflow(name)
}
const current = () => {
    return _current
}

next()

export { next, current }