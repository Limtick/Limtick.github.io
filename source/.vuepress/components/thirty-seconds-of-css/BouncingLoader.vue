<template>
  <div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'BouncingLoader'
}
</script>

<style lang='stylus' scoped>
@keyframes bouncing-loader
  to {
    opacity 0.1
    transform translate3d(0, -1rem, 0)
  }
.bouncing-loader
  display flex
  justify-content center
.bouncing-loader > div
  width 1rem
  height 1rem
  margin 3rem .2rem
  background #11829a
  border-radius 50%
  animation bouncing-loader .6s infinite alternate
.bouncing-loader > div:nth-child(2)
  animation-delay .2s
.bouncing-loader > div:nth-child(3)
  animation-delay .4s

</style>