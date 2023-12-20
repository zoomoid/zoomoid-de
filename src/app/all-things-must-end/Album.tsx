"use client";

import Image from "next/image";
import type { ReactNode, RefObject } from "react";
import { YearRoll } from "./YearRoll";
import React from "react";

interface Track {
  title: string;
  boxURI?: string;
  description: ReactNode | ReactNode[];
  children?: ReactNode | ReactNode[];
}

export default function Album({
  skipRef,
}: {
  skipRef: RefObject<HTMLDivElement>;
}) {
  const leadingZeroes = (i: number, digits = 1): string => {
    if (i < digits * 10) {
      return "0" + i;
    }
    return i.toString();
  };

  const waveformPrefix = "/img/all-things-must-end/waveforms";
  const boxWaveform = (name: string): string => `${waveformPrefix}/box/${name}`;
  const lineWaveform = (name: string): string =>
    `${waveformPrefix}/line/${name}`;
  const waveWaveform = (name: string): string =>
    `${waveformPrefix}/wave/${name}`;

  const tracks: Track[] = [
    {
      title: "All That Could Have Been",
      boxURI:
        "/img/all-things-must-end/waveforms/box/01_All That Could Have Been.png",
      description: [
        <p>
          This is where it all begins. The introduction. The thought of all that
          could have been.
        </p>,
        <p>
          &ldquo;All That Could Have Been&rdquo; is an homage to all those
          intros to albums I've written &mdash; something that I always thought
          I was rather good at.
        </p>,
        <p>
          For just a moment in the beginning of 2023, I felt so amazing.
          Floating above the clouds is an incredible feeling.
        </p>,
        <p>
          All those endorphines pushed me through the first months of the year.
          They would fade too quickly...
        </p>,
      ],
    },
    {
      title: "Nur Für Einen Augenblick",
      boxURI:
        "/img/all-things-must-end/waveforms/box/02_Nur Für Einen Augenblick.png",
      description: [
        <p>
          ...and in the blink of an eye, I was back in the deep dark hole. All
          that came crashing down. It was never built to last. Time flew by and
          I found myself back in old habits.
        </p>,
        <p>
          &ldquo;Nur Für Einen Augenblick&rdquo; is older than these experiences
          though. It was originally written back in 2022, on a rare evening of
          inspiration and creativity. It had many different working titles
          throughout its design period: &ldquo;What&apos;s Next&rdquo; was one
          of them, and I think it already captures the spirit of the entire
          album in some sense.
        </p>,
        <p>
          It&apos;s an uplifting kind of track, in its core a Drum &amp; Bass
          song that heavily leans into orchestral music (which is where most of
          the instruments usually belong). It&apos;s inspired by the works of
          artists like Keeno and Etherwood.
        </p>,
      ],
    },
    {
      title: "Ein Tag Im April (Interlude)",
      boxURI:
        "/img/all-things-must-end/waveforms/box/03_Ein Tag Im April (Interlude).png",
      description: [
        <p>
          &ldquo;Ein Tag Im April&rdquo;, or &ldquo;a day in April&rdquo; spans
          a bridge between &ldquo;Nur Für Einen Augenblick&rdquo; and
          &ldquo;Angst vor der Zukunft&rdquo;. It&apos;s a wild ride, an
          experience, like a day in my life in that particular month.
        </p>,
        <p>
          Between ups and downs, between running 21 kilometers on a random
          saturday in pouring rain for the sheer reason of feeling the
          runner&apos;s high, feeling weightless, feeling so much, and crashing
          down completely while in Amsterdam.
        </p>,
        <p>
          It&apos;s also more than just a single day. A day became the representation of the entire mood
          I went through in April of 2023. It was a ride through some of the most 
        </p>,
        <p>
          The sonic atmosphere of this track is comprised of wast reverbs,
          familiar sounds from previous Zoomoid releases, heavily distorted and
          modulated to fade into &ldquo;Angst vor der Zukunft&rdquo;.
        </p>,
      ],
    },
    {
      title: "Angst vor der Zukunft",
      description: [<p></p>],
    },
    {
      title: "Outer Space (Reprise)",
      description: "",
    },
    {
      title: "Illusions",
      description: "",
    },
    {
      title: "Delay (Long Version)",
      description: "",
    },
    {
      title: "Maybe Someday",
      description: "",
    },
    {
      title: "Window of Opportunity (Too Late)",
      description: "",
    },
    {
      title: "Lazarus",
      description: "",
    },
    {
      title: "Rebirth",
      description: "",
    },
    {
      title: "Anywhere Else At Any Other Time",
      description: "",
    },
    {
      title: "Echoes of You",
      description: "",
    },
    {
      title: "The Last Chapter",
      description: "",
    },
    {
      title: "All Things Must End",
      description: "",
    },
  ];

  return (
    <article ref={skipRef} className="relative">
      <section className="min-h-screen mx-auto relative flex flex-col z-0 items-center">
        <div
          className="absolute w-full h-full left-0 right-0 bottom-0 z-10"
          style={{
            maskImage: `linear-gradient(transparent 0%, black 30%, black 100%)`,
          }}
        >
          <Image
            src="/img/all-things-must-end/assets/gregoire-jeanneau-9sxeKzuCVoE-unsplash.jpg"
            width={2304}
            height={3456}
            alt=""
            className="opacity-80 w-full"
          ></Image>
        </div>
        <div className="flex-grow"></div>
        <div className="max-w-screen-md mx-auto z-10 w-full text-lg ">
          <h3 className="text-10xl text-center">
            <span className="">
              <YearRoll
                decades={[10, 20]}
                years={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
                direction="normal"
                duration="5s"
                rootMargin="-500px 0px -500px 0px"
                once
              ></YearRoll>
            </span>
          </h3>
          <div className="space-y-2">
            <p>
              On <b>December 29th, 2013</b>, someone hit my reset button.
            </p>
            <p>
              I&apos;ve been <b>Zoomoid</b> for <b>10 years</b> now.
            </p>
            <p>
              I&apos;ve been through a lot of ups and downs.{" "}
              <b>It&apos;s time for something new.</b>
            </p>
            <p>
              Which means I have to leave something behind. To cite a film
              that&apos;s had monumental influence on me and my music:
              &ldquo;Newton&apos;s third law: In order to go somewhere, you have
              to leave something behind.&rdquo;
            </p>
            <p>Which means... this is it.</p>
            <p>
              The final <b>Zoomoid album</b>.{" "}
            </p>
            <p>The last chapter.</p>
            <p>Let&apos;s go have a look!</p>
          </div>
        </div>
        <div className="flex-grow"></div>
      </section>
      <section className="mx-auto relative h-[500px]  z-20">
        <div
          className="absolute w-full h-[800px] left-0 right-0 z-20 transform -translate-y-64 bg-[#051c35]"
          style={{
            maskImage: `linear-gradient(transparent 0%, black 30%, black 100%)`,
          }}
        ></div>
      </section>
      <section id="all-things-must-end" className="h-0 relative">
        <div className="relative w-full h-32 top-0 transform -translate-y-72 z-30">
          <Image
            src="/img/all-things-must-end/waveforms/line/All Things Must End (Album Mix).svg"
            fill
            alt=""
            className=""
          ></Image>
        </div>
      </section>
      <div
        className=""
        style={{
          backgroundImage: `linear-gradient(to bottom, #051c35 0%, rgb(180 83 9 / 100%) 50%, #fbbf24 100%)`,
        }}
      >
        {tracks.map((track, i) => {
          const waveformFilename = `${leadingZeroes(i + 1)}_${track.title}`;
          return (
            <section key={`track-${i}`}>
              <div className="mx-auto relative max-w-screen-md">
                <div className="flex items-stretch relative isolate">
                  <div className="relative w-48 flex-shrink-0 -ml-36 translate-x-12 md:-ml-48 md:translate-x-12 z-0">
                    <Image
                      src={boxWaveform(waveformFilename + ".png")}
                      width={400}
                      height={1280}
                      alt=""
                    ></Image>
                  </div>
                  <div className="flex-grow flex flex-col justify-center z-10">
                    <div className="flex">
                      <h3 className="font-sans flex-grow h-full text-2xl md:text-4xl mb-4">
                        <span>{leadingZeroes(i + 1)}</span> &mdash;{" "}
                        <span>{track.title}</span>
                      </h3>
                      {/* <div className="relative transform rotate-180">
                        <Image
                          src={waveWaveform(waveformFilename + ".svg")}
                          width={1010}
                          height={100}
                          alt=""
                        ></Image>
                      </div> */}
                    </div>

                    <div className="md:text-lg space-y-2">
                      {typeof track.description === "string" ? (
                        <p>{track.description}</p>
                      ) : (
                        React.Children.map(track.description, (d) => d)
                      )}
                      {track.children}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}
