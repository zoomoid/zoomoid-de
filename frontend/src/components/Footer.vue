<template>
  <footer>
    <div>
      <nav class="social-media">
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
      </nav>
      <span class="copyright">&copy; Zoomoid &middot; 2020</span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background: #1a1a1a;
  padding: 6em 0 0;
  nav {
    &.social-media {
      margin: 0 auto 0;
      text-align: center;
      li {
        list-style: none outside none;
        display: inline-block;
        padding: 0 0.5em;
      }
      i {
        // margin: 0 0.5em;
        display: none;
      }
      a {
        color: #aaa;
        font-weight: 300;
        font-size: 1.5em;
        text-decoration: none;
      }
    }
  }
  .copyright {
    text-align: center;
    display: block;
    color: white;
    padding: 2em 0;
    font-size: 0.8em;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1pt;
  }
}
</style>
