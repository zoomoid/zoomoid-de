<template>
  <div class="single">
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>Atomic Spark</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/atomic-spark/cover.png" />
      </section>
      <p>
        "Atomic Spark" literally sparked from the trailer for Bethesda's Fallout
        4 and the vocal in that trailer. Using this sample to make my way into
        Techno way down in 2017. Looking back, this really was a childish
        attempt...
      </p>
      <div class="grid">
        <section class="download">
          <h1>Download</h1>
          <div>
            <audio controls>
              <source
                src="https://cdn.occloxium.com/a/zoomoid/zoomoid%20-%20Atomic%20Spark%20%28Original%20Mix%29.mp3"
                type="audio/mpeg"
              />
            </audio>
            <span>zoomoid - Atomic Spark</span>
          </div>
        </section>
        <section class="streaming">
          <h1>Streaming</h1>
          <div class="provider embedded">
            <Block v-if="blockEmbedded"/>
            <div v-if="!blockEmbedded">
              <a href="#" class="spotify">
                <i class="fab fa-spotify"></i>
                <b>Spotify</b>
              </a>
              <iframe
                src="https://open.spotify.com/embed/track/1O3DUHK9N56SO7gCW9nDx0"
                width="100%"
                height="80"
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

<script>
export default {
  name: 'AtomicSpark'
}
</script>

<style lang="sass" scoped>
@import '@/assets/single.sass'
+single
</style>
