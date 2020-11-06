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
  data: function() {
    return {
      title: "Public Tran&shy;spor&shy;ta&shy;tion EP",
      artist: "Zoomoid",
      cover: "https://cdn.occloxium.com/i/zoomoid/covers/public-transportation/standard.png",
      content: `<p>
        The
        <b>Public Transportation</b> EP is a concept LoFi HipHop/Electronic/Ambient immersive
        listening experience composed to accompany a train ride on a few stops in Northrhine-Westfalia.
      </p>`,
      streaming: [
        {
          name: "Spotify",
          link: "https://open.spotify.com/album/7r0wQNMWcf2vno7O2trwQt"
        },
        {
          name: "Apple Music",
          link:
            "https://music.apple.com/de/album/public-transportation-ep/1484512656"
        }
      ],
      queue: [
        {
          id: 1,
          name: "Stargazing",
          url:
            "https://cdn.occloxium.com/a/zoomoid/public-transportation/01_stargazing.mp3",
          tags: ["Dormagen"]
        },
        {
          id: 2,
          name: "Downhill",
          url:
            "https://cdn.occloxium.com/a/zoomoid/public-transportation/02_downhill.mp3",
          tags: ["Köln Hbf"]
        },
        {
          id: 3,
          name: "Say It",
          url:
            "https://cdn.occloxium.com/a/zoomoid/public-transportation/03_say%20it.mp3",
          tags: ["Aachen Rothe-Erde"]
        },
        {
          id: 4,
          name: "Volksgarten",
          url:
            "https://cdn.occloxium.com/a/zoomoid/public-transportation/04_volksgarten.mp3",
          tags: ["Düsseldorf Hbf"]
        },
        {
          id: 5,
          name: "Me&shy;lan&shy;cho&shy;lic Me&shy;di&shy;ta&shy;tion",
          url:
            "https://cdn.occloxium.com/a/zoomoid/public-transportation/05_melancholic%20meditation.mp3",
          tags: ["Aachen West"]
        },
        {
          id: 6,
          name: "Delay",
          url:
            "https://cdn.occloxium.com/a/zoomoid/public-transportation/06_delay.mp3",
          tags: []
        }
      ],
    };
  }
};
</script>
