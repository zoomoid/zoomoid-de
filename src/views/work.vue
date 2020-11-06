<template>
  <div class="work px-4">
    <transition :name="transitionName" mode="out-in">
      <router-view class="work-view flex-col flex-grow"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Work",
  components: { },
  data: () => ({
    transitionName: "slide-left",
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

<style lang="scss" scoped>
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(50vw, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-50vw, 0);
}
.work-view {
  transition: all .1s cubic-bezier(.55,0,.1,1);
}
.work {
  overflow: hidden;
}
</style>
