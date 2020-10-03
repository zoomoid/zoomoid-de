<template>
  <main id="app">
    <CookieBanner />
    <router-view></router-view>
  </main>
</template>

<style lang="sass">
@import '@/assets/app.sass'

*
  outline: none
body
  +typography
  main
    display: flex
    flex-direction: column
</style>

<script>
import CookieBanner from "@/components/CookieBanner.vue";
export default {
  name: "App",
  components: {
    CookieBanner,
  }
};
</script>
