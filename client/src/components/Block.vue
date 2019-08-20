<template>
  <div class="blocked">
    <span>Third-party content blocked. You can enable it in the privacy settings.</span>
    <button v-on:click="accept()">I accept</button>
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
    text-transform: uppercase
</style>