import { hostname } from "@/app/constants";
import { PlayerContext } from "@/context/player.context";
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
}

const boxPrefix = "/img/all-things-must-end/waveforms/box/v2";
const sweepPrefix = "/img/all-things-must-end/waveforms/sweep/v2";

const waveform = (prefix: string, name: string): string => `${prefix}/${name}`;

export default function Track({ track, index }: TrackProps) {
  const {
    state: { index: i, playing },
    dispatch,
  } = useContext(PlayerContext);

  const pathname = usePathname();
  const {
    state: { lang },
  } = useContext(LocaleContext);

  const [showCopiedToClipboard, setShowCopiedToClipboard] = useState(false);

  const shareChip = (
    <div className="fixed md:relative pointer-events-none left-0 bottom-0 right-0 h-64 md:h-auto flex items-center justify-center z-2000 isolate">
      <div
        className="rounded-full font-sans bg-neutral-200 text-neutral-800 px-4 py-2 md:py-0 md:px-2 md:text-sm"
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

  const startPlayback = () => {
    dispatch({
      type: "play",
      title: track.title,
      uri: track.audioURI!,
      index: index,
      interactive: true,
    });
  };

  const togglePlayback = () => {
    playing ? dispatch({ type: "pause" }) : dispatch({ type: "resume" });
  };

  const currentlyPlaying = index === i;

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
      <div className="mx-auto relative max-w-screen-md px-4 xs:px-0 py-24 xs:py-0">
        <div className="xs:flex items-start md:items-stretch relative">
          <div className="hidden xs:block relative w-48 flex-shrink-0 -ml-36 translate-x-12 md:-ml-48 md:translate-x-12 z-0">
            <Image
              src={waveform(boxPrefix, filename + ".png")}
              width={400}
              height={2000}
              alt=""
            ></Image>
          </div>
          <div className="flex-grow flex flex-col justify-center z-10 text-white relative">
            <div className="flex">
              <h3 className="font-sans font-semibold flex-grow h-full text-3xl md:text-4xl mb-4 pr-4 md:pr-0">
                <span>{trackNumber}</span> &mdash; <span>{track.title}</span>
              </h3>
            </div>
            <div className="text-sm xs:text-base md:text-lg pr-4 md:pr-0">
              <div className="space-y-2">{track.description}</div>
              <div>{track.children}</div>
              <div className="mt-4 flex items-center gap-x-2 justify-around xs:justify-start">
                <button
                  type="button"
                  onClick={() =>
                    currentlyPlaying ? togglePlayback() : startPlayback()
                  }
                  className="py-2 px-6 rounded-lg border-2 border-white flex items-center hover:bg-white/20 transition-colors"
                >
                  <i className="material-symbols-outlined leading-none">
                    {currentlyPlaying && playing ? "pause" : "play_arrow"}
                  </i>
                </button>
                <a
                  href={track.audioURI}
                  className="py-2 px-6 rounded-lg border-2 border-white flex items-center hover:bg-white/20 transition-colors hover:no-underline"
                >
                  <i className="material-symbols-outlined leading-none">
                    download
                  </i>
                </a>
                <a
                  onClick={handleShare}
                  className="py-2 px-6 rounded-lg border-2 border-white flex items-center hover:bg-white/20 transition-colors hover:no-underline cursor-pointer"
                >
                  <i className="material-symbols-outlined leading-none">
                    share
                  </i>
                </a>
                {shareChip}
              </div>
              <div className="block xs:hidden relative">
                <Image
                  src={waveform(sweepPrefix, filename + ".png")}
                  width={2015}
                  height={810}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
