export default function handler(req, res) {
  res.status(200).json([
    {
      title: "Work",
      url: "/work",
      external: false,
    },
    {
      title: "Blog",
      url: "https://zoomoid.dev/blog",
      external: true,
    },
    {
      title: "About",
      url: "/about",
      external: false,
    },
  ]);
}
