<template>
  <div class="trigger m-t-10">
    Hover me to see a height transition.
    <div class="more m-t-10" ref="content">more content</div>
  </div>
</template>

<script>
export default {
  name: 'HeightTransition',
  mounted () {
    const content = this.$refs.content
    const height = content.scrollHeight
    content.style.setProperty('--max-height', height + 'px')
  },
}
</script>

<style scoped>
.trigger {
  padding: 10px;
  border-radius: 5px;
  background-color: #e8e8e8;
}

.trigger .more {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
}

.trigger:hover > .more {
  max-height: var(--max-height);
}
</style>