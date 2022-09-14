import Image from "next/future/image";
import sehnsucht_cover from "public/img/covers/sehnsucht.jpeg";
import was_war from "public/waveforms/sehnsucht/Was War.svg";
import tueren from "public/waveforms/sehnsucht/Türen.svg";
import was_ist from "public/waveforms/sehnsucht/Was Ist.svg";
import malheureux_en_amour from "public/waveforms/sehnsucht/Malheureux en Amour (Acoustic Version).svg";
import was_bleibt from "public/waveforms/sehnsucht/Was Bleibt.svg";
import useIntersection from "./intersections";

export default function Sehnsucht(props) {
  const navigationThemeUpdate = props.onScrollOver ?? ((_) => ({}));

  const [box, effect] = useIntersection(navigationThemeUpdate, {
    text: "text-neutral-900",
    bg: "bg-black",
  });

  effect();

  const tracks = [
    {
      title: "Was War",
      waveform: was_war,
      artist: "Zoomoid",
    },
    {
      title: "Türen",
      waveform: tueren,
      artist: "Zoomoid",
    },
    {
      title: "Was Ist",
      waveform: was_ist,
      artist: "Zoomoid",
    },
    {
      title: "Malheureux en Amour (Acoustic Version)",
      waveform: malheureux_en_amour,
      artist: "Zoomoid",
    },
    {
      title: "Was Bleibt",
      waveform: was_bleibt,
      artist: "Zoomoid",
    },
  ];

  return (
    <section
      id="sehnsucht"
      className="bg-stone-100 text-stone-900 py-8 md:py-32 overflow-hidden relative"
    >
      {box}
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-0 isolate">
        {/* <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-neutral-900 bg-opacity-50 z-10"></div>
        <div
          className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-cover z-0 saturate-[0.25] blur-md"
          style={{
            backgroundImage: "url(/img/im-schatten-der-nacht-bg.jpeg)",
          }}
        ></div> */}
      </div>
      <div className="container max-w-screen-2xl lg:grid grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="font-sans font-semibold uppercase text-4xl md:text-6xl my-4">
            Sehnsucht
          </h2>
          <p className="text-lg md:text-2xl leading-normal">
            “Sehnsucht” is a a 5-track acoustic instrumental album, featuring
            intimate instruments and a huge load of emotions. I wrote those
            tracks with the emotion of missing out and wishing for old times and
            new times at the same time, trying to express what I&apos;ve been feeling
            for the last months. I love them all very dearly.
          </p>
        </div>
        <div className="">
          <Image src={sehnsucht_cover} placeholder="blur" alt=""></Image>
        </div>
        <div className="col-span-2 w-full">
          <ol className="list-decimal">
            {tracks.map((track) => {
              return (
                <li
                  key={track.title}
                  className="py-2 list-none md:flex items-center"
                >
                  <div className="flex items-center md:justify-end flex-grow">
                    <span className="text-stone-800 text-opacity-80 pr-2 text-xs md:text-normal">
                      {track.artist}
                    </span>
                    <span className="text-sm md:text-lg font-bold md:text-right pr-4">
                      {track.title}
                    </span>
                  </div>
                  <Image
                    className="w-full max-w-xl py-2"
                    src={track.waveform}
                    alt=""
                  ></Image>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
