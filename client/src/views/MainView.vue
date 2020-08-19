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

export default {
  name: 'MainView',
  components: {
    Intro,
    Footer,
    Work,
    About,
  },
  mounted(){
    if(!this.$cookies.isKey('hideVoyagerHeroPage')){
      this.$router.push({path: '/voyager'});
    }
  }
}
</script>

<style lang="sass" scoped>
.foreground
  background-color: #eeeeee
  margin: 0 auto
  width: 100%

</style>
