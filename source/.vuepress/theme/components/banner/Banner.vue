<template>
  <div class="banner">
    <div class="outer">
      <div :class="['inner', 'thumb', {'scale': !loaded}]" :style="thumbStyle"></div>
      <transition name="fade">
        <div v-show="loaded" ref="inner" :class="['inner']" :style="posterStyle"></div>
      </transition>
    </div>
    <Station></Station>
  </div>
</template>

<script>
import Station from 'components/station/Station'
export default {
  name: 'Banner',
  components: {
    Station
  },
  data () {
    return {
      base: '/image/banner/',
      posters: [],
      thumbStyle: '',
      posterStyle: '',
      loaded: false
    }
  },
  computed: {
    posterUrl () {
      const posters = this.posters
      const index = this.$moment().week() % posters.length

      return {
        fullURL: this.base + posters[index],
        thumbURL: this.base + 'thumb/@thumb_16×9_' + posters[index]
      }
    }
  },
  methods: {
    loadPoster () {
      const { fullURL, thumbURL } = this.posterUrl
      this.thumbStyle = this.getPosterStyle(thumbURL)
      const img = new Image()
      img.src = fullURL
      img.onload = () => {
        setTimeout(() => {
          this.loaded = true
          this.posterStyle = this.getPosterStyle(fullURL)
        }, 300)
      }
    },
    getPosterStyle (url) {
      return `background: url('${url}') no-repeat center/cover`
    }
  },
  mounted () {
    this.posters = this.$site.themeConfig.banners
    this.loadPoster()
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/config.styl'
.banner
  position relative
  height $bannerHeight
  @media (max-width: $MQMobile)
    height $bannerHeight - 370px
  .outer
    height inherit
    overflow hidden
  .inner
    position relative
    height inherit
    background-position center
    background-size cover
    transition all 1.2s ease-in-out
    &.thumb
      position absolute
      top 1rem
      right 0
      bottom 0
      left 0
      filter blur(18px)
      @media (max-width: $MQMobile)
        top 0
    &.scale
      transform scale(1.2)
</style>