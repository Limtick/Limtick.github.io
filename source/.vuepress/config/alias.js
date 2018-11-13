const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  '@': resolve('theme'),
  'assets': resolve('theme/assets'),
  'styles': resolve('theme/styles'),
  // https://github.com/vuejs/vuepress/issues/943
  // ! alia util 可能会导致打包错误 vuepress 0.14.4 2018.10.19
  'utils': resolve('theme/utils'),
  'components': resolve('theme/components'),
  'pages': resolve('theme/pages'),
  '@navbar': resolve('theme/components/navbar'),
  '@banner': resolve('theme/components/banner'),
  '@sidebar': resolve('theme/components/sidebar'),
}