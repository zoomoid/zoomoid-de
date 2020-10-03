<template>
  <div>
    <div v-for="player in this.queue" v-bind:key="player.id">
      <AudioPlayer
        :id="player.id"
        :name="player.name"
        :file="player.url"
        :playStateOverrideBy="currentlyPlayingPlayer"
        v-on:playing="setPlayStateOverride"
        :tags="player.tags || []"
      ></AudioPlayer>
    </div>
  </div>
</template>

<style scoped>
div {
  margin: 1em 0;
}
</style>

<script>
import AudioPlayer from "@/components/AudioPlayer";

export default {
  components: {
    AudioPlayer,
  },
  props: {
    queue: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      currentlyPlayingPlayer: -1,
    };
  },
  methods: {
    setPlayStateOverride(player) {
      this.currentlyPlayingPlayer = player;
    },
    resetPlayStateOverride() {
      this.currentlyPlayingPlayer = -1;
    },
  },
};
</script>
