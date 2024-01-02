import ReleaseScaffolding from "@/components/ReleaseScaffolding";
import { type Release } from "@/components/ReleaseScaffolding";
import { type Locale } from "@/i18n";

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default function Page({ params: { lang } }: PageProps) {
  const release: Release = {
    title: "Shades Of Yellow",
    date: new Date(2020, 4, 1),
    theme: {
      backgroundColorClass: "bg-[#f9b512]",
      textColorClass: "text-black",
      navigationImageFilter: "invert",
    },
    covers: [
      {
        url: "/img/shades_of_yellow.jpg",
        height: 1500,
        width: 1500,
      },
    ],
    links: [
      {
        title: "Spotify",
        url: "https://open.spotify.com/album/5mpqQ6b776eEEOjywlkCzK",
      },
      {
        title: "Apple Music",
        url: "https://music.apple.com/de/album/shades-of-yellow-single/1533160788",
      },
      {
        title: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_kcOz_jJERYOGJTH-8iFt0bCGpyq89_4VM",
      },
      {
        title: "Bandcamp",
        url: "https://zoomoid.bandcamp.com/album/shades-of-yellow",
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
      <b>&ldquo;Shades Of Yellow&rdquo;</b> is an emotional ode to the
      relationship I have with the color <b>yellow</b> and the closest thing
      I&apos;ve come to writing a <b>love song</b>. Both tracks move me in a very
      special way, and there are many many memories attached to them. I know
      some other people do as well and <b>I hope, you can, too.</b>
    </p>
  );
}

function DescriptionDE() {
  return (
    <p className="md:text-lg">
      <b>&bdquo;Shades Of Yellow&ldquo;</b> ist eine emotionale Ode an die
      Beziehung die ich zu der Farbe <b>gelb</b> habe, und das nächste, was ich
      bisher dem Schreiben eines <b>Liebeslied</b> gekommen bin. Beide Tracks
      bewegen mich auf eine besondere Art und Weise, und es sind so viele
      Erinnerungen in sie eingebettet. Ich weiß, dass ein paar andere Leute das
      auch tun und <b>ich hoffe, du kannst das auch.</b>
    </p>
  );
}
