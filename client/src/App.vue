<template>
  <main id="app">
    <Header/>
    
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <Footer/>
  </main>
</template>

<style lang="sass">
@import './assets/app.sass'

html
  position: relative
  height: 100%
  width: 100%
  body
    width: 100%
    height: 100%
    flex-direction: column
    main
      flex-grow: 1
</style>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>
