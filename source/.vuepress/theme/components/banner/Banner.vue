<template>
  <div class="banner">
    <div class="outer">
      <div ref="inner" class="inner" :style="posterStyle"></div>
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
      posters: [
        'bilibili.jpg',
        'Forza Horizon 4.png',
        'The Last of Us clip.jpg',
      ],
      posterStyle: ''
    }
  },
  computed: {
    posterUrl () {
      const posters = this.posters
      const index = this.$moment().week() % posters.length

      return this.base + posters[index]
    }
  },
  methods: {
    loadPoster() {
      const img = new Image()
      img.src = this.posterUrl
      img.onload = () => {
        this.posterStyle = `background: url('${this.posterUrl}') no-repeat center/cover`
      }
    }
  },
  mounted () {
    this.loadPoster()
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/config.styl'
.banner
  position relative
  .outer
    overflow hidden
  .inner
    height $bannerHeight
    &.blur
      filter blur(5px)
      transform scale(1.1)
    @media (max-width: $MQMobile)
      height $bannerHeight - 370px
</style>