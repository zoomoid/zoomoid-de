import { PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";

type FooterItem = {
  title: string;
  url: string;
};

const socials: FooterItem[] = [
  {
    title: "Instagram",
    url: "https://instagram.com/zoomoid",
  },
];

const streaming: FooterItem[] = [
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
  },
  {
    title: "SoundCloud",
    url: "https://soundcloud.com/zoomoid",
  },
  {
    title: "Bandcamp",
    url: "https://zoomoid.bandcamp.com/",
  },
  {
    title: "Apple Music",
    url: "https://music.apple.com/de/artist/zoomoid/1390354057",
  },
  {
    title: "YouTube Music",
    url: "https://music.youtube.com/channel/UC62BLKKSvDsJ1_-VQ9XCRLw",
  },
];

type FooterProps = PropsWithChildren<{}>;

export default function Footer({
  children,
  lang,
}: FooterProps & { lang: string }) {
  return (
    <footer className="relative z-10 text-white">
      <div
        className="h-48 bg-black"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
        }}
      ></div>
      <div className="mx-auto flex justify-end bg-black px-[4vw] pt-16 pb-16">
        <div className="grid w-full gap-y-8 font-medium tracking-wide md:grid-cols-12">
          <div className="col-span-3">
            <Link href={`/${lang}/`} className="relative h-8">
              <Image
                alt="Zoomoid Logo"
                src="/img/logo_bar.png"
                width={5000}
                height={1319}
                className="h-8 w-auto"
              ></Image>
            </Link>
          </div>
          <div className="col-span-8 mt-4 grid gap-y-8 md:mt-0 md:grid-cols-3">
            <div>
              <span className="mb-1 block font-sans font-semibold tracking-widest uppercase">
                Streaming
              </span>
              {streaming.map((s, i) => (
                <div key={s.title} className={`${i % 2 === 1 && "font-sans"}`}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    <span>{s.title}</span>
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </a>
                </div>
              ))}
            </div>
            <div>
              <span className="mb-1 block font-sans font-semibold tracking-widest uppercase">
                Social Media
              </span>
              {socials.map((s, i) => (
                <div key={s.title} className={`${i % 2 === 1 && "font-sans"}`}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    <span>{s.title}</span>
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:justify-self-end">{children}</div>
        </div>
      </div>
    </footer>
  );
}
