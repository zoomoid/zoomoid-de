<template>
  <div>
    <div class="wrapper">
      <div class="breadcrump">
        <router-link to="/">/</router-link>
        <span class="spacer"></span>
        <router-link to="$route.name">{{$route.name}}</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.spacer
  &::before
    content: ' '
    padding: 0 3px

.breadcrump
  padding-top: 1em
  a
    font-weight: 600
    text-decoration: underline
.wrapper
  max-width: 1024px
  margin: 0 auto

</style>