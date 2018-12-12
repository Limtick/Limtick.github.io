<template>
  <div class="easing-demo m-t-10">
    <custom-List v-model="ease" :data="easing"/>
    <div :class="['easing-variables', ease]">Hover</div>
  </div>
</template>

<script>
export default {
  name: 'EasingVariables',
  data () {
    return {
      ease: ''
    }
  },
  computed: {
    easing () {
      const direction = [ 'in', 'out' ]
      const type = [ 'quad', 'cubic', 'quart', 'quint', 'expo', 'circ' ]
      const group = []
      direction.forEach(d => {
        type.forEach(t => {
          group.push(`ease-${d}-${t}`)
        })
      })
      type.forEach(t => {
        group.push(`ease-in-out-${t}`)
      })
      return group
    }
  },
  mounted () {
    this.ease = this.easing[0]
  }
}
</script>

<style lang='stylus' scoped>
$ease-in-quad = cubic-bezier(0.55, 0.085, 0.68, 0.53)
$ease-in-cubic = cubic-bezier(0.55, 0.055, 0.675, 0.19)
$ease-in-quart = cubic-bezier(0.895, 0.03, 0.685, 0.22)
$ease-in-quint = cubic-bezier(0.755, 0.05, 0.855, 0.06)
$ease-in-expo = cubic-bezier(0.95, 0.05, 0.795, 0.035)
$ease-in-circ = cubic-bezier(0.6, 0.04, 0.98, 0.335)
$ease-out-quad = cubic-bezier(0.25, 0.46, 0.45, 0.94)
$ease-out-cubic = cubic-bezier(0.215, 0.61, 0.355, 1)
$ease-out-quart = cubic-bezier(0.165, 0.84, 0.44, 1)
$ease-out-quint = cubic-bezier(0.23, 1, 0.32, 1)
$ease-out-expo = cubic-bezier(0.19, 1, 0.22, 1)
$ease-out-circ = cubic-bezier(0.075, 0.82, 0.165, 1)
$ease-in-out-quad = cubic-bezier(0.455, 0.03, 0.515, 0.955)
$ease-in-out-cubic = cubic-bezier(0.645, 0.045, 0.355, 1)
$ease-in-out-quart = cubic-bezier(0.77, 0, 0.175, 1)
$ease-in-out-quint = cubic-bezier(0.86, 0, 0.07, 1)
$ease-in-out-expo = cubic-bezier(1, 0, 0, 1)
$ease-in-out-circ = cubic-bezier(0.785, 0.135, 0.15, 0.86)

$direction = 'in' 'out'
$type = 'quad' 'cubic' 'quart' 'quint' 'expo' 'circ'
$duration = .5s

for d in $direction
  for t in $type
    .easing-variables.ease-{d}-{t}
      transition transform $duration $ease- + d + '-' + t

for t in $type
    .easing-variables.ease-in-out-{t}
      transition transform $duration $ease-in-out- + t

.easing-variables
  display inline-block
  width 75px
  height 75px
  padding 10px
  color white
  line-height 50px
  text-align center
  background #333
  &:hover
    transform rotate(45deg)

</style>