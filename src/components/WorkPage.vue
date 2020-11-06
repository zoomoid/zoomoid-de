<template>
  <div class="work-page container mb-12 mx-auto md:px-0 px-8">
    <breadcrumb class="py-4 md:mb-8" to="/work"></breadcrumb>
    <div class="">
      <section class="order-1 cover md:w-1/2 p-2 md:p-0 m-8">
        <slot name="cover"></slot>
      </section>
      <div class="p-2 md:p-8 order-2">
        <section class="title">
          <slot name="title"></slot>
        </section>
        <section class="content">
          <slot name="content"></slot>
        </section>
        <section class="links">
          <slot name="links"></slot>
        </section>
        <section class="player" v-if="queue.length">
          <slot name="player">
            <h2>Listen to the tracks!</h2>
          </slot>
          <AudioManager :queue="this.queue"></AudioManager>
        </section>
      </div>

    </div>
  </div>
</template>

<script>
import AudioManager from "./AudioManager.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  components: {
    AudioManager,
    Breadcrumb,
  },
  props: {
    queue: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="sass">
.work-page
  .title
    h2
      @apply text-opacity-50
      @apply text-xl
      @apply font-bold
      @apply my-0
      @apply leading-none
      // @apply uppercase
      @apply tracking-normal
    h1
      @apply my-4
      @apply text-4xl
      @apply font-bold
      @apply leading-none
      // @apply break-all
  .cover
    @apply inline
    float: left
    img
      @apply block
      @apply rounded-xl
  .content
    @apply text-xl
    @apply font-medium
  .links
    @apply list-none
    ul
      @apply grid
      @apply grid-cols-2
      @apply gap-4
    li
      @apply transition
      @apply duration-100
      @apply ease-in-out
      @apply text-white
      @apply bg-black
      @apply text-center
      @apply cursor-pointer
      &:active, &:hover
        @apply bg-yellow-500
    a
      @apply px-2
      @apply py-4
      @apply inline-block
      @apply uppercase
      @apply font-bold
</style>
