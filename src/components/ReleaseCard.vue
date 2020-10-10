<template>
  <router-link :to="to" class="flex flex-col">
    <div
      class="release-card p-4 rounded-xl flex-grow"
      :style="{
        '--background': color ? color : 'white',
      }"
    >
      <div class="cover">
        <img
          @load="loaded = true"
          :class="[loaded ? 'opacity-100' : 'opacity-0']"
          class="rounded-lg transition-opacity duration-300 ease-in"
          :src="src"
          :alt="alt"
        />
      </div>
      <div class="text">
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
  transition: border 0.2s ease
  box-sizing: border-box
  @apply border-transparent
  @apply border-2
  @apply border-solid
  .cover
    @apply rounded-lg
    @apply bg-black
  &:hover, &:active
    // box-shadow: 0 10px 15px -3px var(--background), 0 4px 6px -2px var(--background)
    @apply border-white
</style>
