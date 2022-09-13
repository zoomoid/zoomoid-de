import Image from "next/future/image";
import moved_permanently_cover from "public/img/covers/301.jpg";
import monarch from "public/waveforms/301/monarch.svg";
import doppler from "public/waveforms/301/doppler.svg";
import elektron from "public/waveforms/301/elektron.svg";
import outer_space_rework from "public/waveforms/301/outer_space_rework.svg";

export default function Sehnsucht() {
  const tracks = [
    {
      title: "Monarch",
      waveform: monarch,
      artist: "Zoomoid",
    },
    {
      title: "Doppler",
      waveform: doppler,
      artist: "Zoomoid",
    },
    {
      title: "Elektron",
      waveform: elektron,
      artist: "Zoomoid",
    },
    {
      title: "Outer Space (Rework)",
      waveform: outer_space_rework,
      artist: "Zoomoid",
    },
  ];

  return (
    <section
      id="301-moved-permanently"
      className="bg-black text-neutral-100 py-8 md:py-32 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-0 isolate">
        {/* <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-neutral-900 bg-opacity-50 z-10"></div>
        <div
          className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-cover z-0 saturate-[0.25] blur-md"
          style={{
            backgroundImage: "url(/img/im-schatten-der-nacht-bg.jpg)",
          }}
        ></div> */}
      </div>
      <div className="container max-w-screen-2xl lg:grid grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="font-sans font-semibold uppercase text-4xl md:text-6xl my-4">
            301 Permanently Moving
          </h2>
          <p className="text-lg md:text-2xl leading-normal">
            “301 Permanently Moving” is a nerdy joke and tribute to the HTTP
            protocol, which drives the internet, where the status 301 indicates
            that a web page has moved permanently. The tracks on this EP have
            the potential to get you moving, with hard-driving Techno and a
            reworked version of Outer Space!
          </p>
        </div>
        <div className="">
          <Image src={moved_permanently_cover} alt=""></Image>
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
