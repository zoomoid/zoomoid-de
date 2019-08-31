<template>
  <div class="single">
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>Eigenräume</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/eigenräume/standard.png" />
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
            <div>
              <li v-for="item in this.streaming" :key="item.name">
                <SlideAnchor :anchor="item.link" :name="item.name"/>
              </li>
            </div>
          </div>
          <div class="buying">
            <h2>Buy!</h2>
            <div>
              <li v-for="item in this.buying" v-bind:key="item.name">
                <SlideAnchor :anchor="item.link" :name="item.name"/>
              </li>
            </div>
          </div>
        </div>
        <div class="download">
          <h2>Listen &amp; Download</h2>
          <div>
            <li>
              <SlideAnchor :anchor="'https://cdn.occloxium.com/a/zoomoid/eigenraeume.zip'" :name="'Get the complete Standard Edition as MP3'"/>
            </li>
            <li>
              <SlideAnchor class="small" :anchor="'https://cdn.occloxium.com/a/zoomoid/eigenraeume.flac.zip'" :name="'(Alternatively as FLAC)'"/>
            </li>
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
          <div class="centered">
            <router-link to="/work/eigenräume-extended-edition">Eigenräume (Extended Edition)</router-link>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/single.sass'
+single
</style>

<script>
import SlideAnchor from '@/components/SlideAnchor';

export default {
  components: {
    SlideAnchor
  },
  data: function() {
    return {
      streaming: [
        {
          name: 'Spotify',
          link: 'https://open.spotify.com/album/3YaUvYAudEXEuCJzoONcgE'
        },
        {
          name: 'Apple Music',
          link: 'https://itunes.apple.com/de/album/eigenr%C3%A4ume/1462054888'
        },
        {
          name: 'Deezer',
          link: 'https://www.deezer.com/de/album/95294192'
        }
      ],
      buying: [
        {
          name: 'Amazon Music',
          link: 'https://www.amazon.de/Eigenr%C3%A4ume-Zoomoid/dp/B07R92N45D/'
        },
        {
          name: 'iTunes',
          link: 'https://itunes.apple.com/de/album/eigenr%C3%A4ume/1462054888'
        }
      ],
      blockEmbedded:
        !this.$cookies.isKey('allowThirdPartyContent') ||
        this.$cookies.get('allowThirdPartyContent') === 'false'
    };
  }
};
</script>
