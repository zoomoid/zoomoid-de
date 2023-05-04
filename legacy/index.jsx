import Layout from "components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import banner_root from "public/img/banner_root.jpeg";

function Hero(props) {
  return (
    <section className="flex mx-auto relative">
      <div className="relative h-screen w-full flex items-end">
        <div className="absolute h-screen w-full z-0 overflow-hidden">
          <div className="absolute bg-opacity-40 bg-black w-full h-full z-20" />
          <Image
            className="absolute z-10 h-full object-cover"
            src={banner_root}
            alt="Zoomoid at a busstop gazing into the night"
            placeholder="blur"
          />
        </div>
        <div className="z-10 text-white container max-w-screen-2xl pb-24">
          <h1 className="text-3xl sm:text-4xl relative font-semibold font-sans max-w-2xl">
            Zoomoid is a young, aspiring artist and producer, based in Aachen,
            Germany. He&apos;s making electronic music with a concept and a
            heartbeat.
          </h1>
          <div className="bg-white hover:bg-neutral-100 text-black rounded-full px-4 py-2 inline-block mt-4 font-sans font-medium tracking-wide uppercase cursor-pointer text-sm sm:text-normal">
            <Link href="/about">
              <div className="flex items-center">
                <span>Read More</span>
                <i className="material-icons-sharp">keyboard_arrow_right</i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <section>{releasesSections}</section> */}
    </Layout>
  );
}
