<template>
  <div id="about">
    <div class="wrapper">
      <div class="grid">
        <Banner/>
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
            <li>
              <a href="https://github.com/occloxium">
                <i class="fab fa-github"></i>
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

// .wrapper
//   margin: 0 auto
//   width: 80%
//   max-width: 1200px
#about
  min-height: 100vh
  // padding: 128px 2em 0
  +typography($white, $white)
  border-top-left-radius: $radius
  border-top-right-radius: $radius
  // background: desaturate(darken($july-1, 15%), 60%)
  .text
    padding: 0 3em 2em
  h1
    +font-size(5em)
  // img
  //   max-width: 480px
  //   max-height: 480px
  //   width: 80%
  //   border-radius: 360px
  //   box-shadow: 0 1px 2px rgba(0,0,0,0.5)
  //   display: block
  //   margin: 2em auto
  .contact--mail 
    +font-size(1em) 
    color: $text
    text-decoration-color: $white
    &:active, &:hover
      color: $white
      text-decoration-color: $white
  .references
    padding-left: 0
    li
      list-style: none outside none
      line-height: 2
      +font-size(1em)
      a
        display: block
        margin: 0 auto
        color: $text
        &:active, &:hover
          color: $theme--accent
        text-decoration: none
        i
          text-align: right
          width: 2em
          margin-right: 8px
        span
          text-align: leftul

</style>

<script>
import Banner from '@/components/Banner.vue'
export default {
  components: {
    Banner
  }
}
</script>
