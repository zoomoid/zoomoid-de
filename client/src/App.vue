<template>
  <main id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </main>
</template>

<style lang="scss">
html {
  font-family: 'Work Sans', sans-serif;
  min-height: 100%;
  position: relative;
  min-width: 100%;
}
body {
  min-height: 100%;
  position: absolute;
  min-width: 100%;
}
#app {
  min-height: 100%;
  position: absolute;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  footer {
    flex-grow: 1;
  }
}

</style>

<script>
import { Header, Footer } from '@/components';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
};
</script>
