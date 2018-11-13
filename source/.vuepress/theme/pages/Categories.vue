<template>
  <div>
    <h1>分类</h1>
    <ul class="categories-wrap">
      <li v-for="(item, key) in $categoriesMap" :key="key">
        <span @click="changeRoute(key)">{{ key }}({{ item.length }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {
    changeRoute(categories) {
      this.$router.push({
        path: '/archives/',
        query: {
          categories
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.categories-wrap
  span
    cursor pointer
    &:hover
      text-decoration underline
</style>
