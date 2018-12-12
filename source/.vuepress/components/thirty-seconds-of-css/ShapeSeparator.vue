<template>
  <div class="shape-separator m-t-10"></div>
</template>

<script>
export default {
  name: 'ShapeSeparator'
}
</script>

<style lang='stylus' scoped>

$shape(color)
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='m12 0l12 12h-24z' fill='%23" + color + "'/%3E%3C/svg%3E"

.shape-separator
  position relative
  height 48px
  background #333

.shape-separator::after
  content ''
  background-image url($shape(fff));
  position absolute
  width 100%
  height 12px
  bottom 0

</style>