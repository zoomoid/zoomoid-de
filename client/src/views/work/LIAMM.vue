<template>
  <div class="wrapper">
    <Breadcrump></Breadcrump>
    <div class="single">
      <article>
        <div class="title">
          <h3>zoomoid</h3>
          <h1>Life Is About Making Memories</h1>
        </div>
        <section class="cover">
          <img src="https://cdn.occloxium.com/i/zoomoid/covers/liamm/cover.png" />
        </section>

        <section class="content">
          <p>
            <b>Life Is About Making Memories</b> is my first full-feature album! It is comprised of 11 songs
            and there are a lot of different gems on there, have a listen and decide for yourself which tracks you like
            the most. If you do, tell me about it on social media like Instagram or SoundCloud and tell your friends!
          </p>
        </section>
        <div class="download">
          <p>
            I would appreciate you listening to Life Is About Making Memories on Spotify, Apple Music,
            Deezer and so on. You supporting me means the absolute world to me!
            <br />However, I want everybody to enjoy it equally, hence I provide it for download
            for free here.
          </p>
          <div id="external">
            <div class="streaming">
              <h2>Stream!</h2>
              <div>
                <li v-for="item in this.streaming" :key="item.name">
                  <SlideAnchor
                  :theme="theme" :anchor="item.link" :name="item.name" />
                </li>
              </div>
            </div>
            <div class="buying">
              <h2>Buy!</h2>
              <div>
                <li v-for="item in this.buying" v-bind:key="item.name">
                  <SlideAnchor
                  :theme="theme" :anchor="item.link" :name="item.name" />
                </li>
              </div>
            </div>
          </div>
          <div class="download">
            <h2>Listen &amp; Download</h2>
            <div>
              <li>
                <SlideAnchor
                  :anchor="'https://cdn.occloxium.com/a/zoomoid/liamm.zip'"
                  :theme="theme"
                  :name="'Get the complete Standard Edition as MP3'"
                />
              </li>
              <li>
                <SlideAnchor
                  :small="true"
                  :theme="theme"
                  :anchor="'https://cdn.occloxium.com/a/zoomoid/liamm.flac.zip'"
                  :name="'(Alternatively as FLAC)'"
                />
              </li>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use "@/assets/single.sass" as style

@include style.breadcrump-dark
@include style.single-dark
</style>

<script>
import SlideAnchor from '@/components/SlideAnchor';
import Breadcrump from '@/components/Breadcrump'

export default {
  name: 'LIAMM',
  components: {
    SlideAnchor,
    Breadcrump,
  },
  data: function() {
    return {
      theme: 'dark',
      streaming: [
        {
          name: 'Spotify',
          link:
            'https://open.spotify.com/album/2zF1wOwINENOR1fTGLqBEF?si=SCmmA64xS8qJas-lAOnTpg'
        },
        {
          name: 'Apple Music',
          link:
            'https://music.apple.com/de/album/life-is-about-making-memories/1437311634'
        },
        {
          name: 'Deezer',
          link: 'https://www.deezer.com/de/album/74066782'
        }
      ],
      buying: [
        {
          name: 'Amazon Music',
          link:
            'https://www.amazon.de/Life-About-Making-Memories-Zoomoid/dp/B07HNMR3L9/'
        },
        {
          name: 'iTunes',
          link:
            'https://itunes.apple.com/de/album/life-is-about-making-memories/1437311634'
        }
      ]
    };
  }
};
</script>
