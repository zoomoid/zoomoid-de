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

export default function Player(props) {
  // const dispatch = useDispatch();

  // const track = useSelector((state) => state.player.currentTrack);

  // const repeatType = useSelector((state) => state.player.repeat);

  // const shuffle = useSelector((state) => state.player.shuffle);

  // const playState = useSelector((state) => state.player.state);

  // const [audio, setAudio] = useState(null);

  // useEffect(() => {
  //   setAudio(new Audio(track.url));
  // }, []);

  // if (audio) {
  //   audio.addEventListener("timeupdate", function () {
  //     dispatch(setPlaybackTime({ time: this.currentTime }));
  //   });

  //   audio.addEventListener("ended", function () {
  //     dispatch(trackFinished());

  //     // TODO(zoomoid): start the next track without using next(), which is a user action
  //     // might require a new reducer
  //   });
  // }

  // return (
  //   <>
  //     <div className="p-4 flex">
  //       <div className="flex gap-x-4">
  //         <button type="button" onClick={() => dispatch(previous())}>
  //           <i className="material-icons-sharp">skip_previous</i>
  //         </button>
  //         {playState === "playing" && (
  //           <button type="button" onClick={() => dispatch(pause())}>
  //             <i className="material-icons-sharp">pause</i>
  //           </button>
  //         )}
  //         {playState === "paused" && (
  //           <button type="button" onClick={() => dispatch(resume())}>
  //             <i className="material-icons-sharp">play_arrow</i>
  //           </button>
  //         )}
  //         {playState === "stopped" && (
  //           <button
  //             type="button"
  //             onClick={() => dispatch(resetPlayStateFor({}))}
  //           >
  //             <i className="material-icons-sharp">replay</i>
  //           </button>
  //         )}
  //         <button type="button" onClick={() => dispatch(next())}>
  //           <i className="material-icons-sharp">skip_next</i>
  //         </button>
  //         <button type="button" onClick={() => dispatch(toggleShuffle())}>
  //           <i
  //             className={cn(
  //               "material-icons-sharp",
  //               shuffle ? "text-orange-500" : ""
  //             )}
  //           >
  //             shuffle
  //           </i>
  //         </button>
  //         {repeatType === "off" && (
  //           <button type="button" onClick={() => dispatch(toggleRepeat())}>
  //             <i className="material-icons-sharp">repeat</i>
  //           </button>
  //         )}
  //         {repeatType === "on" && (
  //           <button type="button" onClick={() => dispatch(toggleRepeat())}>
  //             <i className="material-icons-sharp text-orange-500">repeat</i>
  //           </button>
  //         )}
  //         {repeatType === "single" && (
  //           <button type="button" onClick={() => dispatch(toggleRepeat())}>
  //             <i className="material-icons-sharp text-orange-500">repeat_one</i>
  //           </button>
  //         )}
  //       </div>
  //     </div>
  //   </>
  // );

  return <></>
}
