<template>
  <section>
    <div class="h1">Discography</div>
    <div class="flex-grid">
      <div class="release" v-for="(release, index) in releases" v-bind:key="release.id">
        <transition name="fadeCover">
          <router-link :to="`releases/${release.id}`" v-show="release.loaded" :style="{
            'transition-delay': `${Math.log(index + 1) * 0.2}s`
          }">
            <div class="cover" v-bind:style="{ 'background-image': `url(${release.img})` }">
              <img v-on:load="release.loaded = true" :src="release.img">
            </div>
            <h1 class="title">{{ release.name }}</h1>
            <h2 class="artist">{{ release.artist }}</h2>
          </router-link>
        </transition>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Releases',
  data: () => ({
    // Irgendwann mal ein solides Backend hier dran klemmen,
    // um CMS-like Funktionalitäten zu bauen, sollte diese App
    // für anderes deployed werden
    releases: [
      {
        id: 'schwerelos-zoomoid-remix',
        name: 'Schwerelos - Zoomoid Remix',
        artist: 'Diode Eins',
        img: 'https://cdn.occloxium.com/i/zoomoid/covers/schwerelos-zoomoid-remix/cover.png',
        hoverImg: 'https://cdn.occloxium.com/i/zoomoid/covers/schwerelos-zoomoid-remix/cover.png'
      },{
        id: '301-moved-permanently',
        name: '301 Moved Permanently',
        artist: 'Zoomoid',
        img: 'https://cdn.occloxium.com/i/zoomoid/covers/301/standard.jpg',
        hoverImg: 'https://cdn.occloxium.com/i/zoomoid/covers/301/vinyl-standard.jpg'
      },{
        id: 'public-transportation',
        name: 'Public Transportation',
        artist: 'Zoomoid',
        img: 'https://cdn.occloxium.com/i/zoomoid/covers/public-transportation/standard.png',
        hoverImg: 'https://cdn.occloxium.com/i/zoomoid/covers/public-transportation/standard.png'
      },{
        id: 'eigenräume-extended-edition',
        name: 'Eigenräume (Extended Edition)',
        artist: 'Zoomoid',
        img: 'https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/extended.png',
        hoverImg: 'https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/vinyl-extended.png'
      },{
        id: 'eigenräume-standard-edition',
        name: 'Eigenräume',
        artist: 'Zoomoid',
        img: 'https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/standard.png',
        hoverImg: 'https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/vinyl-standard.png'
      },{
        id: 'life-is-about-making-memories',
        name: 'Life Is About Making Memories',
        artist: 'Zoomoid',
        img: 'https://cdn.occloxium.com/i/zoomoid/covers/liamm/cover.png',
        hoverImg: 'https://cdn.occloxium.com/i/zoomoid/covers/liamm/cover.png'
      }
    ].map(({id, name, artist, img, hoverImg}) => ({
      id: id,
      name: name,
      artist: artist,
      img: img,
      hoverImg: hoverImg,
      loaded: false,
    })),
  }),
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins';

section {
  padding-bottom: 4em;
}

@include mixins.headline;

.flex-grid {
  display: grid;
  margin: 0 auto;
  padding: 2em;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em 0;
  @include mixins.sm {
    grid-template-columns: 1fr;
  }
  @include mixins.lg {
    grid-template-columns: 1fr 1fr;
  }

  .release {
    a {
      color: inherit;
      text-decoration: none;
    }
    font-size: 16pt;
    .title {
      text-align: center;
      margin: 0.5em 0 0;
      font-size: 1em;
            font-weight: 300;

    }
    .artist {
      margin: 0;
      text-align: center;
      font-size: 0.8em;
      opacity: 0.7;
      font-weight: 300;
    }
    .cover {
      box-shadow: 0px 3px 12px rgba(0,0,0,0.4);
      margin: 0 auto;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      width: 300px;
      height: 300px;
      img {
        display: none;
      }
    }
    @include mixins.sm {

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
