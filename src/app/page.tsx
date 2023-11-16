import { Viewport, type Metadata } from "next";
import Image from "next/legacy/image";
import { type Socials as ISocials } from "../components/footer";
import Footer from "../components/footer/Footer";
import { type Navigation as INavigation } from "../components/navigation";
import Navigation from "../components/navigation/Navigation";
import { type Release as IRelease } from "../components/section";
import Section from "../components/section/Section";
import { navigation } from "./api/navigation/navigation.mock";
import { releases } from "./api/releases/releases.mock";
import { socials } from "./api/socials/socials.mock";

export const metadata: Metadata = {
  title: "Zoomoid",
  description: "Zoomoid",
  icons: "/favicon.ico"
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width"
}

async function getNavigation() {
  // const res = await fetch(`/api/navigation`)
  // return res.json() as Promise<INavigation>;
  return Promise.resolve(navigation) as Promise<INavigation>
}

async function getReleases() {
  // const res = await fetch(`/api/releases`)
  // return res.json() as Promise<IRelease[]>;
  return Promise.resolve(releases) as Promise<IRelease[]>
}

async function getSocials() {
  // const res = await fetch(`/api/socials`)
  // return res.json() as Promise<ISocials>;
  return Promise.resolve(socials) as Promise<ISocials>

}

export default async function Root() {
  const navigationData = getNavigation()
  const releasesData = getReleases()
  const socialsData = getSocials()

  const [navigation, releases, socials] = await Promise.all([navigationData, releasesData, socialsData])

  const releasesSections = releases.map((release, i) => (
    <Section key={release.title} section={release} idx={i}></Section>
  ));

  return (
    <div>
      <Navigation navigation={navigation}></Navigation>
      <main className="text-neutral-300">
        <section className="flex justify-end py-[6.6vmax] lg:py-[1.6vmax] w-full mx-auto">
          <div className="relative grid-cols-2 px-4 2xl:grid md:px-0">
            <div className="relative mb-8 2xl:order-last">
              <Image
                layout="responsive"
                src="/img/banner.jpg"
                alt="Zoomoid at a busstop gazing into the night"
                width={2500}
                height={1095}
              ></Image>
            </div>
            <h1 className="md:pl-[4vw] text-3xl font-semibold sm:text-5xl md:text-5xl lg:text-6xl">
              <span className="font-sans">Zoomoid</span>{" "}
              <span>is a an artist and producer based in </span>{" "}
              <span className="font-sans">Aachen, Germany.</span>{" "}
              I make electronic music with an idea and a {" "}
              <span className="font-sans">heartbeat</span>.
            </h1>
          </div>
        </section>
        <section className="py-[6.6vmax] px-[4vw] max-w-screen-xl">
          <article id="about" className="flex justify-end mb-8">
            <div className="">
              <div className="">
                <h2 className="mb-4 font-sans text-4xl underline">
                  Intro
                </h2>
                <div className="col-span-7 leading-normal sm:text-2xl">
                  <p className="">
                    I&apos;ve been tinkering around with electronic music for
                    almost a decade now. My experiments with different styles
                    lead to the genres I like today and such have in turn
                    inspired new creations. Over the past years, I&apos;ve
                    learned that I want my music to be organic and harmonic, and
                    that my instrument of choice is a synthesizer.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article id="work" className="flex justify-end">
            <div className="">
              <h2 className="mb-4 font-sans text-4xl md:text-normal ">
                <span className="underline">Work</span> <span className="font-serif text-xl">(2018-2021)</span>
              </h2>
              <div className="col-span-7 leading-normal sm:text-2xl">
                <p className="mb-4">
                  The first large release of Zoomoid landed in September 2018,
                  with more quickly succeeding the album “Life Is About Making
                  Memories”.
                </p>
                <p className="mb-4">
                  In 2019, Zoomoid released his concept album “Eigenräume”,
                  which, up to this day, is one of his proudest releases. The
                  album was followed by a strong style change with “Public
                  Transportation”, which some swear, was his best work yet. In
                  December 2019, Zoomoid released “301 Permanently Moving”, a
                  nerdy joke about HTTP, which introduced harder techno beats
                  and a remix of one of his favourite tracks from
                  “Eigenräume”, “Outer Space”.
                </p>
                <p className="mb-4">
                  The year 2020 saw Zoomoid releasing the “Shades of Yellow”
                  EP in May, while the pandemic had most of us stuck at home.
                  “Shades of Yellow” began to introduce more emotions into his
                  music. Some say that this was the time, his talent to tell a
                  story with his music came present. Later that year, he
                  released “Voyager”, a tribute to his love for space and
                  mankind&apos;s venture into the unknown. The 10-track album
                  tells a story of leaving earth and the tracks unfold into a
                  mixture of driving Techno and beautifully crafted melodies
                  and harmonies.
                </p>
                <p className="mb-4">
                  2021 was his quietest year yet, only having released the
                  super-emotional “Sehnsucht” EP, with sounds so soft and
                  intimate that they hardly fit his previous profile.
                  Nevertheless, “Sehnsucht” incorporates some classic Zoomoid
                  elements such as recorded atmospheres from some of his
                  favorite places and, once more, a remix version of one of
                  his previous songs that is very dear to him, “Malheureux en
                  Amour”.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section>
          {/* <h2 className="px-[4vw] font-sans text-4xl underline">Releases</h2> */}
          {releasesSections}
        </section>
      </main>
      <Footer socials={socials}></Footer>
    </div>
  );
}
