<template>
  <section>
    <div class="h1">Mixes</div>
    <div class="mixes-list">
      <div class="h2">Zoomoid &amp; Friends</div>
      <div class="body">Freshly pressed mixes by artists in Zoomoid's bubble!</div>
      <div class="mix" v-for="(mix, index) in mixes" v-bind:key="mix.id">
        <transition name="fadeCover">
          <div class="mix-wrapper" :style="{'transition-delay': `${Math.log(index + 1) * 0.2}s`}">
            <h1 class="name">{{mix.name}}</h1>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" :src="`${baseUrl.prefix}${mix.id}${baseUrl.suffix}`">
            </iframe>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Mixes',
  data: () => ({
    // Irgendwann mal ein solides Backend hier dran klemmen,
    // um CMS-like Funktionalitäten zu bauen, sollte diese App
    // für anderes deployed werden
    mixes: [
      {
        id: '722057530',
        name: 'Diode Eins | Tanzaffäre | No.1'
      },
      {
        id: '725685655',
        name: 'André Sennet | Tanzaffäre | No.2'
      },
      {
        id: '718924255',
        name: 'André Sennet @ Scheunenrave 23.11.2019',
      }
    ],
    baseUrl: {
      prefix: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/',
      suffix: '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    }
  }),
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins';
section {
  padding-bottom: 4em;
}

@include mixins.headline;

.mixes-list {
  padding: 2em;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  .mix {
    margin: 2em 0 4em;
    .name {
      font-weight: 300;
      margin: 2em 0 1em;
      text-align: center;
    }
  }
}

.fadeCover-enter-active {
  transition: opacity 0.66s ease-in-out;
}

.fadeCover-enter-to {
  opacity: 1;
}

.fadeCover-enter {
  opacity: 0;
}
</style>
