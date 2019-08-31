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
  h1
    +fade
    // +font-size(4em)
    // +sm
      // +font-size(4em)
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
        +link
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
export default {
  components: {
  }
}
</script>
