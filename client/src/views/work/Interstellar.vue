<template>
  <div class="single">
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>Interstellar</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/interstellar/cover.png" />
      </section>
      <p>
        Interstellar is a movie by Christopher Nolan with a soundtrack by Hans
        Zimmer which I absolutely admire. It has spawned inspiration beyond my
        own comprehension. This is my first hommage to Hans Zimmer, the Pipe
        Organ from the soundtrack and the fantastic movie of a few people trying
        to save the human race by traveling to stars outside our solar system!
      </p>
      <div class="grid">
        <section class="download">
          <h1>Download</h1>
          <div>
            <audio controls>
              <source
                src="https://cdn.occloxium.com/a/zoomoid/zoomoid%20-%20Interstellar%20%28zoomoid%20VIP%20Mix%29.mp3"
                type="audio/mpeg"
              />
            </audio>
            <span>zoomoid - Interstellar (VIP)</span>
          </div>
          <div>
            <audio controls>
              <source
                src="https://cdn.occloxium.com/a/zoomoid/zoomoid%20-%20Interstellar.mp3"
                type="audio/mpeg"
              />
            </audio>
            <span>zoomoid - Interstellar (Original Mix)</span>
          </div>
        </section>
        <section class="streaming">
          <h1>Streaming</h1>
          <div class="provider embedded">
            <Block v-if="blockEmbedded"/>
            <div v-if="!blockEmbedded">
              <a href="#" class="soundcloud">
                <i class="fab fa-spotify"></i>
                <b>Spotify</b>
              </a>
              <iframe
                src="https://open.spotify.com/embed/album/3WV0MxgRHgm415BqVNa5V2"
                width="100%"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/single.sass'
+single
</style>

<script>
import Block from '@/components/Block';

export default {
  components: {
    Block
  },
  data: function() {
    return {
      blockEmbedded:
        !this.$cookies.isKey('allowThirdPartyContent') ||
        this.$cookies.get('allowThirdPartyContent') === 'false'
    };
  }
};
</script>


