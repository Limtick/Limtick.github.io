<template>
  <div class="demo-switch m-t-10">
    <input type="checkbox" id="demo_toggle" class="offscreen" />
    <label for="demo_toggle" class="switch"></label>
  </div>
</template>

<script>
export default {
  name: 'ToggleSwitch'
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
}

.switch::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: white;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

input[type='checkbox']:checked + .switch::after {
  transform: translateX(20px);
}

input[type='checkbox']:checked + .switch {
  background-color: #11829a;
}

.offscreen {
  position: absolute;
  left: -9999px;
}
</style>