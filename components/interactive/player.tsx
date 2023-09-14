import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  resume,
  stop,
  pause,
  next,
  previous,
  toggleRepeat,
  toggleShuffle,
  trackFinished,
  setPlaybackTime,
  resetPlayStateFor,
} from "./playerSlice";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

export default function Player() {
  const dispatch = useAppDispatch();

  const [track, currentQueueIndex, repeatType, shuffle, playState] = [
    useAppSelector((state) => state.player.currentTrack),
    useAppSelector((state) => state.player.currentQueueIndex),
    useAppSelector((state) => state.player.repeat),
    useAppSelector((state) => state.player.shuffle),
    useAppSelector((state) => state.player.state)
  ]

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!track?.src) {
      return
    }
    const audio = new Audio(track.src)
    setAudio(audio);
  }, []);

  if (audio) {
    audio.addEventListener("timeupdate", function () {
      dispatch(setPlaybackTime({ time: this.currentTime }));
    });

    audio.addEventListener("ended", function () {
      dispatch(trackFinished());

      // TODO(zoomoid): start the next track without using next(), which is a user action
      // might require a new reducer
    });
  }

  return (
    <>
      <div className="flex p-4">
        <div className="flex gap-x-4">
          <button type="button" onClick={() => dispatch(previous())}>
            <i className="material-icons-sharp">skip_previous</i>
          </button>
          {playState === "playing" && (
            <button type="button" onClick={() => dispatch(pause())}>
              <i className="material-icons-sharp">pause</i>
            </button>
          )}
          {playState === "paused" && (
            <button type="button" onClick={() => dispatch(resume())}>
              <i className="material-icons-sharp">play_arrow</i>
            </button>
          )}
          {playState === "stopped" && (
            <button
              type="button"
              onClick={() => dispatch(resetPlayStateFor({
                idx: currentQueueIndex
              }))}
            >
              <i className="material-icons-sharp">replay</i>
            </button>
          )}
          <button type="button" onClick={() => dispatch(next())}>
            <i className="material-icons-sharp">skip_next</i>
          </button>
          <button type="button" onClick={() => dispatch(toggleShuffle())}>
            <i
              className={cn(
                "material-icons-sharp",
                shuffle ? "text-orange-500" : ""
              )}
            >
              shuffle
            </i>
          </button>
          {repeatType === "off" && (
            <button type="button" onClick={() => dispatch(toggleRepeat())}>
              <i className="material-icons-sharp">repeat</i>
            </button>
          )}
          {repeatType === "on" && (
            <button type="button" onClick={() => dispatch(toggleRepeat())}>
              <i className="text-orange-500 material-icons-sharp">repeat</i>
            </button>
          )}
          {repeatType === "single" && (
            <button type="button" onClick={() => dispatch(toggleRepeat())}>
              <i className="text-orange-500 material-icons-sharp">repeat_one</i>
            </button>
          )}
        </div>
      </div>
    </>
  );

  return <></>
}
