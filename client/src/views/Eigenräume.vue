<template>
  <div class="single">
    <header class="breadcrumps">
      <router-link to="/work">Work</router-link>
      <span class="separator"></span>
      <router-link to="/eigenräume">zoomoid - Eigenräume</router-link>
    </header>
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>Eigenräume</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/eigenräume/mixed.png" />
      </section>

      <p>
        <b>Eigenräume</b> is the follow-up EP from Zoomoid. Purely original,
        emotionally expressive and full of art. Each title is seemingly random yet
        precisely and carefully chosen. Six tracks take you on a journey of some
        remarkable places Alex calls his "Eigenräume", places very dear to his heart.
        Weeks of dedication to the music and countless revisions went into this
        EP, so you better like it! Show it some love and tell your friends about it!
      </p>
      <div class="download">
        <p>
          I would appreciate you listening to Eigenräume on Spotify, Apple Music,
          Deezer and so on and love you across the stars for actually buying my
          music. You supporting me means the absolute world to me!
          <br />However, I want everybody to enjoy it equally, hence I provide it for download
          for free here.
        </p>
        <div class="flex-container">
          <div class="streaming">
            <h2>Stream!</h2>
            <a
              href="https://open.spotify.com/album/3YaUvYAudEXEuCJzoONcgE?si=7w0dBX6pRNukrQrLDVh5ZA"
              class="provider"
            >
              <i class="fab fa-spotify"></i>
              <b>Spotify</b>
            </a>
            <a href="https://itunes.apple.com/de/album/eigenr%C3%A4ume/1462054888" class="provider">
              <i class="fab fa-apple"></i>
              <b>Apple Music</b>
            </a>
            <a href="https://www.deezer.com/de/album/95294192" class="provider">
              <b>Deezer</b>
            </a>
          </div>
          <div class="buying">
            <h2>Buy!</h2>
            <a href="https://www.amazon.de/Eigenr%C3%A4ume-Zoomoid/dp/B07R92N45D/" class="provider">
              <i class="fab fa-amazon"></i>
              <b>Amazon Music</b>
            </a>
            <a href="https://itunes.apple.com/de/album/eigenr%C3%A4ume/1462054888" class="provider">
              <i class="fab fa-itunes"></i>
              <b>iTunes</b>
            </a>
          </div>
        </div>
        <div class="download">
          <h2>Listen &amp; Download</h2>

          <div class="link">
            <a href="https://cdn.occloxium.com/a/zoomoid/eigenraeume.zip">
              <i class="fas fa-file-archive"></i>
              Get the complete Standard Edition as MP3
            </a>
            <a
              class="small-subtitle"
              href="https://cdn.occloxium.com/a/zoomoid/eigenraeume.flac.zip"
            >(Alternatively as FLAC)</a>
          </div>
          <h4>Standard Edition</h4>
          <ol class="tracklist">
            <li>
              <span>Zoomoid - Stockholm</span>
              <audio controls>
                <source
                  src="https://cdn.occloxium.com/a/zoomoid/eigenräume/standard/Stockholm.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </li>
            <li>
              <span>Zoomoid - Großstadt</span>
              <audio controls>
                <source
                  src="https://cdn.occloxium.com/a/zoomoid/eigenräume/standard/Großstadt.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </li>
            <li>
              <span>Zoomoid - Schöneberg At Night</span>
              <audio controls>
                <source
                  src="https://cdn.occloxium.com/a/zoomoid/eigenräume/standard/Schöneberg%20At%20Night.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </li>
            <li>
              <span>Zoomoid - Höllental</span>
              <audio controls>
                <source
                  src="https://cdn.occloxium.com/a/zoomoid/eigenräume/standard/Höllental.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </li>
            <li>
              <span>Zoomoid - Heimat</span>
              <audio controls>
                <source
                  src="https://cdn.occloxium.com/a/zoomoid/eigenräume/standard/Heimat.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </li>
            <li>
              <span>Zoomoid - Blaues Land</span>
              <audio controls>
                <source
                  src="https://cdn.occloxium.com/a/zoomoid/eigenräume/standard/Blaues%20Land.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </li>
          </ol>
          <h4>Extended Edition</h4>
          <p class="muted centered">Coming soon!</p>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/app.sass'
.breadcrumps
  padding: 1em 2em
  +font-size(0.8em)
  .separator::before
    content: '/'
    margin: 0 4px

article
  padding: 0 2em 1em
  .title
    padding: 0 1em
    h1
      margin: 0 0 1em
      +font-size(3em)
    h3
      font-size: 2em
      margin: 1em 0 0
      font-weight: 500
.cover
  img
    width: 80%
    max-width: 550px
    margin: 0 auto
    display: block

.blocked
  height: 150px
  width: 100%
  background: rgba(12,12,12,1)
  display: flex
  align-items: center
  border-radius: 12px
  &::after
    content: 'Third-party content blocked. You can enable it in the privacy settings.'
    width: 50%
    margin: 0 auto
    display: block
    font-family: sans-serif
    text-align: center

.tracklist
  li
    padding: 0 0 24px
  audio
    width: 100%
    display: block
.muted
  color: rgba(255,255,255,0.5)
.centered
  text-align: center
.provider
  display: block
  padding: 16px 16px 0
  +font-size(1.5em)
  i
    margin-right: 16px
.link
  a
    text-decoration: none
  +font-size(1.5em)
  padding: 16px 16px 0
  .small-subtitle
    color: rgba(255,255,255,0.5)
    +font-size(0.7em)
    display: block
</style>

<script>
export default {
  data: function() {
    return {
      blockEmbedded:
        !this.$cookies.isKey('allowThirdPartyContent') ||
        this.$cookies.get('allowThirdPartyContent') === 'false'
    };
  }
};
</script>
