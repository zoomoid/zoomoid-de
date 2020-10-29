<template>
  <div class="container flex-grow mb-12 mx-auto md:px-0 px-8">
      <breadcrumb></breadcrumb>
      <h1 class="text-6xl leading-none mt-6 tracking-tight">Zoomoid's Discography</h1>
      <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-2 grid-cols-1 py-8">
        <release-card
          v-for="(r) in releases"
          :key="r.contentID"
          :src="r.coverUrl"
          :alt="r.contentID"
          :color="`${r.accent}2d`"
          :to="`/work/${r.contentID}`"
        >
          <template #text>
            <h3
              class="text-base mb-0 font-medium uppercase"
            >
              {{ r.artist }}
            </h3>
            <h2 class="mt-0 leading-tight">
              {{ r.title }}
            </h2>
          </template>
        </release-card>
      </div>
    </div>
</template>

<script>
import ReleaseCard from "../components/ReleaseCard.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  name: "Discography",
  components: {
    ReleaseCard,
    Breadcrumb,
  },
  data: () => ({
    releases: [
      {
        contentID: "shades-of-yellow",
        artist: "Zoomoid",
        title: "Shades Of Yellow",
        coverUrl:
          "https://cdn.occloxium.com/i/zoomoid/covers/shades-of-yellow/cover.png",
        date: "01.05.2020",
        id: "S02",
        accent: "#dbb100",
      },
      {
        contentID: "schwerelos-zoomoid-remix",
        artist: "Diode Eins",
        title: "Schwerelos (Zoomoid Remix)",
        coverUrl:
          "https://cdn.occloxium.com/i/zoomoid/covers/schwerelos-zoomoid-remix/cover.png",
        date: "10.01.2020",
        id: "S01",
        accent: "#0c0000",
      },
      {
        contentID: "301",
        artist: "zoomoid",
        title: "301 Moved Permanently",
        coverUrl: "https://cdn.occloxium.com/i/zoomoid/covers/301/standard.jpg",
        date: "13.12.2019",
        id: "A05",
        accent: "#030000",
      },
      {
        contentID: "public-transportation",
        artist: "zoomoid",
        title: "Public Transportation",
        coverUrl:
          "https://cdn.occloxium.com/i/zoomoid/covers/public-transportation/standard.png",
        date: "01.11.2019",
        id: "A04",
        accent: "#165091",
      },
      {
        contentID: "eigenräume-extended-edition",
        artist: "zoomoid",
        title: "Eigenräume (Extended Edition)",
        coverUrl:
          "https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/extended.png",
        date: "24.08.2019",
        id: "A03",
        accent: "#ea0000",
      },
      {
        contentID: "eigenräume-standard-edition",
        artist: "zoomoid",
        title: "Eigenräume",
        coverUrl:
          "https://cdn.occloxium.com/i/zoomoid/covers/eigenr%C3%A4ume/standard.png",
        date: "15.05.2019",
        id: "A02",
        accent: "#151515",
      },
      {
        contentID: "liamm",
        artist: "zoomoid",
        title: "Life Is About Making Memories",
        coverUrl: "https://cdn.occloxium.com/i/zoomoid/covers/liamm/cover.png",
        date: "22.09.2018",
        id: "A01",
        accent: "#000000",
      },
    ],
  }),

}
</script>

<style>

</style>
