<template>
  <div class="py-4">
    <router-link :to="to">
      <i :class="['fa', `fa-arrow-${direction}`]"></i>
      <span class="font-bold ml-2">
        <slot>
          Back
        </slot>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/",
    },
    direction: {
      type: String,
      default: "left",
    },
  },
};
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
