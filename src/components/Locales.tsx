"use client";

import { LocaleContext } from "@/context/locale.context";
import { Locale } from "@/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

type LocalesProps = {
  current: Locale;
  locales: Locale[];
  className?: string;
};

export default function Locales({ locales, current, className }: LocalesProps) {


  const pathName = usePathname();
  const redirectPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const { dispatch } = useContext(LocaleContext);

  useEffect(() => {
    dispatch({ type: current });
  }, [current, dispatch]);

  if (!locales) {
    return <></>;
  }

  return (
    <div className={`${className}`}>
      <div className="flex gap-x-2 items-center">
        <i className="material-icons-sharp">language</i>
        {locales.map((locale) => {
          const [label] = locale.split("-");
          return (
            <span key={locale} className="font-sans leading-[1.5rem]">
              <Link
                style={{ textTransform: "none" }}
                className={current === locale ? "underline" : ""}
                href={redirectPathName(locale)}
              >
                {label?.toLocaleUpperCase()}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
}
