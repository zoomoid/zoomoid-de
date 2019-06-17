<template>
  <main id="app">
    <nav id="nav" class="is-collapsed">
      <a href="#nav" class="collapse-button">
        <i class="fas fa-bars"></i>
      </a>
      <ul>
        <li class="icon">
          <a href="/">
            <img class="logo" src="https://cdn.occloxium.com/i/zoomoid/logo.png">
          </a>
        </li>
        <li class="spacer"></li>
        <li for="intro">
          <router-link to="/">Intro</router-link>
        </li>
        <li for="work">
          <router-link to="/work">Work</router-link>
        </li>
        <li for="contact">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>

    <Footer/>
  </main>
</template>

<style lang="sass">
@import '@/assets/app.sass'

body
  height: 100vh
  width: 100%
  // position: absolute
  main
    min-height: 100%
    display: flex
    flex-direction: column

nav
  +typography($white, $may-5)
  position: absolute
  width: 100%
  top: 0
  left: 0
  z-index: 20
  ul
    padding: 1em 5em 0 2em 
    +sm
      padding: 0
    margin: 0 auto
    +sm
      display: none
    display: flex
    align-items: center
    list-style: none outside none
    li 
      text-align: center
      padding: 1em 2em
      a
        text-decoration: none
        border-bottom: solid 2px
        border-color: transparent
        &:active, &:hover
          text-decoration: none
          border-color: $may-5
          color: $may-6
      +sm
        padding: 0 1em
      &.icon
        flex-grow: 0
        +sm
          display: none
        img
          height: 3em
          width: 3em
      &.spacer
        flex-grow: 1
  .collapse-button
    padding: 1em 0
    text-align: center
    +sm
      display: block
      margin: 0 auto
    display: none
  &:target
    +sm
      ul
        display: block


</style>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
