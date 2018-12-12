<template>
  <p class="custom-variables">CSS is awesome!</p>
</template>

<script>
export default {
  name: 'CustomVariables'
}
</script>

<style scoped>
:root {
  /* Place variables within here to use the variables globally. */
}
.custom-variables {
  --some-color: #da7800;
  --some-keyword: italic;
  --some-size: 1.25em;
  --some-complex-value: 1px 1px 2px #fff, 0 0 1em #826a6a, 0 0 0.2em #826a6a;
  color: var(--some-color);
  font-size: var(--some-size);
  font-style: var(--some-keyword);
  text-shadow: var(--some-complex-value);
}
</style>