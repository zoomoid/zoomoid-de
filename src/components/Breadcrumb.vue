<template>
  <div>
    <router-link to="/">
      <i class="fa fa-arrow-left"></i>
      <span class="font-bold ml-2">Back</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
a
  &:hover, &:active
    i
      @apply transform
      @apply -translate-x-1
  i
    transition: transform 0.4s ease
</style>
