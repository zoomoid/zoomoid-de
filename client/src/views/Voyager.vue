<template>
  <div id="voyager">
    <div class="wrapper">
      <img src="https://demo.zoomoid.de/files/voyager/cover.jpeg" class="cover">
      <h1>Voyager</h1>
      <h2>Seek the unknown!</h2>
      <p>Zoomoid's 2020 release to bring a little bit of escapism to you in these hard times is on the horizon!</p>
      <a href="https://demo.zoomoid.de/voyager">
        <span>Find out more!</span>
        <span class="material-icons-sharp">
          arrow_forward
        </span>
      </a>
      <button class="mute" @click="togglePlay">
        <span v-if="!this.muted" class="material-icons-sharp">
          volume_off
        </span>
        <span v-else class="material-icons-sharp">
          volume_up
        </span>
      </button>
    </div>
    <button class="close" @click="hideVoyagerPage">
      <span class="material-icons-sharp">
        close
      </span>
    </button>
    <div class="backdrop">
      <div
        v-for="(p, i) in points"
        v-bind:key="p.color"
        :class="[`animate-var-${(i % 5) + 1}`]"
        :style="{ left: `${p.x}px`, top: `${p.y}px`, '--color': p.color }"
      ></div>
    </div>
    <audio ref="audio" src="@/assets/atmos.mp3" type="audio/mp3" loop></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          x: 200,
          y: 100,
          color: '#202D3F',
        },
        {
          x: 100,
          y: 250,
          color: '#0E4E2E',
        },
        {
          x: 50,
          y: 200,
          color: '#081525',
        },
        {
          x: 200,
          y: 100,
          color: '#AE0917',
        },
        {
          x: 500,
          y: 0,
          color: '#113366',
        },
        {
          x: 100,
          y: 200,
          color: '#205020',
        },
        {
          x: 0,
          y: 20,
          color: '#3245CD',
        },
      ],
      muted: true,
    };
  },
  methods: {
    togglePlay(){
      if(this.muted){
        this.$refs.audio.play().then(() => {
          this.muted = false;
          this.$refs.audio.volume = 1;
        });
      } else {
        this.$refs.audio.volume = 0;
        this.muted = true;
      }
    },
    hideVoyagerPage(){
      this.$cookies.set('hideVoyagerHeroPage','true','3d');
      this.$router.push({path: '/'});
    },
  }
};
</script>

<style lang="sass" scoped>
@import '@/assets/_typography'

@keyframes move-var-1
  0%
    transform: translate(200px, 100px)
  33%
    transform: translate(-300px, -100px)
  66%
    transform: translate(-200px, 100px)
  100%
    transform: translate(200px, 100px)

@keyframes move-var-2
  0%
    transform: translate(0, 0)
  20%
    transform: translate(500px, 900px)
  40%
    transform: translate(300px, 300px)
  60%
    transform: translate(-300px, -100px)
  80%
    transform: translate(500px, 200px)
  100%
    transform: translate(500px, 900px)

@keyframes move-var-3
  0%
    transform: translate(0, 0)
  20%
    transform: translate(300px, -100px)
  40%
    transform: translate(-200px, -100px)
  60%
    transform: translate(-400px, 300px)
  80%
    transform: translate(400, 100px)
  100%
    transform: translate(0, 0)

@keyframes fade-in
  from
    opacity: 0
  to
    opacity: 1

#voyager
  .close
    position: fixed
    top: 16px
    right: 16px
    color: white
    z-index: 1000
    opacity: 0.6
    background: none
    border: none
    &:hover, &:active
      opacity: 1
  .wrapper
    position: relative
    z-index: 1000
    font-size: 13pt
    max-width: 450px
    margin: 0 auto
    *
      color: white
      text-align: center
    h1, h2, p, .cover, a
      opacity: 0
    h1, h2
      font-family: 'Space Grotesk', sans-serif
      font-weight: bold
      text-transform: uppercase
    h1
      // margin-top: 500px
      animation: fade-in 2s 0.5s ease forwards
      font-size: 5em
    h2
      animation: fade-in 2s 1s ease forwards
      font-size: 2em
    .cover
      animation: fade-in 2s 0s ease forwards
      max-width: 450px
      width: 95%
      margin: 120px auto 0
      display: block
      border-radius: 24px
    p
      animation: fade-in 2s 2s ease forwards
    a
      animation: fade-in 2s 2.5s ease forwards
      background: none
      // border: solid 2px #ffffff
      border-radius: 6px
      display: block
      // text-align: center
      margin: 0 auto
      text-transform: uppercase
      text-decoration: none
      line-height: 36px
      font-size: 24px
      font-weight: 500
      transition: color 0.5s ease
      &:hover, &:active
        color: rgba(180, 200, 220, 1)
      .material-icons-sharp
        line-height: 36px
        font-size: 24px
        margin-left: 8px
      span
        color: inherit
        text-align: center
        vertical-align: middle
    .mute
      opacity: 0.6
      position: fixed
      bottom: 12px
      right: 12px
      transition: opacity 0.5s ease
      background: none
      // border: solid 2px #ffffff
      border: none
      cursor: pointer
      // border-radius: 6px
      span
        line-height: 36px
        font-size: 24px
      &:hover, &:active
        opacity: 1
  .backdrop
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    overflow: hidden
    background: black
    & > div
      // transform: translate(-200%, -100%)
      position: absolute
      width: 1000px
      height: 1000px
      opacity: 0.5
      background: radial-gradient(closest-side at center, var(--color) 0, rgba(0,0,0,0))
      &.animate-var-
        &1
          opacity: 0.8
          animation: move-var-1 60s ease infinite alternate running
        &2
          animation: move-var-2 30s ease infinite normal running
        &3
          opacity: 0.56
          animation: move-var-3 50s ease infinite reverse running
        &4
          opacity: 0.66
          animation: move-var-1 40s ease infinite alternate running
        &5
          animation: move-var-3 45s ease infinite normal running

</style>
