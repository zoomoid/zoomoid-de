<template>
  <div class="single">
    <article>
      <div class="title">
        <h3>zoomoid</h3>
        <h1>Eigenräume (Extended Edition)</h1>
      </div>
      <section class="cover">
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/eigenräume/extended.png" />
      </section>

      <p>
        The original <router-link to="/work/eigenräume">Eigenräume</router-link>
        was planned to be a proper concept album when I started working on it way back in
        January 2019. Every track would blend seamlessly and the whole album
        would tell a story of places I really felt were special to me.
      </p><p>
        That idea branched the production of the tracks into a concept edit and
        a standard edit, making me maintain two parallel versions for each
        track. Overwhelmed by that, I abandoned the plan to release both version
        parallel. So in May 2019, the standard edits were published under that
        black cover you may know.
      </p><p>
        The concept tracks remained on my hard drive and I didn't touch them for
        a long time back then.
      </p><p>
        However, with the idea to produce two parallel releases also came the
        necessity to design two different album artworks. The second version of
        the "Eigenräume" album cover looks a lot more industrial, monochrome
        than the black, but also colorful first version. Both share roughly the
        same motive, except for the rings in the center.
      </p><p>
        After some time, I picked up those tracks again, with fresh ideas to
        polish them to something better than the first released version. On top
        of that, I began some new tracks that fitted with the original versions,
        so I added them as a bonus! Overall, the six original "Eigenräume"
        tracks all got some touch-ups, fill-ups and some additional layers,
        three more tracks were appended and I framed them with beautiful
        instrumental intros and outros.
      </p>
      <div class="download">
        <p>
          I would appreciate you listening to the album on Spotify, Apple Music,
          Deezer and others, and also love you across the stars (get that reference?) for actually buying my
          music. You supporting me means the absolute world to me!
          <br />However, I want everybody to enjoy it equally, hence I provide it for download
          for free here.
        </p>
        <div id="external">
          <div class="streaming">
            <h2>Stream!</h2>
            <p class="muted">Coming soon!</p>
          </div>
          <div class="buying">
            <h2>Buy!</h2>
            <div>
              <li>
               <SlideAnchor :name="'Bandcamp'" :anchor="'https://zoomoid.bandcamp.com'"/>
              </li>
              <p class="muted">More coming soon!</p>
            </div>
          </div>
        </div>
        <div class="download">
          <h2>Listen &amp; Download</h2>
          <div>
            <li>
              <SlideAnchor :name="'Get the complete Extended Edition as MP3'" :anchor="'https://cdn.occloxium.com/a/zoomoid/eigenraeume-extended-edition.zip'"/>
            </li>
            <li>
              <SlideAnchor class="small" :name="'(Alternatively as FLAC)'" :anchor="'https://cdn.occloxium.com/a/zoomoid/eigenraeume-extended-edition.flac.zip'"/>
            </li>
          </div>
          <h4>Extended Edition</h4>
          <AudioPlayer class="tracklist" :audio="tracks" :artist="'Zoomoid'"></AudioPlayer>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import SlideAnchor from '@/components/SlideAnchor';
import AudioPlayer from '@/components/AudioPlayer';

export default {
  name: 'EigenräumeExtendedEdition',
  data: function(){
    return {
      tracks: [
        {
          title: 'Symphonic Dreams (Intro)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/01_Symphonic%20Dreams%20(Intro).mp3'
        },{
          title: 'Stockholm (Concept)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/02_Stockholm%20(Concept).mp3'
        },{
          title: 'Großstadt (Concept)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/03_Großstadt%20(Concept).mp3'
        },{
          title: 'Schöneberg At Night (Concept)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/04_Schöneberg%20At%20Night%20(Concept).mp3'
        },{
          title: 'Höllental (Concept)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/05_Höllental%20(Concept).mp3'
        },{
          title: 'Heimat (Concept)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/06_Heimat%20(Concept).mp3'
        },{
          title: 'Blaues Land (Concept)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/07_Blaues%20Land%20(Concept).mp3'
        },{
          title: 'Congruence (Bonus)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/08_Congruence%20(Bonus).mp3'
        },{
          title: 'Valletta (Bonus)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/09_Valletta%20(Bonus).mp3'
        },{
          title: 'Outer Space (Bonus)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/10_Outer%20Space%20(Bonus).mp3'
        },{
          title: 'Adieu (Outro)',
          src: 'https://cdn.occloxium.com/a/zoomoid/eigenräume/extended/11_Adieu%20(Outro).mp3'
        },
      ]
    }
  },
  components: {
    SlideAnchor,
    AudioPlayer
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/single.sass'
+single
</style>
