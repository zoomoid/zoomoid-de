<template>
  <main id="app">
    <CookieBanner/>
    <router-view></router-view>
  </main>
</template>

<style lang="sass">
@import '@/assets/app.sass'
// $background: $may-1

$primary-background: $prime-background
$backlayer: white

*
  outline: none
body
  +typography
  height: 100vh
  width: 100%
  // position: absolute
  background: $backlayer
  main
    min-height: 100%
    display: flex
    flex-direction: column
</style>

<script>
import CookieBanner from '@/components/CookieBanner.vue';

export default {
  name: 'App',
  components: {
    CookieBanner,
  }
};
</script>
