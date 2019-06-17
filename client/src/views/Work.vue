<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'work',
  components: {
    Card,
  },
  data: function() {
    return {
      entries: [
        {
          contentID: 'eigenräume',
          artist: 'zoomoid',
          title: 'Eigenräume',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/standard.png'
        },
        {
          contentID: 'liamm',
          artist: 'zoomoid',
          title: 'Life Is About Making Memories',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/liamm/cover.png'
        }
      ]
    }
  }
}
</script>

<template>
  <div id="work">
    <div class="work" v-for="item in entries" v-bind:key="item.contentID">
      <Card 
        v-bind:entry="item"
      />
    </div>
  </div>
</template>
<style lang="sass" scoped>
@import '@/assets/app.sass'

#work
  flex-grow: 1
  // height: 100vh
  width: 100%
  padding-top: 128px
  background-size: cover
  background-position: center center
  background-attachment: fixed 
  background-image: url(../assets/background_intro.svg)

  .work
    // padding: 2em
    // margin-top: 128px
</style>
