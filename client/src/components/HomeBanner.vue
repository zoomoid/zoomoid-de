<template>
  <section class="wrapper home-banner">
    <img src="@/assets/the-moon-teaser.png" alt="The Moon Cover Art">
    <div class="description">
      <h2>Zoomoid</h2>
      <h1>The Moon</h1>
      <p>Coming soon on selected streaming services</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use "../scss/mixins";

.wrapper {
  width: 100%;
  position: relative;
}
.description {
  position: absolute;
  bottom: 2em;
  right: 2em;
  max-width: calc(100% - 4em);
  background: #1a1a1a;
  color: white;
  padding: 2em;
  box-shadow: 0px 3px 12px rgba(0,0,0,0.4);
  @include mixins.sm {
    position: relative;
    margin: 0 auto 2em;
    bottom: auto;
    right: auto;
    padding: 1em;
    width: 100%;
  }
  h2 {
    margin: 0;
    font-size: 1.5em;
    font-weight: 500;
    letter-spacing: -1pt;
  }
  h1 {
    margin: 0;
    font-size: 2em;
    letter-spacing: -1pt;
  }
  p {
    font-weight: 300;
  }
}
img {
  width: 100%;
}
</style>
