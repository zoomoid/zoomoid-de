<template>
  <router-link v-bind:to="entry.contentID">
    <div class="card">
      <div class="cover">
        <img v-bind:src="entry.coverUrl" alt="cover art for release">
      </div>
      <div class="labels">
        <span class="artist" v-html="entry.artist"></span>
        <span class="title" v-html="entry.title"></span>
        <span class="date">{{entry.date}}</span>
        <span class="no">Release {{entry.id}}</span>
      </div>
    </div>
  </router-link>
</template>

<style lang="sass" scoped>
@import '@/assets/app.sass'
a
  text-decoration: none
  display: flex
.card
  +typography
  // background: rgba(0,0,0,1)
  padding: 0 0 1em
  border-radius: 24px
  margin: 0 auto
  display: flex
  width: 100%
  flex-direction: row
  .cover
    max-width: 180px
    flex-grow: 1
    width: 100%
    img
      border-radius: 8px
      width: 100%
      max-width: 180px
  +sm
    display: block
    .cover
      margin: 0 auto
      max-width: none
      img
        max-width: none
  .labels
    padding: 0.5em 1em 0
    padding-bottom: 8px
  span
    display: block
    text-align: left
    line-height: 1.2
    &.no
      +font-size(0.8em)
      font-weight: 200
      // padding-bottom: 1em
    &.title
      +font-size(2em)
      font-weight: 800
      +title
      line-height: 1
    &.artist
      +font-size(1em)
      font-weight: 800
      +title
    &.date
      +font-size(0.8em)
      font-weight: 200
      padding-top: 1em

</style>

<script>
export default {
  name: 'Card',
  props: {
    entry: Object
  }
};
</script>
