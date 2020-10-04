<template>
  <router-link class="btn" to="/" :style="{'--transform': `var(${transform})`}">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "Button",
  props: {
    transform: {
      type: String,
      default: "translate-x-1",
    }
  }
};
</script>

<style lang="sass" scoped>
.btn
  &:hover, &::active
    i
      --transform-translate-x: var(--transform)
</style>
