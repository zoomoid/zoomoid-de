<template>
  <ol class="player">
    <li v-for="(track) in audio" v-bind:key="track.title">
      <span>{{artist}} - {{track.title}}</span>
      <audio controls>
        <source v-bind:src="track.src" type="audio/mpeg"/>
      </audio>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'AudioPlayer',
  props: {
    audio: Array,
    artist: String,
  },
  data: function(){
    return {
      currentlyPlaying: null
    }
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/app.sass'
ol
  padding: 0
  margin: 2em 0 0
li
  padding: 0 0 1em
audio
  display: block
  width: 100%
  box-sizing: border-box
  padding: 16px 0 0
audio::-webkit-media-controls-timeline
  color: white
</style>
