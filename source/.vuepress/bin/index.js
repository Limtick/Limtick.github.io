#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const promise = require('bluebird')
const moment = require('moment')
const { argv } = require('yargs')
  .option('n', {
    alias : 'name',
    demand: true,
    describe: 'post name',
    type: 'string'
  })
  .option('c', {
    alias : 'category',
    demand: false,
    describe: 'post category',
    type: 'string'
  })
  .option('t', {
    alias : 'tag',
    demand: false,
    describe: 'post tag',
    type: 'string'
  })
  .option('s', {
    alias : 'sidebar',
    demand: false,
    default: false,
    describe: 'enable sidebar',
    type: 'boolean'
  })
  .boolean(['sidebar'])
  .usage('Usage: easy-post [options]')
  .example('easy-post -n myPost', 'create file named myPost with sidebar off')
  .example('easy-post -n myPost -s', 'create file named myPost with sidebar on')
  .example('easy-post -n myPost -c 分享 -t javascript', 'create file named myPost with category and tag')
  .help('h')

promise.promisifyAll(fs)

const resolve = p => path.resolve(__dirname, '../../', p)

const { 
  name, 
  sidebar,
  category,
  tag
} = argv

const dir = resolve('.vuepress/scaffolds')
const output = resolve('posts')
const tagRE = /\{\{((?:.|\n)+?)\}\}/g

const renderRules = {
  category,
  tag,
  title: name,
  date: moment().format('YYYY-MM-DD HH:mm:ss'),
  sidebar: sidebar ? 'auto' : 'none',
}

fs.readFileAsync(path.join(`${dir}/post.md`), 'utf-8').then(data => {
  const filename = `${output}/${name}.md`
  fs.writeFileAsync(filename, _render(data)).then(data => {
    console.log(chalk.green(filename) + ' is created')
  }).catch(error => {
    console.log(error)
  })
}).catch(error => {
  console.log(error)
})

function _render(data) {
  const matched = data.match(tagRE)
  const keymap = matched.map(item => {
    const lastIndex = item.length
    const key = item.slice(3, lastIndex - 3)
    return {
      key,
      text: item
    }
  })
  
  keymap.forEach(item => {
    data = data.replace(item.text, renderRules[item.key] || '')
  })
  
  return data
}
