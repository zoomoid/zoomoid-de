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
    title: "301 Permanently Moving",
    date: new Date(2019, 11, 13),
    theme: {
      backgroundColorClass: "bg-black",
      textColorClass: "text-white",
    },
    covers: [
      {
        url: "/img/301.jpg",
        height: 1500,
        width: 1500,
      },
    ],
    links: [
      {
        title: "Spotify",
        url: "https://open.spotify.com/album/4gr5rmKZn5pkFISvITsHrI",
      },
      {
        title: "Apple Music",
        url: "https://music.apple.com/de/album/301-moved-permanently/1489867904",
      },
      {
        title: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_l9yZHjL4QxhvI-8lLCtNC-ccrsxarCqbs",
      },
      {
        title: "Bandcamp",
        url: "https://zoomoid.bandcamp.com/album/301-moving-permanently",
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
      <b>&ldquo;301 Permanently Moving&rdquo;</b> is a nerdy joke and tribute to
      the HTTP protocol, which drives the internet, where the status 301
      indicates that a web page has moved permanently. The tracks on this EP
      have the potential to get you moving, with <b>hard-driving Techno</b> and
      a reworked version of &ldquo;Outer Space&rdquo;!
    </p>
  );
}

function DescriptionDE() {
  return (
    <p className="md:text-lg">
      <b>&bdquo;301 Permanently Moving&ldquo;</b> ist ein nerdy Witz und ein
      Tribut an das HyperText Transfer Protocol, was das Internet antreibt, wo
      der Status 301 anzeigt, dass eine Webseite permanent verschoben wurde. Die
      Tracks dieser EP haben das Potential, dich zum Bewegen zu bringen mit{" "}
      <b>treibendem Techno</b> und einer überarbeiteten Version von &bdquo;Outer
      Space&ldquo;!
    </p>
  );
}
