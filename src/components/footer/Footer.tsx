import { PropsWithChildren } from "react";
import { type Socials } from ".";

type FooterProps = PropsWithChildren<{
  socials: Socials
}>

export default function Footer({ socials }: FooterProps) {
  const socialElements = socials.map((s, i) => (
    <div key={s.title} className={`${i % 2 === 1 && 'font-sans'}`}>
      <a href={s.url} target="_blank" rel="noreferrer">
        {s.title}
      </a>
    </div>
  ));

  return (
    <footer className="py-[6.6vmax] px-[4vw] text-white">
      <div className="flex justify-end mx-auto">
        <div className="w-full grid-cols-12 px-4 font-medium tracking-wide md:grid md:px-0">
          <div className="grid-cols-9 col-span-9 md:grid">
            <div className="col-span-3 mb-4 font-sans md:mb-0">Zoomoid</div>
            <div className="col-span-6">
              <a className="block" href="https://zoomoid.de">
                https://zoomoid.de
              </a>
              <a className="block font-sans" href="mailto:hello@zoomoid.de">
                hello@zoomoid.de
              </a>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="col-span-3 mt-4 md:mt-0">{socialElements}</div>
        </div>
      </div>
    </footer>
  );
}
