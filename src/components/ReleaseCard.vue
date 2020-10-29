<template>
  <router-link :to="to" class="flex flex-col">
    <div
      class="release-card flex-grow"
      :style="{
        '--background': color ? color : 'white',
      }"
    >
      <div class="cover">
        <img
          @load="loaded = true"
          :class="[loaded ? 'opacity-100' : 'opacity-0']"
          class="transition-opacity duration-300 ease-in"
          :src="src"
          :alt="alt"
        />
      </div>
      <div class="text p-2">
        <slot name="text"></slot>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ReleaseCard",
  props: {
    src: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: "#",
    },
    alt: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    loaded: false,
  }),
};
</script>

<style lang="sass" scoped>
.release-card
  transition: all 0.2s ease
  .cover
    @apply rounded-lg
    @apply bg-black
    img
      @apply rounded-xl
  &:hover, &:active
    box-shadow: 0 10px 15px -3px var(--background), 0 4px 6px -2px var(--background)
</style>
