<template>
  <div>
    <div class="foreground">
      <Intro></Intro>
      <Work></Work>
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
import {Footer} from '@/components/';
// import Navigation from '@/components/Navigation.vue';

export default {
  name: 'MainView',
  components: {
    Intro,
    Footer,
    // Navigation,
    Work,
    About,
    // MerchBanner
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/app.sass'

.foreground
  padding: 0 2em
  +sm
    padding: 0 1em
  margin: 0 auto
  width: 100%

</style>
