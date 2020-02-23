<template>
  <div class="wrapper">
    <Breadcrump></Breadcrump>
    <div class="single">
      <article>
        <div class="title">
          <h3>zoomoid</h3>
          <h1>Public Trans&shy;por&shy;ta&shy;tion EP</h1>
        </div>
        <section class="cover">
          <img src="https://cdn.occloxium.com/i/zoomoid/covers/public-transportation/standard.png" />
        </section>
        <section class="content">
          <p>
            The
            <b>Public Transportation</b> EP is a concept LoFi HipHop/Electronic/Ambient immersive
            listening experience composed to accompany a train ride on a few stops in Northrhine-Westfalia.
          </p>
        </section>
        <div class="external">
          <div class="streaming">
            <h2>Stream!</h2>
            <div>
              <li v-for="item in streaming" :key="item.name">
                <SlideAnchor :theme="theme" :anchor="item.link" :name="item.name" />
              </li>
            </div>
          </div>
        </div>
        <div class="download">
          <h2>Listen &amp; Download</h2>
          <AudioManager class="players" :queue="this.queue"></AudioManager>
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
import AudioManager from '@/components/AudioManager.vue';
import Breadcrump from '@/components/Breadcrump';
import SlideAnchor from '@/components/SlideAnchor';

export default {
  components: {
    AudioManager,
    Breadcrump,
    SlideAnchor
  },
  data: function() {
    return {
      theme: 'light',
      streaming: [
        {
          name: 'Spotify',
          link: 'https://open.spotify.com/album/7r0wQNMWcf2vno7O2trwQt'
        },
        {
          name: 'Apple Music',
          link:
            'https://music.apple.com/de/album/public-transportation-ep/1484512656'
        }
      ],
      buying: [],
      queue: [
        {
          id: 1,
          name: 'Stargazing',
          url:
            'https://cdn.occloxium.com/a/zoomoid/public-transportation/01_stargazing.mp3',
          tags: ['Dormagen']
        },
        {
          id: 2,
          name: 'Downhill',
          url:
            'https://cdn.occloxium.com/a/zoomoid/public-transportation/02_downhill.mp3',
          tags: ['Köln Hbf']
        },
        {
          id: 3,
          name: 'Say It',
          url:
            'https://cdn.occloxium.com/a/zoomoid/public-transportation/03_say%20it.mp3',
          tags: ['Aachen Rothe-Erde']
        },
        {
          id: 4,
          name: 'Volksgarten',
          url:
            'https://cdn.occloxium.com/a/zoomoid/public-transportation/04_volksgarten.mp3',
          tags: ['Düsseldorf Hbf']
        },
        {
          id: 5,
          name: 'Me&shy;lan&shy;cho&shy;lic Me&shy;di&shy;ta&shy;tion',
          url:
            'https://cdn.occloxium.com/a/zoomoid/public-transportation/05_melancholic%20meditation.mp3',
          tags: ['Aachen West']
        },
        {
          id: 6,
          name: 'Delay',
          url:
            'https://cdn.occloxium.com/a/zoomoid/public-transportation/06_delay.mp3',
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
