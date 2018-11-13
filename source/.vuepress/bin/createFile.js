const fs =  require('fs')
const path = require('path')
const yargs = require('yargs')
const chalk = require('chalk')
const shell = require('shelljs')
const render = require('json-templater/string')

const resolve = p => path.resolve(__dirname, '../../', p)

const exists = {}
const args = yargs.argv

const createPath = args.path
const name = args.name || 'README'
const fileName = name + '.md'
const fileFullPath = path.join(resolve(createPath), `${fileName}`)

const TEMPLATE = `# {{name}}

## 参数

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ---- | ---- | ---- | ------ | ------ |
|      |      |      |        |        |
|      |      |      |        |        |

## 事件

| 事件 | 说明 | 回调参数 |
| ---- | ---- | -------- |
|      |      |          |
|      |      |          |

## 使用
`

shell.mkdir('-p', resolve(createPath))
fs.readdirSync(resolve(createPath)).forEach(file => {
    exists[file] = 1
})

if (exists[fileName]) {
    console.log(
        chalk.red(`${fileName} is existed \n`) +
        chalk.yellow(`${fileFullPath}`)
    )
    return
}

const content = render(TEMPLATE, { name })
fs.writeFileSync(fileFullPath, content)

console.log(
    `${chalk.green('File created successfully')} \n` +
    chalk.yellow(fileFullPath)
)