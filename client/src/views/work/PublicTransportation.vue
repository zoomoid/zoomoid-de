<template>
  <div class="single">
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>Public Transportation EP</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/public-transportation/standard.png" />
      </section>
      <p>
        The <b>Public Transportation</b> EP is a concept LoFi HipHop/Electronic/Ambient immersive
        listening experience composed to accompany a train ride on a few stops in NRW. It officially
        releases on 1st of November, 2019! However, you can listen to it here already!
      </p>
      <div class="download">
        <h2>Listen &amp; Download</h2>
        <span>Zoomoid - Stargazing</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/public-transportation/01_stargazing.mp3"
            type="audio/mpeg"
          />
        </audio>
        <span>Zoomoid - Downhill</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/public-transportation/02_downhill.mp3"
            type="audio/mpeg"
          />
        </audio>
        <span>Zoomoid - Say It</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/public-transportation/03_say%20it.mp3"
            type="audio/mpeg"
          />
        </audio>
        <span>Zoomoid - Volksgarten</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/public-transportation/04_volksgarten.mp3"
            type="audio/mpeg"
          />
        </audio>
        <span>Zoomoid - Melancholic Meditation</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/public-transportation/05_melancholic%20meditation.mp3"
            type="audio/mpeg"
          />
        </audio>
        <span>Zoomoid - Delay</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/public-transportation/06_delay.mp3"
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

export default {
  components: {

  },
  data: function() {
    return {
      streaming: [

      ],
      buying: [

      ],
      blockEmbedded:
        !this.$cookies.isKey('allowThirdPartyContent') ||
        this.$cookies.get('allowThirdPartyContent') === 'false'
    };
  }
};
</script>
