<template>
  <div class="triangle-demo m-t-10">
    <div class="triangle triangle-origin"></div>
    <div class="triangle triangle-top"></div>
    <div class="triangle triangle-right"></div>
    <div class="triangle triangle-bottom"></div>
    <div class="triangle triangle-left"></div>
  </div>
</template>

<script>
export default {
  name: 'Triangle'
}
</script>

<style lang='stylus' scoped>
.triangle-demo
  display flex
  justify-content space-around

.triangle
  width 0
  height 0
  border .5rem solid transparent

$colors = #ccc #f66 #11829a #a34
$direction = top right bottom left
$direction-reverse = bottom left top right

for d, i in $direction
  $reverse = $direction-reverse[i]
  .triangle-{d}
    border-{$reverse}-color $colors[i]

.triangle-origin
  for d, i in $direction
    $reverse = $direction-reverse[i]
    border-{$reverse}-color $colors[i]

</style>