import Image from "next/image";
import { type ReactNode } from "react";

export interface Track {
  title: string;
  boxURI?: string;
  description: ReactNode | ReactNode[];
  className?: string;
  children?: ReactNode | ReactNode[];
}

interface TrackProps {
  track: Track;
  index: number;
}

const waveformPrefix = "/img/all-things-must-end/waveforms";

const boxWaveform = (name: string): string => `${waveformPrefix}/box/${name}`;

const leadingZeroes = (i: number, digits = 1): string => {
  if (i < digits * 10) {
    return "0" + i;
  }
  return i.toString();
};

export default function Track({ track, index }: TrackProps) {
  const trackNumber = leadingZeroes(index + 1);
  const waveformFilename = `${trackNumber}_${track.title}`;

  return (
    <section className={track.className}>
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
          <div className="flex-grow flex flex-col justify-center z-10 text-white">
            <div className="flex">
              <h3 className="font-sans flex-grow h-full text-2xl md:text-4xl mb-4">
                <span>{trackNumber}</span> &mdash; <span>{track.title}</span>
              </h3>
            </div>
            <div className="md:text-lg space-y-2">
              {track.description}
              {track.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
