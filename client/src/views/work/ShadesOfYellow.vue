<template>
  <div class="wrapper">
    <Breadcrump></Breadcrump>
    <div class="single">
      <article>
        <div class="title">
          <h3>zoomoid</h3>
          <h1>Shades of Yellow</h1>
        </div>
        <section class="cover">
          <img src="https://cdn.occloxium.com/i/zoomoid/covers/shades-of-yellow/cover.png" />
        </section>
        <section class="content">
          <p>
            The
            <b>Shades of Yellow</b> EP combines several feelings from the last months. Do I need to say more?
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
          link: 'https://open.spotify.com/album/2I2D60pkjobXBi4vPfxLBh'
        },
        {
          name: 'Apple Music',
          link:
            'https://music.apple.com/de/album/shades-of-yellow-single/1510331967'
        }
      ],
      buying: [],
      queue: [
        {
          id: 1,
          name: 'Shades of Yellow',
          url:
            'https://cdn.occloxium.com/a/zoomoid/shades-of-yellow/Shades%20of%20Yellow.mp3',
          tags: ['House', '120bpm']
        },
        {
          id: 2,
          name: 'Malhereux en Amour',
          url:
            'https://cdn.occloxium.com/a/zoomoid/shades-of-yellow/Malheureux%20en%20Amour.mp3',
          tags: ['Electronic', '90bpm']
        },
        {
          id: 3,
          name: 'Dreams From Far Away',
          url:
            'https://cdn.occloxium.com/a/zoomoid/shades-of-yellow/Dreams%20from%20Far%20Away.mp3',
          tags: ['Drum\'n\'Bass', '174bpm']
        },
      ],
      blockEmbedded:
        !this.$cookies.isKey('allowThirdPartyContent') ||
        this.$cookies.get('allowThirdPartyContent') === 'false'
    };
  }
};
</script>
