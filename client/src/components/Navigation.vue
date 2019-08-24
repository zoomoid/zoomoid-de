<template>
  <nav id="nav">
    <router-link to="/">
      <img class="logo" src="@/assets/icon_512x512.png">
    </router-link>
  </nav>
</template>

<style lang="sass">
@import '@/assets/app.sass'

nav
  padding-top: 16px
  padding-bottom: 8px
  padding-left: 32px
  padding-right: 16px
  .logo
    // padding-top: 16px
    max-width: 32px
  width: 100%
  margin: 0 auto
  display: flex
  align-items: flex-end
  // box-shadow: 0 2px 2px rgba(0,0,0,0.15)

</style>


<script>
export default {
  name: 'Navigation',
};
</script>
