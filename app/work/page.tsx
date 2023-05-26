"use client";
import MovedPermanently from "@/components/work-sections/301";
import EigenraeumeExtended from "@/components/work-sections/eigenraeume-extended";
import Eigenraeume from "@/components/work-sections/eigenraeume-standard";
import ImSchattenDerNacht from "@/components/work-sections/im-schatten-der-nacht";
import LifeIsAboutMakingMemories from "@/components/work-sections/life-is-about-making-memories";
import PublicTransportation from "@/components/work-sections/public-transportation";
import Sehnsucht from "@/components/work-sections/sehnsucht";
import ShadesOfYellow from "@/components/work-sections/shades-of-yellow";
import Voyager from "@/components/work-sections/voyager";
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

import React from "react";
import { Theme } from "@/components/layout/layout";
import { useAppDispatch } from "../hooks";
import { setTheme } from "@/components/layout/layoutSlice";

import styles from './styles.module.css'

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
    <div className="hero overflow-hidden absolute h-full w-full isolate">
      <svg style={{
        height: "0px",
        width: "0px"
      }}>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="5"
          // stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            // type="matrix"
            // values="1 0 0 0 0
            //         0 1 0 0 0
            //         0 0 1 0 0
            //         0 0 0 1 0"
            type="saturate"
            values="0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
      
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-80 z-40 animate-pulse" /> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-zinc-950 z-30" />
      <div className="absolute z-50 top-0 left-0 right-0 bottom-0 bg-zinc-900 bg-opacity-10" style={{
        filter: "url(#noiseFilter)",
        mixBlendMode: "screen",
      }}></div>
      <div className="relative w-full flex flex-wrap">
        {Array(32)
          .fill(null)
          .map((_, i) => {
            const url = data[i % data.length];
            const delay = Math.max(3, Math.random() * 6)
            const duration = Math.max(4, Math.random() * 8)
            return (
              <div
                key={`hero-image-${i}`}
                className={`${styles.coverImage} w-[50%] md:w-[20%] p-4`}
                style={{
                  animationDelay: `${i * 50}ms`
                }}
              >
                <Image
                  className={`${styles.coverImageInner} "rounded-3xl`}
                  src={url}
                  width={360}
                  height={360}
                  alt=""
                  placeholder="blur"
                  style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default function Page() {
  const defaultTheme: Theme = { textColor: "text-white", backgroundColor: "bg-black" };

  const dispatch = useAppDispatch()

  const handleNavigationThemeChange = (theme?: Theme) => {
    if (!theme) {
      dispatch(setTheme(defaultTheme));
    } else {
      dispatch(setTheme(theme));
    }
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
        key={`work-sections-${i}`}
        onScrollOver={handleNavigationThemeChange}
      />
    );
  });

  return (
    <>
      <div className="flex min-h-screen bg-black relative">
        <Covers />
        <div className="container max-w-screen-2xl pt-24 pb-8 flex">
          <div className="flex-grow flex flex-col justify-end relative z-[45]">
            <div className="flex items-center justify-center flex-col h-full">
              <div className="md:py-24 md:px-48 py-8 px-16 backdrop-blur-lg border rounded-xl border-neutral-500 border-opacity-10">
                <Image
                  alt=""
                  src={banner}
                  placeholder="blur"
                  className="md:w-64 w-32"
                />
              </div>
            </div>
            {/* <h1 className="text-white text-3xl font-bold md:font-normal md:text-5xl mb-8">
              Music with a heartbeat.
            </h1> */}
            <div className="px-4 py-2 md:mb-24 font-sans text-xl flex-grow text-white">
              {[
                ["#im-schatten-der-nacht", "Releases of 2021"],
                ["#shades-of-yellow", "Releases of 2020"],
                ["#eigenraeume", "Releases of 2019"],
                ["#life-is-about-making-memories", "Releases of 2018"],
              ].map(([ref, text]) => (
                <Link
                  key={ref}
                  href={`/work${ref}`}
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
      {sections}
    </>
  );
}
