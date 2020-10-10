<template>
  <main id="app" class="bg-white text-black min-h-screen flex flex-col">
    <transition :name="transitionName" mode="out-in">
      <router-view class="view flex-grow"></router-view>
    </transition>
    <Footer></Footer>
  </main>
</template>

<style lang="scss">
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(100px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-100px, 0);
}
.view {
  transition: all .15s cubic-bezier(.55,0,.1,1);
}
#app {
  overflow: hidden;
}
</style>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
  data: () => ({
    transitionName: "slide-right",
  }),
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").filter(s => s.length !== 0).length;
      const fromDepth = from.path.split("/").filter(s => s.length !== 0).length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    },
  },
};
</script>
