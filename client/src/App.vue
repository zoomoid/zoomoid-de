<template>
  <main id="app">
    <div class="backdrop">
      <Navigation/>
    </div>
    <div class="foreground">
      <router-view/>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </main>
</template>

<style lang="sass">
@import '@/assets/app.sass'
// $background: $may-1

$primary-background: $prime-background
$backlayer: lighten($grey, 40%)
body
  height: 100vh
  width: 100%
  // position: absolute
  background: $backlayer
  main
    min-height: 100%
    display: flex
    flex-direction: column

.backdrop
  background: $backlayer
.foreground
  box-shadow: 0 -2px 4px rgba(0,0,0,0.2)
  border-top-left-radius: $radius
  border-top-right-radius: $radius
  background: $primary-background
  max-width: $max-width
  margin: 0 auto
  width: 100%
.footer
  max-width: $max-width
  margin: 0 auto
  width: 100%
  background: $primary-background
  & > footer
    box-shadow: 0 -2px 4px rgba(0,0,0,0.2)
    border-top-left-radius: $radius
    border-top-right-radius: $radius
    background: darken($primary-background, 5%)
</style>

<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Navigation
  }
};
</script>
