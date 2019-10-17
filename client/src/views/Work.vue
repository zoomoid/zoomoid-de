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
      entries: [
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
        {
          contentID: 'datkom',
          artist: 'zoomoid, Simon Kaiser, Dirk Thißen',
          title: 'Datenkom&shy;mu&shy;ni&shy;ka&shy;tion & Sicherheit',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/datkomm/cover.png',
          date: '14.02.2019',
          id: 'S06'
        },
        {
          contentID: 'interstellar',
          artist: 'zoomoid',
          title: 'Interstellar',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/interstellar/cover.png',
          date: '22.07.2018',
          id: 'S05'
        },
        {
          contentID: 'atomic-spark',
          artist: 'zoomoid',
          title: 'Atomic Spark (Single)',
          coverUrl: 'https://cdn.occloxium.com/i/zoomoid/covers/atomic-spark/cover.png',
          date: '22.09.2017',
          id: 'S04'
        }
      ]
    }
  }
}
</script>

<template>
  <div id="work">
    <div class="center-wrapper">
      <!-- <img class="logo" src="https://cdn.occloxium.com/i/zoomoid/logos/logo.png"> -->
      <h1>Work</h1>
      <p>
        Zoomoids past work and discography
      </p>
    </div>
    <div class="grid">
      <Card v-for="item in entries" v-bind:key="item.contentID" v-bind:entry="item"/>
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
  .logo
    width: 240px
    text-align: center
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
