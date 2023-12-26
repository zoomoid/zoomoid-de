"use client";

import { useRef } from "react"
import Biography from "./Biography";
import Album from "./Album";

export default function Mainmatter() {
  const albumSkipRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Biography skipRef={albumSkipRef}></Biography>
      <Album skipRef={albumSkipRef}></Album>
    </>
  )
}