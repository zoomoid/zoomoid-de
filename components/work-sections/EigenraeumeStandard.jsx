import Image from "next/future/image";
import eigenraeume_standard_cover from "public/img/covers/eigenräume_pre.jpg";
import stockholm from "public/waveforms/eigenraeume/stockholm.svg";
import grossstadt from "public/waveforms/eigenraeume/grossstadt.svg";
import schoeneberg_at_night from "public/waveforms/eigenraeume/schoeneberg at night.svg";
import hoellental from "public/waveforms/eigenraeume/hoellental.svg";
import heimat from "public/waveforms/eigenraeume/heimat.svg";
import blaues_land from "public/waveforms/eigenraeume/blaues land.svg";

export default function Eigenraeume() {
  const tracks = [
    {
      title: "Stockholm",
      waveform: stockholm,
      artist: "Zoomoid",
    },
    {
      title: "Großstadt",
      waveform: grossstadt,
      artist: "Zoomoid",
    },
    {
      title: "Schöneberg at Night",
      waveform: schoeneberg_at_night,
      artist: "Zoomoid",
    },
    {
      title: "Höllental",
      waveform: hoellental,
      artist: "Zoomoid",
    },
    {
      title: "Heimat",
      waveform: heimat,
      artist: "Zoomoid",
    },
    {
      title: "Blaues Land",
      waveform: blaues_land,
      artist: "Zoomoid",
    },
  ];

  return (
    <section
      id="eigenraeume"
      className="bg-neutral-900 text-neutral-100 py-8 md:py-32 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-0 isolate"></div>
      <div className="container max-w-screen-2xl lg:grid grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="font-sans font-semibold uppercase text-4xl md:text-6xl my-4">
            Eigenräume
          </h2>
          <p className="text-lg md:text-2xl leading-normal">
            “Eigenräume” is the first (and incomplete) version of the concept
            album, which featured the main tracks of the full album in their
            standalone versions. To get the full listening experience, listen to
            the full version below!
          </p>
        </div>
        <div className="">
          <Image src={eigenraeume_standard_cover} alt=""></Image>
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
                    <span className="text-neutral-200 text-opacity-80 pr-2 text-xs md:text-normal">
                      {track.artist}
                    </span>
                    <span className="font-bold md:text-right pr-4 text-sm md:text-lg">
                      {track.title}
                    </span>
                  </div>
                  <Image
                    className="w-full max-w-xl py-2 invert"
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
