<template>
  <main id="app">
    <CookieBanner/>
    <div class="backdrop">
      <Navigation/>
    </div>
    <div class="foreground">
      <Intro/>
      <Work/>
      <About/>
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
$backlayer: white

*
  outline: none
body
  +typography($white, $white)
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
  background: $backlayer
  color: black
  // max-width: $max-width
  margin: 0 auto
  width: 100%
.footer
  // max-width: $max-width
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
import CookieBanner from '@/components/CookieBanner.vue';
import Work from '@/views/Work.vue';
import Intro from '@/views/Intro.vue';
import About from '@/views/About.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Navigation,
    CookieBanner,
    Work,
    Intro,
    About,
  }
};
</script>
