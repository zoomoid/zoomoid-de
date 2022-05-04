import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  const releases = [
    {
      theme: ["text-white", "bg-black"],
      title: "Life Is About Making Memories",
      cover: {
        url: "/img/liamm.jpg",
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
        url: "/img/eigenräume_pre.jpg",
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
        url: "/img/eigenräume.jpg",
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
        url: "/img/public_transportation.jpg",
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
        url: "/img/301.jpg",
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
        url: "/img/shades_of_yellow.jpg",
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
        url: "/img/voyager.jpg",
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
        url: "/img/sehnsucht.jpg",
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
    {
      theme: ["text-white", "bg-[#0a0f12]"],
      title: "Im Schatten Der Nacht",
      cover: {
        url: "/img/im_schatten_der_nacht.jpg",
      },
      anchor: "im-schatten-der-nacht",
      date: "Dec 17, 2021",
      about: `“Im Schatten Der Nacht” is a small driving Techno EP that comes to live when leaving the club early in the morning and heading home while still buzzing from the night before.`,
      listen: [
        {
          title: "Spotify",
          url: "https://open.spotify.com/album/7f4KBtXh4qiKwaItN8Gsfa",
        },
        {
          title: "Apple Music",
          url: "https://music.apple.com/de/album/im-schatten-der-nacht-single/1598757541",
        },
        {
          title: "YouTube Music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_lOu4um5kTsOIgAbx2awbQAElVVlqdQqmg",
        },
        {
          title: "Bandcamp",
          url: "https://zoomoid.bandcamp.com/album/im-schatten-der-nacht",
        },
        {
          title: "SoundCloud",
          url: "https://soundcloud.com/zoomoid/sets/im-schatten-der-nacht",
        },
      ],
    },
  ];
  const nav = [
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
  ];
  const socials = [
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
  ];

  const releasesSections = releases.map((release) => (
    <Section key={release.title} release={release}></Section>
  ));

  return (
    <div>
      <Head>
        <title>zoomoid.de</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header nav={nav}></Header>
      <main className="text-white">
        <section className="flex justify-end py-[6.6vmax] lg:py-[1.6vmax] px-[4vw] xl:max-w-[1800px] mx-auto">
          <div className="lg:w-[75%] px-4 md:px-0 relative">
            <div className="relative mb-8">
              <Image
                layout="responsive"
                src="/img/banner.jpg"
                alt="Zoomoid at a busstop gazing into the night"
                width={2500}
                height={1095}
              ></Image>
            </div>
            <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl font-semibold  font-sans">
              Zoomoid is a young, aspiring artist and producer, based in Aachen,
              Germany. He&apos;s making electronic music with a concept and a
              heartbeat.
            </h1>
          </div>
        </section>
        <section className="py-[6.6vmax] px-[4vw] xl:max-w-[1800px] mx-auto">
          <article id="about" className="flex justify-end mb-24">
            <div className="lg:w-[75%]">
              <div className="md:grid grid-cols-12 px-4 md:px-0">
                <div className="col-span-2">
                  <div className="md:px-4 pb-4">
                    <hr className="my-2 border-t-2 md:border-t" />
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 my-4 md:my-0">
                  <p className="text-2xl md:text-normal font-sans md:font-serif">
                    Intro
                  </p>
                </div>
                <div className="col-span-7 text-xl sm:text-2xl leading-normal">
                  <p className="">
                    I&apos;ve been tinkering around with electronic music for almost
                    a decade now. My experiments with different styles lead to
                    the genres I like today and such have in turn inspired new
                    creations. Over the past years, I&apos;ve learned that I want my
                    music to be organic and harmonic, and that my instrument of
                    choice is a synthesizer.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article id="work" className="flex justify-end">
            <div className="lg:w-[75%]">
              <div className="md:grid grid-cols-12 px-4 md:px-0">
                <div className="col-span-2">
                  <div className="md:px-4 text-lg md:text-normal">
                    2018-2021
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 my-4 md:my-0">
                  <p className="text-2xl md:text-normal font-sans md:font-serif">
                    Work
                  </p>
                </div>
                <div className="col-span-7 text-xl sm:text-2xl leading-normal">
                  <p className="mb-4">
                    The first large release of Zoomoid landed in September 2018,
                    with more quickly succeeding the album “Life Is About Making
                    Memories”.
                  </p>
                  <p className="mb-4">
                    In 2019, Zoomoid released his concept album “Eigenräume”,
                    which, up to this day, is one of his proudest releases. The
                    album was followed by a strong style change with “Public
                    Transportation”, which some swear, was his best work yet. In
                    December 2019, Zoomoid released “301 Permanently Moving”, a
                    nerdy joke about HTTP, which introduced harder techno beats
                    and a remix of one of his favourite tracks from
                    “Eigenräume”, “Outer Space”.
                  </p>
                  <p className="mb-4">
                    The year 2020 saw Zoomoid releasing the “Shades of Yellow”
                    EP in May, while the pandemic had most of us stuck at home.
                    “Shades of Yellow” began to introduce more emotions into his
                    music. Some say that this was the time, his talent to tell a
                    story with his music came present. Later that year, he
                    released “Voyager”, a tribute to his love for space and
                    mankind&apos;s venture into the unknown. The 10-track album tells
                    a story of leaving earth and the tracks unfold into a
                    mixture of driving Techno and beautifully crafted melodies
                    and harmonies.
                  </p>
                  <p className="mb-4">
                    2021 was his quietest year yet, only having released the
                    super-emotional “Sehnsucht” EP, with sounds so soft and
                    intimate that they hardly fit his previous profile.
                    Nevertheless, “Sehnsucht” incorporates some classic Zoomoid
                    elements such as recorded atmospheres from some of his
                    favorite places and, once more, a remix version of one of
                    his previous songs that is very dear to him, “Malheureux en
                    Amour”.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section>{releasesSections}</section>
      </main>
      <Footer socials={socials}></Footer>
    </div>
  );
}
