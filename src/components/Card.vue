<template>
  <router-link :to="link">
    <div class="wrapper" :class="[accented ? 'accent' : '']" :style="{'--accent': accent}">
      <div class="backdrop"></div>
      <div class="card">
        <img class="cover" v-bind:src="entry.coverUrl" alt="cover art for release">
        <div class="labels">
          <h2 class="artist" v-html="entry.artist"></h2>
          <h1 class="title" v-html="entry.title"></h1>
          <span class="date">{{entry.date}}</span>
          <span class="no">Release {{entry.id}}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style lang="sass" scoped>
@use '../assets/mixins.sass'
@use '../assets/typography.sass'
@use '../../node_modules/rfs/sass' as rfs

a
  text-decoration: none

.wrapper
  position: relative
  min-height: 100vh
  margin: 4em 0
  &.accent
    color: #ffffff
    .backdrop
      background-color: var(--accent)
      box-shadow: 0 0 14px inset rgba(0,0,0,0.2)
  &:not(.accent)
    color: #000000
    .backdrop
      background-color: #ffffff

.backdrop
  position: absolute
  z-index: 0
  top: 0
  left: 0
  right: 0
  bottom: 0
  transform: skewY(-4deg)
  transform-origin: 100% 0
.card
  position: relative
  z-index: 1
  padding: 33vh 1em
  margin: 0 auto 2em
  width: 100%
  transition: box-shadow 0.3s ease, background 0.1s ease, color 0.1s ease
  .cover
    max-width: 360px
    max-height: 360px
    width: 100%
    height: 100%
    margin-right: 1em
    border-radius: 8px
    margin: 0 auto
    display: block
  +mixins.sm
    display: block
    margin: 0 auto 1em
    &:hover, &:active
      box-shadow: none
    .cover
      margin: 0 auto
      max-width: none
      max-height: none
      height: auto
  .labels
    padding: 0.5em 0 0
    padding-bottom: 8px
    span
      display: block
      text-align: center
      +rfs.font-size(0.8em)
    h1, h2
      color: inherit
      text-align: center
      line-height: 1
      +typography.title
      &.title
        +rfs.font-size(2em)
        font-weight: 600
        margin: 0
      &.artist
        margin-bottom: 6px
        +rfs.font-size(1em)
        font-weight: 400


</style>

<script>
export default {
  name: "Card",
  props: {
    entry: Object,
    accent: String,
    accented: Boolean,
  },
  computed: {
    link: function(){
      return "work/" + this.entry.contentID;
    }
  }
};
</script>
