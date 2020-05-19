<template>
  <div class="wrapper">
    <Breadcrump></Breadcrump>
    <div class="single">
      <article>
        <div class="title">
          <h3>zoomoid</h3>
          <h1>Eigenräume (Extended Edition)</h1>
        </div>
        <section class="cover">
          <img src="https://cdn.occloxium.com/i/zoomoid/covers/eigenräume/extended.png" />
        </section>

        <section class="content">
          <p>
            The original
            <router-link to="/work/eigenräume-standard-edition">Eigenräume</router-link> was planned to be a proper concept album when I started working on it way back in
            January 2019. Every track would blend seamlessly and the whole album
            would tell a story of places I really felt were special to me.
          </p>
          <p>
            That idea branched the production of the tracks into a concept edit and
            a standard edit, making me maintain two parallel versions for each
            track. Overwhelmed by that, I abandoned the plan to release both version
            parallel. So in May 2019, the standard edits were published under that
            black cover you may know.
          </p>
          <p>
            The concept tracks remained on my hard drive and I didn't touch them for
            a long time back then.
          </p>
          <p>
            However, with the idea to produce two parallel releases also came the
            necessity to design two different album artworks. The second version of
            the "eigenraeume" album cover looks a lot more industrial, monochrome
            than the black, but also colorful first version. Both share roughly the
            same motive, except for the rings in the center.
          </p>
          <p>
            After some time, I picked up those tracks again, with fresh ideas to
            polish them to something better than the first released version. On top
            of that, I began some new tracks that fitted with the original versions,
            so I added them as a bonus! Overall, the six original "eigenraeume"
            tracks all got some touch-ups, fill-ups and some additional layers,
            three more tracks were appended and I framed them with beautiful
            instrumental intros and outros.
          </p>
        </section>
        <div class="download">
          <p>
            I would appreciate you listening to the album on Spotify, Apple Music,
            Deezer and others. You supporting me means the absolute world to me!
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
                  :theme="theme"
                  :name="'Download the complete Extended Edition as MP3'"
                  :anchor="'https://cdn.occloxium.com/a/zoomoid/eigenraeume-extended-edition.zip'"
                />
              </li>
            </div>
            <h4>Extended Edition</h4>
            <AudioManager class="players" :queue="queue"></AudioManager>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import SlideAnchor from '@/components/SlideAnchor.vue';
import AudioManager from '@/components/AudioManager.vue';
import Breadcrump from '@/components/Breadcrump';

export default {
  name: 'eigenraeumeExtendedEdition',
  data: function() {
    return {
      theme: 'dark',
      streaming: [
        {
          name: 'Spotify',
          link: 'https://open.spotify.com/album/1N5yphubnUoyuk4hg8cP5n'
        },
        {
          name: 'Apple Music',
          link:
            'https://music.apple.com/de/album/eigenr%C3%A4ume-extended-edition/1478203701'
        },
        {
          name: 'Tidal',
          link: 'https://tidal.com/browse/album/116540603'
        }
      ],
      buying: [
        {
          name: 'Bandcamp',
          link: 'https://zoomoid.bandcamp.com/'
        },
        {
          name: 'iTunes',
          link:
            'https://music.apple.com/de/album/eigenr%C3%A4ume-extended-edition/1478203701?app=itunes'
        },
        {
          name: 'Amazon Music',
          link:
            'https://www.amazon.de/eigenraeume-Extended-Zoomoid/dp/B07X13DDBD'
        }
      ],
      queue: [
        {
          id: 1,
          name: 'Symphonic Dreams (Intro)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/01_Symphonic%20Dreams%20(Intro).mp3',
          tags: []
        },
        {
          id: 2,
          name: 'Stockholm (Concept)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/02_Stockholm%20(Concept).mp3',
          tags: []
        },
        {
          id: 3,
          name: 'Großstadt (Concept)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/03_Großstadt%20(Concept).mp3',
          tags: []
        },
        {
          id: 4,
          name: 'Schöneberg At Night (Concept)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/04_Schöneberg%20At%20Night%20(Concept).mp3',
          tags: []
        },
        {
          id: 5,
          name: 'Höllental (Concept)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/05_Höllental%20(Concept).mp3',
          tags: []
        },
        {
          id: 6,
          name: 'Heimat (Concept)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/06_Heimat%20(Concept).mp3',
          tags: []
        },
        {
          id: 7,
          name: 'Blaues Land (Concept)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/07_Blaues%20Land%20(Concept).mp3',
          tags: []
        },
        {
          id: 8,
          name: 'Congruence (Bonus)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/08_Congruence%20(Bonus).mp3',
          tags: []
        },
        {
          id: 9,
          name: 'Valletta (Bonus)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/09_Valletta%20(Bonus).mp3',
          tags: []
        },
        {
          id: 10,
          name: 'Outer Space (Bonus)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/10_Outer%20Space%20(Bonus).mp3',
          tags: []
        },
        {
          id: 11,
          name: 'Adieu (Outro)',
          url:
            'https://cdn.occloxium.com/a/zoomoid/eigenraeume/extended/11_Adieu%20(Outro).mp3',
          tags: []
        }
      ]
    };
  },
  components: {
    SlideAnchor,
    AudioManager,
    Breadcrump,
  }
};
</script>

<style lang="sass" scoped>
@use "@/assets/single.sass" as style

@include style.breadcrump-dark
@include style.single-dark
</style>
