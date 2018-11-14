<template>
  <i class="material-icons icon" @click="handleClick">{{ icon }}</i>
</template>

<script>
export default {
  name: 'IconFont',
  props: {
    icon: String
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e, this)
    }
  }
}
</script>

<style lang="stylus">
.material-icons
  font-size 1.4rem
  color #fff
</style>
