<template>
  <div class="wrapper">
    <div class="banner-image" :style="{backgroundImage: `url(${this.url})`}"></div>
    <div class="labels">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
