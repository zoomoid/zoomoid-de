<template>
  <a v-bind:href="entry.contentID">
    <div class="card">
      <div class="cover">
        <img v-bind:src="entry.coverUrl" alt="cover art for release">
      </div>
      <div class="labels">
        <span class="no">Release {{entry.id}}</span>
        <span class="artist">{{entry.artist}}</span>
        <span class="title" v-html="entry.title"></span>
        <span class="date">{{entry.date}}</span>
      </div>
    </div>
  </a>
</template>

<style lang="sass" scoped>
@import '@/assets/app.sass'
a
  text-decoration: none
.card
  +typography($white, $may-1)
  background: $background
  padding: 0 0 1em
  border-radius: 24px
  max-width: 480px
  margin: 0 auto
  .cover
    img
      border-radius: 24px
      width: 100%
  .labels
    padding: 0.5em 1em 0
    margin: 0 auto
    padding-bottom: 8px
  span
    display: block
    text-align: left
    &.no
      +font-size(0.8em)
      font-weight: 400
      display: block
      padding-bottom: 1em
    &.title
      +font-size(2.25em)
      font-weight: 800
      +title
      line-height: 1
    &.artist
      +font-size(1.5em)
      font-weight: 800
      color: $may-4
      word-break: break-all
      +title
    &.date
      +font-size(0.8em)
      font-weight: 400
      padding-top: 1em
        
</style>

<script>
export default {
  name: "Card",
  props: {
    entry: Object
  }
};
</script>
