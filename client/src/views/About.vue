<template>
  <div id="about">
    <div class="wrapper">
      <div class="grid">
        <!-- <Banner/> -->
        <div class="text">
          <h1>Contact</h1>
          <p>
            For booking, collaboration, or other issues, contact me via
            e-mail at
            <a
              class="contact--mail"
              href="mailto:alex@zoomoid.de"
            >alex@zoomoid.de</a>.
          </p>
          <p>
            Other than that, here are a few ways to contact me in a more specific
            and rather passive domain:
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
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/app.sass'

#about
  max-width: $max-width
  margin: 0 auto 4em
  padding-left: 2em
  +font-bootstrap
  p
    font-weight: 600
    a
      font-weight: 700
  h1
    +fade
    display: inline-block
  .contact--mail
    +font-size(1em)
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

<script>
import SlideAnchor from '@/components/SlideAnchor'

export default {
  components: {
    SlideAnchor
  }
}
</script>
