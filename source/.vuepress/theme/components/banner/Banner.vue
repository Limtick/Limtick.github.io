<template>
  <div class="banner">
    <div class="outer">
      <div ref="inner" class="inner"></div>
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
  mounted () {
    
  },
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
    background url($backgroundImage) no-repeat center/cover
    &.blur
      filter blur(5px)
      transform scale(1.1)
    @media (max-width: $MQMobile)
      height $bannerHeight - 300px
</style>