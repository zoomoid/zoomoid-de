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
  &::before
    position: absolute
    top: 66%
    left: 0
    bottom: 0
    right: 0
    background: linear-gradient(rgba(0,0,0,0), rgba(20,0,40,0.9))
    content: ''
    z-index: 20
  .body
    img
      opacity: 0
      width: 100%
      max-height: 400px
      +sm
        width: 100vh
        max-height: auto
    background-image: url(../assets/zoomoid_new.jpg)
    background-attachment: scroll
    background-size: cover
    background-repeat: none none
    background-position: 40% top
    +rounded
    width: 100%
    height: auto
</style>

<script>
export default {
  name: 'Banner'
}
</script>
