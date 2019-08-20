<template>
  <div class="single">
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>Life Is About Making Memories</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/liamm/cover.png" />
      </section>

      <p>
        <b>Life Is About Making Memories</b> is my first full-feature album! It is comprised of 11 songs
        and there are a lot of different gems on there, have a listen and decide for yourself which tracks you like
        the most. If you do, tell me about it on social media like Instagram or SoundCloud and tell your friends!
      </p>
      <div class="download">
        <p>
          I would appreciate you listening to Life Is About Making Memories on Spotify, Apple Music,
          Deezer and so on and love you across the stars for actually buying my
          music. You supporting me means the absolute world to me!
          <br />However, I want everybody to enjoy it equally, hence I provide it for download
          for free here.
        </p>
        <div class="flex-container">
          <div class="streaming">
            <h2>Stream!</h2>
            <a
              href="https://open.spotify.com/album/2zF1wOwINENOR1fTGLqBEF?si=SCmmA64xS8qJas-lAOnTpg"
              class="provider"
            >
              <i class="fab fa-spotify"></i>
              <b>Spotify</b>
            </a>
            <a
              href="https://music.apple.com/de/album/life-is-about-making-memories/1437311634"
              class="provider"
            >
              <i class="fab fa-apple"></i>
              <b>Apple Music</b>
            </a>
            <a href="https://www.deezer.com/de/album/74066782" class="provider">
              <b>Deezer</b>
            </a>
          </div>
          <div class="buying">
            <h2>Buy!</h2>
            <a
              href="https://www.amazon.de/Life-About-Making-Memories-Zoomoid/dp/B07HNMR3L9/"
              class="provider"
            >
              <i class="fab fa-amazon"></i>
              <b>Amazon Music</b>
            </a>
            <a
              href="https://itunes.apple.com/de/album/life-is-about-making-memories/1437311634"
              class="provider"
            >
              <i class="fab fa-itunes"></i>
              <b>iTunes</b>
            </a>
          </div>
        </div>
        <div class="download">
          <h2>Listen &amp; Download</h2>

          <div class="link">
            <a href="https://cdn.occloxium.com/a/zoomoid/liamm.zip">
              <i class="fas fa-file-archive"></i>
              Get the complete Standard Edition as MP3
            </a>
            <a
              class="small-subtitle"
              href="https://cdn.occloxium.com/a/zoomoid/liamm.flac.zip"
            >(Alternatively as FLAC)</a>
          </div>
          <div class="tracklist">
            <div class="blocked" v-if="blockEmbedded"></div>
            <div v-if="!blockEmbedded">
              <div class="container" id="intro">
                <b>1</b>
                <div>
                  <h3>intro.</h3>
                  <div class="tag-list">
                    <span>Instrumental</span>
                    <span>Ambience</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is
                    About Making Memories/intro.mp3" controls="true"></audio>
                  -->
                  <iframe
                    src="https://open.spotify.com/embed/track/2T7HmnQcJbOa6ZaSXTQkW0"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="albuquerque">
                <b>2</b>
                <div>
                  <h3>albuquerque.</h3>
                  <div class="tag-list">
                    <span>Hip-Hop</span>
                    <span>LoFi</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is About Making Memories/albuquerque.mp3"
                  controls="true"></audio>-->
                  <iframe
                    src="https://open.spotify.com/embed/track/0T7PGyauVbTW8B7QoCpI8P"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="summer">
                <b>3</b>
                <div>
                  <h3>summer.</h3>
                  <div class="tag-list">
                    <span>Hip-Hop</span>
                    <span>LoFi</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is
                    About Making Memories/summer.mp3" controls="true"></audio>
                  -->
                  <iframe
                    src="https://open.spotify.com/embed/track/0lWcWInjMdhheFewRgR8k0"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="linebeck">
                <b>4</b>
                <div>
                  <h3>linebeck.</h3>
                  <div class="tag-list">
                    <span>Hip-Hop</span>
                    <span>LoFi</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is About Making Memories/linebeck.mp3"
                  controls="true"></audio>-->
                  <iframe
                    src="https://open.spotify.com/embed/track/3kolwtmNdFml5raJJFe54g"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="utopia">
                <b>5</b>
                <div>
                  <h3>utopia.</h3>
                  <div class="tag-list">
                    <span>Electronic</span>
                    <span>Analogue</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is
                    About Making Memories/utopia.mp3" controls="true"></audio>
                  -->
                  <iframe
                    src="https://open.spotify.com/embed/track/1xziVkyWqNfjhTOf1jlD2X"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="lalaland">
                <b>6</b>
                <div>
                  <h3>i wished for a happy ending.</h3>
                  <div class="tag-list">
                    <span>Hip-Hop</span>
                    <span>LoFi</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is About Making Memories/i wished for a happy ending.mp3"
                  controls="true"></audio>-->
                  <iframe
                    src="https://open.spotify.com/embed/track/0TQ402uLv6nIILuXadiyHS"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="dovahkiin">
                <b>7</b>
                <div>
                  <h3>dovahkiin.</h3>
                  <div class="tag-list">
                    <span>Drum&amp;Bass</span>
                    <span>Liquid</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is About Making Memories/dovahkiin.mp3"
                  controls="true"></audio>-->
                  <iframe
                    src="https://open.spotify.com/embed/track/0SA9nKqkcynQA3RDgxIbpc"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="wildworld">
                <b>8</b>
                <div>
                  <h3>wild wold (vip mix).</h3>
                  <div class="tag-list">
                    <span>House</span>
                    <span>Tech-House</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is About Making Memories/wild world (vip mix).mp3"
                  controls="true"></audio>-->
                  <iframe
                    src="https://open.spotify.com/embed/track/5oqGg74rbzunebLip6TRDb"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="metro">
                <b>9</b>
                <div>
                  <h3>metro.</h3>
                  <div class="tag-list">
                    <span>Techno</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is
                    About Making Memories/metro.mp3" controls="true"></audio>
                  -->
                  <iframe
                    src="https://open.spotify.com/embed/track/7d3JrAOMuvUidGpcndP0wb"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="winter">
                <b>10</b>
                <div>
                  <h3>winter.</h3>
                  <div class="tag-list">
                    <span>Drum&amp;Bass</span>
                    <span>Liquid</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is
                    About Making Memories/winter.mp3" controls="true"></audio>
                  -->
                  <iframe
                    src="https://open.spotify.com/embed/track/4xjRle5icdlZTrLV8ahA9E"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <div class="container" id="outro">
                <b>11</b>
                <div>
                  <h3>outro.</h3>
                  <div class="tag-list">
                    <span>Instrumental</span>
                    <span>Ambience</span>
                  </div>
                  <!-- <audio src="https://cdn.occloxium.com/a/zoomoid/Life Is
                    About Making Memories/outro.mp3" controls="true"></audio>
                  -->
                  <iframe
                    src="https://open.spotify.com/embed/track/5uUF1ftTDe29hHg9HAv6eA"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/app.sass'

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
    text-align: center

.tracklist
  padding: 2em 0 0
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


.container
  display: flex
  align-items: baseline
  b
    width: 1em
    +font-size(3em)
    margin-right: 16px
    &::after
      content: '.'
  h3
    margin-top: 0
    +font-size(3em)
  .tag-list
    padding-bottom: 8px
    span
      margin: 0 4px 8px
      +font-size(0.8em)
      color: rgba(255,255,255,0.5)
      background: black
      border-radius: 48px
      padding: 2px 8px
      cursor: pointer
      transition: all 0.1s ease
      &:active, &:hover
        color: rgba(255,255,255,1)
        background: rgba(15,15,15,1)
      &::before
        content: '# '
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
