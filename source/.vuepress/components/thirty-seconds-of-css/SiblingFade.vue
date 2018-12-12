<template>
  <div class="sibling-fade m-t-10">
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
    <span>Item 4</span>
    <span>Item 5</span>
    <span>Item 6</span>
  </div>
</template>

<script>
export default {
  name:'SiblingFade'
}
</script>

<style scoped>
.sibling-fade span {
  padding: 0 1rem;
  transition: opacity 0.2s;
}

.sibling-fade:hover span:not(:hover) {
  opacity: 0.5;
}
</style>