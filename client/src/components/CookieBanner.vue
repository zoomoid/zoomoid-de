<template>
  <div v-if="!cookiesExist() && !hidden" class="wrapper">
    <div class="banner">
      <span class="text">
        By accepting our cookie usage, you agree to store your settings regarding
        third-party content on this website as a cookie on your machine.
      </span>
      <div class="actions">
        <button v-on:click="accept()">Accept</button>
        <router-link to="/privacy">More information</router-link>
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
      this.hidden = true;
      this.$root.$blocked = false;
      location.reload();
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
  margin: 0 auto
  color: white
  max-width: 768px
  .text
    flex-grow: 1
  .actions
    margin-left: 12px
    // flex-grow: 1
    button
      background: white
      color: black
      border: none
      outline: none
      border-radius: 4px
      letter-spacing: 1px
      padding: 2px 32px
      display: block
      text-transform: uppercase
      font-weight: bold
      &:active, &:hover, &:focus
        background: white
        color: black
    a
      text-align: justify
      flex-grow: 0
      color: white
      font-size: 10px
      text-align: right
      display: block
</style>

