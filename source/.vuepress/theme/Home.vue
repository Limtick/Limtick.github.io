<template>
  <div class="home">

    <div class="hero">

      <h1>{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="links"
        v-if="links && links.length"
      >
        <a v-for="item in links" :key="item.link" :href="item.link" target="_blank">
          <img width="40" height="40" :src="$withBase(`image/svg/${item.icon}.svg`)" alt="">
        </a>
      </p>
    </div>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    

    <Content custom/>

    <!-- <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div> -->
  </div>
</template>

<script>
import NavLink from '@navbar/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },
    links () {
      return this.$site.themeConfig.links
    }
  },
  methods: {
    jump(link) {

    }
  }
}
</script>

<style lang="stylus">
@import '~styles/config.styl'

.home
  // padding $navbarHeight 2rem 0
  // max-width 960px
  margin 0px auto
  .hero
    text-align center
    h1
      font-size 3rem
    h1, .description, .links
      margin 1.8rem auto
    .description, .links
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .links
      display flex
      align-items center
      justify-content center
      a
        display block
        height 40px
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
