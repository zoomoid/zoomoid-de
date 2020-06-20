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
import Breadcrumb from './Breadcrumb.vue';

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
      default: '#f58b44',
    }
  },
  computed: {
    background(){
      return `background-color: ${this.accent}`;
    },
    theme(){
      return this.dark ? 'dark' : 'light';
    },
    colorScheme(){
      return `--text: ${this.theme == 'dark' ? '#ffffff' : '#0a0a0'}; --background: ${this.theme == 'dark' ? '#0a0a0a' : '#ffffff'}; --accent: ${this.accent}`;
    }
  }
}
</script>

<style lang="sass" scoped>
@use "../assets/colors"
@use "../assets/variables"
@use "../assets/mixins"
@use "../../node_modules/rfs/sass" as rfs

@keyframes slide-in
  0%
    transform: translateX(-100%)
  100%
    transform: translateX(0%)

@keyframes slide-out
  0%
    transform: translateX(0%)
  100%
    transform: translateX(100%)

.wrapper
  background-color: var(--background)
  +rfs.font-size(20px)
  article
    color: var(--text)
    padding: 0 2em 1em
    padding-bottom: 4em

    +mixins.sm
      padding: 0 1em 1em
    & > *
      max-width: 1024px
      margin-left: auto
      margin-right: auto
    *
      color: inherit
    .content
      p
        line-height: 1.5
        font-weight: 500
      a
        font-weight: 300
        background: var(--accent)
        color: var(--text)
        border-radius: 6px
        padding: 4px 8px
        text-decoration: none
        transition: color 0.1s ease, background 0.1s ease
        &:hover, &:active
          background: var(--background)
          color: var(--text)
    .title
      h1
        margin: 0 0 1em
        +rfs.font-size(2.5em)
        color: var(--accent)
      h3
        +rfs.font-size(1.5em)
        margin: 0 0 0
        padding-top: 1em
        font-weight: 300
        color: var(--accent)
  .cover
    img
      width: 80%
      max-width: 550px
      margin: 0 auto
      display: block
  .tracklist
    margin: 0
    margin-left: 1em
    padding: 0
    li
      list-style: decimal
      padding: 0 0 24px
    audio
      width: 100%
      display: block
  .muted
    opacity: 0.5
  .centered
    text-align: center
  h2
    +rfs.font-size(2em)
    color: var(--accent)
  li
    list-style: none outside none
    margin: 8px 0
    a:not(.embedded)
      // +link
      text-decoration: none
      &.small
        +rfs.font-size(70%)
  .download
    audio
      display: block
      width: 100%
</style>
