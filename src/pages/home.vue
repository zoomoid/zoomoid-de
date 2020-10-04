<template>
  <div class="flex flex-col min-h-screen">
    <hero class="flex-grow"></hero>
    <Footer></Footer>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Hero,
    Footer,
  },
};
</script>

<style></style>
