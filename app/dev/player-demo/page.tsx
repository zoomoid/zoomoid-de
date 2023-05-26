"use client";
import { useAppDispatch } from "@/app/hooks";
import Player from "@/components/interactive/player";
import Playlist from "@/components/interactive/playlist";
import { setTheme } from "@/components/layout/layoutSlice";
import { Track, addToQueue } from "@/components/interactive/playerSlice";
import { useState } from "react";

export default function PlayerDemoPage() {

  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-black", backgroundColor: "bg-white" }))

  const [loaded, setLoaded] = useState(false)

  const voyager_tracks: Track[] = [
    {
      name: "The Moon",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/01_the_moon.mp3",
      cover: "/img/covers/voyager.jpeg",
    }, {
      name: "Mars",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/02_mars.mp3"
    }, {
      name: "The Space Between Stars",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/03_the_space_between_stars.mp3"
    }, {
      name: "Hale-Bopp",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/04_hale-bopp.mp3"
    }, {
      name: "Andromeda",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/05_andromeda.mp3",
      cover: "/img/covers/voyager.jpeg",
    }, {
      name: "Icarus",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/06_icarus.mp3",
      cover: "/img/covers/voyager.jpeg",
    }, {
      name: "Blindflug",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/07_blindflug.mp3",
      cover: "/img/covers/voyager.jpeg",
    }, {
      name: "Voyager",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/08_voyager.mp3"
    }, {
      name: "Io",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/09_io.mp3"
    }, {
      name: "New Horizons",
      artist: "Zoomoid",
      album: "Voyager",
      src: "/mp3/voyager/10_new_horizons.mp3"
    },
  ]

  return (
    <>
      <div className="min-h-screen">
        <div className="py-16 px-4">
          {!loaded && <button onClick={() => {
            voyager_tracks.forEach((t) => {
              dispatch(addToQueue({ track: t }))
            })
            setLoaded(true)
          }}>Add Voyager Tracks to Store</button>}
          <Playlist />
          <Player />
        </div>
      </div>
    </>
  );
}
