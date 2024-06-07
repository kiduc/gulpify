import { next, task, debug, series, parallel, tree, registry, run } from '../dist'

const workflow = next('test')

task('add', (context) => {
    const a = context.get('input.a')
    const b = context.get('input.b')
    context.set('input.a', a + b)
    return a + b
})

task('div', (context) => {
    const a = context.get('input.a')
    const b = context.get('input.b')
    context.set('input.ab', a / b)
    return a / b
})

task('defualt', series(parallel('add', 'div'), 'add'))


console.log(tree())

console.log(tree(true))

debug(true)

run('default', { a: 1, b: 2 })

debug(false)