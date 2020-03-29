<template>
  <div>
    <section>
      <HomeBanner></HomeBanner>
    </section>
    <section id="about">
      <h1>About</h1>
      <div class="text-body">
        <p>
          <b>Zoomoid</b> is a young, aspiring artist from Aachen, Germany, who
          draws his inspiration from a variety of music to create songs he
          thinks are worth listening to even if he would personally never admit
          that. He makes music to escape the grey world of computer code he's
          studying whenever he can and allows himself to. Combining vast
          knowledge theoretically and a good portion of practical intuition, he
          strives to perfect his very own style with new things and ways to
          create music.
        </p>
        <p>
          2018 saw him independently release his
          <b>first full-length album &ldquo;<a
              href="https://open.spotify.com/album/2zF1wOwINENOR1fTGLqBEF?si=SCmmA64xS8qJas-lAOnTpg"
              target="_blank"
              >Life Is About Making Memories</a
            >&rdquo;
          </b>, made mostly out of nostalgia and memories from his childhood,
          featuring samples and melodies from movies and video games he fell in
          love with and still is.
        </p>
        <p>
          In 2019, he continued on a steep track, further refining his style of
          techno and making it more sophisticated. The first real
          <b>release &ldquo;<a
              href="https://open.spotify.com/album/3YaUvYAudEXEuCJzoONcgE"
              target="_blank"
              >Eigenräume</a
            >&rdquo;
          </b>
          features impressions of places, either already visited or hoping to
          visit soon, that are very dear to his heart and soul. The <b>
            later-released <a href="https://zoomoid.bandcamp.com/" target="_blank">concept version</a>
          </b>
           of the album is designed to blend each
          song seamlessly into each other while adding even more personal gems
          to the <b>one-hour listening experience</b>.
        </p>

        <p>
          Taking a break from Techno, the <b>&ldquo;<a href="https://open.spotify.com/album/7r0wQNMWcf2vno7O2trwQt"
          target="_blank">Public Transportation EP</a>&rdquo;</b> implements a
          concept that was over a year old to the day of release. It's a <b>much
          more "real" Zoomoid</b> as opposed to the prior over-engineered releases.
        </p>
        <p>
          He finished 2019 with <b>yet another release</b>, the <b>&ldquo;<a href="https://open.spotify.com/album/4gr5rmKZn5pkFISvITsHrI" target="_blank">301 Moved Permanently</a>&rdquo;</b>
          EP, which featured some hard-hitting Techno tracks that bundled the
          learning from all prior techno releases and is <b>considered the
          best-received yet</b> by friends in the scene.
        </p>

        <p>
          Starting 2020 strong with a remix of the track <b>&ldquo;<a href="https://open.spotify.com/track/1UsussokjrnR2Sgpskrdzz" target="_blank">Schwerelos</a>&rdquo;</b> for the uprising trio <b><a
          href="https://open.spotify.com/artist/6SDn6pAFOILXizOex6vrRr" target="_blank">Diode Eins</a></b>, currently
          plans are in action to release new original material in late Q2 of 2020.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { HomeBanner } from '@/components';

export default {
  name: 'Home',
  components: {
    HomeBanner
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-weight: 300;
  font-size: 3em;
  margin: 2em 0;
}
.text-body {
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
  padding: 0 2em;
  margin-bottom: 4em;
}
p {
  word-wrap: break-word;
  hyphens: auto;
  font-size: 1.8em;
  font-weight: 300;
  letter-spacing: -1pt;
  line-height: 1.5;
  b {
    font-weight: 600;
  }
  a {
    color: black;
    // padding-bottom: 0;
    // border-bottom: solid 2px #ffd600;
    text-decoration: underline #ffd600 2px;
    outline: none;
  }
}
</style>
