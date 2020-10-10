<template>
  <work-page :queue="queue">
    <template #title>
      <h2>{{ artist }}</h2>
      <h1>{{ title }}</h1>
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
      artist: "Diode Eins",
      title: "Schwerelos - Zoomoid Remix",
      content: `<p>
        In 2019, I asked the fellow DJs and producers of
        <a href="https://soundcloud.com/diodeeins" target="_blank">Diode Eins</a> if I could remix a track of theirs.
        We settled on their track "Schwerelos", which then got a makeover from me.
        They are rising stars to be, give them every bit of love for Techno you got!
      </p>`,
      cover: "https://cdn.occloxium.com/i/zoomoid/covers/schwerelos-zoomoid-remix/cover.png",
      streaming: [
        {
          name: "Spotify",
          link: "https://open.spotify.com/track/1UsussokjrnR2Sgpskrdzz"
        },
        {
          name: "Apple Music",
          link:
            "https://music.apple.com/us/album/schwerelos-zoomoid-remix-single/1493720052"
        }
      ],
      buying: [],
      queue: [],
    };
  }
};
</script>
