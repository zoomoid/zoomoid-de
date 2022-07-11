import { releases } from ".";

export default function handler(req, res) {
  const covers = releases.map((r) => r.cover.url)
  res.status(200).json([...covers]);
}
