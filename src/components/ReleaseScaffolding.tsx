"use client";

import { type Locale } from "@/i18n";
import Image from "next/image";
import { type PropsWithChildren, type ReactElement } from "react";
import { ThemeChanger, ThemeChangerProps } from "./ThemeableScaffolding";
import Link from "next/link";

type Cover = {
  url: string;
  width: number;
  height: number;
  className?: string;
};

export type Release = {
  titleText?: string;
  title?: string | ReactElement;
  date: Date;
  theme: ThemeChangerProps;
  links: {
    title: string;
    url: string;
  }[];
  covers?: Cover[];
};

type ReleaseScaffoldingProps = PropsWithChildren<Release> & { lang: Locale };

export default function ReleaseScaffolding({
  title,
  date,
  theme,
  links,
  covers,
  lang,
  children,
  titleText,
}: ReleaseScaffoldingProps) {
  const listenLinks = links.map((l, i, a) => {
    const sans = (i * 6283457) % a.length > a.length / 2;

    return (
      <ListenLink
        title={l.title}
        url={l.url}
        className={sans ? "font-sans" : ""}
        key={l.title}
      ></ListenLink>
    );
  });

  let textTitle: string = "";
  if (titleText === undefined) {
    if (typeof title === "string") {
      textTitle = title;
    } else {
      textTitle = title?.key ?? "";
    }
  }

  return (
    <main className="release pb-32">
      <ThemeChanger {...theme}></ThemeChanger>
      <div className="py-[6.6vmax] lg:py-[1.6vmax]">
        <section className="max-w-screen-md xl:max-w-none xl:px-[4vw] mx-auto px-4 md:px-0 relative xl:grid grid-cols-2 gap-x-16">
          <div className="md:w-4/5 xl:w-full xl:max-w-screen-md justify-self-end flex flex-col relative z-10">
            {covers?.map((cover) => (
              <Image
                src={cover.url}
                key={cover.url}
                alt=""
                className={`border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl shadow-neutral-300/10 my-8 xl:my-0 border-neutral-50 mx-auto ${cover.className}`}
                width={cover.width}
                height={cover.height}
              ></Image>
            ))}
          </div>
          <div className="space-y-4 xl:mt-16">
            <Link
              href={`/${lang}/#overview`}
              className="text-xl flex items-center gap-x-1 group hover:no-underline"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="font-sans text-base group-hover:underline">
                {lang === "de" ? "Zurück zur Übersicht" : "Back to Overview"}
              </span>
            </Link>
            {title && (
              <h1 className="font-sans font-semibold text-3xl xs:text-5xl md:text-7xl">
                {title}
              </h1>
            )}
            {date && (
              <h2 className="font-sans text-xl xs:text-2xl md:text-3xl">
                {new Intl.DateTimeFormat(lang, {
                  dateStyle: "long",
                }).format(date)}
              </h2>
            )}
            <div className="xl:max-w-screen-md">{children}</div>
            {title && (
              <div className="xs:text-lg md:text-xl space-y-2">
                <ListenTo lang={lang} title={textTitle}></ListenTo>
                <div className="">{listenLinks}</div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

type ListenLinkProps = {
  title: string;
  url: string;
  className?: string;
};

function ListenLink({ title, url, className }: ListenLinkProps) {
  return (
    <a
      key={title}
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center font-semibold group hover:no-underline py-2 ${className}`}
    >
      <span className="group-hover:underline">{title}</span>
      <span className="material-symbols-outlined pb-2 pl-1">arrow_outward</span>
    </a>
  );
}

type ListenToProps = {
  lang: Locale;
  title: string;
};

export function ListenTo({ lang, title }: ListenToProps) {
  switch (lang) {
    case "de":
      return (
        <label className="font-sans">
          Hör dir <b>{title}</b> an auf:
        </label>
      );
    default:
      return (
        <label className="font-sans">
          Listen to <b>{title}</b> on:
        </label>
      );
  }
}
