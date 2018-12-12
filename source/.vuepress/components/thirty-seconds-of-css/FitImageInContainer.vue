<template>
  <div class="fit-image-demo m-t-10">
    <custom-List v-model="type" :data="types"/>
    <div class="image-block">
      <img :class="['image', `image-${type}`]" :src="$withBase(url)">
      <img class="image image-cover--left" :src="$withBase(url)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FitImageInContainer',
  data () {
    return {
      url: '/image/banner/bilibili.jpg',
      type: ''
    }
  },
  computed: {
    types () {
      return [ 'contain', 'fill', 'cover', 'none', 'scale-down' ]
    }
  },
  mounted () {
    this.type = this.types[0]
  },
}
</script>

<style lang='stylus' scoped>
.image 
  background #34495e
  border 1px solid #34495e
  width 200px
  height 200px

.image-cover--left
  object-fit cover
  object-position left top

$type = fill contain cover none scale-down

for t in $type
  .image-{t}
    object-fit t
    object-position center
</style>