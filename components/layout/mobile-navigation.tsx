"use client";

import Link from "next/link";
import React, { useState } from "react";
import { type NavigationElement } from "./navigation";

export default function MobileNavigation({
  navigation,
  textColor,
  backgroundColor
}: {
  navigation: NavigationElement[],
  backgroundColor: string,
  textColor: string,
}) {
  const mobileNav = navigation.map((action) => (
    <div key={action.title} className="font-sans mb-2">
      <Link href={action.url} passHref={true} rel="noreferrer">
        {action.title}
      </Link>
    </div>
  ));

  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className={`${textColor} container max-w-screen-2xl py-2 md:hidden absolute top-0 left-0 right-0 z-50 transition-colors`}
    >
      <div className="flex items-center">
        <div className="font-semibold text-2xl tracking font-sans">
          <Link href="/">Zoomoid</Link>
        </div>
        <div className="flex-grow flex justify-end">
          <button className="leading-[0px]" onClick={() => setShowNav(true)}>
            <i className="material-icons-sharp text-2xl">menu</i>
          </button>
        </div>
      </div>
      {showNav && (
        <div
          className={`${backgroundColor} fixed backdrop-blur-3xl top-0 left-0 bottom-0 right-0 z-50 h-screen w-screen`}
        >
          <div className="container h-full py-2">
            <div className="flex">
              <div className="font-semibold text-2xl tracking font-sans">
                <Link href="/">Zoomoid</Link>
              </div>
              <div className="flex-grow flex justify-end">
                <button
                  className="leading-[0px]"
                  type="button"
                  onClick={() => setShowNav(false)}
                >
                  <i className="material-icons-sharp text-2xl">close</i>
                </button>
              </div>
            </div>
            <nav className="flex flex-col h-full mt-2 border-t border-neutral-800 pt-2">
              {mobileNav}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
