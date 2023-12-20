"use client";

import { StaggeringAnimationContainer as SC } from "./AnimationContainer";

export default function Epilogue() {
  return (
    <section className="text-lg my-32 max-w-screen-md mx-auto pb-64">
      <SC
        animationName="slide-up"
        className="space-y-2"
        threshold={1}
        interval="50ms"
        initialStyle={{
          opacity: 0,
        }}
      >
        <h2 className="text-6xl font-bold">P.S.:</h2>
        {/* <p>
      10 years after getting a second chance at life, which sort of
      sparked the idea for Zoomoid, &ldquo;<b>All Things Must End</b>
      &rdquo; marks the{" "}
      <b>final step of me as Zoomoid as an artist.</b>
    </p> */}
        <p>
          I&apos;ve come a long way. I&apos;ve learned so much. Made so many
          great things. Made so many mistakes, <b>experienced so much</b>, from
          failure to success to pure gratitude, to{" "}
          <b>meeting people who genuinely liked</b> the bits and pieces I made.
        </p>
        <p className="font-sans">This all made me incredibly proud.</p>
        <p>
          But Zoomoid is merely a <b>shadow of my personal life</b>. I&apos;ve
          experienced a lot of trauma, a lot of hard times over the last couple
          of years. I&apos;ve lost a lot of beautiful things and people, and
          with that, pieces of myself.
        </p>
        <p>
          <b>When my mental health got worse,</b> I distanced myself from
          reality and from myself. That also meant distancing myself from being
          Zoomoid, the artist. It became{" "}
          <b>harder and harder to write and compose new music</b>. I took
          ever-longer breaks from it.
        </p>
        <p>
          As the idea to finish the project, to finalize things, to bring things
          to a conclusion, sparked, <b>I felt relief</b>. As with so many things
          in these current times, I only had to be strong one more time. After
          that, things would be done, I&apos;d be able to let new things enter
          my life
        </p>
        <p>
          And so I wrote my last album. I tried to capture so many things, so
          many emotions, so many states of mind in tracks, tried to create a
          holistic experience, something that would remain relevant beyond the
          lifetime of Zoomoid.
        </p>
        <p className="font-sans">
          I think, for once, at least in some part, I succeeded.
        </p>
        <p>
          &ldquo;<b>All Things Must End</b>&rdquo; is my last album. What comes
          afterwards is pretty much left to time{" "}
          <small className="font-sans">
            (Conincidentally, a grand motive of the album &mdash; Time).
          </small>
        </p>
        <p>
          That doesn&apos;t mean that I&apos;m never going to make music again.
          It just marks the <b>ending for Zoomoid</b>. <b>The final chapter.</b>{" "}
          Such that a new book can begin.
        </p>
        <p className="text-3xl mt-4">&mdash; Alex</p>
      </SC>
    </section>
  );
}
