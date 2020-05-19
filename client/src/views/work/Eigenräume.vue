<template>
  <div class="wrapper">
    <Breadcrump></Breadcrump>
    <div class="single">
      <article>
        <div class="title">
          <h3>zoomoid</h3>
          <h1>Eigenräume</h1>
        </div>
        <section class="cover">
          <img src="https://cdn.occloxium.com/i/zoomoid/covers/eigenräume/standard.png" />
        </section>

        <section class="content">
          <p>
            <b>Eigenräume</b> is the follow-up EP from Zoomoid. Purely original,
            emotionally expressive and full of art. Each title is seemingly random yet
            precisely and carefully chosen. Six tracks take you on a journey of some
            remarkable places Alex calls his "Eigenräume", places very dear to his heart.
            Weeks of dedication to the music and countless revisions went into this
            EP, so you better like it! Show it some love and tell your friends about it!
          </p>
        </section>
        <div class="download">
          <p>
            I would appreciate you listening to Eigenräume on Spotify, Apple Music,
            Deezer and so on. You supporting me means the absolute world to me!
            <br />However, I want everybody to enjoy it equally, hence I provide it for download
            for free here.
          </p>
          <div id="external">
            <div class="streaming">
              <h2>Stream!</h2>
              <div>
                <li v-for="item in this.streaming" :key="item.name">
                  <SlideAnchor :anchor="item.link" :name="item.name" />
                </li>
              </div>
            </div>
            <div class="buying">
              <h2>Buy!</h2>
              <div>
                <li v-for="item in this.buying" v-bind:key="item.name">
                  <SlideAnchor :anchor="item.link" :name="item.name" />
                </li>
              </div>
            </div>
          </div>
          <div class="download">
            <h2>Listen &amp; Download</h2>
            <div>
              <li>
                <SlideAnchor
                  :anchor="'https://cdn.occloxium.com/a/zoomoid/eigenraeume.zip'"
                  :name="'Download the complete Standard Edition as MP3'"
                />
              </li>
            </div>
            <h4>Standard Edition</h4>
            <AudioManager :queue="queue"></AudioManager>
            <h4>Extended Edition</h4>
            <div class="centered">
              <SlideAnchor
                :anchor="'/work/eigenräume-extended-edition'"
                :name="'Eigenräume (Extended Edition)'"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/single.sass'
+single
</style>

<script>
import SlideAnchor from '@/components/SlideAnchor';
import AudioManager from '@/components/AudioManager.vue';
import Breadcrump from '@/components/Breadcrump'

export default {
  components: {
    SlideAnchor,
    AudioManager,
    Breadcrump
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
      queue: [
        {
          id: 1,
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Stockholm.mp3',
          name: 'Stockholm',
          tags: []
        },
        {
          id: 2,
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Großstadt.mp3',
          name: 'Großstadt',
          tags: []
        },
        {
          id: 3,
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Schöneberg%20At%20Night.mp3',
          name: 'Schöneberg At Night',
          tags: []
        },
        {
          id: 4,
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Höllental.mp3',
          name: 'Höllental',
          tags: []
        },
        {
          id: 5,
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Heimat.mp3',
          name: 'Heimat',
          tags: []
        },
        {
          id: 6,
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Blaues%20Land.mp3',
          name: 'Blaues Land',
          tags: []
        }
      ],
      blockEmbedded:
        !this.$cookies.isKey('allowThirdPartyContent') ||
        this.$cookies.get('allowThirdPartyContent') === 'false'
    };
  }
};
</script>
