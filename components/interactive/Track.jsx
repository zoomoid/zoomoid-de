import cn from "classnames";
import Image from "next/future/image";

export default function Track({ track, textColor, waveformEffect }) {
  return <li key={track.title} className="py-2 list-none md:flex items-center">
  <div className="flex items-center md:justify-end flex-grow">
    <span className={cn(textColor, "text-opacity-80 pr-2 text-xs md:text-normal")}>
      {track.artist}
    </span>
    <span className="text-sm md:text-lg font-bold md:text-right pr-4">
      {track.title}
    </span>
  </div>
  <div className="flex items-center">
    <button>
      <i className="material-icons-sharp">play_arrow</i>
    </button>
  </div>
  <Image className={cn(waveformEffect, "w-full max-w-xl py-2")} src={track.waveform} alt=""></Image>
</li>;
}

