import { ThemeChanger } from "@/components/ThemeableScaffolding";
import { Locale } from "@/i18n";
import { Viewport, type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zoomoid",
  authors: {
    name: "Zoomoid",
    url: "https://zoomoid.de",
  },
  creator: "Alexander Bartolomey",
  category: "music",
  alternates: {
    canonical: "https://zoomoid.de/",
    languages: {
      "en-US": "https://zoomoid.de/en-US",
      "de-DE": "https://zoomoid.de/de-DE",
    },
  },
};

type Release = {
  coverUrl: string;
  title: string;
  url: string;
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default async function Root(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { lang } = params;

  const releases: Release[] = [
    {
      coverUrl: "/img/all_things_must_end.jpg",
      title: "All Things Must End",
      url: "all-things-must-end",
    },
    {
      title: "Im Schatten Der Nacht",
      url: "im-schatten-der-nacht",
      coverUrl: "/img/im_schatten_der_nacht.jpg",
    },
    {
      title: "Sehnsucht",
      url: "sehnsucht",
      coverUrl: "/img/sehnsucht.jpg",
    },
    {
      title: "Voyager",
      url: "voyager",
      coverUrl: "/img/voyager.jpg",
    },
    {
      title: "Shades of Yellow",
      url: "shades-of-yellow",
      coverUrl: "/img/shades_of_yellow.jpg",
    },
    {
      title: "301 Permanently Moving",
      url: "301-permanently-moving",
      coverUrl: "/img/301.jpg",
    },
    {
      title: "Public Transportation EP",
      url: "public-transportation",
      coverUrl: "/img/public_transportation.jpg",
    },
    {
      title: "Eigenräume",
      url: "eigenraeume",
      coverUrl: "/img/eigenräume.jpg",
    },
    {
      title: "Life Is About Making Memories",
      url: "life-is-about-making-memories",
      coverUrl: "/img/liamm.jpg",
    },
  ];

  return (
    <>
      <main className="overflow-hidden text-white">
        <ThemeChanger
          backgroundColorClass="bg-black"
          textColorClass="text-white"
          navigationImageFilter=""
        ></ThemeChanger>
        {/* <Banner></Banner> */}
        <section className="mx-auto flex w-full justify-end overflow-x-visible py-[6.6vmax] md:pl-[4vw] lg:py-[1.6vmax]">
          <div className="grid-cols-2 justify-center gap-x-32 overflow-visible md:px-0 md:pt-64 xl:grid">
            <div className="mb-8 overflow-x-visible 2xl:order-last">
              <Image
                src="/img/banner.jpg"
                alt="Zoomoid at a busstop gazing into the night"
                className="xl:w-[50vw] xl:max-w-[50vw]"
                width={2500}
                height={1095}
              ></Image>
            </div>
            <h1 className="px-4 text-3xl font-semibold sm:text-5xl md:px-0 md:pr-[4vw] md:pl-[4vw] md:text-5xl lg:text-6xl xl:text-right">
              {lang === "de" ? <HeroDE></HeroDE> : <HeroEN></HeroEN>}
            </h1>
          </div>
        </section>
        <section
          className="relative z-20 mx-auto w-full max-w-screen-xl px-4 py-32 md:pr-[4vw] md:pl-[4vw] lg:py-[1.6vmax]"
          id="overview"
        >
          <h2 className="mb-16 font-sans text-5xl font-semibold">
            {lang === "de" ? "Diskografie" : "Discography"}
          </h2>
          <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-8">
            {releases.map((r) => {
              return (
                <Link
                  href={`/${lang}/${r.url}`}
                  aria-label={r.title}
                  key={r.title}
                  title={r.title}
                >
                  <div>
                    <Image
                      width={1500}
                      height={1500}
                      src={r.coverUrl}
                      alt={`${r.title} cover`}
                      className="relative z-50 mx-auto rounded-xl border-t border-l border-neutral-50/15 shadow-2xl shadow-neutral-300/10 transition-transform duration-1000 hover:scale-[1.02]"
                    ></Image>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

function HeroEN() {
  return (
    <>
      <span className="font-sans">Zoomoid</span>{" "}
      <span>was an artist and producer based in </span>{" "}
      <span className="font-sans">Aachen, Germany,</span> who made electronic
      music with an idea and a <span className="font-sans">heartbeat</span>.
    </>
  );
}

function HeroDE() {
  return (
    <>
      <span className="font-sans">Zoomoid</span>{" "}
      <span>war ein Künstler und Producer aus </span>{" "}
      <span className="font-sans">Aachen,</span> der elektronische Musik mit
      einer Idee und einem <span className="font-sans">Herzschlag</span> gemacht
      hat.
    </>
  );
}
