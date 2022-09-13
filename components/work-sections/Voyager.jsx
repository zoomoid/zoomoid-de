import Image from "next/future/image";
import voyager_cover from "public/img/covers/voyager.jpg";
import andromeda from "public/waveforms/voyager/Andromeda.svg";
import blindflug from "public/waveforms/voyager/Blindflug.svg";
import hale_bopp from "public/waveforms/voyager/Hale-Bopp.svg";
import icarus from "public/waveforms/voyager/Icarus.svg";
import io from "public/waveforms/voyager/Io.svg";
import mars from "public/waveforms/voyager/Mars.svg";
import new_horizons from "public/waveforms/voyager/New Horizons.svg";
import the_moon from "public/waveforms/voyager/The Moon.svg";
import the_space_between_stars from "public/waveforms/voyager/The Space Between Stars.svg";
import voyager from "public/waveforms/voyager/Voyager.svg";

export default function LifeIsAboutMakingMemories() {
  const tracks = [
    {
      title: "The Moon",
      waveform: the_moon,
      artist: "Zoomoid",
    },
    {
      title: "Mars",
      waveform: mars,
      artist: "Zoomoid",
    },
    {
      title: "The Space Between Stars",
      waveform: the_space_between_stars,
      artist: "Zoomoid",
    },
    {
      title: "Hale-Bopp",
      waveform: hale_bopp,
      artist: "Zoomoid",
    },
    {
      title: "Andromeda",
      waveform: andromeda,
      artist: "Zoomoid",
    },
    {
      title: "Icarus",
      waveform: icarus,
      artist: "Zoomoid",
    },
    {
      title: "Blindflug",
      waveform: blindflug,
      artist: "Zoomoid",
    },
    {
      title: "Voyager",
      waveform: voyager,
      artist: "Zoomoid",
    },
    {
      title: "Io",
      waveform: io,
      artist: "Zoomoid",
    },
    {
      title: "New Horizons",
      waveform: new_horizons,
      artist: "Zoomoid",
    },
  ];

  return (
    <section
      id="voyager"
      className="bg-zinc-900 text-slate-100 py-8 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-zinc-900 bg-opacity-70 z-20"></div>
        <div
          className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-cover saturate-[0.25] z-10 blur-md"
          style={{
            backgroundImage: "url(/img/voyager-bg.jpg)",
          }}
        ></div>
      </div>
      <div className="container max-w-screen-2xl lg:grid grid-cols-2 gap-16 relative">
        <div>
          <h2 className="font-sans font-semibold uppercase text-4xl md:text-6xl my-4">
            Voyager
          </h2>
          <p className="text-lg md:text-2xl leading-normal">
          “Voyager” is a journey away from earth into the darkness of space to discover the beauty of 
          emptiness both inside and around you. Let yourself be taken away by an hour of listening 
          experience of many-faced techno.
          </p>
        </div>
        <div className="relative z-0 mix-blend-screen">
            <Image className="" src={voyager_cover} alt=""></Image>
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
                    <span className="text-sm md:text-lg font-bold md:text-right pr-4">
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
