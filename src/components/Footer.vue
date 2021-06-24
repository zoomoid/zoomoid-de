<template>
  <footer>
    <div class="grid grid-cols-2 sm:flex container mx-auto">
      <div class="socials md:flex">
        <h5>Social Media:</h5>
        <div class="md:divide-x divide-white">
          <li
            v-for="s in socials"
            :key="s.label"
            class="md:inline-block md:px-2"
          >
            <a :href="s.url">
              <i :class="[s.icon.prefix, s.icon.key]"></i>
              <span>{{ s.label }}</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  data: () => ({
    socials: [
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
    internals: [],
  }),
});
</script>

<style lang="postcss" scoped>
footer {
  @apply p-6 absolute bottom-0 text-white;
}
h5 {
  @apply mb-1;
}
li {
  @apply list-none opacity-50 font-medium;
  &:hover,
  &:active {
    @apply opacity-100;
  }
  i {
    @apply mr-1 w-5 text-center;
  }
}
</style>
