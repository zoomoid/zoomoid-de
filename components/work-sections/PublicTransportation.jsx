import Image from "next/future/image";
import public_transportation_cover from "public/img/covers/public_transportation.jpg";
import stargazing from "public/waveforms/public-transportation/01_stargazing.svg";
import downhill from "public/waveforms/public-transportation/02_downhill.svg";
import say_it from "public/waveforms/public-transportation/03_say it.svg";
import volksgarten from "public/waveforms/public-transportation/04_volksgarten.svg";
import melancholic_meditation from "public/waveforms/public-transportation/05_melancholic meditation.svg";
import delay from "public/waveforms/public-transportation/06_delay.svg";

export default function Sehnsucht() {
  const tracks = [
    {
      title: "Stargazing",
      waveform: stargazing,
      artist: "Zoomoid",
    },
    {
      title: "Downhill",
      waveform: downhill,
      artist: "Zoomoid",
    },
    {
      title: "Say It",
      waveform: say_it,
      artist: "Zoomoid",
    },
    {
      title: "Volksgarten",
      waveform: volksgarten,
      artist: "Zoomoid",
    },
    {
      title: "Melancholic Meditation",
      waveform: melancholic_meditation,
      artist: "Zoomoid",
    },
    {
      title: "Delay",
      waveform: delay,
      artist: "Zoomoid",
    },
  ];

  return (
    <section
      id="public-transportation"
      className="bg-blue-800 text-slate-100 py-8 md:py-32 overflow-hidden relative"
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
            Public Transpor­tation EP
          </h2>
          <p className="text-lg md:text-2xl leading-normal">
            “In December, 2018, returning from a night of party in Münster,
            Germany, via trains, I travelled through several stations I never
            had been to before. The charismatic voice of Ingo Ruff, freshly
            fallen snow that covered lonely fields along the way, and a slight
            hangover of the tequila from the previous night lead to the idea to
            make an EP from numberous impressions saved from years of using
            public transport almost every weekend. The idea got burried in a
            notebook for a year until I picked it up and sketched a trip on my
            usual train route through some cities in NRW. It&apos;s real, it&apos;s
            honest, it&apos;s got sharp edges and it&apos;s certainly different to my
            other work in that year. Yet, it&apos;s a favourite of a lot of people
            for exactly that reason.” — Zoomoid
          </p>
        </div>
        <div className="">
          <Image src={public_transportation_cover} alt=""></Image>
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
