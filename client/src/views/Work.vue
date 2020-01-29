<script>
// @ is an alias to /src
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
          contentID: '301',
          artist: 'zoomoid',
          title: '301 Moved Permanently',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/301/standard.jpg',
          date: '13.12.2019',
          id: 'A05'
        },

      ],
      releases2019: [
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
        // {
        //   contentID: 'datkom',
        //   artist: 'zoomoid, Simon Kaiser, Dirk Thißen',
        //   title: 'Datenkom&shy;mu&shy;ni&shy;ka&shy;tion & Sicherheit',
        //   coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/datkomm/cover.png',
        //   date: '14.02.2019',
        //   id: 'S06'
        // },
        // {
        //   contentID: 'interstellar',
        //   artist: 'zoomoid',
        //   title: 'Interstellar',
        //   coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/interstellar/cover.png',
        //   date: '22.07.2018',
        //   id: 'S05'
        // },
        // {
        //   contentID: 'atomic-spark',
        //   artist: 'zoomoid',
        //   title: 'Atomic Spark (Single)',
        //   coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/atomic-spark/cover.png',
        //   date: '22.09.2017',
        //   id: 'S04'
        // }
      ]
    }
  }
}
</script>

<template>
  <div id="work">
    <div class="center-wrapper">
    </div>
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
@import '@/assets/app.sass'
$radius: 32px
#work
  flex-grow: 1
  max-width: $max-width
  margin: 0 auto
  padding-left: 2em
  .logo
    width: 100%
    text-align: center
    padding-top: 2em
    padding-bottom: 2em
  h1
    +fade
    margin-top: 0
    // +font-size(4em)
  .center-wrapper
    max-width: 1200px
    margin: 0 auto 2em

  .grid
    max-width: 1200px
    margin: 0 auto
    display: grid
    +sm
      grid-template-columns: 1fr
    +md
      grid-template-columns: 1fr
    +lg
      grid-template-columns: 1fr
    grid-template-columns: 1fr
    grid-column-gap: 2em
    grid-row-gap: 2em

</style>
