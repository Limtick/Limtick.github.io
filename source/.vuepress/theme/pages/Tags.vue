<template>
  <div>
    <h1>标签</h1>
    <div class="tags-wrap">
      <m-tag 
        v-for="(item, key) in $tagsMap" 
        :key="key"
        @click="changeRoute(key)"><span>{{ key }}</span></m-tag>
    </div>
  </div>
</template>

<script>
import MTag from '@/components/MTag'
export default {
  name: 'Tags',
  components: {
    MTag
  },
  data () {
    return {
      
    }
  },
  methods: {
    changeRoute(tags) {
      this.$router.push({
        path: '/archives/',
        query: {
          tags
        }
      })
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="stylus" scoped>
.tags-wrap
  padding 10px 0
  margin 0
</style>
