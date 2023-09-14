import { PlaybackQueue, PlayerState } from "./PlayerContext";
import { Track } from "./playerSlice";

type Action<T extends string = string, P = void> = { type: T, payload: P }

type PauseAction = Action<"pause">
type ResumeAction = Action<"resume">
type StopAction = Action<"stop">
type FinishedAction = Action<"finished">

type ToggleShuffleAction = Action<"toggleShuffle">
type ToggleRepeatAction = Action<"toggleRepeat">

type PreviousTrackAction = Action<"previous">
type NextTrackAction = Action<"next">

type FlushSpotQueueAction = Action<"flushSpotQueue">
type FlushQueueAction = Action<"flushQueue">

type PlayFromSpotQueueAction = Action<"playFromSpotQueue", { idx: number }>
type PlayFromQueueAction = Action<"playFromQueue", { idx: number }>

type ResetPlayStateForAction = Action<"resetPlayStateFor", { idx: number }>

type InitializeQueueAction = Action<"initializeQueue", { tracks: Track[] }>

type AddToQueueAction = Action<"addToQueue", { track: Track }>

type PlayerAction = PauseAction | ResumeAction | StopAction | FinishedAction |
  ToggleShuffleAction | ToggleRepeatAction |
  PreviousTrackAction | NextTrackAction |
  FlushSpotQueueAction | FlushQueueAction |
  ResetPlayStateForAction |
  InitializeQueueAction | AddToQueueAction

export function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case "pause": {
      return {
        ...state,
        playbackState: "paused"
      }
    }
    case "resume": {
      return {
        ...state,
        playbackState: "playing"
      }
    }
    case "stop": {
      return {
        ...state,
        currentTrack: null,
        played: 0,
        playbackState: "idle"
      }
    }
    case "finished": {
      return {
        ...state,
        playbackState: "finished",
        played: 0
      }
    }
    case "toggleRepeat": {
      /** off -> on -> single -> off -> ... */
      switch (state.repeat) {
        case "off":
          return { ...state, repeat: "on" }
        case "on":
          return { ...state, repeat: "single" }
        case "single":
          return { ...state, repeat: "off" }
      }
    }
    case "toggleShuffle": {
      return {
        ...state,
        shuffle: !state.shuffle
      }
    }
    case "initializeQueue": {
      const { tracks } = action.payload

      const q = new PlaybackQueue()
      q.initialize(tracks)

      const nowPlaying = q.take()
      return {
        ...state,
        queue: q,
        currentTrack: nowPlaying,
      }
    }
    case "addToQueue": {
      const { track } = action.payload

      state.queue.enqueue(track);

      return { ...state }
    }
    case "flushQueue": {
      state.queue.flush();
      return { ...state }
    }
    case "flushSpotQueue": {
      state.queue.flushSpotQueue();
      return { ...state }
    }
    case "next": {
      const nowPlaying = state.queue.next()
      return {
        ...state,
        currentTrack: nowPlaying,
        played: 0,
        playbackState: "playing",
      }
    }
    case "previous": {
      const nowPlaying = state.queue.prev()
      return {
        ...state,
        currentTrack: nowPlaying,
        played: 0,
        playbackState: "playing",
      }
    }
  }
  return state
}