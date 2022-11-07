import cn from "classnames";
import Image from "next/image";

export default function Track({ track, textColor, waveformEffect }) {
  return (
    <li key={track.title} className="py-2 list-none grid grid-cols-12 items-center">
      <div className="flex items-center justify-end col-span-5 gap-2">
        <span
          className={cn(
            textColor,
            "text-opacity-80 text-xs md:text-normal"
          )}
        >
          {track.artist}
        </span>
        <span className="text-sm md:text-lg font-bold md:text-right">
          {track.title}
        </span>
      </div>
      <div className="flex items-center col-span-1 justify-center">
        <button>
          <i className="material-icons-sharp">play_arrow</i>
        </button>
      </div>
      <div className="flex col-span-5 max-w-xl items-stretch">
        <Image
          className={cn(waveformEffect, "w-full py-2")}
          src={track.waveform}
          alt=""
        ></Image>
      </div>
      <div className="flex items-center px-2 col-span-1 place-content-center">
        <button>
          <i className="material-icons-sharp">download</i>
        </button>
      </div>
    </li>
  );
}
