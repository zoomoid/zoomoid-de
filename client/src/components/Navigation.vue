<template>
  <nav id="nav">
    <div class="mobile">
      <button v-on:click="show = !show" class="collapse-button">
        <i class="material-icons">menu</i>
      </button>
      <transition name="slide">
        <ul v-if="show">
          <!-- <li class="icon">
          <a href="/">
            <img class="logo" src="https://cdn.occloxium.com/i/zoomoid/logo.png">
          </a>
          </li>-->
          <li for="intro" v-on:click="show = false">
            <router-link to="/">Intro</router-link>
          </li>
          <li for="work" v-on:click="show = false">
            <router-link to="/work">Work</router-link>
          </li>
          <li for="contact" v-on:click="show = false">
            <router-link to="/about">About &amp; Contact</router-link>
          </li>
        </ul>
      </transition>
    </div>
    <div class="desktop">
      <ul>
        <li class="icon">
          <router-link to="/">
            <img class="logo" src="@/assets/icon_512x512.png">
          </router-link>
        </li>
        <li for="intro" v-on:click="show = false">
          <router-link to="/">Intro</router-link>
        </li>
        <li for="work" v-on:click="show = false">
          <router-link to="/work">Work</router-link>
        </li>
        <li for="contact" v-on:click="show = false">
          <router-link to="/about">About &amp; Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="sass">
@import '@/assets/app.sass'

nav
  .desktop
    padding-top: 16px
    padding-left: 16px
    .logo
      // padding-top: 16px
      max-width: 32px
    ul
      align-items: center
      li
        margin: 0 4em 0 0
        padding: 0
  .mobile
    align-items: flex-start
  +sm
    .desktop
      display: none
    .mobile
      display: flex
  +md
    .desktop
      display: none
    .mobile
      display: flex
  +lg
    .desktop
      display: block
    .mobile
      display: none
  +xl
    .desktop
      display: block
    .mobile
      display: none
  max-width: $max-width
  width: 100%
  margin: 0 auto
  h1
    margin: 0 16px 0 16px
    +font-size(20px)
  +typography($black, $black)
  width: 100%
  top: 0
  left: 0
  z-index: 20
  display: flex
  align-items: flex-start
  ul
    +lg
      display: flex
    +xl
      display: flex
    padding-left: 24px
    flex-grow: 1
    margin-top: 12px
    // padding: 1em 5em 0 2em
    // display: flex
    list-style: none outside none
    transform: scaleY(1)
    position: relative
    transform-origin: center top
    li
      +lg
        display: flex
        padding: 0 1em 0
      padding: 0 0em 16px
      a
        line-height: 1
        font-size: 16pt
        letter-spacing: 0
        font-weight: 700
        text-transform: uppercase
        text-decoration: none
        border-bottom: solid 2px
        border-color: transparent
        &:active, &:hover
          text-decoration: none
          border-color: $may-5
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
    color: black
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
  data: function() {
    return {
      show: false
    };
  }
};
</script>
