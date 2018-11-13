#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const promise = require('bluebird')
const moment = require('moment')
const { argv } = require('yargs')

promise.promisifyAll(fs)

const resolve = p => path.resolve(__dirname, '../../', p)


const { name } = argv
const dir = resolve('.vuepress/scaffolds')
const output = resolve('posts')
const tagRE = /\{\{((?:.|\n)+?)\}\}/g


const renderRules = {
  title: name,
  date: moment().format('YYYY-MM-DD HH:mm:ss')
}

fs.readFileAsync(path.join(`${dir}/post.md`), 'utf-8').then(data => {
  fs.writeFileAsync(`${output}/${name}.md`, _render(data)).then(data => {
    
  }).catch(error => {

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
    data = data.replace(item.text, renderRules[item.key])
  })
  
  return data
}
