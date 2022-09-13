import Image from "next/future/image";
import eigenraeume_extended_cover from "public/img/covers/eigenräume.jpg";
import adieu from "public/waveforms/eigenraeume-extended-edition/adieu (outro).svg";
import blaues_land from "public/waveforms/eigenraeume-extended-edition/blaues land (concept).svg";
import congruence from "public/waveforms/eigenraeume-extended-edition/congruence (bonus).svg";
import grossstadt from "public/waveforms/eigenraeume-extended-edition/grossstadt (concept).svg";
import heimat from "public/waveforms/eigenraeume-extended-edition/heimat (concept).svg";
import hoellental from "public/waveforms/eigenraeume-extended-edition/hoellental (concept).svg";
import outer_space from "public/waveforms/eigenraeume-extended-edition/outer space (bonus).svg";
import schoeneberg_at_night from "public/waveforms/eigenraeume-extended-edition/schoeneberg at night (concept).svg";
import stockholm from "public/waveforms/eigenraeume-extended-edition/stockholm (concept).svg";
import symphonic_dreams from "public/waveforms/eigenraeume-extended-edition/symphonic dreams (intro).svg";
import valletta from "public/waveforms/eigenraeume-extended-edition/valletta (bonus).svg";
import useIntersection from "./intersections";

export default function EigenraeumeExtended(props) {
  const navigationThemeUpdate = props.onScrollOver ?? ((_) => ({}));

  const [box, effect] = useIntersection(navigationThemeUpdate, {
    text: "text-neutral-900",
    bg: "bg-black",
  });

  effect();

  const tracks = [
    {
      title: "Symphonic Dreams (Intro)",
      waveform: symphonic_dreams,
      artist: "Zoomoid",
    },
    {
      title: "Stockholm (Concept)",
      waveform: stockholm,
      artist: "Zoomoid",
    },
    {
      title: "Großstadt (Concept)",
      waveform: grossstadt,
      artist: "Zoomoid",
    },
    {
      title: "Schöneberg at Night (Concept)",
      waveform: schoeneberg_at_night,
      artist: "Zoomoid",
    },
    {
      title: "Höllental (Concept)",
      waveform: hoellental,
      artist: "Zoomoid",
    },
    {
      title: "Heimat (Concept)",
      waveform: heimat,
      artist: "Zoomoid",
    },
    {
      title: "Blaues Land (Concept)",
      waveform: blaues_land,
      artist: "Zoomoid",
    },
    {
      title: "Congruence (Bonus)",
      waveform: congruence,
      artist: "Zoomoid",
    },
    {
      title: "Valletta (Bonus)",
      waveform: valletta,
      artist: "Zoomoid",
    },
    {
      title: "Outer Space (Bonus)",
      waveform: outer_space,
      artist: "Zoomoid",
    },
    {
      title: "Adieu (Outro)",
      waveform: adieu,
      artist: "Zoomoid",
    },
  ];

  return (
    <section
      id="eigenraeume-extended-edition"
      className="bg-[#c80a0a] text-neutral-900 py-8 md:py-32 overflow-hidden relative"
    >
      {box}
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-0 isolate"></div>
      <div className="container max-w-screen-2xl lg:grid grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="font-sans font-semibold uppercase text-4xl md:text-6xl my-4">
            Eigenräume (Extended Edition)
          </h2>
          <p className="text-lg md:text-2xl leading-normal">
            “Eigenräume (Extended Edition)” is 2019&apos;s main Zoomoid release, with
            11 tracks (again), intro and outro, and seamless blending of tracks
            (at least on the first 7 tracks)! It also features 3 tracks that
            were written after the original concept album was created, but
            seemed to fit the overall context. In particular, Zoomoid is proud
            of “Outer Space”.
          </p>
        </div>
        <div className="">
          <Image src={eigenraeume_extended_cover} alt=""></Image>
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
                    <span className="text-neutral-900 text-opacity-80 pr-2 text-xs md:text-normal">
                      {track.artist}
                    </span>
                    <span className="text-sm md:text-lg font-bold md:text-right pr-4">
                      {track.title}
                    </span>
                  </div>
                  <Image
                    className={"w-full max-w-xl py-2"}
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
