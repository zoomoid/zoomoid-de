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
    <!-- <References></References> -->
    <!-- <BannerCard url="./sehnsucht-banner.jpg">
      <h2>Zoomoid</h2>
      <h1>Sehnsucht</h1>
      <span>Coming in Q4 2020</span>
    </BannerCard> -->
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      showNav: false,
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
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style lang="sass" scoped>
</style>
