<template>
  <div :style="accentTextColor" :class="[dark ? 'dark' : 'light']">
    <router-link to="/"><i class="fas fa-home"></i></router-link>
    <span class="spacer">→</span>
    <router-link v-bind:to="$route.path">{{$route.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    accent: {
      type: String,
      default: "#f58b44",
    }
  },
  computed: {
    accentTextColor(){
      return `color: ${this.accent}`;
    },
  }
}
</script>

<style lang="sass" scoped>
@use "../assets/variables"

div
  padding: 1em 2em 1em
  box-shadow: 0 2px 2px rgba(0,0,0,0.1)
  font-size: 1em
  .spacer
    font-family: variables.$sans
    font-weight: bold
    padding: 0 8px
  *
    color: inherit
    font-size: inherit
  a
    font-weight: 800
    text-decoration: none

</style>
