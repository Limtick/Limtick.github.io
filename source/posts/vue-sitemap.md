---
# sidebar: auto
date: 2018-10-27 20:22:27
categories: 分享
tags: vuepress
---

# vuepress-sitemap

## 简介

  根据所有 page 生成标签和分类 map,注入全局 mixins

## 使用

加入插件

```js
  // enhanceApp.js
  import VueSiteMap from './plugins/vuepress-sitemap'

  export default ({
    Vue,
    options,
    router,
    siteData
  }) => {
    const { pages } = siteData
    Vue.use(VueSiteMap, {
      pages
    })
  }
```

组件中访问

```js
// vue sfc
export default {
  mounted () {
    console.log(this.$tagsMap)
    console.log(this.$categoriesMap)
    console.log(this.$posts)
  }
}

```

## 必需

每个.md文件中需要在 `YAML front matter` 中声明
  - 分类 categories
  - 标签 tags

```
---
categories: 分享
tags: vuepress
---
```