<template>
  <router-link :to="link">
    <div class="wrapper" :class="[accented ? 'accent' : '']" :style="{'--accent': accent}">
      <div class="backdrop"></div>
      <div class="card">
        <img class="cover" v-bind:src="entry.coverUrl" alt="cover art for release">
        <div class="labels">
          <h2 class="artist" v-html="entry.artist"></h2>
          <h1 class="title" v-html="entry.title"></h1>
          <span class="date">{{entry.date}}</span>
          <span class="no">Release {{entry.id}}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style lang="sass" scoped>

</style>

<script>
export default {
  name: "Card",
  props: {
    entry: Object,
    accent: String,
    accented: Boolean,
  },
  computed: {
    link: function(){
      return "work/" + this.entry.contentID;
    }
  }
};
</script>
