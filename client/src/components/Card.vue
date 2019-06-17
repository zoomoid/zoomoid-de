<template>
  <div class="card">
    <a v-bind:href="entry.contentID">
      <div class="banner" v-bind:style="{backgroundImage:
      `url(${entry.coverUrl})`}"></div>
      <div class="labels">
        <span class="title">{{entry.title}}</span>
        <span class="artist">{{entry.artist}}</span>
      </div>
    </a>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/app.sass'
.card
  +typography($white, $may-5)
  a
    text-decoration: none
  .banner
    transition: box-shadow .25s ease
    box-shadow: 0 2px 3px rgba(0,0,0,0.33)
    &:hover, &:active
      box-shadow: 0 2px 4px rgba(0,0,0,0.9)
    // width: 80%
    // margin: 0 auto
    height: 450px
    // border-radius: 32px
    margin: 0
    text-transform: none
    +font-size(1em)
    background-size: cover
    background-attachment: scroll
    background-position: center center
    position: relative
  .labels
    width: 100%
    &--muted-white
      background: rgba(255,255,255,0.9)
      span.artist
        color: black !important
    &--muted-black
      background: rgba(0,0,0,0.9)
      span.artist
        color: white !important
    padding-bottom: 8px
    padding-left: 32px
  span.title
    mix-blend-mode: difference
    +font-size(3em)
    padding-top: 0.33em
    font-weight: bolder
    color: $theme--accent
    display: block
  span.artist
    +font-size(2em)
    font-weight: bold
    display: flex
    align-items: center
        
</style>

<script>
export default {
  name: 'Card',
  props: {
    entry: Object
  }
};
</script>
