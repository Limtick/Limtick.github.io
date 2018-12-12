<template>
  <div class="hairline-border m-t-10">text</div>
</template>

<script>
export default {
  name: 'HairlineBorder'
}
</script>

<style scoped>
.hairline-border {
  padding-left: 5px;
  box-shadow: 0 0 0 1px;
}
@media (min-resolution: 2dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.5px;
  }
}
@media (min-resolution: 3dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.33333333px;
  }
}
@media (min-resolution: 4dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.25px;
  }
}
</style>