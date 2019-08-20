<template>
  <div class="wrapper">
    <div id="intro">
      <div class="text">
        <h1>About Me</h1>
        <p>
          Zoomoid is a young, aspiring artist from Aachen, Germany, who draws his
          inspiration from a variety of music to create songs he thinks are worth
          listening to even if he would personally never admit that. Combining
          vast theoretical knowledge and a good portion of practical intuition, 
          he always strives to experiment with new things and ways to compose 
          new music.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/app'
.wrapper
  width: 100%
#intro
  position: relative
  max-width: $max-width
  margin: 0 auto
  .text
    h1
      +sm
      +font-size(4em)
    z-index: 10
</style>

<script>
import Banner from '@/components/Banner.vue';
export default {
  components: {
    Banner
  }
}
</script>
