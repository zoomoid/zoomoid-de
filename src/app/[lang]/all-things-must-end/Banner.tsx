"use client";

import { LocaleContext } from "@/context/locale.context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

export default function Banner() {
  const {
    state: { lang },
  } = useContext(LocaleContext);

  const [isHidden, setIsHidden] = useState(false);

  return (
    <section className="pt-24 pb-8 md:py-[6.6vmax] lg:py-[1.6vmax] mx-auto bg-blue-500 px-4 md:pl-[4vw] md:pr-[4vw]">
      <div className="md:pb-8 md:pt-32 md:grid grid-cols-2 items-center justify-center gap-x-32 mx-auto">
        <div className="text-lg xl:text-right">
          <h1 className="font-sans font-semibold text-3xl md:text-4xl">
            All Things Must End
          </h1>
          <h2 className="font-sans text-xl md:text-2xl font-semibold mb-4">
            The last Zoomoid album
          </h2>
          <p className="text-lg mb-4">Out now everywhere to stream!</p>
          <div className="text-lg font-sans">
            <Link href={`/${lang}/all-things-must-end`} className="group hover:no-underline block leading-none">
              <span className="group-hover:underline">Check out the <b>companion website</b> to learn more about the album (and me)</span>
              <span className="material-symbols-outlined align-middle ml-1 pb-1">arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className="h-full relative md:w-[250px] hidden md:block">
          <Image
            src="/img/all-things-must-end/cover.jpg"
            alt=""
            className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl shadow-neutral-300/10 border-neutral-50 mx-auto"
            width={2500}
            height={2500}
          ></Image>
        </div>
      </div>
    </section>
  );
}
