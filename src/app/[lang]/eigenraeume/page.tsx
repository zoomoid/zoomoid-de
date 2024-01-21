import ReleaseScaffolding from "@/components/ReleaseScaffolding";
import { type Release } from "@/components/ReleaseScaffolding";
import { type Locale } from "@/i18n";

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: PageProps) {
  const release: Release = {
    title: "Eigenräume",
    date: new Date(2019, 8, 9),
    theme: {
      backgroundColorClass: "bg-[#c80a0a]",
      textColorClass: "text-black",
      navigationImageFilter: "invert",
    },
    covers: [
      {
        url: "/img/eigenräume.jpg",
        height: 1500,
        width: 1500,
        className: "scale-105 shadow-neutral-800/50",
      },
      {
        url: "/img/eigenräume_pre.jpg",
        height: 1500,
        width: 1500,
        className: "scale-90 shadow-neutral-800/50"
      },
    ],
    links: [
      {
        title: "Spotify (Extended Edition)",
        url: "https://open.spotify.com/album/1N5yphubnUoyuk4hg8cP5n",
      },
      {
        title: "Apple Music (Extended Edition)",
        url: "https://music.apple.com/de/album/eigenr%C3%A4ume-extended-edition/1478203701",
      },
      {
        title: "YouTube Music (Extended Edition)",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_nIS2H55WdkbM-7y2rkHzOnFi6LMFtHC7A",
      },
      {
        title: "Bandcamp (Extended Edition)",
        url: "https://zoomoid.bandcamp.com/album/eigenr-ume-extended-edition",
      },
      {
        title: "SoundCloud (Extended Edition)",
        url: "https://soundcloud.com/zoomoid/sets/eigenraume-extended-edition",
      },
      {
        title: "Spotify (Standard Edition)",
        url: "https://open.spotify.com/album/3YaUvYAudEXEuCJzoONcgE",
      },
      {
        title: "YouTube Music (Standard Edition)",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_lVUbQEvad7LvTipB83h-seZwK7-BVDFA8",
      },
      {
        title: "Bandcamp (Standard Edition)",
        url: "https://zoomoid.bandcamp.com/album/eigenr-ume-standard-edition",
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
    <div className="space-y-2 text-lg">
      <p>
        <b><q>Eigenräume</q></b> is a twin-release concept album released
        in 2019. The first 6-track version of the album is called{" "}
        <b>Standard Edition</b> (with the black cover) was released on May 14th,
        2019, which featured the core tracks of the full album in their
        standalone versions. The longer 11-track version is called{" "}
        <b>Extended Edition</b> (with the red cover), features concept edits of
        the 6 tracks of the <b>Standard Edition</b>, as well as 5 other tracks
        that frame the album&apos;s pinnacle position as the Zoomoid style.
      </p>
      <p>
        <b><q>Eigenräume (Extended Edition)</q></b> is my 2019&apos;s main
        release, with 11 tracks (again), intro and outro, and seamless blending
        of tracks (at least on the first 7 tracks)! It also features 3 tracks
        that were written after the original concept album was created, but
        seemed to fit the overall context. In particular, I&apos;m proud of{" "}
        <b><q>Outer Space</q></b>
      </p>
    </div>
  );
}

function DescriptionDE() {
  return (
    <div className="space-y-2 text-lg">
      <p>
        <b><q>Eigenräume</q></b> ist ein Konzeptalbum aus 2019 mit
        Zwillings-Release. Die erste Version mit 6 Tracks heißt{" "}
        <b>Standard Edition</b> (mit dem schwarzen Cover) und wurde am 19. Mai
        2019 veröffentlicht. Sie enthält die Kernstücke des vollen Albums in
        ihrer Einzelfassung. The längere 11-Titel-Version heißt{" "}
        <b>Extended Edition</b> (mit dem roten Cover) und beinhaltet the
        Konzeptversionen der sechs Kerntitel der <b>Standard Edition</b>, sowie
        fünf weitere Tracks, die die Wichtigkeit des Albums auf den Zoomoid-Stil
        hervorheben.
      </p>
      <p>
        <b><q>Eigenräume (Extended Edition)</q></b> ist meine
        Hauptveröffentlichung für 2019, mit (erneut) elf Tracks, Intro, Outro,
        und dem nahtlosen Überblenden (zumindest für die ersten sieben Tracks)!
        Sie beinhaltet außerdem drei Tracks, die erst nach der Veröffentlichung
        der <b>Standard Edition</b> geschrieben wurden, aber trotzdem in das
        Konzept passten. Ich bin besonders stolz auf{" "}
        <b><q>Outer Space</q></b>
      </p>
    </div>
  );
}
