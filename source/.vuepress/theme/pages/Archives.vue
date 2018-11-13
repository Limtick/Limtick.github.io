<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="archives-wrap">
      <div v-for="(list, key) in groupMap" class="archives-group">
        <h3 class="title">{{ key }}<span class="point">{{ list.length }}</span></h3>
        <ul>
          <li v-for="item in list">
            <router-link :key="item.path" :to="item.path">{{ item.title }}</router-link>
            <span>{{ item.time }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { makeMap } from 'utils'
export default {
  name: 'Archives',
  data () {
    return {
      available: makeMap('tags,categories')
    }
  },
  computed: {
    title () {
      const { query } = this.$route
      let queryStr = ''

      this.each(query, (val, key) => {
        queryStr += ` - ${val}`
      })

      return '归档' + `${queryStr}`
    },
    list () {
      const { query } = this.$route
      const len = Object.keys(query).length
      if (!len) return this.$posts

      let res = [], temp = []
      this.each(query, (val, key) => {
        res = this.$posts.filter(item => item.frontmatter[key] === val)
      })

      return res
    },
    groupMap () {
      let map = {}

      this.list.forEach(item => {
        const key = `${item.year}年${item.month}月`
        if (!map[key]) {
          map[key] = []
        }
        map[key].push(item)
      })

      return map
    }
  },
  methods: {
    each(query, fn) {
      Object.keys(query).forEach(key => {
        if (this.available(key)) fn(query[key], key)
      })
    }
  },
  mounted () {
    
  },
}
</script>

<style lang='stylus' scoped>
@import '~styles/config.styl'
$paddingLeft = 30px
.archives-wrap
  .archives-group
    padding-left $paddingLeft
    border-left 1px dashed #ccc
    .title
      position relative
      margin 0
      padding 20px 0
      .point
        position: absolute;
        left: -($paddingLeft + 10px)
        top: 24px
        display: inline-block
        width: 20px
        height: 20px
        line-height: 20px
        text-align: center
        font-size: 14px
        border-radius: 50%
        color: #fff
        background: $accentColor
    ul
      margin 0
      li
        display flex
        justify-content space-between
        a
          font-size 16px
          &:hover
            text-decoration underline
        span
          font-size 14px
</style>