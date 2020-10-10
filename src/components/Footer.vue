<template>
  <footer class="bg-black text-white">
    <div class="grid grid-cols-2 sm:flex container mx-auto">
      <div class="internals">
        <h5>Links</h5>
        <li v-for="i in internals" :key="i.label">
          <router-link :to="i.url">{{ i.label }}</router-link>
        </li>
      </div>
      <div class="socials text-right sm:text-left">
        <h5>Social Media</h5>
        <li v-for="s in socials" :key="s.label">
          <a :href="s.url">
            <i :class="[s.icon.prefix, s.icon.key]"></i>
            <span>{{ s.label }}</span>
          </a>
        </li>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
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
    ],
    internals: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Work",
        url: "/work",
      },
      {
        label: "Contact",
        url: "/contact",
      },
      {
        label: "Privacy & Data Protection",
        url: "/privacy",
      },
    ],
  }),
};
</script>

<style lang="sass" scoped>
footer
  border-top: solid 2px white
  @apply p-6
h5
  @apply mb-1
li
  @apply list-none
  @apply opacity-50
  &:hover, &:active
    @apply opacity-100
  i
    @apply mr-2
    @apply w-5
    @apply text-center
.container
  div
    @apply mx-4
</style>
