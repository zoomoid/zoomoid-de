<template>
  <div id="frontmatter" class="block">
    <div class="background"></div>
    <div class="foreground">
      <h1>301&shy; Moved&shy; Permanently<small>out now!</small></h1>
      <img src="https://cdn.occloxium.com/i/zoomoid/covers/301/standard.jpg" />
      <p>
        The latest and last album of the year is available now on all platforms!
        <small>
          Listen to it <a href="/301">here</a> or anywhere on any streaming platform! Here are a few:
        </small>
      </p>
      <StreamingPlatforms></StreamingPlatforms>
    </div>
  </div>
</template>

<script>
import StreamingPlatforms from '@/components/StreamingPlatforms.vue'
export default {
  components: {
    StreamingPlatforms
  }
}
</script>

<style lang="sass" scoped>
// @import '@/assets/app.sass'
@import url('https://rsms.me/inter/inter.css');

@keyframes slide-up
  0%
    transform: translateY(50px)
    opacity: 0
  100%
    tranform: translateY(0px)
    opacity: 1

@keyframes slide-left
  0%
    transform: translateX(150px)
    opacity: 0
  100%
    tranform: translateY(0px)
    opacity: 1

div#frontmatter
  *
    font-family: inherit
  font-family: 'Inter', sans-serif
  position: relative
  width: 100%
  .background
    position: absolute
    height: 100%
    background-attachment: fixed
    width: 100%
    background: url(../assets/301_background.jpg) rgba(8,8,8,1)
    background-size: cover
    background-position: center center
    filter: grayscale(1) contrast(1.2) brightness(0.15)
  .foreground
    padding: 2em
    max-width: 768px
h1
  // text-align: right
  // position: absolute
  text-shadow: 0 0 5px rgba(0,0,0,0.54)
  z-index: 3
  transform: 50px
  opacity: 0
  animation: slide-up 1s ease 0.5s 1 normal forwards running
  font-size: 6vw
  font-weight: 800
  text-transform: uppercase
  line-height: 0.8
p
  opacity: 0
  animation: slide-up 0.5s ease 1s 1 normal forwards running
  font-size: 4vw
  line-height: 1.2
  text-transform: uppercase
  // position: absolute
  font-weight: 800
small
  font-size: 50%
  display: block
  font-weight: 200
  margin-top: 1em
  margin-bottom: 1em
img
  opacity: 0
  // position: relative
  // z-index: 1
  animation: slide-left 0.5s ease 0.2s 1 normal forwards running
  height: 500px
  display: block
  width: 500px
  margin: 0 auto
  // left: 20%

</style>
