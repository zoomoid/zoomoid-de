<template>
  <div class="container px-4 py-12 mt-12 max-w-4xl mx-auto">
    <div class="">
      <router-link to="/">
        <i class="fa fa-arrow-left"></i>
        <span class="font-bold ml-2">Back</span>
      </router-link>
    </div>
    <section id="header">
      <h1>Privacy &amp; Data Protection</h1>
      <p>
        We strongly value your privacy and freedom. We therefore do not store
        any of your data on our servers and do not use any analytics software on
        this website. We do not store any cookies or additional data in your browser
        to identify you. Site access logs are not monitored and directly removed from the server.
        You are completely anonymous to us on this website. Nevertheless, we value your visit!
      </p>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {};
  },
  methods: { },
};
</script>

<style lang="sass" scoped>
section
  form
    div
      @apply py-2
      label
        @apply ml-2
</style>
