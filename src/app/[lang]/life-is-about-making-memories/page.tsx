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
    title: "Life Is About Making Memories",
    date: new Date(2018, 8, 22),
    theme: {
      backgroundColorClass: "bg-neutral-950",
      textColorClass: "text-neutral-300",
    },
    covers: [
      {
        url: "/img/liamm.jpg",
        height: 1500,
        width: 1500,
      },
    ],
    links: [
      {
        title: "Spotify",
        url: "https://open.spotify.com/album/2zF1wOwINENOR1fTGLqBEF",
      },
      {
        title: "Apple Music",
        url: "https://music.apple.com/de/album/life-is-about-making-memories/1437311634",
      },
      {
        title: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_mH5I0KnVAn5dBr79zfLhR_eZlghXeo3qs",
      },
      {
        title: "Bandcamp",
        url: "https://zoomoid.bandcamp.com/album/life-is-about-making-memories",
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
      <b>&ldquo;Life Is About Making Memories&rdquo;</b> is my first proper
      album release. It features 11 tracks, a proper intro and outro, and tries
      to hit those nostalgia notes, with tracks thematically and sonically
      covering video games, movies, tv series, and moments from childhood in the
      early 2000s, when things were simpler and I had to care less.
    </p>
  );
}

function DescriptionDE() {
  return (
    <p className="md:text-lg">
      <b>&bdquo;Life Is About Making Memories&ldquo;</b> ist meine erste
      richtige Albumveröffentlichung. Es enthält 11 Tracks, ein richtiges Intro
      und Outro, und versucht, diese Nostalgie-Töne zu treffen, mit Tracks, die
      thematisch und klanglich Videospiele Videospiele, Filme, Fernsehserien und
      Momente aus der Kindheit in den frühen 2000ern, als die Dinge einfacher
      waren und ich mir weniger Sorgen machen musste.
    </p>
  );
}
