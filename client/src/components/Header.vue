<template>
  <div class="wrapper">
    <div :class="[active ? 'is-active' : '', 'mobile']">
      <header>
        <router-link class="logo" to="/">
          <img src="@/assets/logo.svg" alt="Zoomoid Artist Logo" />
        </router-link>
      </header>
    </div>
    <div class="desktop">
      <header>
        <router-link to="/">
          <img src="@/assets/logo.svg" alt="Zoomoid Artist Logo" />
        </router-link>
        <nav class="main-nav">
          <li>
            <router-link to="/releases">
              Releases
            </router-link>
          </li>
          <li>
            <router-link to="/events">
              Events
            </router-link>
          </li>
          <li>
            <router-link to="/mixes">
              Mixes
            </router-link>
          </li>
          <li>
            <router-link to="/news">
              News
            </router-link>
          </li>
        </nav>
        <div class="spacer"></div>
        <nav class="social-media">
          <li>
            <a
              href="https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8?si=a8mm8a2RTaO1Zo6SyfwZVQ"
            >
              <i class="fab fa-spotify"></i>
              <span>Spotify</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/zoomoid">
              <i class="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCg0yVDwpB9QphFbsGnV-8tQ/">
              <i class="fab fa-youtube"></i>
              <span>YouTube</span>
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/zoomoid">
              <i class="fab fa-soundcloud"></i>
              <span>SoundCloud</span>
            </a>
          </li>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false
  })
};
</script>

<style lang="scss" scoped>
@use "../scss/mixins";

// Display/hide based on media query
.mobile {
  display: none;
}
.desktop {
  display: block;
}
@include mixins.sm {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
}

header {
  display: flex;
  align-items: center;
  padding: 2em 0;
  padding-right: 2em;
  img {
    max-width: 50%;
    min-width: 150px;
    font-size: 0.8em;
    margin: 0 2em;
  }
  .spacer {
    flex-grow: 1;
  }
  nav {
    &.main-nav {
      li {
        padding: 0 0.5em;
      }
      a {
        text-transform: uppercase;
        font-size: 0.8em;
        letter-spacing: 1pt;
        text-decoration: none;
        font-weight: 600;
        color: black;
      }
    }
    display: flex;
    li {
      list-style: none outside none;
    }
    a {
      color: black;
      &:hover,
      &:active {
        color: #ffd600;
      }
    }
    &.social-media {
      i {
        padding: 0 0.5em;
      }
      span {
        display: none;
      }
    }
  }
}

.mobile {
  header {
    .logo {
      display: block;
      margin: 0 auto;
    }
  }
}

.desktop {
  header {
    display: flex;
    align-items: center;
    padding: 2em 0;
    padding-right: 2em;
    img {
      max-width: 50%;
      min-width: 150px;
      font-size: 0.8em;
      margin: 0 2em;
    }
    .spacer {
      flex-grow: 1;
    }
    nav {
      &.main-nav {
        li {
          padding: 0 0.5em;
        }
        a {
          text-transform: uppercase;
          font-size: 0.8em;
          letter-spacing: 1pt;
          text-decoration: none;
          font-weight: 600;
          color: black;
        }
      }
      display: flex;
      li {
        list-style: none outside none;
      }
      a {
        color: black;
        &:hover,
        &:active {
          color: #ffd600;
        }
      }
      &.social-media {
        i {
          padding: 0 0.5em;
        }
        span {
          display: none;
        }
      }
    }
  }
}
</style>
