import ReleaseScaffolding from "@/components/release/ReleaseScaffolding";
import { type Release } from "@/components/release/ReleaseScaffolding";
import { type Locale } from "@/i18n";

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default function Page({ params: { lang } }: PageProps) {
  const release: Release = {
    title: "Sehnsucht",
    date: new Date(2021, 4, 19),
    theme: {
      backgroundColorClass: "bg-slate-950",
      textColorClass: "text-white",
    },
    covers: [
      {
        url: "/img/sehnsucht.jpg",
        height: 1500,
        width: 1500,
      },
    ],
    links: [
      {
        title: "Spotify",
        url: "https://open.spotify.com/album/66pDMQY2oaaNzDdlqeJxZn",
      },
      {
        title: "Apple Music",
        url: "https://music.apple.com/de/album/sehnsucht-ep/1558711572",
      },
      {
        title: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_npljowOhh_kC1Cb8vFs83WU2R2XD--zZ4",
      },
      {
        title: "Bandcamp",
        url: "https://zoomoid.bandcamp.com/album/sehnsucht",
      },
      {
        title: "SoundCloud",
        url: "https://soundcloud.com/zoomoid/sets/sehnsucht-2",
      },
    ],
  };

  return (
    <ReleaseScaffolding {...release} lang={lang}>
      {lang === "de" ? (
        <DescriptionDE></DescriptionDE>
      ) : (
        <DescriptionEN></DescriptionEN>
      )}
    </ReleaseScaffolding>
  );
}

function DescriptionEN() {
  return (
    <p className="md:text-lg">
      <b>&ldquo;Sehnsucht&rdquo;</b> is a a 5-track{" "}
      <b>acoustic instrumental album</b>, featuring intimate instruments and a
      huge load of emotions. I wrote those tracks with the emotion of missing
      out and wishing for old times and new times at the same time, trying to
      express what I've been feeling for the last months. I{" "}
      <b>love them all very dearly.</b>
    </p>
  );
}

function DescriptionDE() {
  return (
    <p className="md:text-lg">
      <b>&bdquo;Sehnsucht&ldquo;</b> ist ein 5-Track{" "}
      <b>instrumentales Akustik-Album</b> mit intimen Instrument und einer
      riesigen Menge Emotionen. Ich habe all diese Tracks mit dem Gefühl, etwas
      zu verpassen und dem Wunsch nach sowohl alten Zeiten und neuen Zeiten
      gleichzeitig, geschrieben, und habe versucht, auszudrücken, was ich die
      letzten Monate gefühlt habe. Ich <b>liebe sie alle von ganzem Herzen.</b>
    </p>
  );
}
