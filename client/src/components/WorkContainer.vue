<template>
  <div>
    <div class="wrapper">
      <div class="breadcrump">
        <router-link to="/"><i class="icon-home"></i></router-link>
        <span class="spacer">→</span>
        <router-link to="$route.name">{{$route.name}}</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkContainer'
}
</script>

<style lang="sass" scoped>
.spacer
  font-family: 'Inter Var', sans-serif;
  font-weight: bold
  padding: 0 8px

.breadcrump
  padding-top: 1em
  a
    font-weight: 600
    text-decoration: underline
.wrapper
  padding: 0 2em 1em
  max-width: 1024px
  margin: 0 auto

</style>