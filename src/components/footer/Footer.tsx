import { PropsWithChildren } from "react";
import { type FooterItem } from ".";
import Link from "next/link";
import Image from "next/image";

type FooterProps = PropsWithChildren<{
  socials: FooterItem[];
}>;

export default function Footer({ socials }: FooterProps) {
  const socialElements = socials.map((s, i) => (
    <div key={s.title} className={`${i % 2 === 1 && "font-sans"}`}>
      <a href={s.url} target="_blank" rel="noreferrer">
        {s.title}
      </a>
    </div>
  ));

  return (
    <footer className="py-[6.6vmax] px-[4vw] text-white bg-black relative z-10" style={{
      maskImage: "linear-gradient(to bottom, transparent 0%, black 60%, black 100%)"
    }}>
      <div className="flex justify-end mx-auto pt-32">
        <div className="w-full grid-cols-12 px-4 font-medium tracking-wide md:grid md:px-0">
          <div className="col-span-3">
            <Link href="/" className="h-8 relative">
              <Image
                alt="Zoomoid Logo"
                src="/img/logo_bar.png"
                width={5000}
                height={1319}
                className="h-8 w-auto"
              ></Image>
            </Link>
          </div>
          <div className="col-span-9 mt-4 md:mt-0">{socialElements}</div>
        </div>
      </div>
    </footer>
  );
}
