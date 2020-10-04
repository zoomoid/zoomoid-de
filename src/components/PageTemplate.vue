<template>
  <div class="wrapper" :class="this.theme" :style="colorScheme">
    <Breadcrumb :dark="this.dark" :accent="this.accent"></Breadcrumb>
    <div class="single">
      <article>
        <div class="title">
          <h3>{{this.artist}}</h3>
          <h1>{{this.title}}</h1>
        </div>
        <section class="cover">
          <img :src="this.cover" />
        </section>
        <slot></slot>
      </article>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "./Breadcrumb.vue";

export default {
  components: {
    Breadcrumb,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: true,
    },
    accent: {
      type: String,
      default: "#f58b44",
    }
  },
  computed: {
    background(){
      return `background-color: ${this.accent}`;
    },
    theme(){
      return this.dark ? "dark" : "light";
    },
    colorScheme(){
      return `--text: ${this.theme == "dark" ? "#ffffff" : "#0a0a0a"}; --background: ${this.theme == "dark" ? "#0a0a0a" : "#ffffff"}; --accent: ${this.accent}`;
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
