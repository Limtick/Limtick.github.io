const alias = require('./config/alias')

module.exports = {
  dest: '.deploy_git',
  base: '/',
  title: 'limtick',
  description: 'code game music',
  // host: '192.168.2.104',
  // host: '0.0.0.0',
  // port: '8080',
  // theme: '',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'limtick',
      description: 'code game music'
    },
  },
  themeConfig: {
    showLogo: false,
    nav: [
      { text: '主页', link: '/' },
      { text: '归档', link: '/archives/' },
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' }
    ],
    links: [
      { icon: 'github', link: 'https://github.com/Limtick' },
    ],
    sidebar: [
      // '/posts/vue-sitemap'
    ],
    guideCard: [

    ]
  },
  markdown: {
    // anchor: '',
    // toc: '',
    lineNumbers: true,
    // config: md => {
    //   md.use(require('markdown-it-xxx'))
    // }
  },
  // ga: '',
  serviceWorker: false,
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32×32', href: `/favicon.ico` }]
  ],
  configureWebpack: {
    resolve: {
      alias
    }
  }
}