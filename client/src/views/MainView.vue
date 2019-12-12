<template>
  <div>
    <!-- <div class="backdrop">
      <Navigation/>
    </div> -->
    <Banner></Banner>
    <div class="foreground">
      <Intro></Intro>
      <Work></Work>
      <MerchBanner></MerchBanner>
      <About></About>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Intro from '@/views/Intro.vue'
import Work from '@/views/Work.vue';
import About from '@/views/About.vue';

import {Banner, MerchBanner, Footer} from '@/components/';
// import Navigation from '@/components/Navigation.vue';

export default {
  name: 'MainView',
  components: {
    Intro,
    Footer,
    // Navigation,
    Work,
    About,
    Banner,
    MerchBanner
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/app.sass'
// $background: $may-1

$primary-background: $prime-background
$backlayer: rgba(8,8,8,1)

.backdrop
  background: $backlayer
.foreground
  padding: 0 2em
  +sm
    padding: 0 1em
  margin: 0 auto
  width: 100%

</style>
