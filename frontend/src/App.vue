<template>
  <main id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </main>
</template>

<style lang="scss">
@use "./scss/normalize";

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

.main-nav {
  a.router-link-exact-active, li.router-link-exact-active a {
    border-bottom: 2px solid #ffd600;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
