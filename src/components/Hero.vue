<template>
  <div class="hero">
    <div class="hero__inner">
      <h1 class="font-utopian-one-bw">
        zoomoid
      </h1>
      <p>A young, aspiring artist and producer, based in Aachen, Germany.</p>
      <p>
        He's currently making electronic music with a concept and a heartbeat.
      </p>
      <div class="platforms">
        <a
          v-for="platform in platforms"
          :key="platform.label"
          class="platform"
          :href="platform.href"
        >
          <i class="platform__icon" :class="[platform.icon.prefix, platform.icon.key]"></i>
          <span class="platform__label">{{platform.label}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Hero",
  data: () => ({
    platforms: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
        icon: {
          prefix: "fab",
          key: "fa-spotify",
        },
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/de/artist/zoomoid/1390354057",
        icon: {
          prefix: "fab",
          key: "fa-apple",
        },
      },
      {
        label: "Bandcamp",
        href: "https://zoomoid.bandcamp.com/",
        icon: {
          prefix: "fab",
          key: "fa-bandcamp",
        },
      },
    ],
  }),
});
</script>

<style lang="sass" scoped>
.hero
  @apply flex flex-col justify-center flex-grow container mx-auto px-8
  &__inner
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    @apply bg-gradient-to-br from-pink-500 to-orange-600

h1
  @apply uppercase text-5xl md:text-8xl
p
  @apply text-lg md:text-4xl font-semibold
.link
  @apply text-2xl uppercase tracking-wide font-semibold
  @apply inline-block my-4 py-2 px-4 items-center flex-grow-0
  @apply bg-white hover:bg-trueGray-200 transition-colors duration-200 text-black rounded-lg
  i
    @apply transition-transform duration-500
  &:hover, &:active
    i
      @apply transform translate-x-1
.platforms
  @apply flex justify-around md:mt-16 mt-8
  .platform
    @apply hover:text-white
    &:hover, &:active
      -webkit-text-fill-color: initial
    &__icon
      @apply md:text-6xl text-4xl
    &__label
      @apply hidden
</style>
