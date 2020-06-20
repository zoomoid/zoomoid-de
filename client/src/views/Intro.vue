<template>
  <div class="wrapper">
    <div id="intro">
      <transition name="slide">
        <nav v-if="showNav" class="nav">
          <img class="nav__logo" src="@/assets/logo.svg" alt="zoomoid logo">
          <div class="nav__spacer"></div>
          <div class="nav__social">
            <a href="https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8?si=a8mm8a2RTaO1Zo6SyfwZVQ">
              <i class="fab fa-spotify"></i>
            </a>
            <a href="https://instagram.com/zoomoid">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://soundcloud.com/zoomoid">
              <i class="fab fa-soundcloud"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCg0yVDwpB9QphFbsGnV-8tQ/">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </nav>
      </transition>
      <img class="logo" src="@/assets/logo.svg"
      alt="zoomoid logo">
    </div>
    <References></References>
    <BannerCard url="./sehnsucht-banner.jpg">
      <h2>Zoomoid</h2>
      <h1>Sehnsucht</h1>
      <span>Coming in Q4 2020</span>
    </BannerCard>
  </div>
</template>

<style lang="sass" scoped>
@use '../assets/mixins'

.wrapper
  width: 100%
  min-height: 100vh
  display: flex
  flex-direction: column
  background: #eee
  #intro
    flex-grow: 1
    .logo
      display: block
      margin: 4em auto
      width: 50%
      max-width: 450px
      padding: 30vh 0
    .nav
      position: fixed
      top: 0
      left: 0
      right: 0
      width: 100%
      background: #ffffff
      box-shadow: 0 4px 8px rgba(0,0,0,0.2)
      padding: 1em 3em
      display: flex
      z-index: 1000
      +mixins.sm
        padding: 0.5em
      &__logo
        height: 32px
        +mixins.sm
          flex-grow: 1
        box-sizing: border-box
      &__spacer
        flex-grow: 1
        +mixins.sm
          display: none
      &__social
        +mixins.sm
          display: none
        display: flex
        a
          margin: 0 8px
          i
            padding-bottom: 8px
            &:hover, &:active
              +mixins.fade
    .text
      h1
        +mixins.fade
      z-index: 10

@keyframes slide-in
  from
    transform: translateY(-100%)
  to
    transform: translateY(0%)

@keyframes slide-out
  from
    transform: translateY(0%)
  to
    transform: translateY(-100%)

.slide-enter-active
  animation: slide-in 0.5s ease

.slide-enter-to
  transform: translateY(0%)

.slide-leave-active
  animation: slide-out 0.5s ease

.slide-leave-to
  transform: translateY(-100)
</style>

<script>
import BannerCard from '@/components/BannerCard.vue'
import References from '@/components/References.vue'
export default {
  components: {
    BannerCard,
    References,
  },
  data: function(){
    return {
      showNav: true,
      scrolled: 0
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY;
      if(this.scrolled > 400){
        this.showNav = true;
      } else {
        this.showNav = false;
      }
    },
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
