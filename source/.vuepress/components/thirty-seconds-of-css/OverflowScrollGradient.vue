<template>
  <div class="overflow-scroll-gradient-demo m-t-10">
    <div class="overflow-scroll-gradient">
      <div class="overflow-scroll-gradient__scroller">
        Naughty Dog<br>
        Uncharted 4 A Thief’s End™<br>
        the last of us part Ⅱ<br>
        Sony interactive entertainment<br>
        Marvel's Spider-Man<br>
        Santa Monica Studio<br>
        GOD OF WAR<br>
        Playground Games<br>
        Forza Horizon 4<br>
        Rockstar<br>
        Red Dead: Redemption Ⅱ<br>
        DICE<br>
        battlefield V
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverflowScrollGradient'
}
</script>

<style scoped>
.overflow-scroll-gradient-demo {
  padding: 1.5rem;
  border-radius: 5px;
  background-color: #e8e8e8;
}

.overflow-scroll-gradient {
  position: relative;
}

.overflow-scroll-gradient::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 16rem;
  height: 2rem;
  background: linear-gradient(
    rgba(255, 255, 255, 0.001),
    white
  ); /* transparent keyword is broken in Safari */
  pointer-events: none;
}

.overflow-scroll-gradient__scroller {
  overflow-y: scroll;
  background: white;
  width: 16rem;
  height: 10rem;
  padding: 1rem;
  line-height: 1.2;
}
</style>