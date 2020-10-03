<template>
  <PageTemplate dark cover="https://cdn.occloxium.com/i/zoomoid/covers/schwerelos-zoomoid-remix/cover.png"
  artist="Diode Eins" title="Schwerelos - Zoomoid Remix">
    <section class="content">
      <p>
        In 2019, I asked the fellow DJs and producers of
        <a href="https://soundcloud.com/diodeeins" target="_blank">Diode Eins</a> if I could remix a track of theirs.
        We settled on their track "Schwerelos", which then got a makeover from me.
        They are rising stars to be, give them every bit of love for Techno you got!
      </p>
    </section>
    <div class="external">
      <div class="streaming">
        <h2>Stream!</h2>
        <div>
          <li v-for="item in streaming" :key="item.name">
            <SlideAnchor dark :anchor="item.link" :name="item.name" />
          </li>
        </div>
        <iframe
          src="https://open.spotify.com/embed/track/1UsussokjrnR2Sgpskrdzz"
          width="100%"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  </PageTemplate>
</template>


<script>
import SlideAnchor from "@/components/SlideAnchor.vue";
import PageTemplate from "@/components/PageTemplate.vue";

export default {
  components: {
    SlideAnchor,
    PageTemplate,
  },
  data: function() {
    return {
      theme: "dark",
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
      blockEmbedded:
        !this.$cookies.isKey("allowThirdPartyContent") ||
        this.$cookies.get("allowThirdPartyContent") === "false"
    };
  }
};
</script>
