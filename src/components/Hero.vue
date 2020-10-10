<template>
  <div class="flex flex-col justify-center">
    <div class="max-w-6xl mx-auto pt-16 pb-24 px-8 leading-tight">
      <p
        class="text-4xl lg:text-6xl lg:font-bold lg:tracking-normal tracking-tight"
      >
        <img
          class="inline-block h-12 md:h-20 align-bottom"
          src="@/assets/logo.svg"
          alt="zoomoid"
        />
        is an aspiring artist from Aachen, Germany. Most of the time he's making
        Techno &mdash; with some exceptions. He's currently planning the release of his 2020 Album <i>Voyager</i>.
      </p>
      <p class="lg:text-4xl lg:font-normal">
        For booking, collaboration, or other concerns, contact him via e-mail at
        <a class="contact--mail" href="mailto:occloxium@gmail.com"
          >occloxium@gmail.com</a
        >.
      </p>
      <router-link to="/work" class="btn">
        <span>Discover the discography</span>
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
  // @apply text-2xl
  // @apply font-normal
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
