"use client";

import { useContext, type PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/context/theme.context";
export type NavigationProps = PropsWithChildren<{}>;

export default function Navigation({
  children,
  lang,
}: NavigationProps & { lang: string }) {
  const {
    state: { navigationImageFilter },
  } = useContext(ThemeContext);

  return (
    <header className="absolute top-0 right-0 left-0 z-50">
      <div className="flex items-center px-[4vw] py-[3vw]">
        <nav className="relative flex grow flex-wrap justify-between gap-4 tracking-wide">
          <div className="font-sans text-xl font-semibold">
            <Link href={`/${lang}/`} className="relative h-8">
              <Image
                alt="Zoomoid Logo"
                src="/img/logo_bar.png"
                width={5000}
                height={1319}
                className={`h-8 w-auto transition-all ${navigationImageFilter}`}
              ></Image>
            </Link>
          </div>
          {children}
        </nav>
      </div>
    </header>
  );
}
