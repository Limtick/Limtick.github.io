<template>
  <ul class="demo-list">
    <li v-for="item in data" :key="item" :class="{ 'active': item === activeName }" @click="handleClick(item)">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  model: {
    prop: 'checked',
    event: 'item-click'
  },
  props: {
    data: Array,
    checked: String
  },
  data () {
    return {
      activeName: this.checked
    }
  },
  watch: {
    checked (val) {
      this.activeName = val
    }
  },
  methods: {
    handleClick(item) {
      this.activeName = item
      this.$emit('item-click', this.activeName)
    }
  }
}
</script>

<style lang='stylus' scoped>
.demo-list
  li
    cursor pointer
    &:hover,
    &.active
      color #11829a
      text-decoration underline
</style>