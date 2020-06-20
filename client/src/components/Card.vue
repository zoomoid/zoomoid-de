<template>
  <router-link v-bind:to="link">
    <div class="card">
      <img class="cover" v-bind:src="entry.coverUrl" alt="cover art for release">
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
@use '../assets/mixins.sass'
@use '../assets/typography.sass'
@use '../../node_modules/rfs/sass' as rfs

a
  text-decoration: none
  display: flex
.card
  padding: 1em
  border-radius: 24px
  margin: 0 auto 2em
  display: flex
  width: 100%
  flex-direction: row
  border-radius: 24px
  background: #ffffff
  transition: box-shadow 0.3s ease, background 0.1s ease, color 0.1s ease
  &:hover, &:active
    box-shadow: 0 8px 16px rgba(0,0,0,0.1)
  .cover
    max-width: 360px
    max-height: 360px
    width: 100%
    height: 100%
    margin-right: 1em
    border-radius: 8px
    flex-grow: 1
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
    text-align: left
    line-height: 1.2
    &.no
      +rfs.font-size(0.8em)
      font-weight: 600
      // padding-bottom: 1em
    &.title
      +rfs.font-size(2em)
      // text-transform: uppercase
      font-weight: 800
      +typography.title
      line-height: 1
    &.artist
      +rfs.font-size(1em)
      font-weight: 500
      +typography.title
    &.date
      +rfs.font-size(0.8em)
      font-weight: 800
      padding-top: 1em

</style>

<script>
export default {
  name: 'Card',
  props: {
    entry: Object
  },
  computed: {
    link: function(){
      return 'work/' + this.entry.contentID;
    }
  }
};
</script>
