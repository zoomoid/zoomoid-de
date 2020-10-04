<script>
export default {
  name: "SlideAnchor",
  props: {
    anchor: String,
    name: String,
    icon: {
      type: String,
      default: "",
    },
    small: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: true,
    }
  },
  data: function(){
    return {toggled: false};
  },
  methods: {
    followLink(){
      setTimeout(() => {
        this.toggled = false;
      }, 150)
      setTimeout(() => {
        location.href = this.anchor;
      }, 1000);
    }
  }
}
</script>

<template>
  <div>
    <a
      class="slide-anchor"
      @mouseenter="toggled = true"
      @mouseleave="toggled = false"
      @click.prevent="followLink()"
      :href="anchor"
    >
      <transition name="slide">
        <div class="block" v-if="toggled"></div>
      </transition>
      <i class="icon" v-if="icon" :class="icon"></i>
      <b :class="[this.small ? 'text small' : 'text']">{{this.name}}</b>
    </a>

  </div>
</template>

<style lang="sass" scoped>

</style>
