"use client";

import { PlayerContext } from "@/context/player.context";
import { useContext, useEffect, useRef, useState, type HTMLProps } from "react";
import { leadingZeroes } from "./utils";

type PlayerProps = {} & HTMLProps<HTMLAudioElement>;

const formatSeconds = (duration: number): string => {
  const minutes = leadingZeroes(Math.floor(duration / 60));
  const seconds = leadingZeroes(Math.floor(duration % 60));

  return `${minutes}:${seconds}`;
};

function Player({ ...props }: PlayerProps) {
  const [paused, setPaused] = useState(true);

  const [duration, setDuration] = useState(0);
  const [playTime, setPlayTime] = useState(0);

  const {
    state: { title, uri, playing, reset, index },
    dispatch,
  } = useContext(PlayerContext);

  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!ref) return;
    if (!ref.current) return;
    if (!uri) return;
    ref.current.pause();
    ref.current.src = uri;
    ref.current.load();
    ref.current.play().catch(() => {});
  }, [uri]);

  useEffect(() => {
    if (!ref) return;
    if (!ref.current) return;
    ref.current.currentTime = 0;
  }, [reset]);

  useEffect(() => {
    if (!ref) return;
    if (!ref.current) return;
    if (playing) {
      ref.current.play();
      setPaused(false);
    } else {
      ref.current.pause();
      setPaused(true);
    }
  }, [playing]);

  const [isDragging, setIsDragging] = useState(false);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (isDragging) return; // don't auto-update the width if the bar is currently being draggeds
    setBarWidth(playTime / duration);
  }, [playTime, duration, isDragging]);

  const pause = () => {
    setPaused(true);
    dispatch({ type: "pause" });
  };

  const resume = () => {
    setPaused(false);
    dispatch({ type: "resume" });
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-20 py-2 px-4 z-[1001] border-t border-neutral-100/30"
      style={{
        display: !uri && !title ? "none" : "block",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/20 mix-blend-luminosity"></div>
      <div className="hidden">
        <audio
          {...props}
          ref={ref}
          onEnded={(event) => {
            if (props.onEnded) props.onEnded(event);
          }}
          onTimeUpdate={({ currentTarget }) => {
            setPlayTime(currentTarget.currentTime);
          }}
          onDurationChange={({ currentTarget }) => {
            setDuration(currentTarget.duration);
          }}
        ></audio>
      </div>
      <div className="text-neutral-300 relative z-10 font-sans mx-auto max-w-screen-lg font-normal grid grid-cols-1 grid-rows-2">
        <div className="font-semibold text-center text-lg">
          {/* Track metadata */}
          <span>{leadingZeroes(index !== undefined ? index + 1 : 0)}</span>
          <span> &ndash; </span>
          <span>{title || "No track selected"}</span>
        </div>
        <div className="flex items-center gap-x-2 text-sm">
          <div className="overflow-visible">
            {/* Controls */}
            <button
              className="w-8 h-8 flex items-center justify-center text-2xl"
              onClick={() => {
                if (paused) {
                  resume();
                } else {
                  pause();
                }
              }}
            >
              <i className="material-symbols-outlined">
                {paused ? "play_arrow" : "pause"}
              </i>
            </button>
          </div>
          <div
            className="flex-grow relative h-4 overflow-visible isolate"
            // onClick={(e) => {
            //   const bar = e.currentTarget!.getBoundingClientRect();
            //   const x = e.clientX - bar.left;
            //   setBarWidth(Math.min(1, Math.max(0, x / bar.width)));
            //   ref.current!.currentTime = ref.current!.duration * barWidth;
            //   e.preventDefault()
            // }}
            onMouseUp={(e) => {
              setIsDragging(false);
              resume();
              e.preventDefault();
            }}
            onMouseDown={(e) => {
              setIsDragging(true);
              pause();
              e.preventDefault();
            }}
            onMouseMove={({ currentTarget, clientX }) => {
              if (!isDragging) return;
              const bar = currentTarget!.getBoundingClientRect();
              const x = clientX - bar.left;
              setBarWidth(Math.min(1, Math.max(0, x / bar.width)));
              ref.current!.currentTime = ref.current!.duration * barWidth;
            }}
          >
            {/* Seek area */}
            <div className="absolute top-1 h-2 left-0 right-0 rounded-full bg-neutral-300/20"></div>
            <div
              className="absolute top-1 h-2 left-0 right-0 rounded-full bg-neutral-200"
              style={{
                width: 100 * barWidth + "%",
                transition: "width 0.1s linear",
              }}
            ></div>
          </div>
          <div className="w-[11ch] text-right">
            {/* Time markers */}
            <span>{formatSeconds(playTime)}</span>
            <span> &ndash; </span>
            <span>{formatSeconds(duration)}</span>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <button
            className="leading-none"
            onClick={() => {
              dispatch({ type: "stop" });
            }}
          >
            <i className="material-symbols-outlined">close</i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
