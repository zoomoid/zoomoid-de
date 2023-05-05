import Track from "@/components/interactive/track";
import Image from "next/image";
import shades_of_yellow_cover from "public/img/covers/shades_of_yellow.jpeg";
import malheureux_en_amour from "public/waveforms/shades-of-yellow/malheureux_en_amour.svg";
import shades_of_yellow from "public/waveforms/shades-of-yellow/shades_of_yellow.svg";
import useIntersection from "./intersections";
import { Theme } from "../layout/layout";

export default function ShadesOfYellow({ 
  onScrollOver 
}: {
  onScrollOver?: ((theme?: Theme) => void)
}) {
  const navigationThemeUpdate = onScrollOver ?? (() => ({}));

  const [box, effect] = useIntersection(navigationThemeUpdate, {
    textColor: "text-neutral-900",
    backgroundColor: "bg-black",
  });

  effect();

  const tracks = [
    {
      title: "Shades of Yellow",
      waveform: shades_of_yellow,
      artist: "Zoomoid",
    },
    {
      title: "Malheureux en Amour",
      waveform: malheureux_en_amour,
      artist: "Zoomoid",
    },
  ];

  return (
    <section
      id="shades-of-yellow"
      className="bg-[#f9b512] text-neutral-900 py-8 md:py-32 overflow-hidden relative"
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
            Shades Of Yellow
          </h2>
          <p className="text-lg md:text-2xl leading-normal">
            “Shades Of Yellow” is an emotional ode to the relationship I have
            with the color Yellow and the closest thing I&apos;ve come to writing a
            love song. Both tracks move me in a very special way, and there are
            many many memories attached to them. I know some other people do as
            well and I hope, you can, too.
          </p>
        </div>
        <div className="">
          <Image src={shades_of_yellow_cover} placeholder="blur" alt="" />
        </div>
        <div className="col-span-2 w-full">
          <ol className="list-decimal">
            {tracks.map((track) => {
              return (
                <Track
                  key={track.title}
                  textColor={"text-neutral-800"}
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
