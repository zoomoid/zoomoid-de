<template>
  <div class="">
    <div class="backdrop">
      <Navigation/>
    </div>
    <div class="foreground">
      <Header/>
      <Work/>
      <About/>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Work from '@/views/Work.vue';
import About from '@/views/About.vue';
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'intro',
  components: {
    Header,
    Footer,
    Navigation,
    Work,
    About,
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
