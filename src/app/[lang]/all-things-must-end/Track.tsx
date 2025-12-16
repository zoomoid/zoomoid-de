"use client";

import { hostname } from "@/app/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { startTransition, useContext, useState, type ReactNode } from "react";
import { leadingZeroes } from "./utils";
import { LocaleContext } from "@/context/locale.context";

export interface Track {
  title: string;
  description: ReactNode | ReactNode[];
  className?: string;
  children?: ReactNode | ReactNode[];
  audioURI?: string;
}

interface TrackProps {
  track: Track;
  index: number;
  className?: string;
}

const CDN_PREFIX = "/img/all-things-must-end";

const boxPrefix = `${CDN_PREFIX}/waveforms/box/v2`;
const sweepPrefix = `${CDN_PREFIX}/waveforms/sweep/v3`;

const waveform = (prefix: string, name: string): string => {
  return `${prefix}/${name.toLowerCase().replaceAll(" ", "-")}`;
};

export default function Track({ track, index }: TrackProps) {
  const pathname = usePathname();
  const {
    state: { lang },
  } = useContext(LocaleContext);

  const [showCopiedToClipboard, setShowCopiedToClipboard] = useState(false);

  const shareChip = (
    <div className="pointer-events-none fixed right-0 bottom-0 left-0 isolate z-2000 flex h-64 items-center justify-center md:relative md:h-auto">
      <div
        className="rounded-full bg-neutral-200 px-4 py-2 font-sans text-neutral-800 md:px-2 md:py-0 md:text-sm"
        style={{
          opacity: showCopiedToClipboard ? "1" : "0",
          transition: !showCopiedToClipboard ? "opacity 2s ease" : "none",
        }}
      >
        {lang === "de" ? "Link kopiert" : "Copied link"}
      </div>
    </div>
  );

  const trackNumber = leadingZeroes(index + 1);
  const filename = `${trackNumber}_${track.title}`;

  const trackAnchor = track.title.toLocaleLowerCase().replaceAll(" ", "-");
  const trackLink = `${hostname}${pathname}#${trackAnchor}`;

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        url: trackLink,
      });
    } else {
      await navigator.clipboard.writeText(trackLink);
      startTransition(() => {
        setShowCopiedToClipboard(true);
      });
      setTimeout(() => {
        setShowCopiedToClipboard(false);
      }, 3000);
    }
  };

  return (
    <section className={track.className} id={trackAnchor}>
      <div className="xs:px-0 xs:py-0 relative mx-auto max-w-screen-md px-4 py-24">
        <div className="xs:flex relative items-start md:items-stretch">
          <div className="xs:block relative z-0 -ml-36 hidden w-48 shrink-0 translate-x-12 md:-ml-48 md:translate-x-12">
            <Image
              src={waveform(boxPrefix, filename + ".png")}
              width={400}
              height={2000}
              alt=""
              aria-hidden
            ></Image>
          </div>
          <div className="relative z-10 flex grow flex-col justify-center text-white">
            <div className="flex">
              <h3 className="mb-4 h-full grow pr-4 font-sans text-3xl font-semibold md:pr-0 md:text-4xl">
                <span>{trackNumber}</span> &mdash; <span>{track.title}</span>
              </h3>
            </div>
            <div className="xs:text-base pr-4 text-base md:pr-0 md:text-lg">
              <div className="space-y-2">{track.description}</div>
              <div>{track.children}</div>
            </div>
          </div>
        </div>
        <div className="xs:hidden absolute top-0 right-0 bottom-0 left-0 block overflow-hidden">
          <Image
            src={waveform(sweepPrefix, filename + ".png")}
            height={5030}
            width={1010}
            alt=""
            aria-hidden
            className="relative h-full scale-105 opacity-20 mix-blend-overlay"
          ></Image>
        </div>
      </div>
    </section>
  );
}
