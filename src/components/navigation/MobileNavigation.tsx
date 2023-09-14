"use client";
import { type PropsWithChildren, useState } from "react";
import { type WithClassName, type Navigation } from ".";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/img/logo_bar.png"

type MobileNavigationProps = WithClassName<
  PropsWithChildren<{
    navigation: Navigation;
  }>
>;

export default function MobileNavigation({
  navigation,
  className,
}: MobileNavigationProps) {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className={className}>
      <div className="flex justify-between">
        <div className="font-sans text-xl font-semibold tracking">
          <Link href="/" className="h-8 relative">
            <Image
              alt="Zoomoid Logo"
              src={Logo}
              className="h-8 w-auto"
            ></Image>
          </Link>
        </div>
        <button className="leading-[0px]" onClick={() => setShowNav(true)}>
          <i className="material-icons-sharp text-6xl">dehaze</i>
        </button>
      </div>
      {showNav && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-50 h-screen w-screen">
          <div className="bg-neutral-950 bg-opacity-50 backdrop-blur-xl px-[4vw] py-[6.6vmax] h-full w-full transition-all">
            <button
              className="absolute top-[4vw] right-[4vw]"
              type="button"
              onClick={() => setShowNav(false)}
            >
              <i className="material-icons-sharp text-6xl">close</i>
            </button>
            <div className="flex flex-col h-full items-center justify-center">
              {navigation.map((element, i) => (
                <div
                  key={element.title}
                  className="px-4 text-center text-2xl my-4"
                >
                  <a href={element.url} className={`${i % 3 > 0 && "font-sans"}`}target="_blank" rel="noreferrer">
                    {element.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
