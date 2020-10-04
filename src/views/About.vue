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

</style>

<script>
import SlideAnchor from "@/components/SlideAnchor"

export default {
  components: {
    SlideAnchor
  }
}
</script>
