"use client";

import {
  StaggeringGroup as SG,
  type StaggeringGroupProps,
} from "@/components/AnimationContainer";
import { YearRoll } from "@/components/YearRoll";
import { LocaleContext } from "@/context/locale.context";
import Image from "next/image";
import type { RefObject } from "react";
import { useContext } from "react";
import Cloud, { type CloudProps } from "./Cloud";
import TrackComponent, { type Track } from "./Track";
import Tracks from "./tracks"

export default function Album({
  skipRef,
}: {
  skipRef: RefObject<HTMLDivElement>;
}) {
  const { state } = useContext(LocaleContext);

  const tracks = state.lang === "de" ? Tracks.DE : Tracks.EN

  return (
    <article ref={skipRef} className="relative">
      <section className="mx-auto relative z-0 items-center bg-gradient-to-b from-neutral-950 to-[#051c35]">
        <div
          className="absolute w-full h-full left-0 right-0 bottom-0 z-10"
          style={{
            maskImage: `linear-gradient(transparent 0%, black 30%, black 60%, transparent 100%)`,
          }}
        >
          <Image
            src="/img/all-things-must-end/assets/gregoire-jeanneau-9sxeKzuCVoE-unsplash.jpg"
            width={2304}
            height={3456}
            alt=""
            className="opacity-80 h-full"
          ></Image>
        </div>
        <div className="max-w-screen-md mx-auto z-10 w-full text-lg relative pt-96 pb-32">
          <h3 className="text-10xl text-center">
            <YearRoll
              decades={[10, 20]}
              years={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
              direction="normal"
              duration="5s"
              rootMargin="-500px 0px -500px 0px"
              once
            ></YearRoll>
          </h3>
          <div className="space-y-2">
            {state.lang === "de" ? <IntroDE></IntroDE> : <IntroEN></IntroEN>}
            <div className="">
              <Image
                src="/img/all-things-must-end/cover.jpg"
                alt=""
                className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl shadow-neutral-300/10 my-8 w-4/5 border-neutral-50 mx-auto"
                width={2500}
                height={2500}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <div
        className="relative isolate"
        style={{
          backgroundImage: `linear-gradient(to bottom, #051c35 0%, rgb(180 83 9 / 100%) 50%, #f59e0b 100%)`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          {clouds.map(({ animationDelay, animationDuration, className }, i) => (
            <Cloud
              animationDelay={animationDelay}
              animationDuration={animationDuration}
              className={className}
              key={`cloud-${i}`}
            ></Cloud>
          ))}
        </div>
        {tracks.map((track, i) => (
          <TrackComponent
            index={i}
            track={track}
            key={`track-${i}`}
          ></TrackComponent>
        ))}
      </div>
      <div
        className="h-[1200px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, #f59e0b 0%, #f59e0b 15%, #7f1d1d 80%, rgb(10 10 10 / 1) 100%)`,
        }}
      >
        <div className="mx-auto max-w-screen-md text-white pt-32 text-lg">
          {state.lang === "de" ? (
            <OutroDE
              animationName="slide-up"
              className="space-y-2"
              interval="100ms"
              initialStyle={{
                opacity: 0,
              }}
            ></OutroDE>
          ) : (
            <OutroEN
              animationName="slide-up"
              className="space-y-2"
              interval="100ms"
              initialStyle={{
                opacity: 0,
              }}
            ></OutroEN>
          )}
        </div>
      </div>
      <div
        className="h-[600px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(10 10 10 / 1) 0%, black 50%, rgb(10 10 10 / 1) 100%)`,
        }}
      ></div>
    </article>
  );
}

type IntroProps = {};

function IntroDE(props: IntroProps) {
  return (
    <>
      <p>
        Am <b>29. Dezember 2013</b> hat jemand meinen Reset-Knopf gedrückt.
      </p>
      <p>
        Ich war jetzt <b>10 Jahre lang</b> <b>Zoomoid</b>.
      </p>
      <p>
        Ich bin durch eine Menge Höhen und Tiefen gegangen.{" "}
        <b>Jetzt ist es Zeit für etwas Neues.</b>
      </p>
      <p>
        Was bedeutet, dass ich etwas Altes zurücklassen muss. Um einen Film zu
        zitieren, der monumentalen Einfluss auf mich und meine Musik hatte:
        &bdquo;Newtons Drittes Gesetz: Man muss immer was zurücklassen.&ldquo;
      </p>
      <p>Was bedeutet... das war&apos;s</p>
      <p>
        Das letzte <b>Zoomoid Album</b>.{" "}
      </p>
      <p>Das letzte Kapitel.</p>
    </>
  );
}

function IntroEN(props: IntroProps) {
  return (
    <>
      <p>
        On <b>December 29th, 2013</b>, someone hit my reset button.
      </p>
      <p>
        I&apos;ve been <b>Zoomoid</b> for <b>10 years</b> now.
      </p>
      <p>
        I&apos;ve been through a lot of ups and downs.{" "}
        <b>It&apos;s time for something new.</b>
      </p>
      <p>
        Which means I have to leave something behind. To cite a film that&apos;s
        had monumental influence on me and my music: &ldquo;Newton&apos;s third
        law: you have to leave something behind.&rdquo;
      </p>
      <p>Which means... this is it.</p>
      <p>
        The final <b>Zoomoid album</b>.{" "}
      </p>
      <p>The last chapter.</p>
    </>
  );
}

