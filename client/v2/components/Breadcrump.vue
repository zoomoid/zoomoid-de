<template>
  <div class="breadcrump">
    <router-link to="/"><i class="fas fa-home"></i></router-link>
    <span class="spacer">→</span>
    <router-link v-bind:to="$route.path">{{$route.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Breadcrump'
}
</script>

<style lang="sass" scoped>
@use "../assets/variables"

.breadcrump
  padding: 1em 2em 1em
  box-shadow: 0 2px 2px rgba(0,0,0,0.1)
  font-size: 12pt
  .spacer
    font-family: variables.$font-family
    font-weight: bold
    padding: 0 8px
  *
    color: inherit
    font-size: inherit
  a
    font-weight: 800
    text-decoration: none
.wrapper
  margin: 0 auto
</style>
