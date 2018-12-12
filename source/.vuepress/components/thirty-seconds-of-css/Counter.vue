<template>
<ul class="counter-demo m-t-10">
  <li>{{ text }}</li>
  <li>{{ text }}</li>
  <li>
    {{ text }}
    <ul class="counter-demo">
      <li>{{ text }}</li>
      <li>{{ text }}</li>
      <li>{{ text }}</li>
    </ul>
  </li>
</ul>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      text: 'List item'
    }
  }
}
</script>

<style scoped>
.counter-demo {
  counter-reset: demo;
}
.counter-demo li::before {
  content: counters(demo, '.') ' - ';
  counter-increment: demo;
}
</style>