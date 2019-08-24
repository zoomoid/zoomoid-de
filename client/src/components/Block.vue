<template>
  <div class="blocked">
    <span>Third-party content blocked. You can enable it in the <router-link to="/privacy">privacy settings</router-link>.</span>
    <button v-on:click="accept()">Accept</button>
  </div>
</template>

<script>
export default {
  name: 'Block',
  methods: {
    accept: function() {
      this.$cookies.set('allowCookies', 'true', '30d');
      this.$cookies.set('allowThirdPartyContent', 'true', '30d');
      this.hidden = true
    }
  }
}
</script>

<style lang="sass" scoped>
.blocked
  height: 150px
  width: 100%
  padding: 8px 16px
  background: rgba(12,12,12,1)
  display: flex
  align-items: center
  border-radius: 12px
  span
    margin: 0 auto
    display: block
    color: white
  button
    background: white
    border-radius: 4px
    color: black
    border: none
    outline: none
    width: 25%
    padding: 0.25em 1em
    margin-left: 0.5em
    text-transform: uppercase
  a
    color: white
</style>