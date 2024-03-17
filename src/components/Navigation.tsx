"use client";

import { useContext, type PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/context/theme.context";
export type NavigationProps = PropsWithChildren<{}>;

export default function Navigation({ children }: NavigationProps) {
  const {
    state: { navigationImageFilter },
  } = useContext(ThemeContext);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="px-[4vw] py-[3vw] flex items-center">
        <nav className="flex-wrap grow gap-4 tracking-wide flex justify-between relative">
          <div className="font-sans text-xl font-semibold">
            <Link href="/" className="h-8 relative">
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