type OutroProps = StaggeringGroupProps;

function OutroDE(props: OutroProps) {
  return (
    <SG {...props}>
      <p>Jetzt stelle ich Dich vor vollendete Tatsachen.</p>
      <p>
        Ich habe entschieden, dass ich mit Zoomoid fertig bin, dass ich
        weiterziehen muss.
      </p>
      <p>
        In gewissem Sinne habe ich Dir die Entscheidung wie <b>Du</b> mein
        Schaffen bewertest und abschließt, weggenommen. Aber es war eigentlich
        immer meine Entscheidung.
      </p>
      <p>
        Ich werde es dabei belassen. Ich glaube nicht, dass ich sonst noch
        irgendetwas zu sagen oder zu tun habe.
      </p>
      <p>
        Das ist dann also Lebewohl. Danke Dir &mdash; Dir, die Person die gerade
        diese Zeilen ließt &mdash; für die Zeit die wir hatten. Danke, dass Du
        da warst. Vielleicht kannst Du diese Zeit auf die gleiche Art
        wertschätzen wie ich. Vielleicht, nachdem Du all das gelesen hast und
        meine Geschichte gehört hast, kannst du es sogar ein bisschen verstehen.
      </p>
      <p>
        Ich würde mich geehrt fühlen, wenn Du ein Stückchen von mir, Zoomoid,
        raus in die Welt tragen würdest. Keine Sorge, ich verschwinde schon
        nicht so bald... Ich... werfe nur meine alte Haut ab, strecke die
        neugeformten Flügel der Freiheit, löse mich selbst von der Person, die
        ich erschaffen und getragen und aufgezogen habe über die letzte Dekade.
      </p>
      <p>
        Es tut mir leid, wenn das nicht das Ende ist, das Du wolltest. Es tut
        mir leid, wenn Du überhaupt kein Ende wolltest. Wisse, dass mir diese
        Entscheidung nicht leicht gefallen ist. Aber ich glaube vollends, dass
        es die richtige Sache ist.
      </p>
      <p>
        Und vielleicht, nur vielleicht, an einem anderen Ort, zu einer anderen
        Zeit, sehen wir uns wieder.
      </p>
      <p>Danke! Hab Dich lieb!</p>
    </SG>
  );
}

function OutroEN(props: OutroProps) {
  return (
    <SG {...props}>
      <p>I&apos;ve decided the outcome of this contemplation for you.</p>
      <p>
        I&apos;ve decided that I&apos;m done with Zoomoid, that I have to move
        on.
      </p>
      <p>
        In a sense I&apos;ve taken away that decision how <b>you</b> evaluate
        and conclude my work from you. But it was always mine to make.
      </p>
      <p>
        I will leave you with that. I don&apos;t think I&apos;ve anything else
        to say or do.
      </p>
      <p>
        This is farewell then. Thank you &mdash; you reading those lines right
        now &mdash; for the time we had. Thank you for being there. Maybe you
        can cherish those moments the same way I do. Maybe, after reading all
        this and hearing my story, you can even understand.
      </p>
      <p>
        I would be honored if you carry a piece of me, Zoomoid, out into the
        world. Don&apos;t worry, I&apos;m not disappearing anytime soon...
        I&apos;m just... shedding my old skin, stretching out the newly formed
        wings of freedom, detaching myself from the persona that I grew and
        carried and nurtured over the last decade.
      </p>
      <p>
        I&apos;m sorry if this is not the ending that you wanted. I&apos;m sorry
        if you didn&apos;t want an ending at all. Know that I did not make that
        decision lightly. But I firmly believe it&apos;s the right thing.
      </p>
      <p>
        Any maybe, just maybe, in a different space and time, we will meet
        again.
      </p>
      <p>Thank you! I love you!</p>
    </SG>
  );
}

const clouds: CloudProps[] = [
  {
    className: "w-[500px] left-0 ml-32 top-[600px]",
    animationDelay: "3s",
    animationDuration: "15s",
  },
  {
    className: "w-[650px] right-0 -mr-64 top-[1400px]",
    animationDelay: "4s",
    animationDuration: "13s",
  },
  {
    className: "w-[850px] left-0 -ml-40 top-[1600px]",
    animationDelay: "1s",
    animationDuration: "20s",
  },
  {
    className: "w-[950px] right-0 -ml-64 top-[1900px]",
    animationDelay: "1s",
    animationDuration: "15s",
  },
  {
    className: "w-[1250px] left-0 -ml-64 top-[3600px]",
    animationDelay: "1s",
    animationDuration: "12s",
  },
  {
    className: "w-[850px] right-0 -mr-64 top-[5200px]",
    animationDelay: "4s",
    animationDuration: "13s",
  },
  {
    className: "w-[650px] left-0 -ml-32 top-[5800px]",
    animationDelay: "2s",
    animationDuration: "11s",
  },
  {
    className: "w-[1200px] right-0 -mr-32 top-[6300px]",
    animationDelay: "4s",
    animationDuration: "15s",
  },
  {
    className: "w-[950px] left-0 -ml-64 top-[6800px]",
    animationDelay: "5s",
    animationDuration: "15s",
  },
];
