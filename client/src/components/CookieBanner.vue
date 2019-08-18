<template>
  <div v-if="!cookiesExist() && !hidden" class="wrapper">
    <div class="banner">
      <span>
        By accepting our cookie usage, you agree to store your settings regarding
        third-party content on this website as a cookie on your machine.
      </span>
      <div>
        <button v-on:click="accept()">Accept</button>
        <span>
          <router-link to="/privacy">More information</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieBanner',
  data: function(){
    return {
      hidden: false
    }
  },
  methods: {
    cookiesExist: function() {
      return (
        this.$cookies.isKey('allowCookies') &&
        this.$cookies.isKey('allowThirdPartyContent')
      );
    },
    accept: function() {
      this.$cookies.set('allowCookies', 'true', '30d');
      this.$cookies.set('allowThirdPartyContent', 'true', '30d');
      this.hidden = true
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/assets/app.sass'

.wrapper
  width: 100%
  background: black
.banner
  background: black
  display: flex
  padding: 8px
  font-size: 11pt
  align-items: stretch
  max-width: $max-width
  margin: 0 auto
  color: white
  span
    text-align: justify
    flex-grow: 0
  div
    margin-left: 12px
    flex-grow: 1
    button
      width: 100%
      background: none
      border: solid 2px white
      color: white
      outline: none
      min-width: 150px
      padding: 4px 32px
      display: block
      text-transform: uppercase
      letter-spacing: 1px
      font-weight: bold
      &:active, &:hover, &:focus
        background: white
        color: black
    span
      font-size: 10px
      text-align: right
      display: block
</style>

