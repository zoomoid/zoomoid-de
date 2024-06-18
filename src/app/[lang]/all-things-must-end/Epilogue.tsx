"use client";

import {
  StaggeringGroup as SG,
  type StaggeringGroupProps,
} from "@/components/AnimationContainer";
import { LocaleContext } from "@/context/locale.context";
import { useContext } from "react";

type EpilogueProps = StaggeringGroupProps;

function EpilogueEN(props: EpilogueProps) {
  return (
    <SG {...props}>
      <h2 className="text-6xl font-bold">P.S.:</h2>
      <p>
        I don&apos;t want to be egocentrical for making all of this just about
        myself. We&apos;ve come this way together, and I&apos;ve learned, and
        experienced, and felt so much beautiful things because of you.
      </p>
      <p className="font-sans">This all makes me incredibly proud.</p>
      <p>
        But I&apos;ve experienced a lot of tragedy and grief, a lot of hard
        times over the last couple of years. I&apos;ve lost a lot of beautiful
        things and people, and with that, pieces of myself.
      </p>
      <p>
        I&apos;ve lost myself along the way. Being an artist{" "}
        <b>became harder and harder for me, to write and compose new music</b>{" "}
        became this unbearable task that i dreaded. I took ever-longer breaks
        from it, and considered quietly quitting several times.
      </p>
      <p>
        As the idea to finish the project, to finalize things, to bring things
        to a conclusion, sparked, <b>I felt relief</b>. As with so many things
        in these current times, I only had to be strong one more time. After
        that, things would be done, I&apos;d be able to let new things enter my
        life.
      </p>
      <p>
        And so I wrote <b>my last album</b>. I tried to capture so many things, so many
        emotions, so many states of mind in tracks, tried to create a holistic
        experience, something that would remain relevant beyond the lifetime of
        Zoomoid.
      </p>
      <p className="font-sans">
        I think, for once, at least in some parts, <b>I succeeded.</b>
      </p>
      <p>
        <q><b>All Things Must End</b></q> is my last album. What comes
        afterwards is pretty much left to time. It has become time for me to
        become just <q>Alex</q> again.
      </p>
      <p>
        That doesn&apos;t mean that I&apos;m never going to make music again. It
        just marks the <b>ending for Zoomoid</b>. <b>The final chapter.</b> Such
        that a new book can begin.
      </p>
      <p className="text-3xl mt-4">&mdash; Alex</p>
    </SG>
  );
}

function EpilogueDE(props: EpilogueProps) {
  return (
    <SG {...props}>
      <h2 className="text-6xl font-bold">P.S.:</h2>
      <p>
        Ich will nicht egozentrisch wirken, indem ich all das über mich selbst
        mache. Wir haben diesen Weg zusammen gemacht, und ich habe{" "}
        <b>so viel Wunderschönes gelernt, erlebt und gefühlt wegen Dir</b>.
      </p>
      <p className="font-sans font-semibold">
        Das alles hat mich unglaublich stolz gemacht.
      </p>
      <p>
        Aber ich habe eine Menge Trauer und Schmerz erlebt, eine Menge schwerer
        Zeiten in den letzten paar Jahren. Ich habe ein paar schöne Dinge und
        vor allem Menschen verloren, und damit auch Teile meiner selbst.
      </p>
      <p>
        Ich habe mich selbst entlang des Weges verloren. Ein Künstler zu sein
        wurde <b>schwerer und schwerer für mich, neue Musik zu schreiben</b> und
        zu komponieren wurde eine unendlich schwere Aufgabe die ich
        verabscheute. Ich habe immer längerwerdende Pausen davon genommen, und
        habe überlegt, einfach stumm aufzuhören, und das mehr als einmal.
      </p>
      <p>
        Seit die Idee, das Projekt abzuschließen, Dinge zu beenden, zu einem
        Abschluss zu bringen, aufgekommen ist,{" "}
        <b>habe ich Erleichterung verspürt</b>. Wie mit so vielen Dingen in der
        aktuellen Zeit, musste ich nur noch ein mal stark sein. Danach würden
        Dinge fertig sein, ich wäre bereit, neue Dinge in mein Leben zu lassen.
      </p>
      <p>
        Und so habe ich <b>mein letztes Album geschrieben</b>. Ich habe
        versucht, alles einzufangen, so viele Emotionen, so viele Gemütszustände
        in Stücken, habe versucht, ein vollumfängliches Erlebnis zu erschaffen,
        etwas das bedeutend bleiben würde über die Existenz von Zoomoid hinweg.
      </p>
      <p className="font-sans">
        Ich glaube, diesmal, zumindest in Teilen, <b>habe ich es geschafft.</b>
      </p>
      <p>
        <q><b>All Things Must End</b></q> ist mein letztes Album. Was
        danach kommt ist so ziemlich der Zeit überlassen. Es ist Zeit für mich
        geworden, wieder nur <q>Alex</q> zu sein.
      </p>
      <p>
        Das bedeutet nicht, dass ich nie wieder Musik mache. Es markiert nur{" "}
        <b>das Ende für Zoomoid</b>. <b>Das letzte Kapitel</b>. Sodass ein neues
        Buch beginnen kann.
      </p>
      <p className="text-3xl mt-4">&mdash; Alex</p>
    </SG>
  );
}

export default function Wrapper() {
  const { state } = useContext(LocaleContext);
  return (
    <section className="md:text-lg my-16 md:my-32 max-w-screen-md mx-auto pb-64 px-4 md:px-0">
      {state.lang === "de" ? (
        <EpilogueDE
          animationName="slide-up"
          className="space-y-2"
          interval="100ms"
          initialStyle={{
            opacity: 0,
          }}
        ></EpilogueDE>
      ) : (
        <EpilogueEN
          animationName="slide-up"
          className="space-y-2"
          interval="100ms"
          initialStyle={{
            opacity: 0,
          }}
        ></EpilogueEN>
      )}
    </section>
  );
}
