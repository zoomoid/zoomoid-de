<template>
  <div>
    <breadcrumb></breadcrumb>
    <h1>Contact Zoomoid?</h1>
    <p>
      Zoomoid's available on almost all social platforms you can imagine. Here's
      a selection of some:
    </p>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb";

export default {
  name: "Contact",
  components: {
    Breadcrumb,
  },
  data: () => ({
    socials: [
      {
        label: "Instagram",
        url: "https://instagram.com/zoomoid",
        icon: {
          prefix: "fab",
          key: "fa-instagram",
        },
      },
      {
        label: "Apple Music",
        url: "https://music.apple.com/de/artist/zoomoid/1390354057",
        icon: {
          prefix: "fab",
          key: "fa-apple",
        },
      },
      {
        label: "Soundcloud",
        url: "https://soundcloud.com/zoomoid",
        icon: {
          prefix: "fab",
          key: "fa-soundcloud",
        },
      },
    ],
  }),
};
</script>

<style></style>
