"use client";
import { PayloadAction, current } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type Track = {
  name: string;
  artist: string;
  cover?: string;
  waveformSrc?: string; 
  album: {
    name: string;
    url: string;
  } | string;
  duration?: number;
  src: string;
  played?: number;
};

type State = {
  state: "stopped" | "paused" | "playing" | "error";
  repeat: "off" | "on" | "single";
  shuffle: boolean;
  currentQueueIndex: number;
  playingFrom: "main" | "spot";
  /**
   * currentTrack is a copy of the currently playing track either from the main
   * queue or the most recently shifted element from the spot queue.
   */
  played: number;
  currentTrack?: Track;
  /**
   * Queue behaviour is kind of special in combination with repeat state:
   *
   * 1. When using Repeat on an album (or more general, playlist) in Spotify
   *  Spotify enqueues the remainder of the album from that track and then also
   *  enqueues the *entire* album once more. I'm not entirely sure why this is
   *  the case but removing tracks from the queue will "refill" the queue under
   *  a certain threshold of tracks.
   * 2. YouTube Music does *not* enqueue more than the album, i.e., it does not
   *  double the queue length in the worst case. This comes at the "complexity"
   *  of adding more bounds checks, but asymptotically, should be equal to the Spotify
   *  model.
   * 3. Soundcloud, in album view, constructs a queue on load from the album, and
   *  maintains an index of where it currently "is" in the queue, meaning that the
   *  queue wraps around on finish of the last track in the queue.
   */
  queue: Track[];
  /**
   * The spot queue maintains tracks enqueued by manual actions, like
   * a user clicking on an "Add to Queue" button. Elements in the spot
   * queue have priority over tracks in the main queue, and are tracked
   * using their own queue pointer. Notably, calling "next" on an element
   * in the spot queue consumes the element and proceeds to the next
   * element in the spot queue, if there is any, otherwise falls back to
   * the main queue.
   *
   * This gives us the ability to "insert" tracks into the main flow of
   * tracks.
   */
  spotQueue: Track[];
};

const initialState: State = {
  state: "stopped",
  repeat: "off",
  shuffle: false,
  currentQueueIndex: -1,
  played: 0,
  playingFrom: "main",
  currentTrack: undefined,
  queue: [],
  spotQueue: [],
};

