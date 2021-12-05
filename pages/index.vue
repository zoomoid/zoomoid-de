<template>
  <header class="text-white px-[4vw] py-[3vw]">
    <div class="flex items-center px-4 md:px-0">
      <div class="font-semibold text-3xl tracking font-sans">
        <a href="/">Zoomoid</a>
      </div>
      <div class="flex-grow flex justify-end">
        <nav class="flex-wrap gap-4 tracking-wide hidden md:flex">
          <div v-for="action in navActions" :key="action.title">
            <a :href="action.url" target="_blank">{{ action.title }}</a>
          </div>
        </nav>
        <nav class="md:hidden">
          <button class="leading-[0px]" @click="showNav = true">
            <i class="material-icons-sharp text-6xl">menu_open</i>
          </button>
          <transition name="slide-in">
            <div
              v-if="showNav"
              class="
                fixed
                top-0
                left-0
                bottom-0
                right-0
                bg-orange-600
                px-[4vw]
                py-[6.6vmax]
                z-50
              "
            >
              <button class="absolute top-[4vw] right-[4vw]" type="button" @click="showNav = false">
                <i class="material-icons-sharp text-6xl">close</i>
              </button>
              <div class="flex flex-col h-full items-center justify-center">
                <div
                  v-for="action in navActions"
                  :key="action.title"
                  class="px-4 text-center text-2xl my-4"
                >
                  <a class="hover:underline" :href="action.url" target="_blank">{{ action.title }}</a>
                </div>
              </div>
            </div>
          </transition>
        </nav>
      </div>
    </div>
  </header>
  <main class="text-white">
    <section
      class="flex justify-end py-[6.6vmax] px-[4vw] xl:max-w-[1800px] mx-auto"
    >
      <h1
        class="
          lg:w-[75%]
          xl:text-8xl
          text-6xl
          font-semibold
          leading-[1.1]
          px-4
          md:px-0
          font-sans
        "
      >
        Zoomoid is a young, aspiring artist and producer, based in Aachen,
        Germany. He's making electronic music with a concept and a heartbeat.
      </h1>
    </section>
    <section class="py-[6.6vmax] px-[4vw] xl:max-w-[1800px] mx-auto">
      <article class="flex justify-end mb-24" id="about">
        <div class="lg:w-[75%]">
          <div class="md:grid grid-cols-12 px-4 md:px-0">
            <div class="col-span-2">
              <div class="md:px-4 pb-4">
                <hr class="my-2 border-t-2 md:border-t" />
              </div>
            </div>
            <div class="col-span-1"></div>
            <div class="col-span-2 my-4 md:my-0">
              <p class="text-2xl md:text-normal font-sans md:font-serif">
                Intro
              </p>
            </div>
            <div class="col-span-7">
              <p class="text-2xl leading-normal">
                I've been tinkering around with electronic music for almost a
                decade now. My experiments with different styles lead to the
                genres I like today and such have in turn inspired new
                creations. Over the past years, I've learned that I want my
                music to be organic and harmonic, and that my instrument of
                choice is a synthesizer.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article class="flex justify-end" id="work">
        <div class="lg:w-[75%]">
          <div class="md:grid grid-cols-12 px-4 md:px-0">
            <div class="col-span-2">
              <div class="md:px-4 text-lg md:text-normal">2018-2021</div>
            </div>
            <div class="col-span-1"></div>
            <div class="col-span-2 my-4 md:my-0">
              <p class="text-2xl md:text-normal font-sans md:font-serif">
                Work
              </p>
            </div>
            <div class="col-span-7">
              <p class="text-2xl mb-4 lg:leading-normal">
                The first large release of Zoomoid landed in September 2018,
                with more quickly succeeding the album “Life Is About Making
                Memories".
              </p>
              <p class="text-2xl mb-4 leading-normal">
                In 2019, Zoomoid released his concept album “Eigenräume”, which,
                up to this day, is one of his proudest releases. The album was
                followed by a strong style change with “Public Transportation”,
                which some swear, was his best work yet. In December 2019,
                Zoomoid released “301 Permanently Moving”, a nerdy joke about
                HTTP, which introduced harder techno beats and a remix of one of
                his favourite tracks from “Eigenräume”, “Outer Space”.
              </p>
              <p class="text-2xl mb-4 leading-normal">
                The year 2020 saw Zoomoid releasing the “Shades of Yellow” EP in
                May, while the pandemic had most of us stuck at home. “Shades of
                Yellow” began to introduce more emotions into his music. Some
                say that this was the time, his talent to tell a story with his
                music came present. Later that year, he released “Voyager”, a
                tribute to his love for space and mankind's venture into the
                unknown. The 10-track album tells a story of leaving earth and
                the tracks unfold into a mixture of driving Techno and
                beautifully crafted melodies and harmonies.
              </p>
              <p class="text-2xl mb-4 leading-normal">
                2021 was his quietest year yet, only having released the
                super-emotional “Sehnsucht” EP, with sounds so soft and intimate
                that they hardly fit his previous profile. Nevertheless,
                “Sehnsucht” incorporates some classic Zoomoid elements such as
                recorded atmospheres from some of his favorite places and, once
                more, a remix version of one of his previous songs that is very
                dear to him, “Malheureux en Amour”.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="">
      <article
        class="md:flex justify-end py-[6.6vmax] px-[4vw]"
        v-for="r in releases"
        :key="r.title"
        :class="r.theme"
        :id="r.anchor"
      >
        <div
          class="
            md:grid
            grid-cols-12
            md:gap-y-4
            items-start
            lg:w-[75%]
            xl:max-w-[1800px]
            px-4
            md:px-0
          "
        >
          <span class="col-span-2 my-2">{{ r.date }}</span>
          <h1
            class="
              col-span-10
              font-semibold
              leading-none
              xl:text-8xl
              lg:text-7xl
              text-6xl
              font-sans
            "
            v-html="r.title"
          ></h1>
          <div class="col-span-2"></div>
          <div class="col-span-10 relative">
            <img
              class="lg:max-w-xl max-w-sm md:my-0 my-4 w-full"
              :src="r.cover.url"
              :alt="'Cover of ' + r.title"
            />
          </div>
          <div
            class="
              col-span-2
              my-4
              md:my-0
              text-2xl
              md:text-normal
              font-sans
              md:font-serif
            "
          >
            About
          </div>
          <div class="col-span-10">
            <p
              class="
                text-2xl
                leading-normal
                whitespace-pre-line
                xl:max-w-screen-md
              "
            >
              {{ r.about }}
            </p>
          </div>
          <div
            class="
              col-span-2
              my-4
              md:my-0
              text-2xl
              md:text-normal
              font-sans
              md:font-serif
            "
          >
            Listen
          </div>
          <div class="col-span-10 md:flex gap-4">
            <a
              v-for="l in r.listen"
              :key="l.title"
              :href="l.url"
              target="_blank"
              class="block text-xl font-semibold hover:underline"
              >{{ l.title }}</a
            >
          </div>
        </div>
      </article>
    </section>
    <section class="py-[6.6vmax] px-[4vw] xl:max-w-[1800px] mx-auto">
      <article class="flex justify-end mb-24" id="about">
        <div class="lg:w-[75%]">
          <div class="md:grid grid-cols-12 px-4 md:px-0">
            <div class="col-span-2">
              <div class="md:px-4 pb-4">
                <hr class="my-2 border-t-2 md:border-t" />
              </div>
            </div>
            <div class="col-span-1"></div>
            <div class="col-span-2 my-8 md:my-0">
              <p class="text-2xl md:text-normal font-sans md:font-serif">
                Biography
              </p>
            </div>
            <div class="col-span-7 text-2xl leading-normal">
              <p class="mb-4">
                I'm a self-taught musician and producer based in Aachen,
                Germany. Music has always been a big part of my life, so one day
                I decided to become a producer, instead of just plain consumer.
                I'm a huge nerd and quickly got stuck with electronic music
                production, synthesizers and effects, to a point where I have
                vast knowledge, both theoretically and practically, about
                various mechanisms to create sounds, analyze them, and process
                them.
              </p>
              <p class="mb-4">
                I started studying Computer Science at RWTH Aachen University in
                2016, and am currently on track of finishing my master's in
                2022. A solid portion of theoretical knowledge comes from these
                courses, which I then connected with practical expertise from
                acting as Zoomoid.
              </p>
              <p class="mb-4">
                I'd someday like to get into synthesizer programming and write
                audio software, which, I reckon, would benefit from my existing
                skills as a programmer of various languages. Until then, I'm by
                day working with Web Technologies, Kubernetes, microservices,
                and distributed architectures, and make electronic music by
                night as Zoomoid.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section
      class="flex justify-end py-[6.6vmax] px-[4vw] xl:max-w-[1800px] mx-auto"
    >
      <h1
        class="
          lg:w-[75%]
          text-7xl
          xl:text-9xl
          lg:text-9xl
          font-semibold
          leading-[1.1]
          px-4
          md:px-0
          font-sans
        "
      >
        <a href="mailto:hello@zoomoid.de"
          ><span class="border-b border-solid border-white">Get in Touch.</span>
        </a>
      </h1>
    </section>
  </main>
  <footer class="py-[6.6vmax] px-[4vw] text-white">
    <div class="xl:max-w-[1800px] mx-auto flex justify-end">
      <div
        class="
          lg:w-[75%]
          w-full
          md:grid
          grid-cols-12
          font-medium
          tracking-wide
          px-4
          md:px-0
        "
      >
        <div class="col-span-9 md:grid grid-cols-9">
          <div class="col-span-3 md:mb-0 mb-4">Zoomoid</div>
          <div class="col-span-6">
            <a class="block" href="https://zoomoid.de">https://zoomoid.de</a>
            <a class="block" href="mailto:hello@zoomoid.de">hello@zoomoid.de</a>
            <p>&nbsp;</p>
            <p class="text-sm">
              Made with Nuxt 3, TailwindCSS, and coffee on a cold day
            </p>
            <p class="text-sm">Inspired by Squarespace's Suhama</p>
          </div>
        </div>
        <div class="col-span-3 md:mt-0 mt-4">
          <div class="" v-for="s in socials" :key="s.title">
            <a :href="s.url" target="_blank">{{ s.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { ref } from 'vue';

export default defineComponent({
  name: "Index",
  methods: {},
  setup() {
    const showNav = ref(false);
    return {
      showNav,
      navActions: [
        {
          title: "Instagram",
          url: "https://instagram.com/zoomoid",
        },
        {
          title: "Spotify",
          url: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
        },
        {
          title: "SoundCloud",
          url: "https://soundcloud.com/zoomoid",
        },
        {
          title: "Bandcamp",
          url: "https://zoomoid.bandcamp.com/",
        },
        {
          title: "Apple Music",
          url: "https://music.apple.com/de/artist/zoomoid/1390354057",
        },
      ],
      releases: [
        {
          theme: ["text-white", "bg-black"],
          title: "Life Is About Making Memories",
          cover: {
            url: "../assets/img/liamm.jpg",
          },
          anchor: "life-is-about-making-memories",
          date: "Sep 22, 2018",
          about: `“Life Is About Making Memories” is Zoomoid's first proper album release. It features 11 tracks, a proper intro and outro, and tries to hit those nostalgia notes, with tracks thematically and sonically covering video games, movies, tv series, and moments from childhood in the early 2000s, when things were simpler and he had to care less.`,
          listen: [
            {
              title: "Spotify",
              url: "https://open.spotify.com/album/2zF1wOwINENOR1fTGLqBEF",
            },
            {
              title: "Apple Music",
              url: "https://music.apple.com/de/album/life-is-about-making-memories/1437311634",
            },
            {
              title: "YouTube Music",
              url: "https://music.youtube.com/playlist?list=OLAK5uy_mH5I0KnVAn5dBr79zfLhR_eZlghXeo3qs",
            },
            {
              title: "Bandcamp",
              url: "https://zoomoid.bandcamp.com/album/life-is-about-making-memories",
            },
          ],
        },
        {
          theme: ["text-black", "bg-white"],
          title: "Eigenräume",
          cover: {
            url: "../assets/img/eigenräume_pre.jpg",
          },
          anchor: "eigenräume-standard-edition",
          date: "May 14, 2019",
          about: `“Eigenräume” is the first (and incomplete) version of the concept album, which featured the main tracks of the full album in their standalone versions. To get the full listening experience, listen to the full version below!`,
          listen: [
            {
              title: "Spotify",
              url: "https://open.spotify.com/album/3YaUvYAudEXEuCJzoONcgE",
            },
            {
              title: "YouTube Music",
              url: "https://music.youtube.com/playlist?list=OLAK5uy_lVUbQEvad7LvTipB83h-seZwK7-BVDFA8",
            },
            {
              title: "Bandcamp",
              url: "https://zoomoid.bandcamp.com/album/eigenr-ume-standard-edition",
            },
          ],
        },
        {
          theme: ["text-black", "bg-[#c80a0a]"],
          title: "Eigenräume (Extended Edition)",
          cover: {
            url: "../assets/img/eigenräume.jpg",
          },
          anchor: "eigenräume-extended-edition",
          date: "Sep 09, 2019",
          about: `“Eigenräume (Extended Edition)” is 2019's main Zoomoid release, with 11 tracks (again), intro and outro, and seamless blending of tracks (at least on the first 7 tracks)! It also features 3 tracks that were written after the original concept album was created, but seemed to fit the overall context. In particular, Zoomoid is proud of “Outer Space”`,
          listen: [
            {
              title: "Spotify",
              url: "https://open.spotify.com/album/1N5yphubnUoyuk4hg8cP5n",
            },
            {
              title: "Apple Music",
              url: "https://music.apple.com/de/album/eigenr%C3%A4ume-extended-edition/1478203701",
            },
            {
              title: "YouTube Music",
              url: "https://music.youtube.com/playlist?list=OLAK5uy_nIS2H55WdkbM-7y2rkHzOnFi6LMFtHC7A",
            },
            {
              title: "Bandcamp",
              url: "https://zoomoid.bandcamp.com/album/eigenr-ume-extended-edition",
            },
            {
              title: "SoundCloud",
              url: "https://soundcloud.com/zoomoid/sets/eigenraume-extended-edition",
            },
          ],
        },
        {
          theme: ["text-white", "bg-blue-800"],
          title: "Public Transpor&shy;tation EP",
          cover: {
            url: "../assets/img/public_transportation.jpg",
          },
          anchor: "public-transportation",
          date: "Nov 1, 2019",
          about: `“In December, 2018, returning from a night of party in Münster, Germany, via trains, I travelled through several stations I never had been to before.
          The charismatic voice of Ingo Ruff, freshly fallen snow that covered lonely fields along the way, and a slight hangover of the tequila from the previous
          night lead to the idea to make an EP from numberous impressions saved from years of using public transport almost every weekend.

          The idea got burried in a notebook for a year until I picked it up and sketched a trip on my usual train route through some cities in NRW.

          It's real, it's honest, it's got sharp edges and it's certainly different to my other work in that year. Yet, it's a favourite of a lot of people for exactly that reason.”
          — Zoomoid`,
          listen: [
            {
              title: "Spotify",
              url: "https://open.spotify.com/album/7r0wQNMWcf2vno7O2trwQt",
            },
            {
              title: "Apple Music",
              url: "https://music.apple.com/de/album/public-transportation-ep/1484512656",
            },
            {
              title: "YouTube Music",
              url: "https://music.youtube.com/playlist?list=OLAK5uy_m9DdphTFE4Dnqo7s3wLbXhH-RHsG3OYnM",
            },
            {
              title: "Bandcamp",
              url: "https://zoomoid.bandcamp.com/album/public-transportation",
            },
            {
              title: "SoundCloud",
              url: "https://soundcloud.com/zoomoid/sets/public-transportation",
            },
          ],
        },
        {
          theme: ["text-white", "bg-black"],
          title: "301 Permanently Moving",
          cover: {
            url: "../assets/img/301.jpg",
          },
          anchor: "301-permanently-moving",
          date: "Dec 13, 2019",
          about: `“301 Permanently Moving” is a nerdy joke and tribute to the HTTP protocol, which drives the internet, where the status 301 indicates that a web page has moved permanently. The tracks on this EP have the potential to get you moving, with hard-driving Techno and a reworked version of Outer Space!`,
          listen: [
            {
              title: "Spotify",
              url: "https://open.spotify.com/album/4gr5rmKZn5pkFISvITsHrI",
            },
            {
              title: "Apple Music",
              url: "https://music.apple.com/de/album/301-moved-permanently/1489867904",
            },
            {
              title: "YouTube Music",
              url: "https://music.youtube.com/playlist?list=OLAK5uy_l9yZHjL4QxhvI-8lLCtNC-ccrsxarCqbs",
            },
            {
              title: "Bandcamp",
              url: "https://zoomoid.bandcamp.com/album/301-moving-permanently",
            },
          ],
        },
        {
          theme: ["text-black", "bg-[#f9b512]"],
          title: "Shades Of Yellow",
          cover: {
            url: "../assets/img/shades_of_yellow.jpg",
          },
          anchor: "shades-of-yellow",
          date: "May 1, 2020",
          about: `“Shades Of Yellow” is an emotional ode to the relationship I have with the color Yellow and the closest thing I've come to writing a love song. Both tracks move me in a very special way, and there are many many memories attached to them. I know some other people do as well and I hope, you can, too.`,
          listen: [
            {
              title: "Spotify",
              url: "https://open.spotify.com/album/5mpqQ6b776eEEOjywlkCzK",
            },
            {
              title: "Apple Music",
              url: "https://music.apple.com/de/album/shades-of-yellow-single/1533160788",
            },
            {
              title: "YouTube Music",
              url: "https://music.youtube.com/playlist?list=OLAK5uy_kcOz_jJERYOGJTH-8iFt0bCGpyq89_4VM",
            },
            {
              title: "Bandcamp",
              url: "https://zoomoid.bandcamp.com/album/shades-of-yellow",
            },
          ],
        },
        {
          theme: ["text-white", "bg-orange-600"],
          title: "Voyager",
          cover: {
            url: "../assets/img/voyager.jpg",
          },
          anchor: "voyager",
          date: "Oct 30, 2020",
          about: `“Voyager” is a journey away from earth into the darkness of space to discover the beauty of emptiness both inside and around you. Let yourself be taken away by an hour of listening experience of many-faced techno by yours truly, Zoomoid.`,
          listen: [
            {
              title: "Spotify",
              url: "https://open.spotify.com/album/6gQBxnohsIwgVsYgHzhoDs",
            },
            {
              title: "Apple Music",
              url: "https://music.apple.com/de/album/voyager/1535288340",
            },
            {
              title: "YouTube Music",
              url: "https://music.youtube.com/playlist?list=OLAK5uy_lohW1hx_OGGYKoI_gD6t7pP_xVDKbAZ38",
            },
            {
              title: "Bandcamp",
              url: "https://zoomoid.bandcamp.com/album/voyager",
            },
            {
              title: "SoundCloud",
              url: "https://soundcloud.com/zoomoid/sets/voyager",
            },
          ],
        },
        {
          theme: ["text-white", "bg-green-600"],
          title: "Sehnsucht",
          cover: {
            url: "../assets/img/sehnsucht.jpg",
          },
          anchor: "sehnsucht",
          date: "Mar 19, 2021",
          about: `“Sehnsucht” is a a 5-track acoustic instrumental album, featuring intimate instruments and a huge load of emotions. I wrote those tracks with the emotion of missing out and wishing for old times and new times at the same time, trying to express what I've been feeling for the last months. I love them all very dearly.`,
          listen: [
            {
              title: "Spotify",
              url: "https://open.spotify.com/album/66pDMQY2oaaNzDdlqeJxZn",
            },
            {
              title: "Apple Music",
              url: "https://music.apple.com/de/album/sehnsucht-ep/1558711572",
            },
            {
              title: "YouTube Music",
              url: "https://music.youtube.com/playlist?list=OLAK5uy_npljowOhh_kC1Cb8vFs83WU2R2XD--zZ4",
            },
            {
              title: "Bandcamp",
              url: "https://zoomoid.bandcamp.com/album/sehnsucht",
            },
            {
              title: "SoundCloud",
              url: "https://soundcloud.com/zoomoid/sets/sehnsucht-2",
            },
          ],
        },
      ],
      socials: [
        {
          title: "Instagram",
          url: "https://instagram.com/zoomoid",
        },
        {
          title: "Spotify",
          url: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
        },
        {
          title: "SoundCloud",
          url: "https://soundcloud.com/zoomoid",
        },
        {
          title: "Bandcamp",
          url: "https://zoomoid.bandcamp.com/",
        },
        {
          title: "Apple Music",
          url: "https://music.apple.com/de/artist/zoomoid/1390354057",
        },
      ],
    };
  },
});
</script>

<style lang="postcss">
.slide-in-enter-active,
.slide-in-leave-active {
  @apply transition-transform duration-200 motion-reduce:transition-none;
}
.slide-in-enter-from {
  transform: translateX(120%);
}
.slide-in-enter-to {
  transform: translateX(0%);
}
.slide-in-leave-from {
  transform: translateX(0%);
}
.slide-in-leave-to {
  transform: translateX(120%);
}
body {
  @apply bg-orange-600 font-serif;
}
</style>
