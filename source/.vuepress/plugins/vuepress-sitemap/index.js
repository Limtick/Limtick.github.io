import Vue from 'vue'
import { genTagsMap, genCategoriesMap, genPostList } from './util'

const VueSiteMap = {}

VueSiteMap.install = function (Vue, options) {
  const { pages } = options
  Vue.mixin({
    computed: {
      $tagsMap () {
        return genTagsMap(pages)
      },
      $categoriesMap () {
        return genCategoriesMap(pages)
      },
      $posts () {
        return genPostList(pages, 'posts')
      }
    }
  })
}

export default VueSiteMap