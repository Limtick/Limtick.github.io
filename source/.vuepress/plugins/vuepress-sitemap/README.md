# vuepress-sitemap

## feature

  根据所有page生成标签和分类map,注入全局mixins

## usage

加入插件

```js
  // enhanceApp.js
  import VueSiteMap from 'VueSiteMap'

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
  }
}

```

## 说明

  - 每个.md文件中需要在文件头部加入相应说明
  - 分类 categories
  - 标签 tags

```
---
categories: 分享
tags: vuepress
---
```