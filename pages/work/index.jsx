import Layout from "components/layout/Layout";
import LifeIsAboutMakingMemories from "components/LifeIsAboutMakingMemories";
import Image from "next/future/image";
import Link from "next/link";
import banner from "public/img/white.png";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function Covers() {
  const { data, error } = useSWR("/api/releases/covers", fetcher);

  const [z, setZ] = useState(1);

  useEffect(() => {
    let els = document.querySelectorAll(".hero .cover-image");
    let indices = shuffle(Array.from(Array(els.length).keys()));
    let i = indices[0];
    setInterval(function () {
      function setRandomPosition(el) {
        el.style.left = Math.random() * 100 + "%";
        el.style.top = Math.random() * 100 + "%";
      }
      function animateImage(el) {
        if (!el) return;
        setRandomPosition(el);
        el.style.zIndex = (z % 2) * els.length;
        el.classList.add("is-animated");
        setTimeout(function () {
          el.classList.remove("is-animated");
        }, 2000);
        setZ(z + (1 % 2) * els.length);
      }
      animateImage(els[indices[i]]);
      i = i < els.length - 1 ? i + 1 : 0;
    }, 2500); // if this is too fast, we end up setting new positions to
    // images that are still animating
  }, [data]);

  if (!data || error) return <></>;

  return (
    <div className="hero overflow-hidden absolute p-36 h-full w-full">
      <style jsx global>{`
        .cover-image {
          width: min(50vw, 360px);
          isolation: isolate;
          position: absolute;
          transform: translate3d(-50%, -50%, 0);
          opacity: 0;
          transition: opacity 1000ms;
          /* box-shadow: 0 0 25px rgba(0, 0, 0, 30%); */
        }
        .cover-image.is-animated {
          opacity: 1;
          transition: opacity 500ms;
        }
        .cover-image--inner {
          z-index: 2;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .cover-image--blurred {
          z-index: 1;
          filter: blur(100px);
          opacity: 0.25;
          width: 150%;
          height: 150%;
          transform: translate3d(-17.5%, -17.5%, 0);
          max-width: none;
        }
      `}</style>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-800 bg-opacity-10 z-40"></div>
      <div className="relative h-full w-full">
        {data.map((url, i) => {
          return (
            <div key={"hero-image-" + i} className="cover-image">
              <Image
                className="cover-image--inner"
                src={url}
                width={360}
                height={360}
              ></Image>
              <Image
                className="cover-image--blurred"
                src={url}
                width={360}
                height={360}
              ></Image>
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
            <div className="p-24 rounded-xl backdrop-blur-lg border border-neutral-700 border-opacity-20">
              <Image src={banner} className="w-64"></Image>
            </div>
          </div>
          <h1 className="text-white text-5xl mb-8">Music with a heartbeat.</h1>
          <div className="px-4 py-2 mb-24 font-sans text-xl flex-grow text-white">
            {[
              ["#life-is-about-making-memories", "Releases of 2018"],
              ["#eigenraeume", "Releases of 2019"],
              ["#malheureux-en-amour", "Releases of 2020"],
              ["#sehnsucht", "Releases of 2021"],
            ].map(([ref, text]) => (
              <Link key={ref} href={ref} scroll={true}>
                <a className="block py-2 pl-6 mt-1 mb-1 border-l-4 border-white uppercase tracking-wide font-semibold text-normal">
                  {text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <>
      <Layout theme={{ text: "text-white", bg: "bg-black" }}>
        <Hero></Hero>
        <LifeIsAboutMakingMemories></LifeIsAboutMakingMemories>
      </Layout>
    </>
  );
}
