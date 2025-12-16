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
    <section className="mx-auto bg-blue-500 px-4 pt-24 pb-8 md:py-[6.6vmax] md:pr-[4vw] md:pl-[4vw] lg:py-[1.6vmax]">
      <div className="mx-auto grid-cols-2 items-center justify-center gap-x-32 md:grid md:pt-32 md:pb-8">
        <div className="text-lg xl:text-right">
          <h1 className="font-sans text-3xl font-semibold md:text-4xl">
            All Things Must End
          </h1>
          <h2 className="mb-4 font-sans text-xl font-semibold md:text-2xl">
            {lang === "de"
              ? "Das letzte Zoomoid-Album"
              : "The last Zoomoid album"}
          </h2>
          <p className="mb-4 text-lg">
            {lang === "de"
              ? "Jetzt überall zum Streamen!"
              : "Out now everywhere to stream!"}
          </p>
          <div className="font-sans text-lg">
            <Link
              href={`/${lang}/all-things-must-end`}
              className="group block leading-none hover:no-underline"
            >
              <span className="group-hover:underline">
                {lang === "de" ? (
                  <>
                    Auf der <b>Begleitseite</b> lernst Du mehr über das Album
                    (und mich)!
                  </>
                ) : (
                  <>
                    Check out the <b>companion website</b> to learn more about
                    the album (and me)
                  </>
                )}
              </span>
              <span className="material-symbols-outlined ml-1 pb-1 align-middle">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
        <div className="relative hidden h-full md:block md:w-[250px]">
          <Image
            src="/img/all-things-must-end/cover.jpg"
            alt="All Things Must End Cover"
            className="mx-auto rounded-xl border-t border-l border-neutral-50/15 shadow-2xl shadow-neutral-300/10"
            width={2500}
            height={2500}
          ></Image>
        </div>
      </div>
    </section>
  );
}
