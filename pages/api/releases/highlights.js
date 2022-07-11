import { releases } from ".";

const highlights = releases.map((release) => ({
  title: release._title,
  date: release.date,
  url: `/work/${release.anchor}`,
  topics: release.topics,
}))

export default function handler(req, res) {
  res.status(200).json([...highlights]);
}