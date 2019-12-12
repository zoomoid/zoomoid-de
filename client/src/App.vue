<template>
  <main id="app">
    <CookieBanner />
    <FirstSection></FirstSection>
    <!-- <Navigation /> -->
    <router-view></router-view>
  </main>
</template>

<style lang="sass">
@import '@/assets/app.sass'
// $background: $may-1

$primary-background: $prime-background
// $backlayer: rgba(15,15,15,1)
*
  outline: none
body
  +typography
  // height: 100vh
  // width: 100%
  // position: absolute
  background: $backlayer
  main
    // min-height: 100%
    display: flex
    flex-direction: column
</style>

<script>
import CookieBanner from "@/components/CookieBanner.vue";
import Navigation from "@/components/Navigation.vue";
import FirstSection from "@/components/front-page/FirstSection.vue"
export default {
  name: "App",
  components: {
    FirstSection,
    CookieBanner,
    Navigation
  }
};
</script>
