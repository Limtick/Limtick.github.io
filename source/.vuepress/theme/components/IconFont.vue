<template>
  <i class="material-icons icon-font">{{ icon }}</i>
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
  }
}
</script>

<style lang="stylus">
.material-icons
  font-size 1.4rem
  color #fff
</style>
