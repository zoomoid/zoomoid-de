<template>
  <div class="wrapper">
    <div id="intro">
      <div class="text">
        <h1>zoomoid. </h1>
        <p>
          Zoomoid is a young, aspiring artist from Aachen, Germany, who draws his
          inspiration from a variety of music to create songs he thinks are worth
          listening to even if he would personally never admit that. Combining
          vast theoretical knowledge and a good portion of practical intuition,
          he always strives to experiment with new things and ways to compose
          new music.
        </p>
      </div>
      <div class="references">
        <li>
          <a
            href="https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8?si=a8mm8a2RTaO1Zo6SyfwZVQ"
          >
            <i class="icon-spotify"></i>
            <span>Spotify</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/zoomoid">
            <i class="icon-instagram"></i>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCg0yVDwpB9QphFbsGnV-8tQ/">
            <i class="icon-youtube"></i>
            <span>YouTube</span>
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/zoomoid">
            <i class="icon-soundcloud2"></i>
            <span>SoundCloud</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/occloxium">
            <i class="icon-github"></i>
            <span>GitHub</span>
          </a>
        </li>
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
  margin-bottom: 6em
  .text
    h1
      +font-size(6em)
    p
      text-align: justify
    z-index: 10
  .references
    display: flex
    li
      flex-grow: 1
      text-align: center
      list-style: none
      a
        text-decoration: none
        i
          font-size: 2em
          &:hover, &:active
            color: $blue
        span
          display: none
</style>

<script>
export default {

}
</script>
