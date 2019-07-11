<template>
  <div class="banner">
    <div class="body">
      <img src="@/assets/zoomoid_new.jpg">
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/app.sass'
.banner
  +rounded
  position: relative
  .body
    &::before
      position: absolute
      top: 66%
      left: 0
      bottom: 0
      right: 0
      background: linear-gradient(rgba(0,0,0,0), rgba(20,20,20,0.9))
      content: ''
      z-index: 20
    img
      opacity: 0
      width: 100%
      max-height: 400px
      +sm
        max-height: 60vh
      +lg
        max-height: 600px
      +xl
        max-height: 600px
    background-image: url(../assets/zoomoid_new.jpg)
    background-attachment: scroll
    background-size: cover
    background-repeat: none none
    background-position: 40% 50%
    +rounded
    width: 100%
    height: auto
</style>

<script>
export default {
  name: 'Banner'
}
</script>
