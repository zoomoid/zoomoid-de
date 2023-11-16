import Image from "next/image";
import { type PropsWithChildren } from "react";
import { type Release } from ".";

type SectionProps = PropsWithChildren<{
  section: Release
  idx: number;
}>

export default function Section({ section, idx }: SectionProps) {
  const release = section;
  const links = release.listen;
  const listenLinks = links.map((l, i, a) => {
    const sans = i * 6283457 % a.length > a.length / 2

    return (<a
      key={l.title}
      href={l.url}
      target="_blank"
      rel="noreferrer"
      className={`block mt-2 sm:text-xl font-semibold hover:underline ${sans && 'font-sans'}`}
    >
      {l.title}
    </a>)
  });

  return (
    <article id={release.anchor} className={release.theme.join(" ") + ' release'}>
      <div className="py-[6.6vmax] px-[4vw] mx-auto w-full">
        <div className="items-end grid-cols-7 mb-8 lg:grid gap-x-4">
          <div className={`col-span-4 md:text-right md:w-[90%] ml-auto`}>
            <span className="col-span-2 my-2">{release.date}</span>
            <h1
              className="font-sans text-4xl font-semibold leading-none sm:text-6xl lg:text-7xl"
              dangerouslySetInnerHTML={{
                __html: release.title,
              }}
            ></h1>
          </div>
          <div className={`relative col-span-3`}>
            <div className="w-full my-4 border-t border-l rounded-md border-opacity-10 border-neutral-100 lg:max-w-xl md:my-0">
              <Image
                src={release.cover.url}
                alt={"Cover of " + release.title}
                width={1500}
                height={1500}
                className="rounded-md shadow-xl"
              ></Image>
            </div>
          </div>
        </div>
        <div className="grid-cols-7 md:grid gap-x-4">
          {/* <h3 className="col-span-2 mb-4 font-sans text-4xl">
            About
          </h3> */}
          <div className="col-span-4 mb-4 flex justify-end">
            <p className="sm:text-xl leading-normal md:w-[70%]"
              dangerouslySetInnerHTML={{
                __html: release.about,
              }}>
            </p>
          </div>
          {release.listen && (
            <div className="col-span-3">
              <div className="col-span-2 mb-4 text-2xl">
                Find <span className="font-sans" dangerouslySetInnerHTML={{
                  __html: release.title,
                }}></span> on:
              </div>
              <div className="col-span-10">{listenLinks}</div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
