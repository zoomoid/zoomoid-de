<template>
  <div class="flex flex-col justify-center h-full flex-grow">
    <div class="hero gap-8 flex-grow-0 flex-shrink">
      <img class="logo" src="/white.png" alt="Zoomoid" />
      <div class="hero__inner">
        <p>Zoomoid is a young, aspiring artist and producer, based in Aachen, Germany.</p>
        <p>
          He's making electronic music with a concept and a heartbeat.
        </p>
        <div class="platforms">
          <a
            v-for="(platform) in platforms"
            :key="platform.label"
            class="platform"
            :href="platform.url"
          >
            <i
              class="platform__icon"
              :class="[platform.icon.prefix, platform.icon.key]"
            ></i>
            <span class="platform__label">{{ platform.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Hero",
  data: () => ({
    colors: [
      'text-purple-zoomoid',
      'text-red-zoomoid',
      'text-orange-zoomoid',
      'text-green-zoomoid',
      'text-blue-zoomoid'
    ],
    platforms: [
      {
        label: "Spotify",
        url: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
        icon: {
          prefix: "fab",
          key: "fa-spotify",
        },
      },
      {
        label: "Apple Music",
        url: "https://music.apple.com/de/artist/zoomoid/1390354057",
        icon: {
          prefix: "fab",
          key: "fa-apple",
        },
      },
      {
        label: "Bandcamp",
        url: "https://zoomoid.bandcamp.com/",
        icon: {
          prefix: "fab",
          key: "fa-bandcamp",
        },
      },
      {
        label: "Soundcloud",
        url: "https://soundcloud.com/zoomoid",
        icon: {
          prefix: "fab",
          key: "fa-soundcloud",
        },
      },
      {
        label: "Instagram",
        url: "https://instagram.com/zoomoid",
        icon: {
          prefix: "fab",
          key: "fa-instagram",
        },
      },
      {
        label: "YouTube Music",
        url: "https://music.youtube.com/channel/UC62BLKKSvDsJ1_-VQ9XCRLw",
        icon: {
          prefix: "fab",
          key: "fa-youtube",
        },
      },
    ],
  }),
});
</script>

<style lang="postcss" scoped>
.hero {
  @apply flex justify-center container max-w-screen-md mx-auto px-8;
  @apply h-auto;
}
h1 {
  @apply text-5xl md:text-8xl font-semibold;
}
p {
  @apply text-2xl md:text-4xl font-semibold;
}
.logo {
  @apply h-64;
}
.link {
  @apply text-2xl uppercase tracking-wide font-semibold;
  @apply inline-block my-4 py-2 px-4 items-center flex-grow-0;
  @apply hover:text-opacity-50 transition-opacity duration-200 rounded-lg;
}
.platforms {
  @apply flex justify-around mt-8;
  .platform {
    @apply text-white text-opacity-50 hover:text-opacity-100;
    &:hover, &:active {
      -webkit-text-fill-color: initial;
    }
    &__icon {
      @apply md:text-6xl text-4xl;
    }
    &__label {
      @apply hidden;
    }
  }
}
</style>
