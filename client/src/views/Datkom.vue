<template>
  <div class="single">
    <header class="breadcrumps">
      <router-link to="/work">Work</router-link>
      <span class="separator"></span>
      <router-link to="/datkom">Datenkommunikation &amp; Sicherheit</router-link>
    </header>
    <article>
      <h3>Zoomoid, Simon Kaiser, Dirk Thißen</h3>
      <h1>Datenkommunikation &amp; Sicherheit</h1>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/datkomm/cover.png">
      </section>
      <p>
        Lange wurde gewartet auf die epische Kollaboration, jetzt ist sie da:
        tanzbar, mitsingbar (ob man den Text kennt/versteht), kontrovers! 
        Möglich gemacht durch <a href="https://www.comsys.rwth-aachen.de/team/dirk-thissen/" target="_blank"><b>Dr. Dirk Thißen</b></a> himself, präsentieren wir euch den
        ersten von vielen Best Of RWTH Informatik-Songs!
      </p>
      <div class="grid">
        <section class="download">
          <h1>Download</h1>
          <audio controls>
            <source
              src="https://cdn.occloxium.com/a/zoomoid/Datenkommunikation%20%26%20Sicherheit%20%28feat.%20Simon%20Kaiser%29.mp3"
              type="audio/mpeg">
          </audio>
          <span>zoomoid - Datenkommunikation &amp; Sicherheit (feat. Simon Kaiser &amp; Dirk Thißen)</span>
        </section>
        <section class="streaming">
          <h1>Streaming</h1>
          <div class="provider">
            <a href="#" class="soundcloud">
              <i class="fab fa-spotify"></i>
              <b>Spotify</b>
            </a>
            <iframe src="https://open.spotify.com/embed/track/72FWIzbWGeZ8w0QsiVJTUo" width="100%" height="80"
              frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
          <div class="provider">
            <a href="#" class="soundcloud">
              <i class="fab fa-soundcloud"></i>
              <b>SoundCloud</b>
            </a>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/557428953&color=%23ff5500&auto_play=false&show_user=true&show_reposts=false&visual=true"></iframe>
          </div>
          <div class="provider">
            <a href="#" class="apple-music">
              <i class="fab fa-apple"></i>
              <b>Apple Music</b>
            </a>
            <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="200"
              style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/datenkommunikation-und-sicherheit-feat-simon-kaiser/1449425963?app=music"></iframe>
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
  .separator::before
    content: '/'
    margin: 0 4px

article
  padding: 0 2em 1em
  h1
    margin: 0 0 1em
  h3
    font-size: 2em
    margin: 1em 0 0
    font-weight: 500
.cover
  img
    width: 80%
    max-width: 768px
    margin: 0 auto
    display: block

.grid
  display: grid
  +sm
    grid-template-columns: 1fr
  +md
    grid-template-columns: 1fr
  +lg
    grid-template-columns: 1fr 1fr
  grid-template-columns: 1fr 1fr

.download
  margin: 0 auto
  audio
    display: block
.streaming
  margin: 0 auto
  .provider
    padding: 1em 0
    a
      padding-bottom: 1em
      display: flex
      align-items: center
      text-decoration: none
      i
        font-size: 48px
      b
        padding-left: 8px
</style>

