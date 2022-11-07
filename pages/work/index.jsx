import Layout from "components/layout/Layout";
import MovedPermanently from "components/work-sections/301";
import EigenraeumeExtended from "components/work-sections/EigenraeumeExtended";
import Eigenraeume from "components/work-sections/EigenraeumeStandard";
import ImSchattenDerNacht from "components/work-sections/ImSchattenDerNacht";
import LifeIsAboutMakingMemories from "components/work-sections/LifeIsAboutMakingMemories";
import PublicTransportation from "components/work-sections/PublicTransportation";
import Sehnsucht from "components/work-sections/Sehnsucht";
import ShadesOfYellow from "components/work-sections/ShadesOfYellow";
import Voyager from "components/work-sections/Voyager";
import Image from "next/image";
import Link from "next/link";
import banner from "public/img/white.png";

import moved_permanently_cover from "public/img/covers/301.jpeg";
import eigenraeume_extended_cover from "public/img/covers/eigenräume.jpeg";
import eigenraeume_standard_cover from "public/img/covers/eigenräume_pre.jpeg";
import im_schatten_der_nacht_cover from "public/img/covers/im_schatten_der_nacht.jpeg";
import liamm_cover from "public/img/covers/liamm.jpeg";
import public_transportation_cover from "public/img/covers/public_transportation.jpeg";
import sehnsucht_cover from "public/img/covers/sehnsucht.jpeg";
import shades_of_yellow_cover from "public/img/covers/shades_of_yellow.jpeg";
import voyager_cover from "public/img/covers/voyager.jpeg";

import { useRef, useState } from "react";

function Covers() {
  const data = [
    liamm_cover,
    eigenraeume_standard_cover,
    eigenraeume_extended_cover,
    public_transportation_cover,
    moved_permanently_cover,
    shades_of_yellow_cover,
    voyager_cover,
    sehnsucht_cover,
    im_schatten_der_nacht_cover,
  ];

  return (
    <div className="hero overflow-hidden absolute h-full w-full">
      <style jsx global>{`
        .cover-image {
          position: relative;
          transition: opacity 1000ms;
          /* box-shadow: 0 0 25px rgba(0, 0, 0, 30%); */
        }
        .cover-image.is-animated {
          opacity: 1;
          transition: opacity 500ms;
        }
        .cover-image--inner {
          z-index: 2;
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
        }
        .cover-image--blurred {
          z-index: 1;
          filter: blur(100px);
          opacity: 0.25;
          width: 150%;
          position: absolute;
          height: 150%;
          // transform: translate3d(-17.5%, -17.5%, 0);
          max-width: none;
        }
      `}</style>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-900 bg-opacity-50 z-40"></div>
      <div className="relative w-full flex flex-wrap">
        {Array(32)
          .fill(32)
          .map((_, i) => {
            const url = data[i % data.length];
            return (
              <div
                key={"hero-image-" + i}
                className="cover-image w-[50%] md:w-[20%] "
              >
                <Image
                  className="cover-image--inner"
                  src={url}
                  width={360}
                  height={360}
                  alt=""
                  placeholder="blur"
                ></Image>
                {/* <Image
                className="cover-image--blurred"
                src={url}
                width={360}
                height={360}
              ></Image> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex min-h-screen bg-black relative">
      <Covers></Covers>
      <div className="container max-w-screen-2xl pt-24 pb-8 flex">
        <div className="flex-grow flex flex-col justify-end relative z-[45]">
          <div className="flex items-center justify-center flex-col h-full">
            <div className="md:py-24 md:px-48 py-8 px-16 backdrop-blur-lg border border-neutral-500 border-opacity-10">
              <Image
                alt=""
                src={banner}
                placeholder="blur"
                className="md:w-64 w-32"
              ></Image>
            </div>
          </div>
          <h1 className="text-white text-3xl font-bold md:font-normal md:text-5xl mb-8">
            Music with a heartbeat.
          </h1>
          <div className="px-4 py-2 md:mb-24 font-sans text-xl flex-grow text-white">
            {[
              ["#im-schatten-der-nacht", "Releases of 2021"],
              ["#shades-of-yellow", "Releases of 2020"],
              ["#eigenraeume", "Releases of 2019"],
              ["#life-is-about-making-memories", "Releases of 2018"],
            ].map(([ref, text]) => (
              <Link
                key={ref}
                href={ref}
                scroll={true}
                className="block py-2 pl-6 mt-1 mb-1 border-l-4 border-white uppercase tracking-wide font-semibold text-sm md:text-normal"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const defaultTheme = { text: "text-white", bg: "bg-black" };
  const [theme, setTheme] = useState(defaultTheme);

  let navigationRef = useRef(null);

  const setNavigationRef = (ref) => {
    if (ref) navigationRef = ref;
  };

  const handleNavigationThemeChange = (theme) => {
    if (!theme) setTheme(defaultTheme);
    else setTheme(theme);
  };

  const sections = [
    ImSchattenDerNacht,
    Sehnsucht,
    Voyager,
    ShadesOfYellow,
    MovedPermanently,
    PublicTransportation,
    EigenraeumeExtended,
    Eigenraeume,
    LifeIsAboutMakingMemories,
  ].map((Component, i) => {
    return (
      <Component
        key={"work-sections-" + i}
        onScrollOver={handleNavigationThemeChange}
      ></Component>
    );
  });

  return (
    <>
      <Layout theme={theme} setNavigationRef={setNavigationRef}>
        <Hero onScrollOver={handleNavigationThemeChange}></Hero>
        {sections}
      </Layout>
    </>
  );
}
