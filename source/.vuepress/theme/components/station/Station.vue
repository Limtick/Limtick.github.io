<template>
  <div class="station-wrap cgm-card">
    <div class="avatar">
      <img src="/image/J0003-1.jpg" alt="" @click="$router.push({ path: '/' })">
    </div>
    <ul>
      <router-link v-for="item in stationData" :key="item.path" :to="item.path">
        <p>{{ item.title }}</p>
        <p>{{ item.count }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Station',
  data () {
    return {
      
    }
  },
  computed: {
    stationData () {
      return [
        {
          title: '日志',
          path: '/archives/',
          count: this.$posts.length
        },
        {
          title: '分类',
          path: '/categories/',
          count: Object.keys(this.$categoriesMap).length
        },
        {
          title: '标签',
          path: '/tags/',
          count: Object.keys(this.$tagsMap).length
        }
      ]
    }
  },
  mounted () {
    
  },
}
</script>

<style lang='stylus' scoped>
@import '~styles/config.styl';
@import '~styles/func.styl';
.station-wrap
  position absolute
  top $navbarHeight + 2rem
  right 10rem
  width 200px
  padding-top 20px
  margin 0
  background linear-gradient(180deg, hex2rgba(#3dabd4, .8), hex2rgba(#fff, .8))
  box-shadow: 0px 0px 28px 2px rgba(0, 0, 0, 0.14)
  z-index 1
  .avatar
    width 90px
    height 90px
    margin 0 auto
    img 
      width 100%
      height 100%
      border-radius 50%
      box-shadow 0px 0px 15px rgba(0, 0, 0, .3)
      cursor pointer
  ul
    padding 0
    display flex
    justify-content space-around
    text-align center
    a
      display block
      &:hover
        p:nth-child(2)
          text-decoration underline
  @media (max-width: $MQNarrow)
    right 5rem
  @media (max-width: $MQMobileNarrow)
    display none
    
</style>