import Image from "next/future/image";
import Link from "next/link";
import FooterColumn from "./FooterColumn";
import img from "public/img/white.png";

export default function Footer() {

  const data = {
    sections: [
      {
        title: "Information",
        elements: [
          {
            title: "About Me",
            url: "/about",
            external: false,
          },
          {
            title: "Blog",
            url: "https://zoomoid.dev/blog",
            external: true,
          },
          {
            title: "Privacy Policy",
            url: "/privacy",
            external: false,
          },
        ],
      },
      {
        title: "Socials",
        elements: [
          {
            title: "Instagram",
            url: "https://instagram.com/zoomoid",
            external: true,
          },
          {
            title: "Spotify",
            url: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
            external: true,
          },
          {
            title: "SoundCloud",
            url: "https://soundcloud.com/zoomoid",
            external: true,
          },
          {
            title: "Bandcamp",
            url: "https://zoomoid.bandcamp.com/",
            external: true,
          },
          {
            title: "Apple Music",
            url: "https://music.apple.com/de/artist/zoomoid/1390354057",
            external: true,
          },
        ],
      },
    ],
    subtitle: "Zoomoid © 2015–2022",
    subsubtitle: "Made with NextJS, TailwindCSS, and coffee on a cold day",
  };

  return (
    <footer className="bg-neutral-900 text-white pt-8 pb-4">
      <div className="max-w-screen-2xl container">
        <div className="uppercase font-sans font-semibold text-2xl mb-8 cursor-pointer">
          <Link href="/" passHref={true}>
            <a>
              <Image src={img} className="w-40" alt=""></Image>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 font-sans mb-8">
          {data.sections.map(({ title, elements }) => (
            <FooterColumn
              key={title}
              title={title}
              elements={elements}
            ></FooterColumn>
          ))}
        </div>
        <p className="font-sans">{data.subtitle}</p>
        <p className="font-sans text-sm text-white text-opacity-50">
          {data.subsubtitle}
        </p>
      </div>
    </footer>
  );
}
