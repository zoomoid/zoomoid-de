export default function handler(req, res) {
  res.status(200).json({
    socials: [
      {
        title: "Instagram",
        url: "https://instagram.com/zoomoid",
      },
      {
        title: "Spotify",
        url: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
      },
      {
        title: "SoundCloud",
        url: "https://soundcloud.com/zoomoid",
      },
      {
        title: "Bandcamp",
        url: "https://zoomoid.bandcamp.com/",
      },
      {
        title: "Apple Music",
        url: "https://music.apple.com/de/artist/zoomoid/1390354057",
      },
    ],
  });
}
