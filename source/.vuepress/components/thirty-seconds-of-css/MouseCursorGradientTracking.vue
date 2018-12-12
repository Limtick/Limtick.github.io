<template>
  <button class="button m-t-10" @mousemove="handleMousemove">
    <span>Hover me I'm awesome</span>
  </button>
</template>

<script>
export default {
  name: 'MouseCursorGradientTracking',
  methods: {
    handleMousemove(e) {
      const x = e.offsetX
      const y = e.offsetY

      e.target.style.setProperty('--x', `${ x }px`)
      e.target.style.setProperty('--y', `${ y }px`)
    }
  }
}
</script>

<style lang='stylus' scoped>
.button {
	position: relative;
	background: #f72359;
	padding: 1em 2em;
	border: none;
	color: white;
	font-size: 1.2em;
	cursor: pointer;
	outline: none;
	overflow: hidden;
	border-radius: 100px;
	
	span {
		position: relative;
		pointer-events: none;
	}
	
	&::before {
		--size: 0;

		content: '';
		position: absolute;
		left: var(--x);
		top: var(--y);
		width: var(--size);
		height: var(--size);
		background: radial-gradient(circle closest-side, #4405f7, transparent);
		transform: translate(-50%, -50%);
		transition: width .2s ease, height .2s ease;
	}
	
	&:hover::before {
		--size: 400px;
	}
}
</style>