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
    title: "Voyager",
    date: new Date(2020, 9, 30),
    theme: {
      backgroundColorClass: "bg-gray-950",
      textColorClass: "text-gray-200",
    },
    covers: [
      {
        url: "/img/voyager.jpg",
        height: 1500,
        width: 1500,
      },
    ],
    links: [
      {
        title: "Spotify",
        url: "https://open.spotify.com/album/6gQBxnohsIwgVsYgHzhoDs",
      },
      {
        title: "Apple Music",
        url: "https://music.apple.com/de/album/voyager/1535288340",
      },
      {
        title: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_lohW1hx_OGGYKoI_gD6t7pP_xVDKbAZ38",
      },
      {
        title: "Bandcamp",
        url: "https://zoomoid.bandcamp.com/album/voyager",
      },
      {
        title: "SoundCloud",
        url: "https://soundcloud.com/zoomoid/sets/voyager",
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
      <b>&ldquo;Voyager&rdquo;</b> is a journey away from earth into the
      darkness of space to discover the beauty of emptiness both inside and
      around me. Let yourself be taken away by an hour of listening experience
      of <b>many-faced techno and trance sounds</b>. Voyager is the most
      holistic Zoomoid release yet, and I&apos;m very proud of it!
    </p>
  );
}

function DescriptionDE() {
  return (
    <p className="md:text-lg">
      <b>&bdquo;Voyager&ldquo;</b> ist eine Reise weg von der Erde in die
      Dunkelheit des Weltalls, um die Schönheit der Leere sowohl in mir als auch
      um mich herum zu entdecken. Lass dich mitnehmen auf eine Stunde
      Hörerlebnis mit <b>vielgesichtigen Techno- und Trance-Sounds</b>. Voyager
      ist die bisher ganzheitlichste Zoomoid-Veröffentlichung bisher, und ich
      bin sehr stolz darauf!
    </p>
  );
}
