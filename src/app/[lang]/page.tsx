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
      <main className="text-white overflow-hidden">
        <ThemeChanger
          backgroundColorClass="bg-black"
          textColorClass="text-white"
          navigationImageFilter=""
        ></ThemeChanger>
        {/* <Banner></Banner> */}
        <section className="flex justify-end py-[6.6vmax] lg:py-[1.6vmax] w-full mx-auto overflow-x-visible md:pl-[4vw]">
          <div className="xl:grid grid-cols-2 gap-x-32 md:px-0 justify-center overflow-visible md:pt-64">
            <div className="mb-8 2xl:order-last overflow-x-visible">
              <Image
                src="/img/banner.jpg"
                alt="Zoomoid at a busstop gazing into the night"
                className="xl:w-[50vw] xl:max-w-[50vw]"
                width={2500}
                height={1095}
              ></Image>
            </div>
            <h1 className="text-3xl md:px-0 px-4 md:pl-[4vw] md:pr-[4vw] font-semibold sm:text-5xl md:text-5xl lg:text-6xl xl:text-right">
              {lang === "de" ? <HeroDE></HeroDE> : <HeroEN></HeroEN>}
            </h1>
          </div>
        </section>
        <section
          className="py-32 lg:py-[1.6vmax] w-full mx-auto px-4 md:pl-[4vw] md:pr-[4vw] max-w-screen-xl relative z-20"
          id="overview"
        >
          <h2 className="text-5xl font-sans font-semibold mb-16">
            {lang === "de" ? "Diskografie" : "Discography"}
          </h2>
          <div className="grid-cols-1 xs:grid-cols-2 md:grid-cols-3 grid md:gap-8 gap-4 pb-32">
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
                      className="relative z-50 hover:scale-[1.02] transition-transform duration-1000 border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl shadow-neutral-300/10 border-neutral-50 mx-auto"
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
