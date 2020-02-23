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
      <li class="privacy">
        <router-link to="/privacy">Privacy &amp; Data Protection</router-link>
      </li>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
@import '../assets/app'

footer
  background: black
  box-shadow: 0 -1px 2px rgba(0,0,0,0.54)
  +font
  padding: 1em 12px
  color: $text-color
  a, a > i
    color: inherit
    text-decoration: none
    transition: color $transition-time $transition-curve
    letter-spacing: 0px
    &:hover,
    &:active
      +fade

  .references
    display: flex
    flex-wrap: wrap
    align-items: center
    li
      padding: 0 1em
      list-style: none outside none
    span
      margin-left: 8px
      display: none
  .privacy
    a
      font-weight: 600
      font-size: 0.8em !important
</style>
