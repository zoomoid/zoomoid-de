import Image from "next/future/image";
import liamm from "public/img/covers/liamm.jpg";
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

function Track({ waveform, title }) {
  return (
    <li className="py-2 list-item">
      <p>{title}</p>
      <Image className="max-w-xl w-full invert" src={waveform}></Image>
    </li>
  );
}

function Tracklist({ tracks }) {
  return (
    <ol className="list-decimal">
      {tracks.map((t) => {
        return <Track key={t.title} waveform={t.waveform} title={t.title}></Track>;
      })}
    </ol>
  );
}

export default function LifeIsAboutMakingMemories() {
  const tracks = [
    {
      title: "Intro",
      waveform: intro,
    },
    {
      title: "Albuquerque",
      waveform: albuquerque,
    },
    {
      title: "Summer",
      waveform: summer,
    },
    {
      title: "Linebeck",
      waveform: linebeck,
    },
    {
      title: "Utopia",
      waveform: utopia,
    },
    {
      title: "I Wished for a Happy Ending",
      waveform: iwfahe,
    },
    {
      title: "Dovakhiin",
      waveform: dovahkiin,
    },
    {
      title: "Wild World (VIP Mix)",
      waveform: ww,
    },
    {
      title: "Metro",
      waveform: metro,
    },
    {
      title: "Winter",
      waveform: winter,
    },
    {
      title: "Outro",
      waveform: outro,
    },
  ];

  return (
    <section
      id="life-is-about-making-memories"
      className="bg-neutral-900 text-neutral-200 py-32 relative overflow-hidden"
    >
      <div className="absolute right-0 transform -translate-x-20 -rotate-45 scale-[3] opacity-5">
        <Image className="invert" src={liamm_banner_vectorized}></Image>
      </div>
      <div className="container max-w-screen-2xl lg:grid grid-cols-2 gap-8">
        <div>
          <h2 className="font-sans font-semibold uppercase text-6xl my-4">
            “Life Is About Making Memories”
          </h2>
          <p className="text-2xl leading-normal">
            “Life Is About Making Memories” is Zoomoid&apos;s first proper album
            release. It features 11 tracks, a proper intro and outro, and tries
            to hit those nostalgia notes, with tracks thematically and sonically
            covering video games, movies, tv series, and moments from childhood
            in the early 2000s, when things were simpler and he had to care
            less.
          </p>
          <div className="my-16">
            <span className="block my-4 font-sans uppercase">Cover Image</span>
            <Image className="mix-blend-screen" src={liamm}></Image>
          </div>
        </div>
        <div>
          <h3 className="font-sans text-2xl font-semibold tracking-wide uppercase mt-8">
            Tracks
          </h3>
          <Tracklist tracks={tracks}></Tracklist>
        </div>
      </div>
    </section>
  );
}
