"use client";

import { useRef } from "react"
import Preamble from "./Preamble";
import Album from "./Album";

export default function Container() {

  const albumSkipRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Preamble skipRef={albumSkipRef}></Preamble>
      <Album skipRef={albumSkipRef}></Album>
    </>
  )
}