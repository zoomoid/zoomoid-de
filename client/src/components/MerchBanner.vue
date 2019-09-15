<template>
  <router-link to="/merchandise">
    <div>
      <span>Merchandise</span>
    </div>
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
div
  margin-top: 4em
  margin-bottom: 4em
  height: 50vh
  width: 100%
  background-image: url(https://cdn.occloxium.com/i/zoomoid/press/knorck_merch_smart_cropped.jpg)
  background-size: cover
  background-position: center bottom
  background-repeat: no-repeat
  display: flex
  align-items: center
  span
    display: block
    margin: 0 auto
    text-align: center
    color: #ffffff
    font-weight: bold
    font-size: 2em
</style>
