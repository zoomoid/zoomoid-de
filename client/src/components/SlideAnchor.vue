<script>
export default {
  name: 'SlideAnchor',
  props: {
    anchor: String,
    name: String,
    icon: String
  },
  data: function(){
    return {toggled: false};
  },
}
</script>

<template>
    <a @mouseenter="toggled = true" @mouseleave="toggled = false" :href="anchor">
      <transition name="slide">
        <div v-if="toggled"></div>
      </transition>
      <i v-if="icon" :class="icon"></i>
      <b>{{this.name}}</b>
    </a>
</template>



<style lang="sass" scoped>
@import '@/assets/app.sass'
a
  padding: 4px 8px
  overflow: hidden hidden
  position: relative
  transition-delay: 0.4s
  transition: color 0.1s linear
  color: $text-color
  display: inline-block
  cursor: pointer
  font-size: 1em
  &.small
    font-size: 50%
  i
    margin-right: 1em
  div
    overflow: hidden hidden
    width: 100%
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $text-color
    z-index: -1
  &:hover, &:active
    color: invert($text-color)
    // transition-delay: 0.4s
    transition: color 0.1s linear
.slide-enter
  transform: translateX(-100%)
.slide-leave
  transform: translateX(0%)
.slide-enter-active
  animation: slide-in .15s cubic-bezier(1, 0, 0, 1)
.slide-leave-active
  animation: slide-out .35s cubic-bezier(1, 0, 0, 1)
.slide-enter-to
  transform: translateX(0%)
.slide-leave-to
  transform: translateX(-100%)
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

</style>
