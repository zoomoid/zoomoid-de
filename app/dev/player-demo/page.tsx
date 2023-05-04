import Player from "components/interactive/Player";

export default function PlayerDemoPage() {
  const voyager_tracks = [
    {
      "title": "The Moon",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/01_the_moon.mp3"
    },{
      "title": "Mars",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/02_mars.mp3"
    },{
      "title": "The Space Between Stars",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/03_the_space_between_stars.mp3"
    },{
      "title": "Hale-Bopp",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/04_hale-bopp.mp3"
    },{
      "title": "Andromeda",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/05_andromeda.mp3"
    },{
      "title": "Icarus",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/06_icarus.mp3"
    },{
      "title": "Blindflug",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/07_blindflug.mp3"
    },{
      "title": "Voyager",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/08_voyager.mp3"
    },{
      "title": "Io",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/09_io.mp3"
    },{
      "title": "New Horizons",
      "artist": "Zoomoid",
      "album": "Voyager",
      "source": "/mp3/voyager/10_new_horizons.mp3"
    },
  ]



  return (
    <>
      <Player />
    </>
  );
}
