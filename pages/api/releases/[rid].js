import { releases } from ".";

export default function handler(req, res) {
  const { rid } = req.query
  const release = releases.find((r) => r.anchor === rid)
  res.status(200).json({ ...release });
}
