<template>
  <main id="app">
    <div class="backdrop">
      <Navigation/>
    </div>
    <div class="foreground">
      <router-view/>
    </div>

    <Footer/>
  </main>
</template>

<style lang="sass">
@import '@/assets/app.sass'
$background: $may-1
$radius: 32px
body
  height: 100vh
  width: 100%
  // position: absolute
  main
    min-height: 100%
    display: flex
    flex-direction: column
    background: desaturate(darken($july-1, 20%), 60%)


.backdrop
  background: desaturate(darken($july-1, 20%), 60%)
.foreground
  box-shadow: 0 -2px 4px rgba(0,0,0,0.2)
  border-top-left-radius: $radius
  border-top-right-radius: $radius
  background: $july-4
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
