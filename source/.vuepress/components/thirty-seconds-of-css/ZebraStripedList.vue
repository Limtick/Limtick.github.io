<template>
  <ul class="striped-demo m-t-10">
    <li>Item 01</li>
    <li>Item 02</li>
    <li>Item 03</li>
    <li>Item 04</li>
    <li>Item 05</li>
  </ul>
</template>

<script>
export default {
  name: 'ZebraStripedList'
}
</script>

<style scoped>
.striped-demo li:nth-child(odd) {
  background-color: #eee;
}
</style>