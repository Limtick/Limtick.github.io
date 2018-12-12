<template>
  <div class="box-example m-t-10"></div>
</template>

<script>
export default {
  name: 'Calc'
}
</script>

<style lang='stylus' scoped>
.box-example
  height 280px
  background #222 url('/image/J0003-1.jpg') no-repeat
  background-size 50px
  background-position calc(100% - 20px) calc(100% - 20px)
</style>