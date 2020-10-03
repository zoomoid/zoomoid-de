<template>
  <PageTemplate light accent="#0091EA"
    cover="https://cdn.occloxium.com/i/zoomoid/covers/public-transportation/standard.png" artist="Zoomoid"
    title="Public Transportation EP">
    <section class="content">
      <p>
        The
        <b>Public Transportation</b> EP is a concept LoFi HipHop/Electronic/Ambient immersive
        listening experience composed to accompany a train ride on a few stops in Northrhine-Westfalia.
      </p>
    </section>
    <div class="external">
      <div class="streaming">
        <h2>Stream!</h2>
        <div>
          <li v-for="item in streaming" :key="item.name">
            <SlideAnchor light :anchor="item.link" :name="item.name" />
          </li>
        </div>
      </div>
    </div>
    <div class="download">
      <h2>Listen &amp; Download</h2>
      <AudioManager class="players" :queue="this.queue"></AudioManager>
    </div>
  </PageTemplate>
</template>


<script>
import AudioManager from "@/components/AudioManager.vue";
import PageTemplate from "@/components/PageTemplate";
import SlideAnchor from "@/components/SlideAnchor";

export default {
  components: {
    AudioManager,
    PageTemplate,
    SlideAnchor
  },
  data: function() {
    return {
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
      buying: [],
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
      blockEmbedded:
        !this.$cookies.isKey("allowThirdPartyContent") ||
        this.$cookies.get("allowThirdPartyContent") === "false"
    };
  }
};
</script>
