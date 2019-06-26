<template>
  <nav id="nav">
    <button v-on:click="show = !show" class="collapse-button">
      <i class="fas fa-bars"></i>
    </button>
    <transition name="slide">
      <ul v-if="show">
        <!-- <li class="icon">
          <a href="/">
            <img class="logo" src="https://cdn.occloxium.com/i/zoomoid/logo.png">
          </a>
        </li> -->
        <li for="intro" v-on:click="show = false">
          <router-link to="/">Intro</router-link>
        </li>
        <li for="work" v-on:click="show = false">
          <router-link to="/work">Work</router-link>
        </li>
        <li for="contact" v-on:click="show = false">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style lang="sass">
@import '@/assets/app.sass'

nav
  +typography($white, $may-5)
  width: 100%
  top: 0
  left: 0
  z-index: 20
  display: flex
  align-items: flex-start
  ul
    padding-left: 24px
    flex-grow: 1
    // padding: 1em 5em 0 2em 
    // display: flex
    list-style: none outside none
    transform: scaleY(1)
    position: relative
    transform-origin: center top
    li  
      vertical-align: top
      +lg
        display: flex
        padding: 0 1em 0
      padding: 0 0em 16px
      a
        font-size: 18px
        font-weight: 600
        text-decoration: none
        border-bottom: solid 2px
        border-color: transparent
        &:active, &:hover
          text-decoration: none
          border-color: $may-5
          color: $may-6
      &.icon
        flex-grow: 0
        +sm
          display: none
        img
          // height: 3em
          // width: 3em
      &.spacer
        flex-grow: 1
  .collapse-button
    padding: 16px 0 16px 1em
    +font-size(1.5em)
    display: block
    background: none
    outline: none
    border: none
    color: #ffffff
    cursor: pointer

.slide-enter-active, .slide-leave-active 
  transition: all 0.1s ease-in-out

.slide-enter, .slide-leave-to
  transform: scaleY(-1)
  margin-top: -100px
</style>


<script>
export default {
  name: 'Navigation',
  data: function(){
    return {
      show: false
    }
  }
};
</script>