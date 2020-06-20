<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Work',
  components: {
    Card,
  },
  data: function() {
    return {
      new_arrivals: [
        {
          contentID: 'shades-of-yellow',
          artist: 'Zoomoid',
          title: 'Shades Of Yellow',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/shades-of-yellow/cover.png',
          date: '01.05.2020',
          id: 'S02'
        },
        {
          contentID: 'schwerelos-zoomoid-remix',
          artist: 'Diode Eins',
          title: 'Schwerelos (Zoomoid Remix)',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/schwerelos-zoomoid-remix/cover.png',
          date: '10.01.2020',
          id: 'S01'
        },
      ],
      releases2019: [
        {
          contentID: '301',
          artist: 'zoomoid',
          title: '301 Moved Permanently',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/301/standard.jpg',
          date: '13.12.2019',
          id: 'A05'
        },
        {
          contentID: 'public-transportation',
          artist: 'zoomoid',
          title: 'Public Transportation',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/public-transportation/standard.png',
          date: '01.11.2019',
          id: 'A04'
        },
        {
          contentID: 'eigenräume-extended-edition',
          artist: 'zoomoid',
          title: 'Eigenräume (Extended Edition)',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/extended.png',
          date: '24.08.2019',
          id: 'A03'
        },
        {
          contentID: 'eigenräume-standard-edition',
          artist: 'zoomoid',
          title: 'Eigenräume',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/standard.png',
          date: '15.05.2019',
          id: 'A02'
        },
        {
          contentID: 'liamm',
          artist: 'zoomoid',
          title: 'Life Is About Making Memories',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/liamm/cover.png',
          date: '22.09.2018',
          id: 'A01'
        },
      ]
    }
  }
}
</script>

<template>
  <div id="work">
    <div class="grid" id="#new-arrivals">
      <img class="logo" src="@/assets/new_arrivals.svg">
      <Card v-for="item in new_arrivals" v-bind:key="item.contentID" v-bind:entry="item"/>
    </div>
    <div class="grid" id="#2019">
      <img class="logo" src="@/assets/2019.svg">
      <Card v-for="item in releases2019" v-bind:key="item.contentID" v-bind:entry="item"/>
    </div>
  </div>
</template>
<style lang="sass" scoped>
@use '../assets/mixins.sass'
@use '../assets/variables.sass'

$radius: 32px
#work
  flex-grow: 1
  +mixins.sm
    max-width: none
    padding: 0 12px
  max-width: 66%
  margin: 0 auto
  // padding-left: 2em
  background: #eee
  .logo
    max-width: variables.$max-width
    width: 75%
    display: block
    margin: 2em auto
    +mixins.sm
      width: 90%
  h1
    +mixins.fade
    margin-top: 0
  .center-wrapper
    margin: 0 auto 2em
  .grid
    margin: 0 auto

</style>
