<template>
  <section>
    <h1>Events</h1>
    <span>There are no upcoming events.</span>
    <span>If you want to hire Zoomoid for your party, contact him at <a href="mailto:alex@zoomoid.de">alex@zoomoid.de</a></span>
  </section>
</template>

<script>
export default {
  name: 'Events'
}
</script>

<style lang="scss" scoped>
section {
  padding-bottom: 4em;
}
h1 {
  text-align: center;
  font-weight: 300;
  font-size: 2em;
  margin: 3em 0;
}
span {
  text-align: center;
  display: block;
  font-weight: 300;
  color: #636363;
  margin: 2em auto;
  max-width: 30%;
  line-height: 2;
  a {
    color: #212121;
  }
}
</style>
