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
      cover: "https://cdn.occloxium.com/i/zoomoid/covers/301/standard.jpg",
      title: "301 Moved Permanently",
      artist: "Zoomoid",
      content: `<p>
        <b>301 Moved Permanently</b> is a 4-track Techno EP scheduled and the
        last release of 2019. It's one last nerdy joke for the decade, dedicated
        to the amount of code I've written in 2019.
      </p>`,
      streaming: [
        {
          name: "Spotify",
          link: "https://open.spotify.com/album/4gr5rmKZn5pkFISvITsHrI"
        },
        {
          name: "Apple Music",
          link:
            "https://music.apple.com/us/album/301-moved-permanently/1489867904"
        }
      ],
      queue: [
        {
          id: 1,
          name: "Monarch",
          url: "https://cdn.occloxium.com/a/zoomoid/301/01_Monarch.mp3",
          tags: []
        },
        {
          id: 2,
          name: "Doppler",
          url: "https://cdn.occloxium.com/a/zoomoid/301/02_Doppler.mp3",
          tags: []
        },
        {
          id: 3,
          name: "Elektron",
          url: "https://cdn.occloxium.com/a/zoomoid/301/03_Elektron.mp3",
          tags: []
        },
        {
          id: 4,
          name: "Outer Space (Rework)",
          url:
            "https://cdn.occloxium.com/a/zoomoid/301/04_Outer%20Space%20(Rework).mp3",
          tags: []
        }
      ],
    };
  }
};
</script>
