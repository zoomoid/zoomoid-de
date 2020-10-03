<template>
  <div id="about">
    <div class="wrapper">
      <div class="grid">
          <h1>Contact</h1>
          <p>
            For booking, collaboration, or other issues, contact me via
            e-mail at
            <a
              class="contact--mail"
              href="mailto:occloxium@gmail.com"
            >occloxium@gmail.com</a>.
          </p>
          <ul class="references">
            <li>
              <SlideAnchor :anchor="'https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8?si=a8mm8a2RTaO1Zo6SyfwZVQ'"
              :icon="'fab fa-spotify'" :name="'Spotify'"/>
            </li>
            <li>
              <SlideAnchor :anchor="'https://instagram.com/zoomoid'"
              :icon="'fab fa-instagram'" :name="'Instagram'"/>
            </li>
            <li>
              <SlideAnchor :anchor="'https://www.youtube.com/channel/UCg0yVDwpB9QphFbsGnV-8tQ/'"
              :icon="'fab fa-youtube'" :name="'YouTube'"/>
            </li>
            <li>
              <SlideAnchor :anchor="'https://soundcloud.com/zoomoid'"
              :icon="'fab fa-soundcloud'" :name="'SoundCloud'"/>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use '../assets/variables'
@use '../assets/typography'
@use '../assets/mixins'
@use '../../node_modules/rfs/sass' as rfs

#about
  max-width: variables.$max-width
  margin: 0 auto
  padding: 1em 1em 4em
  +mixins.sm
    padding: 0 1em 4em
  p
    +rfs.font-size(0.8em)
    font-weight: 600
    a
      font-weight: 700
  h1
    +mixins.fade
    font-size: 2em
    text-align: center
  .references
    padding-left: 0
    li
      list-style: none outside none
      padding: 0.5em 0
      +rfs.font-size(1em)
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

<script>
import SlideAnchor from '@/components/SlideAnchor'

export default {
  components: {
    SlideAnchor
  }
}
</script>
