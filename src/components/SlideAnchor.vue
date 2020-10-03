<script>
export default {
  name: 'SlideAnchor',
  props: {
    anchor: String,
    name: String,
    icon: {
      type: String,
      default: '',
    },
    small: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: true,
    }
  },
  data: function(){
    return {toggled: false};
  },
  methods: {
    followLink(){
      setTimeout(() => {
        this.toggled = false;
      }, 150)
      setTimeout(() => {
        location.href = this.anchor;
      }, 1000);
    }
  }
}
</script>

<template>
  <div>
    <a
      class="slide-anchor"
      @mouseenter="toggled = true"
      @mouseleave="toggled = false"
      @click.prevent="followLink()"
      :href="anchor"
    >
      <transition name="slide">
        <div class="block" v-if="toggled"></div>
      </transition>
      <i class="icon" v-if="icon" :class="icon"></i>
      <b :class="[this.small ? 'text small' : 'text']">{{this.name}}</b>
    </a>

  </div>
</template>

<style lang="sass" scoped>
@use '../assets/variables'

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

.slide-anchor
    user-select: none
    padding: 4px 8px
    overflow: hidden hidden
    position: relative
    transition-delay: 0.4s
    transition: color 0.1s linear
    color: var(--text, #1a1a1a)
    display: block
    cursor: pointer
    text-decoration: none
    &:hover, &:active
      color: var(--background, map-get(variables.$light-theme, "background-color"))
      transition: color 0.1s linear
    b.text
      font-size: 1em
      font-weight: 800
      &.small
        font-size: 0.66em
        font-weight: 600
    b.text,
    i.icon
      position: relative
      z-index: 1
    i.icon
      margin-right: 1em
    div.block
      overflow: hidden hidden
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: var(--accent, map-get(variables.$light-theme, "text-color"))
      z-index: 0
      &.slide-enter
        transform: translateX(-100%)
      &.slide-leave
        transform: translateX(0%)
      &.slide-enter-active
        animation: slide-in .15s cubic-bezier(1, 0, 0, 1)
      &.slide-leave-active
        animation: slide-out .25s cubic-bezier(1, 0, 0, 1)
      &.slide-enter-to
        transform: translateX(0%)
      &.slide-leave-to
        transform: translateX(-100%)


</style>
