<template>
  <div class="m-tag" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MTag',
  methods: {
    handleClick() {
      this.$emit('click', this)
    }
  }
}
</script>

<style lang='stylus' scoped>
.m-tag
  display inline-block
  margin 5px
  background #fff
  border-radius 5px
  padding 0 10px
  font-size 14px
  line-height 28px
  cursor pointer
  transition all .5s
</style>