import ReleaseScaffolding from "@/components/ReleaseScaffolding";
import { type Release } from "@/components/ReleaseScaffolding";
import { type Locale } from "@/i18n";

type PageProps = {
  params: Promise<{
    lang: Locale;
  }>;
};

export default async function Page(props: PageProps) {
  const params = await props.params;

  const { lang } = params;

  const release: Release = {
    title: "Im Schatten Der Nacht",
    date: new Date(2021, 11, 17),
    theme: {
      backgroundColorClass: "bg-[#0a0f12]",
      textColorClass: "text-white",
    },
    covers: [
      {
        url: "/img/im_schatten_der_nacht.jpg",
        height: 1500,
        width: 1500,
      },
    ],
    links: [
      {
        title: "Spotify",
        url: "https://open.spotify.com/album/7f4KBtXh4qiKwaItN8Gsfa",
      },
      {
        title: "Apple Music",
        url: "https://music.apple.com/de/album/im-schatten-der-nacht-single/1598757541",
      },
      {
        title: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_lOu4um5kTsOIgAbx2awbQAElVVlqdQqmg",
      },
      {
        title: "Bandcamp",
        url: "https://zoomoid.bandcamp.com/album/im-schatten-der-nacht",
      },
      {
        title: "SoundCloud",
        url: "https://soundcloud.com/zoomoid/sets/im-schatten-der-nacht",
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
      <b>
        <q>Im Schatten Der Nacht</q>
      </b>{" "}
      is a small driving Techno EP that comes to live when leaving the club{" "}
      <b>early in the morning</b> and heading home while still buzzing from the
      night before.
    </p>
  );
}

function DescriptionDE() {
  return (
    <p className="md:text-lg">
      <b>
        <q>Im Schatten Der Nacht</q>
      </b>{" "}
      ist eine kleine, treibende Techno-EP die zum Leben erwacht, wenn Du den
      Club in den frühen Morgenstunden verlässt und nach Hause gehst, während
      das Gefühl der Nacht davor noch weiterbrummt.
    </p>
  );
}
