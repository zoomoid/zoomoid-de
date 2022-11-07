import Track from "components/interactive/Track";
import Image from "next/image";
import im_schatten_der_nacht_cover from "public/img/covers/im_schatten_der_nacht.jpeg";
import im_schatten_der_nacht from "public/waveforms/im-schatten-der-nacht/im-schatten-der-nacht.svg";
import morgendaemmerung from "public/waveforms/im-schatten-der-nacht/morgendaemmerung.svg";
import schemen from "public/waveforms/im-schatten-der-nacht/schemen.svg";

export default function ImSchattenDerNacht() {
  const tracks = [
    {
      title: "Im Schatten Der Nacht",
      waveform: im_schatten_der_nacht,
      artist: "Zoomoid",
    },
    {
      title: "Morgendämmerung",
      waveform: morgendaemmerung,
      artist: "Zoomoid",
    },
    {
      title: "Schemen",
      waveform: schemen,
      artist: "Zoomoid",
    },
  ];

  return (
    <section
      id="im-schatten-der-nacht"
      className="bg-zinc-900 text-slate-100 py-8 md:py-32 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-0 isolate">
        <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-neutral-900 bg-opacity-50 z-10"></div>
        <div
          className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-cover z-0 saturate-[0.25] blur-md"
          style={{
            backgroundImage: "url(/img/im-schatten-der-nacht-bg.jpeg)",
          }}
        ></div>
      </div>
      <div className="container max-w-screen-2xl lg:grid grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="font-sans font-semibold uppercase text-4xl md:text-6xl my-4">
            Im Schatten Der Nacht
          </h2>
          <p className="text-lg md:text-2xl leading-normal">
            “Im Schatten Der Nacht” is a small driving Techno EP that comes to
            live when leaving the club early in the morning and heading home
            while still buzzing from the night before.
          </p>
        </div>
        <div className="">
          <Image src={im_schatten_der_nacht_cover} placeholder="blur" alt=""></Image>
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
                ></Track>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
