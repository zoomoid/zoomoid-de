import Image from "next/image";

function Track({ track }: {
  track: {
    artist: string,
    title: string,
    waveform: string,
  }
}) {
  return (
    <li className="py-2 list-none flex items-center">
      <div className="flex items-center justify-end flex-grow">
        <span className="text-neutral-400 pr-2">{track.artist}</span>
        <span className="text-lg font-bold text-right pr-4">
          {track.title}
        </span>
      </div>
      <Image
        className={"w-full max-w-xl py-2"}
        src={track.waveform}
        alt=""
      />
    </li>
  );
}

export default function Tracklist({ tracks, className }: {
  className: string,
  tracks: {
    title: string,
    artist: string,
    waveform: string
  }[]
}) {
  return (
    <ol className={`list-decimal ${className}`}>
      {tracks.map((t) => {
        return <Track key={t.title} track={t} />;
      })}
    </ol>
  );
}
