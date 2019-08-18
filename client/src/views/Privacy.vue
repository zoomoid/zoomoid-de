<template>
  <div>
    <Navigation/>
    <section id="header">
      
      <h1>Privacy &amp; Data Protection</h1>
      <p>
        We strongly value your privacy and freedom. We therefore do not store
        any of your data on our servers and do not use any analytics software on
        this website.
      </p>
      <p>
        However, as we embed third-party content into our site, third-party
        providers may store user data on their servers generated on our site.
        We therefore have to give you, the user, the ability to block
        third-party content on our site. While it should not impact experience,
        since most of the music is embedded as source audio anyway and links to
        streaming platforms are available for users of such platforms, it may
        result in some elements missing on the website.
      </p>
    </section>
    <section id="consent">
      <h3>Cookie Consent</h3>
      <p>
        We use cookies solely to store your settings for external, third-party
        content on our site. No data regarding your behaviour is collected or
        sent to any server.
        <br />By accepting, you consent to storing a cookie that contains your choice
        regarding third-party content and embedded content.
      </p>
      <form id="cookie">
        <div>
          <input
            type="radio"
            id="cookies-accept"
            v-on:click="addCookie('allowCookies', 'true')"
            value="true"
            v-model="cookies"
            name="cookie-consent"
          />
          <label for="cookies-accept">Yes, I want to store my settings in a cookie from zoomoid.de</label>
        </div>
        <div>
          <input
            type="radio"
            id="cookies-decline"
            v-on:click="removeAllCookies()"
            value="false"
            v-model="cookies"
            name="cookie-consent"
          />
          <label for="cookies-decline">No, I decline any cookies from zoomoid.de</label>
        </div>
      </form>
      <h3>Third-Party Content Consent</h3>
      <p>
        Third-party content on zoomoid.de is any sort of embedded content like
        YouTube Videos, Spotify Players or Apple Music Widgets. You can accept
        third-party content and consent to potentially storing cookies and
        tracking data from these third-party providers, or opt-out. Latter will
        hide the content.
        <br />This should, in theory, not hinder experience, as most content is
        embedded as native audio into the site and strictly served from our
        servers as well, however, we are obligated to explicitly ask for your
        permission.
        <br />
        <b>
          Note, that choosing any option here will automatically allow the
          creation of a cookie to store your setting. If you'd like to NOT
          create any cookies at all, choose the above option.
        </b>
      </p>
      <form id="thirdparty">
        <div>
          <input
            type="radio"
            id="thirdParty-accept"
            name="thirdParty-consent"
            v-model="thirdParty"
            value="true"
            v-on:click="allowThirdPartyContent()"
          />
          <label for="thirdParty-accept">
            Yes, I want to see third-party content
            on zoomoid.de and store cookies by these providers
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="thirdParty-decline"
            v-on:click="declineThirdPartyContent()"
            name="thirdParty-consent"
            value="false"
            v-model="thirdParty"
          />
          <label
            for="thirdParty-decline"
          >No, I decline from seeing any third-party content on zoomoid.de</label>
        </div>
      </form>
    </section>
    <Footer/>
  </div>
</template>


<style lang="sass" scoped>
@import '@/assets/app.sass'

#header
  img
    width: 50%
    max-width: 360px
    margin: 2em auto 0
    display: block

section 
  padding: 0 2em

#consent
  h3
    font-size: 2em
    letter-spacing: 0.5px
  form
    padding: 1em 0
    div 
      display: flex
      align-items: center
      padding: 0.5em 0
      input
        margin-right: 16px
</style>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer'
export default {
  components: {
    Navigation,
    Footer,
  },
  data: function() {
    return {
      cookies:
        this.$cookies.isKey('allowCookies') &&
        this.$cookies.get('allowCookies') === 'true',
      thirdParty:
        this.$cookies.isKey('allowThirdPartyContent') &&
        this.$cookies.get('allowThirdPartyContent') === 'true'
    };
  },
  methods: {
    removeCookie: function(id) {
      this.$cookies.remove(id);
      return true;
    },
    addCookie: function(id, value) {
      this.$cookies.set(id, value, '30d');
      return true;
    },
    removeAllCookies: function() {
      this.removeCookie('allowCookies');
      this.removeCookie('allowThirdPartyContent');
      this.cookies = false;
      this.thirdParty = false;
    },
    allowThirdPartyContent: function() {
      this.addCookie('allowThirdPartyContent', 'true');
      this.addCookie('allowCookies', 'true');
      this.cookies = true;
      this.thirdParty = true;
    },
    declineThirdPartyContent: function() {
      this.addCookie('allowThirdPartyContent', 'false');
      this.addCookie('allowCookies', 'true');
      this.cookies = true;
      this.thirdParty = false;
    }
  }
};
</script>

