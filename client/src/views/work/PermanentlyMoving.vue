<template>
  <div class="single">
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>301 Permanently Moving</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/301/standard.png" />
      </section>
      <p>
        <b>301 Permanently Moving</b> is a 2-track Techno EP scheduled to release in
        November 2019. The first track, <b>Imagine</b> is now available for download here!
      </p>
      <div class="download">
        <h2>Listen &amp; Download</h2>
        <span>Zoomoid - Imagine</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/301/02_Imagine.mp3"
            type="audio/mpeg"
          />
        </audio>
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
