<template>
  <div class="wrapper">
    <div id="intro">
      <img v-bind:class="[initial ? 'initial logo' : 'logo']" src="@/assets/logo.svg"
      alt="zoomoid logo">
      <!-- <div class="text">
        <p>
          Zoomoid is a young, aspiring artist from Aachen, Germany, who draws his
          inspiration from a variety of music to create songs he thinks are worth
          listening to even if he would personally never admit that. Combining
          vast theoretical knowledge and a good portion of practical intuition,
          he always strives to experiment with new things and ways to compose
          new music.
        </p>
      </div> -->
    </div>
    <div class="references">
      <li>
        <a href="https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8?si=a8mm8a2RTaO1Zo6SyfwZVQ">
          <i class="fab fa-spotify"></i>
          <span>Spotify</span>
        </a>
      </li>
      <li>
        <a href="https://instagram.com/zoomoid">
          <i class="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCg0yVDwpB9QphFbsGnV-8tQ/">
          <i class="fab fa-youtube"></i>
          <span>YouTube</span>
        </a>
      </li>
      <li>
        <a href="https://soundcloud.com/zoomoid">
          <i class="fab fa-soundcloud"></i>
          <span>SoundCloud</span>
        </a>
      </li>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/app'
.wrapper
  width: 100%
  height: 100vh
  display: flex
  padding: 2em
  flex-direction: column
  #intro
    flex-grow: 1
    .logo
      position: fixed
      top: 2em
      left: 0em
      margin-top: 1em
      display: block
      transform-origin: bottom center
      margin: 0 auto
      transform: rotate(-90deg)
      width: 4em
      &.initial
        transform-origin: center center
        position: static
        transform: rotate(0deg)
        width: 80%
        padding-top: 4em
    .text
      h1
        +fade
      z-index: 10
.references
  padding-top: 2em
  display: flex
  li
    flex-grow: 1
    text-align: center
    list-style: none
    a
      text-decoration: none
      i
        letter-spacing: 0px
        font-size: 2em
        padding-bottom: 8px
        &:hover, &:active
          +fade
      span
        display: none
</style>

<script>
export default {
  data: function(){
    return {
      initial: true,
      scrolled: 0
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY;
      if(this.scrolled > 200){
        this.initial = false;
      } else {
        this.initial = true;
      }
    },
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
