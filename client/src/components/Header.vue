<template>
  <div class="wrapper">
    <Banner/>
    <header id="intro">
      
      <div class="text">
        <h1>About Me</h1>
        <p>
          Zoomoid is a young, aspiring artist from Aachen, Germany, who draws his
          inspiration from a variety of music to create songs he thinks are worth
          listening to even if he would personally never admit that. He makes music
          to escape the computer science he's studying whenever he can and allows
          himself to. Combining vast theoretical knowledge and a good portion of
          practical intuition, he always strives to experiment with new things and
          ways to create new music. To stop himself from settling down on a
          specific genre, he challenges himself over and over to try something
          different, explaining the vast style changes in his discography, taking
          influences from House, Techno, Drum&amp;Bass as well as Hip-Hop.
        </p>
      </div>
    </header>
    <!-- <section class="only-mobile">
      <h1>About Me</h1>
      <p>
        Zoomoid is a young, aspiring artist from Aachen, Germany, who draws his
        inspiration from a variety of music to create songs he thinks are worth
        listening to even if he would personally never admit that. He makes music
        to escape the computer science he's studying whenever he can and allows
        himself to. Combining vast theoretical knowledge and a good portion of
        practical intuition, he always strives to experiment with new things and
        ways to create new music. To stop himself from settling down on a
        specific genre, he challenges himself over and over to try something
        different, explaining the vast style changes in his discography, taking
        influences from House, Techno, Drum&amp;Bass as well as Hip-Hop.
      </p>
    </section> -->
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/app'
.wrapper
  +typography($black, $black)
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
    // @media (max-width: 1400px)
    //   display: none
    z-index: 10
    padding: 0 3em 3em
    +sm
      padding: 0 1em 1em
</style>

<script>
import Banner from '@/components/Banner.vue';
export default {
  components: {
    Banner
  }
}
</script>
