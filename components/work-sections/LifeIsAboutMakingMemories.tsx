import Image from "next/image";
import liamm from "public/img/covers/liamm.jpeg";
import liamm_banner_vectorized from "public/img/assets/liamm-banner-vectorized.svg";

import albuquerque from "public/waveforms/life-is-about-making-memories/albuquerque.svg";
import dovahkiin from "public/waveforms/life-is-about-making-memories/dovahkiin.svg";
import iwfahe from "public/waveforms/life-is-about-making-memories/i wished for a happy ending.svg";
import intro from "public/waveforms/life-is-about-making-memories/intro.svg";
import linebeck from "public/waveforms/life-is-about-making-memories/linebeck.svg";
import metro from "public/waveforms/life-is-about-making-memories/metro.svg";
import outro from "public/waveforms/life-is-about-making-memories/outro.svg";
import summer from "public/waveforms/life-is-about-making-memories/summer.svg";
import utopia from "public/waveforms/life-is-about-making-memories/utopia.svg";
import ww from "public/waveforms/life-is-about-making-memories/wild world (vip mix).svg";
import winter from "public/waveforms/life-is-about-making-memories/winter.svg";
import Tracklist from "./Tracklist";
import Track from "@/components/interactive/Track";

export default function LifeIsAboutMakingMemories() {
  const tracks = [
    {
      title: "Intro",
      waveform: intro,
      artist: "Zoomoid",
    },
    {
      title: "Albuquerque",
      waveform: albuquerque,
      artist: "Zoomoid",
    },
    {
      title: "Summer",
      waveform: summer,
      artist: "Zoomoid",
    },
    {
      title: "Linebeck",
      waveform: linebeck,
      artist: "Zoomoid",
    },
    {
      title: "Utopia",
      waveform: utopia,
      artist: "Zoomoid",
    },
    {
      title: "I Wished for a Happy Ending",
      waveform: iwfahe,
      artist: "Zoomoid",
    },
    {
      title: "Dovakhiin",
      waveform: dovahkiin,
      artist: "Zoomoid",
    },
    {
      title: "Wild World (VIP Mix)",
      waveform: ww,
      artist: "Zoomoid",
    },
    {
      title: "Metro",
      waveform: metro,
      artist: "Zoomoid",
    },
    {
      title: "Winter",
      waveform: winter,
      artist: "Zoomoid",
    },
    {
      title: "Outro",
      waveform: outro,
      artist: "Zoomoid",
    },
  ];

  return (
    <section
      id="life-is-about-making-memories"
      className="bg-neutral-900 text-neutral-200 py-8 md:py-32 relative overflow-hidden"
    >
      <div className="absolute right-0 transform -translate-x-20 -rotate-45 scale-[3] opacity-5">
        <Image className="invert" src={liamm_banner_vectorized} alt="" />
      </div>
      <div className="container max-w-screen-2xl lg:grid grid-cols-2 gap-16 justify-items-center">
        <div>
          <h2 className="font-sans font-semibold uppercase text-4xl md:text-6xl my-4">
            Life Is About Making Memories
          </h2>
          <p className="text-lg md:text-2xl leading-normal">
            “Life Is About Making Memories” is Zoomoid&apos;s first proper album
            release. It features 11 tracks, a proper intro and outro, and tries
            to hit those nostalgia notes, with tracks thematically and sonically
            covering video games, movies, tv series, and moments from childhood
            in the early 2000s, when things were simpler and he had to care
            less.
          </p>
        </div>
        <div>
          <div className="">
            {/* <span className="block my-4 font-sans uppercase">Cover Image</span> */}
            <Image className="mix-blend-screen" src={liamm} placeholder="blur" alt="" />
          </div>
        </div>
        <div className="col-span-2 w-full">
          <ol className="list-decimal">
            {tracks.map((track) => {
              return (
                <Track
                  key={track.title}
                  textColor={"text-neutral-200"}
                  waveformEffect="invert"
                  track={track}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
