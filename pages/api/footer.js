export default function handler(req, res) {
  res.status(200).json({
    sections: [
      {
        title: "Information",
        elements: [
          {
            title: "About Me",
            url: "/about",
            external: false
          },
          {
            title: "Blog",
            url: "https://zoomoid.dev/blog",
            external: true
          },
          {
            title: "Privacy Policy",
            url: "/privacy",
            external: false
          }
        ]
      },
      {
        title: "Socials",
        elements: [
          {
            title: "Instagram",
            url: "https://instagram.com/zoomoid",
            external: true
          },
          {
            title: "Spotify",
            url: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
            external: true
          },
          {
            title: "SoundCloud",
            url: "https://soundcloud.com/zoomoid",
            external: true
          },
          {
            title: "Bandcamp",
            url: "https://zoomoid.bandcamp.com/",
            external: true
          },
          {
            title: "Apple Music",
            url: "https://music.apple.com/de/artist/zoomoid/1390354057",
            external: true
          },
        ]
      }
    ],
    subtitle: "Zoomoid © 2015–2022",
    subsubtitle: "Made with NextJS, TailwindCSS, and coffee on a cold day"
  });
}