export const playerSlice = createSlice({
  name: "player",
  initialState: initialState as State,
  reducers: {
    setPlaybackTime: (state, { payload }: PayloadAction<{ time: number }>) => {
      const { time } = payload;
      state.played = time;
    },
    /**
     * pause set the playback state to "paused"
     */
    pause: (state) => {
      state.state = "paused";
    },
    /**
     * resume set the playback state to "playing"
     */
    resume: (state) => {
      state.state = "playing";
    },
    /**
     * stop set the playback state to "stopped"
     */
    stop: (state) => {
      state.state = "stopped";
    },
    /**
     * toggleShuffle toggles the shuffle state of playback
     */
    toggleShuffle: (state) => {
      state.shuffle = !state.shuffle;
    },
    /**
     * toggleRepeat cycles through the repeat modes in the fashion of
     * off -> on -> single -> off -> ...
     */
    toggleRepeat: (state) => {
      switch (state.repeat) {
        case "off":
          state.repeat = "on";
          break;
        case "on":
          state.repeat = "single";
          break;
        case "single":
          state.repeat = "off";
          break;
      }
      console.log(current(state));
    },
    /**
     * trackFinished just resets the played seconds state to 0
     */
    trackFinished: (state) => {
      state.played = 0;
    },
    /**
     * previous mirrors the behaviour of most modern players, where the playback
     * position between *tracks* is only changed when less than 3 seconds of
     * the current track have been played.
     *
     * Therefore, for state.played < 3, previous only resets the played state to 0.
     * For all other values, previous selects the previous track from the main queue.
     */
    previous: (state) => {
      if (state.played >= 3) {
        // more than 3 seconds of playback of the current track:
        // TODO(zoomoid): make sure this propagates to the <audio> tag properly
        state.played = 0;
        return;
      }

      // additionally, if in single repeat state, triggering previous will reset to normal repeat mode
      if (state.repeat === "single") {
        state.repeat = "on";
      }

      if (state.repeat === "off" && state.currentQueueIndex === 0) {
        // if repeat is not enabled and the current track is the first of the queue
        // only the played state is reset to 0
        state.played = 0;
        return;
      }
      // at this point, the only allowed repeat state to be in is "on",
      // because we disabled single repeat earlier
      let idx;
      if (state.currentQueueIndex === 0) {
        // wrap-around to the end
        idx = state.queue.length - 1;
      } else {
        idx = state.currentQueueIndex - 1;
      }
      state.currentQueueIndex = idx;
      const newTrack = state.queue[idx];

      state.currentTrack = newTrack;
    },
    /**
     * "next" track action; this is highly dependent on the repeat state,
     * which affects queue behaviour:
     *
     * If repeat is "off", and "next" is called, the next track is selected
     * if and only if there is a next track in the queue. If the queue is at
     * its end, no mutation happens.
     *
     * If repeat is "on", and "next" is called, the next track is selected.
     * Specifically, at the end of the queue, the queue wraps around and starts
     * from the beginning again. Note that the queue by default is non-consuming,
     * meaning that played tracks are not "removed" from the queue, but instead
     * the queue index shifts over all indices in the queue. This way, we can ensure
     * the state stays the same for wrap-arounds.
     */
    next: (state) => {
      // additionally, if in single repeat state, triggering next will reset to normal repeat mode
      if (state.repeat === "single") {
        state.repeat = "on";
      }

      if (state.spotQueue.length > 0) {
        // spot queue elements are consumable, and we can only ever play the first track
        // without losing the preceeding ones.
        // Therefore, shift the spot queue one to the left, removing the first element.
        // TODO(zoomoid): we might need to inform the subscribers about this change, for
        //                them to change the currently playing track without changes to the index
        const newTrack = state.spotQueue.shift();
        if (!newTrack) {
          return;
        }
        // update currently playing track with the foremost track from the spot queue
        state.currentTrack = newTrack;
      } else {
        let newIdx;
        if (state.currentQueueIndex + 1 > state.queue.length) {
          // we're at the end of the queue
          if (state.repeat !== "off") {
            // wrap around and start from the beginning
            newIdx = 0;
          } else {
            return; // no next tracks to play, play state will reset "automatically" from the player
          }
        } else {
          newIdx = state.currentQueueIndex + 1;
        }
        state.currentQueueIndex = newIdx;

        // update current track field
        const newTrack = state.queue[newIdx];
        state.currentTrack = newTrack;
      }
    },
    playFromSpotQueue: (state, { payload }) => {
      // idx is the n-th element in the spot queue:
      // [0, 1, 2, 3, 4, ...]
      // so if
      const { idx } = payload;

      // save track to play before dequeueing a bunch of tracks
      const newTrack = state.spotQueue[idx];
      for (let n = 0; n < idx; n += 1) {
        state.spotQueue.shift();
      }

      state.currentTrack = newTrack;
    },
    flushSpotQueue: (state) => {
      state.spotQueue = [];
    },
    playFromQueue: (state, { payload }: PayloadAction<{ idx: number }>) => {
      const { idx } = payload;

      // just a simple bounds check
      if (idx < 0 || idx >= state.queue.length) {
        return;
      }

      state.currentQueueIndex = idx;
      const newTrack = state.queue[idx];
      state.currentTrack = newTrack;
    },
    resetPlayStateFor: (state, { payload }: PayloadAction<{ idx: number }>) => {
      const { idx } = payload;
      if (state.queue[idx]) {
        state.queue[idx].played = 0;
      }
    },
    resetQueue: (state) => {
      state.queue = [];
    },
    queueFinished: (state) => {
      state.played = 0;
    },
    addToQueue: (state, { payload }: PayloadAction<{ track: Track }>) => {
      const { track } = payload

      state.queue = [...state.queue, track]
    },
    addToSpotQueue: (state, { payload }: PayloadAction<{track:Track}>) => {
      const { track } = payload

      state.spotQueue = [...state.spotQueue, track]
    }
  },
});

export const {
  pause,
  resume,
  stop,
  toggleRepeat,
  toggleShuffle,
  trackFinished,
  next,
  previous,
  playFromQueue,
  playFromSpotQueue,
  resetPlayStateFor,
  resetQueue,
  queueFinished,
  setPlaybackTime,
  addToQueue,
  addToSpotQueue
} = playerSlice.actions;

export default playerSlice.reducer;
