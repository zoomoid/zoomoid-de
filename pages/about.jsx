import Layout from "components/layout/Layout";
import Timeline from "components/Timeline";
import Image from "next/future/image";
import Link from "next/link";
import zoomoid from "public/img/zoomoid.jpg";

export default function About() {
  return (
    <Layout theme={{ text: "text-black", bg: "bg-white" }}>
      <div className="max-w-screen-2xl container">
        <section className="mt-24 md:mt-64 mb-8 md:grid grid-cols-2">
          <p className="text-3xl font-serif">
            Zoomoid is a young, aspiring artist and producer, based in Aachen,
            Germany. He&apos;s making electronic music with a concept and a
            heartbeat.
          </p>
        </section>
      </div>
      <section className="bg-stone-200 py-12 px-12">
        <div
          className="max-w-5xl mx-auto"
          style={{
            boxShadow: "0 0 25px rgba(0 0 0 / 20%)",
          }}
        >
          <Image alt="" className="" src={zoomoid}></Image>
        </div>
      </section>
      <div className="max-w-screen-2xl container">
        <section id="about" className="text-xl md:grid grid-cols-2 mt-8">
          <p className="leading-normal font-serif">
            I&apos;ve been tinkering around with electronic music for almost a
            decade now. My experiments with different styles lead to the genres
            I like today and such have in turn inspired new creations. Over the
            past years, I&apos;ve learned that I want my music to be organic and
            harmonic, and that my instrument of choice is a synthesizer.
          </p>
        </section>
        <Timeline></Timeline>
        <section className="md:grid grid-cols-2 mt-16 mb-8 border-t border-neutral-300 border-opacity-50 pt-8 ">
          <p className="text-2xl mb-8 font-serif">Work</p>
          <div className="text-lg md:text-xl leading-normal font-serif">
            <p className="mb-4">
              The first large release of Zoomoid landed in September 2018, with
              more quickly succeeding the album “Life Is About Making Memories”.
            </p>
            <p className="mb-4">
              In 2019, Zoomoid released his concept album “Eigenräume”, which,
              up to this day, is one of his proudest releases. The album was
              followed by a strong style change with “Public Transportation”,
              which some swear, was his best work yet. In December 2019, Zoomoid
              released “301 Permanently Moving”, a nerdy joke about HTTP, which
              introduced harder techno beats and a remix of one of his favourite
              tracks from “Eigenräume”, “Outer Space”.
            </p>
            <p className="mb-4">
              The year 2020 saw Zoomoid releasing the “Shades of Yellow” EP in
              May, while the pandemic had most of us stuck at home. “Shades of
              Yellow” began to introduce more emotions into his music. Some say
              that this was the time, his talent to tell a story with his music
              came present. Later that year, he released “Voyager”, a tribute to
              his love for space and mankind&apos;s venture into the unknown.
              The 10-track album tells a story of leaving earth and the tracks
              unfold into a mixture of driving Techno and beautifully crafted
              melodies and harmonies.
            </p>
            <p className="mb-4">
              2021 was his quietest year yet, only having released the
              super-emotional “Sehnsucht” EP, with sounds so soft and intimate
              that they hardly fit his previous profile. Nevertheless,
              “Sehnsucht” incorporates some classic Zoomoid elements such as
              recorded atmospheres from some of his favorite places and, once
              more, a remix version of one of his previous songs that is very
              dear to him, “Malheureux en Amour”. The year was closed by the
              release of the 3-track hard-driving Techno EP called “Im Schatten
              Der Nacht”. With that, Zoomoid announced his temporary, but
              indefinite hiatus, with several already awaiting his return to
              music.
            </p>
            <div className="text-black hover:text-opacity-60 rounded-full  py-2 inline-block mt-4 font-sans font-medium tracking-wide uppercase cursor-pointer text-sm sm:text-normal">
              <Link href="/work">
                <div className="flex items-center">
                  <span>Explore Work</span>
                  <i className="material-icons-sharp">keyboard_arrow_right</i>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
