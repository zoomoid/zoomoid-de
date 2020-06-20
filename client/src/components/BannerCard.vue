<template>
  <div class="wrapper">
    <div class="banner-image" :style="{backgroundImage: `url(${this.url})`}"></div>
    <div class="labels">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="sass" scoped>
@use '../assets/mixins'
@use '../../node_modules/rfs/sass' as rfs

.wrapper
  width: 100%
  height: 100%
  position: relative
  .banner-image
    +mixins.sm
      position: relative
      width: 100%
      height: 80vh
    position: absolute
    width: 100%
    height: 100%
    background-size: cover
    background-position: center
    background-color: #f58b44
  .labels
    +mixins.sm
      position: relative
      bottom: 0
      width: 100%
      right: 0
      text-align: center
    position: absolute
    bottom: 1em
    right: 1em
    padding: 2em
    border-radius: 12px
    box-shadow: 0 4px 8px rgba(0,0,0,0.25)
    background: rgba(255, 255, 255, 0.8)
    h1
      margin: 0
      text-transform: uppercase
      font-weight: 800
      +rfs.font-size(2em)
      margin-bottom: 0.33em
    h2
      margin: 0
      +rfs.font-size(1.5em)
    span
      font-size: 1em
      font-weight: 500
      letter-spacing: 1px
      text-transform: uppercase
</style>
