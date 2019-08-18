<template>
  <div>
    <div class="backdrop">
      <Navigation/>
    </div>
    <Banner/>
    <div class="foreground">
      <Intro/>
      <Work/>
      <About/>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Intro from '@/views/Intro.vue'
import Work from '@/views/Work.vue';
import About from '@/views/About.vue';
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
import Banner from '@/components/Banner.vue'
export default {
  name: 'MainView',
  components: {
    Intro,
    Footer,
    Navigation,
    Work,
    About,
    Banner,
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/app.sass'
// $background: $may-1

$primary-background: $prime-background
$backlayer: white

.backdrop
  background: $backlayer
.foreground
  padding: 0 2em
  +sm
    padding: 0 1em
  margin: 0 auto
  width: 100%

</style>
