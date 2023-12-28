"use client";

import { useContext, useRef } from "react";
import Biography from "./Biography";
import Album from "./Album";
import { LocaleContext } from "@/context/locale.context";
import { PlayerContextProvider } from "@/context/player.context";

export default function Mainmatter() {
  const albumSkipRef = useRef<HTMLDivElement>(null);
  const { state } = useContext(LocaleContext);

  return (
    <>
      {state.lang === "de" ? (
        <Biography.DE skipRef={albumSkipRef}></Biography.DE>
      ) : (
        <Biography.EN skipRef={albumSkipRef}></Biography.EN>
      )}
      <PlayerContextProvider>
        <Album skipRef={albumSkipRef}></Album>
      </PlayerContextProvider>
    </>
  );
}
