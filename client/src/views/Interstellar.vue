<template>
  <div class="single">
    <header class="breadcrumps">
      <router-link to="/work">Work</router-link>
      <span class="separator"></span>
      <router-link to="/interstellar">zoomoid - Interstellar</router-link>
    </header>
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>Interstellar</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/interstellar/cover.png" />
      </section>
      <p>
        Interstellar is a movie by Christopher Nolan with a soundtrack by Hans
        Zimmer which I absolutely admire. It has spawned inspiration beyond my
        own comprehension. This is my first hommage to Hans Zimmer, the Pipe
        Organ from the soundtrack and the fantastic movie of a few people trying
        to save the human race by traveling to stars outside our solar system!
      </p>
      <div class="grid">
        <section class="download">
          <h1>Download</h1>
          <div>
            <audio controls>
              <source
                src="https://cdn.occloxium.com/a/zoomoid/zoomoid%20-%20Interstellar%20%28zoomoid%20VIP%20Mix%29.mp3"
                type="audio/mpeg"
              />
            </audio>
            <span>zoomoid - Interstellar (VIP)</span>
          </div>
          <div>
            <audio controls>
              <source
                src="https://cdn.occloxium.com/a/zoomoid/zoomoid%20-%20Interstellar.mp3"
                type="audio/mpeg"
              />
            </audio>
            <span>zoomoid - Interstellar (Original Mix)</span>
          </div>
        </section>
        <section class="streaming">
          <h1>Streaming</h1>
          <div class="provider">
            <div class="blocked" v-if="blockEmbedded"></div>
            <div v-if="!blockEmbedded">
              <a href="#" class="soundcloud">
                <i class="fab fa-spotify"></i>
                <b>Spotify</b>
              </a>
              <iframe
                src="https://open.spotify.com/embed/album/3WV0MxgRHgm415BqVNa5V2"
                width="100%"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </section>
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

.grid
  display: grid
  grid-column-gap: 2em
  +sm
    grid-template-columns: 1fr
  +md
    grid-template-columns: 1fr
  +lg
    grid-template-columns: 1fr 1fr
  grid-template-columns: 1fr 1fr

.download
  margin-bottom: 1em
  h1
    margin: 0 auto 12px
  audio
    display: block
    width: 100%
  div
    margin: 1em 0 1em
.streaming
  // margin: 0 auto
  h1
    margin: 0
  .provider
    padding-top: 1em
    a
      padding-bottom: 1em
      display: flex
      align-items: center
      text-decoration: none
      i
        font-size: 48px
      b
        padding-left: 8px
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


