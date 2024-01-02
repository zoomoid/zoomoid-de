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
    title: <span>Public Transportation&nbsp;EP</span>,
    titleText: "Public Transportation EP",
    date: new Date(2019, 10, 1),
    theme: {
      backgroundColorClass: "bg-blue-800",
      textColorClass: "text-white",
    },
    covers: [
      {
        url: "/img/public_transportation.jpg",
        height: 1500,
        width: 1500,
      },
    ],
    links: [
      {
        title: "Spotify",
        url: "https://open.spotify.com/album/7r0wQNMWcf2vno7O2trwQt",
      },
      {
        title: "Apple Music",
        url: "https://music.apple.com/de/album/public-transportation-ep/1484512656",
      },
      {
        title: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_m9DdphTFE4Dnqo7s3wLbXhH-RHsG3OYnM",
      },
      {
        title: "Bandcamp",
        url: "https://zoomoid.bandcamp.com/album/public-transportation",
      },
      {
        title: "SoundCloud",
        url: "https://soundcloud.com/zoomoid/sets/public-transportation",
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
    <>
      <p className="md:text-lg">
        In <b>December, 2018</b>, returning from a night of party in Münster,
        Germany, via train, I travelled through several stations I never had
        been to before. The <b>charismatic voice of Ingo Ruff</b>, freshly
        fallen snow that covered lonely fields along the way, and a slight
        hangover of the tequila from the previous night lead to the idea to make
        an EP from numberous impressions saved from years of using public
        transport almost every weekend.
      </p>
      <p className="md:text-lg">
        {" "}
        The idea got burried in a notebook for a year until I picked it up and
        sketched a trip on my usual train route through some cities in NRW. It&apos;s
        real, it&apos;s honest, <b>it&apos;s got sharp edges</b> and it&apos;s certainly
        different to my other work in that year. Yet, it&apos;s a favourite of{" "}
        <b>a lot of people for exactly that reason.</b>
      </p>
    </>
  );
}

function DescriptionDE() {
  return (
    <>
      <p className="md:text-lg">
        Im Dezember 2018, auf dem Rückweg mit dem Zug von einer Partynacht in
        Münster, bin ich durch etliche Stationen gefahren, in denen ich noch nie
        zuvor gewesen war. Die <b>charismatische Stimme von Ingo Ruff</b>,
        frisch gefallener Schnee, der die einsamen Felder entlang der Strecke
        bedeckte, und ein bisschen Tequila-Kater der letzten Nacht führten zu
        der Idee, eine EP zu machen, die inspiriert war von den unzähligen
        Impressionen der Jahre, in denen ich den Öffentlichen Verkehr beinahe
        jede Woche benutzte.
      </p>
      <p className="md:text-lg">
        Die Idee wurde ein Jahr lang in einem Notizbuch vergraben bis ich sie
        wieder aufnahm und eine Reise quer durch NRW entlang der üblichen
        Haltestellen zeichnete. Die Platte ist echt, sie ist ehrlich,{" "}
        <b>sie hat ein paar scharfe Kanten</b> und ist ganz sicher anders als
        meine restlichen Werke in diesem Jahr. Aber sie ist ein Favorit{" "}
        <b>einiger Leute, aus genau diesem Grund.</b>
      </p>
    </>
  );
}
