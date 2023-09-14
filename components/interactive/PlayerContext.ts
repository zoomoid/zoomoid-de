import { CircularList, Queue } from "@/app/lib/structures";
import { createContext } from "react"

export class PlaybackQueue {
  private _queue: CircularList<Track>
  private _spotQueue: Queue<Track>

  constructor() {
    this._queue = new CircularList<Track>;
    this._spotQueue = new Queue<Track>;
  }

  initialize(tracks: Track[]) {
    for(const el of tracks) {
      this._queue.append(el)
    }
  }

  enqueue(track: Track) {
    this._spotQueue.enqueue(track);
  }

  /**
   * take returns the next track to play, by either dequeueing from the spot queue, or from the regular queue, 
   * also advancing the regular queue.
   * @returns the next Track, from either the spot queue or the regular queue, or null if empty
   */
  take(): Track | null {
    if (this._spotQueue.length() > 0) {
      return this._spotQueue.dequeue()
    }

    return this._queue.next();
  }

  next(): Track | null {
    return this.take();
  }

  prev(): Track | null {
    // cannot reverse on the spot queue, so only queue
    return this._queue.prev();
  }

  flushSpotQueue() {
    this._spotQueue.flush();
  }

  flush() {
    this._spotQueue.flush();
    this._queue.flush();
  }

  get queue(): Track[] {
    return this._queue.elements()
  }

  get spot(): Track[] {
    return this._spotQueue.elements();
  }
}

export type Track = {
  /**
   * Name of the title
   */
  name: string;
  /**
   * Name of the artist
   */
  artist: string;
  /**
   * URL to the title's album cover
   */
  cover?: string;
  /**
   * URL to the audio waveform
   */
  waveformSrc?: string;
  /**
   * Album, either the plain title, or the title and the URL 
   * where more details are displayed
   */
  album: {
    name: string;
    url: string;
  } | string;
  /**
   * Track duration in seconds
   */
  duration?: number;
  /**
   * Track URL for HTMLs audio tag
   */
  src: string;
  /**
   * Number of seconds played of the track.
   */
  played?: number;
};

export type PlayerState = {
  /**
   * Set of playback states supported. "stop" resets the player to "idle".
   * "error" is currently not implemented as a fallback state
   */
  playbackState: "idle" | "playing" | "paused" | "finished" | "error";
  /**
   * off -> on -> single -> off -> ...
   */
  repeat: "off" | "on" | "single";
  shuffle: boolean;
  /**
   * Seconds played for the *current* track 
   */
  played: number;

  /**
   * Whether the play head is currently on the spot queue or the regular queue
   * for selecting the next track
   */
  playingFrom: "queue" | "spot";
  /**
   * Current track selected, from either the spot queue or the regular queue. Note that
   * this is a copy, as pointers aren't possible.
   * 
   * Any changes to this do not persist in queue or spotQueue!
   */
  currentTrack: Track | null;

  queue: PlaybackQueue
}

export const PlayerContext = createContext<PlayerState>({
  playbackState: "idle",
  repeat: "off",
  shuffle: false,
  playingFrom: "queue",
  played: 0,
  currentTrack: null,
  queue: new PlaybackQueue()
})

