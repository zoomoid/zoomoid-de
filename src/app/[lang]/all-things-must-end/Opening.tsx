"use client";

import {
  StaggeringGroup as SG,
  type StaggeringGroupProps
} from "@/components/AnimationContainer";
import { LocaleContext } from "@/context/locale.context";
import { useContext } from "react";

type OpeningProps = StaggeringGroupProps;

export default function Opening() {
  const { state } = useContext(LocaleContext);

  return (
    <section className="relative z-20 transform mt-32 max-w-screen-md mx-auto min-h-[60vh] px-4 md:px-0 mb-32">
      <h1 className="text-4xl md:text-7xl mt-64 md:mt-96 mb-32">
        <SG
          animationName="slide-up"
          interval="100ms"
          initialDelay="0.5s"
          animationDuration="1s"
          initialStyle={{ display: "inline-block" }}
        >
          <span>All</span>
          <span>
            <b>Things</b>
          </span>
          <span>Must</span>
          <span>
            <b>End</b>
          </span>
        </SG>
      </h1>
      <div className="text-lg md:text-xl space-y-4">
        {state.lang === "de" ? (
          <Anfang
            animationName="slide-left"
            interval="500ms"
            className="space-y-4"
            initialDelay="1s"
          ></Anfang>
        ) : (
          <Start
            animationName="slide-left"
            interval="500ms"
            className="space-y-4"
            initialDelay="1s"
          ></Start>
        )}
      </div>
    </section>
  );
}

function Anfang(props: OpeningProps) {
  return (
    <SG {...props}>
      {/* <p className="">Es war eine schwere Zeit...</p> */}
      <p className="">
        Wir haben <b>einen langen Weg</b> hinter uns. Jetzt ist es an der Zeit,
        <b>die letzten Schritte</b> zu machen.
      </p>
      <p className="">
        Das ist es: Das <b>letzte</b> Zoomoid <b>Album</b>.
      </p>
      <p className="">
        Lass uns <b>am Anfang</b> beginnen...
      </p>
      <p>
        Bevor wir damit anfangen, zu entdecken, was <b>dies</b> ist, muss ich
        ein paar Dinge erklären. Dinge, die zu diesem Moment geführt haben, und
        Dinge die den Weg zu dem Punkt geebnet haben, wo wir jetzt sind.
      </p>
    </SG>
  );
}

function Start(props: OpeningProps) {
  return (
    <SG {...props}>
      {/* <p className="">It&apos;s been some rough times...</p> */}
      <p className="">
        We&apos;ve come <b>a long way</b>. Now it&apos;s time to do{" "}
        <b>the final steps.</b>
      </p>
      <p className="">
        This is it: The <b>final</b> Zoomoid <b>album</b>.
      </p>
      <p className="">
        Let&apos;s start at the <b>beginning</b>...
      </p>
      <p>
        Before we get into what <b>this</b> is, I need to explain a couple of
        things. Things that lead up to this moment, and things that paved the
        way to where we are now.
      </p>
    </SG>
  );
}
