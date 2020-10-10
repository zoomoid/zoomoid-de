<template>
  <div class="container max-w-2xl mx-auto mt-24 px-8 sm:px-0">
    <img class="w-full" src="@/assets/undraw_page_not_found_su7k.svg" />
    <h1 class="font-bold">Whoopsie daisy!</h1>
    <p>The page you were looking for could not be found by our busy robots. Please check the URL or report the error if you are sure that this is wrong.</p>
    <router-link class="btn" to="/">
      <i class="fa fa-arrow-left"></i>
      <span>Go back</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.btn
  &:hover, &:active
    @apply shadow-lg
    i
      @apply transform
      @apply -translate-x-1
  span
    @apply ml-2

</style>
