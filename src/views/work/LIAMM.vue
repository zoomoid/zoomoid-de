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
      content: `<p><b>Life Is About Making Memories</b> is my first full-feature album! It is comprised of 11 songs
        and there are a lot of different gems on there, have a listen and decide for yourself which tracks you like
        the most. If you do, tell me about it on social media like Instagram or SoundCloud and tell your friends!
        I would appreciate you listening to Life Is About Making Memories on Spotify, Apple Music,
        Deezer and so on. You supporting me means the absolute world to me!
        However, I want everybody to enjoy it equally, hence I provide it for download
        for free here.</p>`,
      artist: "Zoomoid",
      title: "Life Is About Making Memories",
      cover: "https://cdn.occloxium.com/i/zoomoid/covers/liamm/cover.png",
      streaming: [
        {
          name: "Spotify",
          link:
            "https://open.spotify.com/album/2zF1wOwINENOR1fTGLqBEF?si=SCmmA64xS8qJas-lAOnTpg"
        },
        {
          name: "Apple Music",
          link:
            "https://music.apple.com/de/album/life-is-about-making-memories/1437311634"
        },
        {
          name: "Deezer",
          link: "https://www.deezer.com/de/album/74066782"
        },
        {
          name: "Amazon Music",
          link:
            "https://www.amazon.de/Life-About-Making-Memories-Zoomoid/dp/B07HNMR3L9/"
        },
        {
          name: "iTunes",
          link:
            "https://itunes.apple.com/de/album/life-is-about-making-memories/1437311634"
        }
      ]
    };
  }
};
</script>
