<template>
  <div>
    <hero></hero>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "../components/Hero.vue";

export default defineComponent({
  name: "Home",
  components: {
    Hero,
  },
});
</script>

<style>
</style>
