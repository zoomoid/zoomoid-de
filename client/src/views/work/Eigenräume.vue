<template>
  <div class="single">
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
        <div id="external">
          <div class="streaming">
            <h2>Stream!</h2>
            <div class="flex flex-container flex-direction--row">
              <a
                href="https://open.spotify.com/album/3YaUvYAudEXEuCJzoONcgE?si=7w0dBX6pRNukrQrLDVh5ZA"
                class="provider"
              >
                <b>Spotify</b>
              </a>
              <a
                class="provider" 
                href="https://itunes.apple.com/de/album/eigenr%C3%A4ume/1462054888"
              >
                <b>Apple Music</b>
              </a>
              <a
                class="provider" 
                href="https://www.deezer.com/de/album/95294192"
              >
                <b>Deezer</b>
              </a>
            </div>
          </div>
          <div class="buying">
            <h2>Buy!</h2>
            <div class="flex flex-container flex-direction--row">
              <a
                class="provider" 
                href="https://www.amazon.de/Eigenr%C3%A4ume-Zoomoid/dp/B07R92N45D/"
              >
                <b>Amazon Music</b>
              </a>
              <a
                class="provider" 
                href="https://itunes.apple.com/de/album/eigenr%C3%A4ume/1462054888"
              >
                <b>iTunes</b>
              </a>
            </div>
          </div>
        </div>
        <div class="download">
          <h2>Listen &amp; Download</h2>
          <div class="flex flex-container flex-direction--column">
            <a
              class="provider" 
              href="https://cdn.occloxium.com/a/zoomoid/eigenraeume.zip"
            >
              Get the complete Standard Edition as MP3
            </a>
            <a
              class="provider small"
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

article
  .title
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

.tracklist
  margin: 0
  padding: 0
  li
    padding: 0 0 24px
  audio
    width: 100%
    display: block
.muted
  opacity: 0.5
.centered
  text-align: center

.flex.flex-container
  display: flex
  border-radius: 4px
  &.flex-direction
    &--row
      flex-direction: row
    &--column
      flex-direction: column
  & > *
    flex-grow: 1
    text-align: center
    border-radius: 8px
  &.flex-direction--row
    & > *:not(:first-child)
      padding-left: 1em
      border-top-left-radius: 0px
      border-bottom-left-radius: 0px
    & > *:not(:last-child)
      padding-right: 1em 
      border-top-right-radius: 0px
      border-bottom-right-radius: 0px
  &.flex-direction--column
    & > *:not(:first-child)
      padding-left: 1em
      border-top-left-radius: 0px
      border-top-right-radius: 0px
    & > *:not(:last-child)
      padding-right: 1em 
      border-bottom-left-radius: 0px
      border-bottom-right-radius: 0px
.provider
  display: block
  color: white
  background: black
  transition: all 0.1s ease
  &:active, &:hover
    background: white
    color: black
  padding: 1em 0 1em
  & *
    color: inherit
  i
    margin-right: 16px
  &.small
    +font-size(0.7em)

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
