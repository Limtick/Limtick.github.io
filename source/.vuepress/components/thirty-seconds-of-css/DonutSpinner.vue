<template>
  <div class="donut-demo m-t-10">
    <div class="square"></div>
    <div class="cricle"></div>
    <div class="donut"></div>
  </div>
</template>

<script>
export default {
  name: 'DonutSpinner'
}
</script>

<style lang='stylus' scoped>
@keyframes donut-spin
  0% {
    transform rotate(0deg)
  }
  100% {
    transform rotate(360deg)
  }

$base
  display inline-block
  border 4px solid rgba(0, 0, 0, 0.1)
  border-left-color #8385aa
  width 2rem
  height 2rem

.donut-demo
  display flex
  justify-content space-around
  .square
    @extend $base
  .cricle
    @extend $base
    border-radius 50%
  .donut
    @extend $base
    border-radius 50%
    animation donut-spin 1.2s linear infinite
</style>