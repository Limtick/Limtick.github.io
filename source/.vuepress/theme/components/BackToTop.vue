<!-- https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/plugin-back-to-top/BackToTop.vue -->
<template>
  <transition name="fade">
    <div v-if="show" class="go-to-top" @click="scrollToTop">
      <icon-font icon="keyboard_arrow_up"></icon-font>
    </div>
  </transition>
</template>

<script>
import debounce from 'lodash.debounce'
export default {
  props: {
    threshold: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      scrollTop: null
    }
  },
  mounted () {
    this.scrollTop = this.getScrollTop()
    window.addEventListener('scroll', debounce(() => {
      this.scrollTop = this.getScrollTop()
    }, 100))
  },
  methods: {
    getScrollTop () {
      return window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop || 0
    },
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.scrollTop = 0
    }
  },
  computed: {
    show () {
      return this.scrollTop > this.threshold
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/config.styl'
.go-to-top
  cursor pointer
  position fixed
  bottom 2rem
  right 2.5rem
  display flex
  align-items center
  justify-content center
  width 48px
  height 48px
  border-radius 50%
  background-color $accentColor
  z-index 1
  transition all .5s
  .icon-font
    font-size 30px
  &:hover
    background-color darken($accentColor, 20%)

@media (max-width: 959px)
  .go-to-top
    display none

.fade-enter-active, 
.fade-leave-active
  transition opacity .5s

.fade-enter, 
.fade-leave-to
  opacity 0
</style>