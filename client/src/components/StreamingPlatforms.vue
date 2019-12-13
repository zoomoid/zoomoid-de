<template>
  <ul class="references">
    <li>
      <SlideAnchor :anchor="'https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8'"
      :icon="'fab fa-spotify'" :name="'Spotify'"/>
    </li>
    <li>
      <SlideAnchor :anchor="'https://music.apple.com/de/artist/zoomoid/1390354057'"
      :icon="'fab fa-apple'" :name="'Apple Music'"/>
    </li>
    <li>
      <SlideAnchor :anchor="'https://zoomoid.bandcamp.com/'"
      :icon="'fab fa-bandcamp'" :name="'Bandcamp'"/>
    </li>
    <li>
      <SlideAnchor :anchor="'https://soundcloud.com/zoomoid'"
      :icon="'fab fa-soundcloud'" :name="'SoundCloud'"/>
    </li>
    <li>
      <SlideAnchor :anchor="'https://www.deezer.com/artist/14907249'"
      :name="'Deezer'"/>
    </li>
  </ul>
</template>

<script>
import SlideAnchor from '@/components/SlideAnchor.vue'

export default {
  name: 'StreamingPlatforms',
  components: {
    SlideAnchor
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/app.sass'
.references
  padding-left: 0
  li
    list-style: none outside none
    padding: 0.5em 0
    +font-size(1em)
    a
      margin: 0 auto
      text-decoration: none
      i
        text-align: right
        width: 2em
        margin-right: 8px
      span
        text-align: left
        padding-left: 0.5em
</style>
