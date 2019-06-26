<template>
  <footer>
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
      <li>
        <a href="https://github.com/occloxium">
          <i class="fab fa-github"></i>
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a class="privacy" href="/privacy">Privacy &amp; Data Protection</a>
      </li>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
footer
  @import '../assets/app'
  box-shadow: 0 -1px 2px rgba(0,0,0,0.54)
  +font(1em, normal, 0px)
  padding: 1em 12px
  color: $text
  background: desaturate(darken($july-1, 25%), 60%)
  a 
    color: inherit
    text-decoration: none
    transition: color $transition-time $transition-curve
    &:hover,
    &:active 
      color: $theme--accent

  .references
    display: flex
    flex-wrap: wrap
    li
      padding: 0 1em
      list-style: none outside none
    span 
      margin-left: 8px
      display: none
  .privacy
    +font-size(0.8em)
</style>
