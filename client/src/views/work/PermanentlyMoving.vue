<template>
  <div class="single">
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>301 Moved Permanently</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/301/standard.jpg" />
      </section>
      <p>
        <b>301 Moved Permanently</b> is a 4-track Techno EP scheduled to release on 14th of
        December, 2019.
      </p>
      <div class="download">
        <h2>Listen &amp; Download</h2>
        <span>Zoomoid - Monarch</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/301/01_Monarch.mp3"
            type="audio/mpeg"
          />
        </audio>
        <span>Zoomoid - Doppler</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/301/02_Doppler.mp3"
            type="audio/mpeg"
          />
        </audio>
        <span>Zoomoid - Elektron</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/301/03_Elektron.mp3"
            type="audio/mpeg"
          />
        </audio>
        <span><small>Bonus:</small> Zoomoid - Outer Space (Rework)</span>
        <audio controls>
          <source
            src="https://cdn.occloxium.com/a/zoomoid/301/04_Outer%20Space%20(Rework).mp3"
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
