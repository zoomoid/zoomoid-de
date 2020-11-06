<template>
  <work-page :queue="this.queue">
    cover="" artist="Zoomoid" title="Shades of Yellow">
    <template #title>
      <h2>Zoomoid</h2>
      <h1>Shades of Yellow</h1>
    </template>
    <template #cover>
      <img :src="cover" alt="Cover of Shades of Yellow by Zoomoid" />
    </template>
    <template #content>
      <p v-html="content"></p>
    </template>
    <template #links>
      <h2>Stream!</h2>
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
import WorkPage from "../../components/WorkPage";

export default {
  components: {
    WorkPage,
  },
  data: function () {
    return {
      content: `The <b>Shades of Yellow</b> EP combines several feelings from the last
        months. Do I need to say more?`,
      streaming: [
        {
          name: "Spotify",
          link: "https://open.spotify.com/album/2I2D60pkjobXBi4vPfxLBh",
        },
        {
          name: "Apple Music",
          link:
            "https://music.apple.com/de/album/shades-of-yellow-single/1510331967",
        },
      ],
      cover:
        "https://cdn.occloxium.com/i/zoomoid/covers/shades-of-yellow/cover.png",
      buying: [],
      queue: [
        {
          id: 1,
          name: "Shades of Yellow",
          url:
            "https://cdn.occloxium.com/a/zoomoid/shades-of-yellow/Shades%20of%20Yellow.mp3",
          tags: ["House", "120bpm"],
        },
        {
          id: 2,
          name: "Malhereux en Amour",
          url:
            "https://cdn.occloxium.com/a/zoomoid/shades-of-yellow/Malheureux%20en%20Amour.mp3",
          tags: ["Electronic", "90bpm"],
        },
      ],
    };
  },
};
</script>
