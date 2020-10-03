<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Work',
  components: {
    Card,
  },
  data() {
    return {
      releases: [
        {
          contentID: 'shades-of-yellow',
          artist: 'Zoomoid',
          title: 'Shades Of Yellow',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/shades-of-yellow/cover.png',
          date: '01.05.2020',
          id: 'S02',
          accent: '#dbb100',
        },
        {
          contentID: 'schwerelos-zoomoid-remix',
          artist: 'Diode Eins',
          title: 'Schwerelos (Zoomoid Remix)',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/schwerelos-zoomoid-remix/cover.png',
          date: '10.01.2020',
          id: 'S01',
          accent: '#0c0000',
        },
        {
          contentID: '301',
          artist: 'zoomoid',
          title: '301 Moved Permanently',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/301/standard.jpg',
          date: '13.12.2019',
          id: 'A05',
          accent: '#030000',
        },
        {
          contentID: 'public-transportation',
          artist: 'zoomoid',
          title: 'Public Transportation',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/public-transportation/standard.png',
          date: '01.11.2019',
          id: 'A04',
          accent: '#165091',
        },
        {
          contentID: 'eigenräume-extended-edition',
          artist: 'zoomoid',
          title: 'Eigenräume (Extended Edition)',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/extended.png',
          date: '24.08.2019',
          id: 'A03',
          accent: '#ea0000',
        },
        {
          contentID: 'eigenräume-standard-edition',
          artist: 'zoomoid',
          title: 'Eigenräume',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/standard.png',
          date: '15.05.2019',
          id: 'A02',
          accent: '#151515',
        },
        {
          contentID: 'liamm',
          artist: 'zoomoid',
          title: 'Life Is About Making Memories',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/liamm/cover.png',
          date: '22.09.2018',
          id: 'A01',
          accent: '#000000',
        },
      ]
    }
  }
}
</script>

<template>
  <div id="work">
    <h1>Discography</h1>
    <div class="grid">
      <Card v-for="(item, index) in releases"
        :key="item.contentID"
        :accent="item.accent"
        :accented="index % 2 === 0"
        :entry="item"/>
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
  margin: 0 auto
  .logo
    max-width: variables.$max-width
    width: 75%
    display: block
    margin: 2em auto
    +mixins.sm
      width: 90%
  h1
    +mixins.fade
    text-align: center
    font-size: 2em
  .center-wrapper
    margin: 0 auto 2em
  .grid
    margin: 0 auto

</style>
