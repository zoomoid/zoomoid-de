<template>
  <div class="references">
    <ul>
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
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@use '../assets/mixins'

.references
  padding-top: 2em
  padding-bottom: 2em
  ul
    padding-left: 0
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
            +mixins.fade
        span
          display: none

</style>
