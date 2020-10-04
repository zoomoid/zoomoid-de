<template>
  <div class="flex flex-col justify-center">
    <div class="max-w-4xl mx-auto py-24 px-8">
      <img
        class="block w-1/2 md:w-1/3"
        src="@/assets/logo.svg"
        alt="zoomoid"
      />
      <p>
        Zoomoid is a young and aspiring artist from Aachen, Germany, who draws his inspiration from a variety of music to create songs he thinks are worth listening to even if he would personally never admit that. He strives to perfect his very own style with new things and ways to create music.
      </p>
      <p class="">
        For booking, collaboration, or other concerns, contact me via e-mail at
        <a class="contact--mail" href="mailto:occloxium@gmail.com">occloxium@gmail.com</a>.
      </p>
      <router-link to="/work" class="btn">
        <span>Discover the catalog</span>
        <i class="fa fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
p
  @apply text-2xl
  @apply font-normal
  @apply mt-8
  a
    @apply underline
.btn
  &:hover, &:active
    @apply shadow-lg
    i
      @apply transform
      @apply translate-x-1
  span
    @apply mr-2

</style>
