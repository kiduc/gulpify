# @kiduc/gulpify

### 介绍

这是一个模仿gulp函数写法的流程管理的js库

``` javascript
import { next, task, debug, series, parallel, run } from '@kiduc/gulpify'

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

workflow.run('default', { a: 1, b: 2 })
// or run('default', { a: 1, b: 2 })

debug(false)
```