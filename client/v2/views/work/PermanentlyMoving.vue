<template>
  <div class="wrapper">
    <Breadcrump></Breadcrump>
    <div class="single" id="A05">
      <article>
        <div class="title">
          <h3>zoomoid</h3>
          <h1>301 Moved Permanently</h1>
        </div>
        <section class="cover">
          <img src="https://cdn.occloxium.com/i/zoomoid/covers/301/standard.jpg" />
        </section>
        <section class="content">
          <p>
            <b>301 Moved Permanently</b> is a 4-track Techno EP scheduled and the
            last release of 2019. It's one last nerdy joke for the decade, dedicated
            to the amount of code I've written in 2019.
          </p>
        </section>
        <div class="external">
          <div class="streaming">
            <h2>Stream!</h2>
            <div>
              <li v-for="item in streaming" :key="item.name">
                <SlideAnchor :anchor="item.link" :name="item.name" />
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
@use "@/assets/single.sass" as style

@include style.breadcrump-light
@include style.single-light
</style>

<script>
import SlideAnchor from '@/components/SlideAnchor.vue';
import AudioManager from '@/components/AudioManager.vue';
import Breadcrump from '@/components/Breadcrump';

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
          link: 'https://open.spotify.com/album/4gr5rmKZn5pkFISvITsHrI'
        },
        {
          name: 'Apple Music',
          link:
            'https://music.apple.com/us/album/301-moved-permanently/1489867904'
        }
      ],
      buying: [],
      queue: [
        {
          id: 1,
          name: 'Monarch',
          url: 'https://cdn.occloxium.com/a/zoomoid/301/01_Monarch.mp3',
          tags: []
        },
        {
          id: 2,
          name: 'Doppler',
          url: 'https://cdn.occloxium.com/a/zoomoid/301/02_Doppler.mp3',
          tags: []
        },
        {
          id: 3,
          name: 'Elektron',
          url: 'https://cdn.occloxium.com/a/zoomoid/301/03_Elektron.mp3',
          tags: []
        },
        {
          id: 4,
          name: 'Outer Space (Rework)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/301/04_Outer%20Space%20(Rework).mp3',
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
