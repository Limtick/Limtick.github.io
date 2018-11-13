---
date: 2018-10-26 21:08:37
categories: 分享
tags: vuepress
---

# 使用 Vuepress 搭建博客遇到的坑

> 本来是使用 [Hexo](https://hexo.io/zh-cn/) 在建，后来偶然发现了 [vuepress](https://vuepress.vuejs.org/zh/) 也可以做，而且更方便，真香
>
> 本博客目前采用的是 [0.x](https://v0.vuepress.vuejs.org/zh/)

## 时间问题

为了记录文件创建时间，在每个 **md** 文件中的 [front-matter](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#front-matter) 增加了 `date` 字段

由 **parseFrontmatter** 解析后， `date` 字段的值为 '2018-10-26T21:08:37.000Z'， 此处的 Z 代表 GMT，时区与中国不匹配，需要将 Z 替换为空字符串

```javascript
// vuepress/lib/util/index
exports.parseFrontmatter = function (content) {
  // date '2018-10-26 21:08:37' -> '2018-10-26T21:08:37.000Z'
  const matter = require('gray-matter')
  const toml = require('toml')

  return matter(content, {
    excerpt_separator: '<!-- more -->',
    engines: {
      toml: toml.parse.bind(toml),
      excerpt: false
    }
  })
}
```

需要替换 Z 为空字符串，否则会出现时间统计错误

```javascript
const timestr = '2018-10-26T21:08:37.000Z'
const date = new Date(timestr.replace(/[zZ]/g, ''))
```

