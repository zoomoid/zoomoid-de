<template>
  <work-page :queue="queue">
    <template #title>
      <h2 v-html="artist">{{ artist }}</h2>
      <h1 v-html="title">{{ title }}</h1>
    </template>
    <template #content>
      <article v-html="content"></article>
    </template>
    <template #cover>
      <img :src="cover" />
    </template>
    <template #links>
      <h2>Streaming!</h2>
      <ul>
        <li v-for="item in streaming" :key="item.name">
          <a :href="item.link">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </template>
  </work-page>
</template>

<script>
import WorkPage from "@/components/WorkPage.vue";

export default {
  components: {
    WorkPage,
  },
  data: function () {
    return {
      artist: "Zoomoid",
      title: "Eigenräume",
      cover:
        "https://cdn.occloxium.com/i/zoomoid/covers/eigenräume/standard.png",
      content: `<p>
        <b>Eigenräume</b> is the follow-up EP from Zoomoid. Purely original,
        emotionally expressive and full of art. Each title is seemingly random yet
        precisely and carefully chosen. Six tracks take you on a journey of some
        remarkable places Alex calls his "Eigenräume", places very dear to his heart.
        Weeks of dedication to the music and countless revisions went into this
        EP, so you better like it! Show it some love and tell your friends about it!
        I would appreciate you listening to Eigenräume on Spotify, Apple Music,
        Deezer and so on. You supporting me means the absolute world to me!
        However, I want everybody to enjoy it equally, hence I provide it for download
        for free here.
      </p>`,
      streaming: [
        {
          name: "Spotify",
          link: "https://open.spotify.com/album/3YaUvYAudEXEuCJzoONcgE",
        },
        {
          name: "Apple Music",
          link: "https://itunes.apple.com/de/album/eigenr%C3%A4ume/1462054888",
        },
        {
          name: "Deezer",
          link: "https://www.deezer.com/de/album/95294192",
        },
        {
          name: "Amazon Music",
          link: "https://www.amazon.de/Eigenr%C3%A4ume-Zoomoid/dp/B07R92N45D/",
        },
        {
          name: "iTunes",
          link: "https://itunes.apple.com/de/album/eigenr%C3%A4ume/1462054888",
        },
      ],
      queue: [
        {
          id: 1,
          url:
            "https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Stockholm.mp3",
          name: "Stockholm",
          tags: [],
        },
        {
          id: 2,
          url:
            "https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Großstadt.mp3",
          name: "Großstadt",
          tags: [],
        },
        {
          id: 3,
          url:
            "https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Schöneberg%20At%20Night.mp3",
          name: "Schöneberg At Night",
          tags: [],
        },
        {
          id: 4,
          url:
            "https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Höllental.mp3",
          name: "Höllental",
          tags: [],
        },
        {
          id: 5,
          url:
            "https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Heimat.mp3",
          name: "Heimat",
          tags: [],
        },
        {
          id: 6,
          url:
            "https://cdn.occloxium.com/a/zoomoid/eigenraeume/standard/Blaues%20Land.mp3",
          name: "Blaues Land",
          tags: [],
        },
      ],
    };
  },
};
</script>
