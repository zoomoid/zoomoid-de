"use client";

import Image from "next/image";
import type { ReactNode, RefObject } from "react";
import { YearRoll } from "@/components/YearRoll";
import React, { useContext } from "react";
import {
  StaggeringSet as SC,
  StaggeringGroup as SG,
  StaggeringGroupProps,
} from "@/components/AnimationContainer";
import { LocaleContext } from "@/context/locale.context";

interface Track {
  title: string;
  boxURI?: string;
  description: ReactNode | ReactNode[];
  className?: string;
  children?: ReactNode | ReactNode[];
}

const waveformPrefix = "/img/all-things-must-end/waveforms";
const boxWaveform = (name: string): string => `${waveformPrefix}/box/${name}`;

interface CloudProps {
  // width: string;
  // position?: string;
  // margin?: string;
  animationDuration?: string;
  animationDelay?: string;
  src?: string;
  className?: string;
}

const Cloud = ({
  animationDelay = "1s",
  animationDuration = "10s",
  src = "/img/all-things-must-end/assets/cloud.png",
  className,
}: CloudProps) => {
  return (
    <div
      className={`${className} absolute mix-blend-hard-light cloud`}
      style={{
        animationDuration: animationDuration,
        animationDelay: animationDelay,
        // width: width,
        // margin: margin,
      }}
    >
      <Image
        src={src}
        alt=""
        width={2000}
        height={1339}
        className=""
        style={{
          filter: "saturate(0) contrast(0.3)",
        }}
      ></Image>
    </div>
  );
};

const leadingZeroes = (i: number, digits = 1): string => {
  if (i < digits * 10) {
    return "0" + i;
  }
  return i.toString();
};

export default function Album({
  skipRef,
}: {
  skipRef: RefObject<HTMLDivElement>;
}) {
  const { state } = useContext(LocaleContext);

  const tracks: Track[] = [
    {
      title: "All That Could Have Been",
      boxURI:
        "/img/all-things-must-end/waveforms/box/01_All That Could Have Been.png",
      description: (
        <>
          <p>
            This is where it all begins. The introduction. The thought of all
            that could have been. That title sets up everything that is to
            follow from here. All those possible outcomes...
          </p>
          <p>
            &ldquo;All That Could Have Been&rdquo; is an homage to all those
            intros to albums I&apos;ve written &mdash; something that I always
            thought I was rather good at.
          </p>
          <p>
            For just a moment in the beginning of 2023, I felt so amazing.
            Floating above the clouds is an incredible feeling.
          </p>
          <p>
            All those endorphines pushed me through the first months of the
            year. They would fade too quickly...
          </p>
        </>
      ),
    },
    {
      title: "Nur Für Einen Augenblick",
      boxURI:
        "/img/all-things-must-end/waveforms/box/02_Nur Für Einen Augenblick.png",
      description: (
        <>
          <p>
            ...and in the blink of an eye, I was back in the deep dark hole. All
            that came crashing down. It was never built to last. Time flew by
            and I found myself back in old habits.
          </p>
          <p>
            &ldquo;Nur Für Einen Augenblick&rdquo; is older than these
            experiences though. It was originally written back in 2022, on a
            rare evening of inspiration and creativity. It had many different
            working titles throughout its design period: &ldquo;What&apos;s
            Next&rdquo; was one of them, and I think it already captures the
            spirit of the entire album in some sense.
          </p>
          <p>
            It&apos;s an uplifting kind of track, in its core a Drum &amp; Bass
            song that heavily leans into orchestral music (which is where most
            of the instruments usually belong). It&apos;s inspired by the works
            of artists like Keeno and Etherwood.
          </p>
        </>
      ),
    },
    {
      title: "Ein Tag Im April (Interlude)",
      boxURI:
        "/img/all-things-must-end/waveforms/box/03_Ein Tag Im April (Interlude).png",
      description: (
        <>
          <p>
            &ldquo;Ein Tag Im April&rdquo;, or &ldquo;a day in April&rdquo;
            spans a bridge between &ldquo;Nur Für Einen Augenblick&rdquo; and
            &ldquo;Angst vor der Zukunft&rdquo;. It&apos;s a wild ride, an
            experience, like a day in my life in that particular month.
          </p>
          <p>
            Between ups and downs, between running 21 kilometers on a random
            saturday in pouring rain for the sheer reason of feeling the
            runner&apos;s high, feeling weightless, feeling so much, and
            crashing down completely while in Amsterdam.
          </p>
          <p>
            It&apos;s also more than just a single day. A day became the
            representation of the entire mood I went through in April of 2023.
            It was a ride through some of the most
          </p>
          <p>
            The sonic atmosphere of this track is comprised of wast reverbs,
            familiar sounds from previous Zoomoid releases, heavily distorted
            and modulated to fade into &ldquo;Angst vor der Zukunft&rdquo;.
          </p>
        </>
      ),
    },
    {
      title: "Angst vor der Zukunft",
      description: (
        <>
          <p>
            &ldquo;Angst vor der Zukunft&rdquo; is one of the protagonists of
            the album. &ldquo;Afraid of the future&rdquo; characterizes what I
            felt over the last year. Both in the short term and in the long term
            I&apos;m not sure where things are going. Maybe that&apos;s not a
            bad thing. Maybe it is. I don&apos;t know.
          </p>
          <p>
            &ldquo;Angst vor der Zukunft&rdquo; also digs into the grasp and
            understanding of time, albeit, entirely subjective. I feel like time
            is running out. Not for one particular thing. Just in general. Time
            is running out... &ldquo;Wie kann man Zeit haben wenn sie eindeutig
            dich hat&rdquo;.
          </p>
          <p>
            &ldquo;Angst vor der Zukunft&rdquo; is referential to some other
            important Zoomoid releases. Its roots go back to tracks like
            &ldquo;Wild World&rdquo;, the softer side of &ldquo;Voyager&rdquo;,
            but most importantly &ldquo;Shades of Yellow&rdquo;. The motive of
            both tracks is the same, both circle around the central quote from
            &ldquo;Dark&rdquo;, but this time, it&apos;s me saying the words, as
            if this would give them more gravity. The break even uses the same
            instruments as the original, &ldquo;Shades of Yellow&rdquo;, even
            though slightly adapted to fit the rest of the track.
          </p>
        </>
      ),
    },
    {
      title: "Outer Space (Reprise)",
      description: (
        <>
          <p>
            &ldquo;Angst vor der Zukunft&rdquo; bridges over into another
            reworked Zoomoid track, &ldquo;Outer Space&rdquo;. &ldquo;Outer
            Space&rdquo; was originally released on the Extended Edition of
            &ldquo;Eigenräume&rdquo;. It was a Techno track, but a melodic one,
            that would have also perfectly fitted onto &ldquo;Voyager&rdquo;. It
            was later remastered and made into a longer mix version on the
            &ldquo;301 Permanently Moving&rdquo; EP.
          </p>
          <p>
            In 2021 I released &ldquo;Sehnsucht&rdquo;, which was entirely
            acoustic, heavily relying on the softness of Felt Instrument&apos;s{" "}
            <b>Lekko</b> piano. Its sound has a level of intimacy that inspired
            me to remixing other Zoomoid tracks with those softer instruments
            into warm, ambient, and cozy versions. I&apos;ve been sitting on
            this remix for a while now, the project file almost got lost between
            different devices and setups. Now it get&apos;s to see the world, as
            a reprise of all the great Zoomoid tracks that lay in the past.
          </p>
        </>
      ),
    },
    {
      title: "Illusions",
      description: (
        <>
          <p>
            &ldquo;Illusions&rdquo; is a track I wrote over the course of a
            weekend. I started out on a friday evening with an idea for
            something that got inspired by previous track such as the &ldquo;Im
            Schatten der Nacht&rdquo; EP, &ldquo;Voyager&rdquo; tracks and more.
            By sunday afternoon, I had a fully-arranged and mixed track
          </p>
          <p>
            When the drums fade away in the middle part of the track to reveal
            the gigantic space of synthesizers where, just for a moment, you can
            close your eyes, dream of a distant, empty, resonant space, you can
            maybe understand where the track gets its name from.
          </p>
          <p>
            And when the drums come back they take you back to reality, back to
            the apex of the rollercoaster that is life, down into a valley of
            loudness and impressions and emotions.
          </p>
          <p>
            &ldquo;Illusions&rdquo; would be perfectly fine on its own, but in
            the context of this album, it blooms, it provides a five-minute
            escape into the time and space of &ldquo;Im Schatten der
            Nacht&rdquo;.
          </p>
        </>
      ),
    },
    {
      title: "Delay (Long Version)",
      description: (
        <>
          <p>
            Talking about reworking, remixing, remastering older Zoomoid
            releases, &ldquo;Delay&rdquo; from &ldquo;Public
            Transportation&rdquo; always seemed a bit short to me. Its length on
            the original EP is fine, all other tracks fit together, but there
            was more for &ldquo;Delay&rdquo;.
          </p>
          <p>
            In the same way that &ldquo;Outer Space&rdquo; in this album&apos;s
            form existed way before the album, the &ldquo;Long Version&rdquo; of
            &ldquo;Delay&rdquo; existed in a prototype form for more than two
            years before I started work on this album. I considered releasing it
            as a single, but that never seemed right to do. And so, when time
            came to find tracks that captured my spirit, skill, and sound, the
            characteristics of Zoomoid, &ldquo;Delay&rdquo; filled that spot
            perfectly.
          </p>
          <p>
            It&apos;s not just an longer version of the original though. I
            recorded some new elements, like a lot of guitars, for both lead
            elements, and ambience, and it gives the track a special atmosphere
            of almost being &ldquo;real instruments&rdquo;. Also, the drums got
            a complete make-over, which for Drum &amp; Bass track, is pretty
            much an entirely new track...
          </p>
          <p>
            &ldquo;Delay&rdquo; is not the last reference to &ldquo;Public
            Transportation&rdquo; though, that spot is reserved for later...
          </p>
        </>
      ),
    },
    {
      title: "Maybe Someday",
      description: (
        <>
          <p>
            How can I even describe &ldquo;Maybe Someday&rdquo;? Maybe you
            remember my attempt at writing a love song from the biography above
            &mdash; If you didn&apos;t read that, no worries! &mdash; well this
            is it. This is my final attempt at it, I guess. Is it though?
            I&apos;m not sure. Could be. Could also not be. Who knows. While I
            try to figure that out, listen to it, maybe you can figure it out!
          </p>
          <p>
            It is, in essence, again an attempt to figure out how my perception
            of time works, but also so much more. It&apos;s a declaration of
            surrender to time, where I&apos;m not sure if I&apos;ll ever have
            the time and, more importantly, timing, to say all the things I want
            to say, do all the things I want to do. I know for a fact that I
            will not... but maybe someday, if everything has been figured out,
            the stars align, and I have the courage... then maybe someday...
          </p>
        </>
      ),
    },
    {
      title: "Window of Opportunity (Too Late)",
      description: (
        <>
          <p>
            We are now at a transition in the general feel of the album.
            &ldquo;Window of Opportunity&rdquo; picks up on those topics from
            the previous track, where I&apos;m not sure if I&apos;ll ever be at
            the right spot at the right time and have the courage and strength
            to do the right things (what&apos;s right is clearly subjective to
            the situation). This idea of{" "}
            <b>missing the window of opportunity</b> has become a principle of
            my skewed life philosophy, that, no matter what, I will always miss
            it, that I&apos;m doomed to...
          </p>
          <p>
            I wanted to make a track about this for at least as long as
            &ldquo;Sehnsucht&rdquo;, and in a sense, I already did:
            &ldquo;Türen&rdquo; stems from a similar idea, that doors close
            before I have the opportunity to enter them. The idea comes from
            Kafka&apos;s &ldquo;Before the Law&rdquo;, albeit, much transferred,
            and the title&apos;s interpretation can be more optimistic, when
            considering that new doors also may open...
          </p>
          <p>
            &ldquo;Window of Opportunity&rdquo; borrows its sound design from
            &ldquo;Sehnsucht&rdquo;, which is only reasonable, considering the
            similarities in motive. Towards its end, the sounds shift into a
            combination of a{" "}
            <a
              href="https://de.wikipedia.org/wiki/Mellotron"
              className="underline"
            >
              Mellotron
            </a>{" "}
            and the pluck sound of Porter Robinson&apos;s &ldquo;Sad
            Machine&rdquo;, also picking up its melody on the last few notes. I
            still think that &ldquo;Worlds&rdquo;, which included &ldquo;Sad
            Machine&rdquo; is one of, if not the, best album ever made, and
            having passed on the opportunity to see him perform it live is one
            of those <b>Windows of Opportunity</b> that I&apos;ve missed in life.
          </p>
        </>
      ),
    },
    {
      title: "Lazarus",
      description: (
        <>
          <p>
            With &ldquo;Lazarus&rdquo; starts the transition away from what
            Zoomoid was into what Zoomoid has become. The vibe shfits away from
            referencing and deriving music from existing work, into new,
            uncharted terrories.
          </p>
          <p>
            &ldquo;Lazarus&rdquo; starts with tragic strings and, one last time,
            using that tune-in sample of the orchestra that already was in
            &ldquo;Shades of Yellow&rdquo; and &ldquo;Ein Tag im April&rdquo;.
            The almost wheeping piano melody brings down the track into looming,
            scary space...
          </p>
          <p>
            That accident in 2013 where I was in intensive care for two weeks is
            the immediate inspiration for this track (and also the next).
          </p>
        </>
      ),
    },
    {
      title: "Rebirth",
      description: (
        <>
          <p>
            &ldquo;Rebirth&rdquo; is the logical consequence of
            &ldquo;Lazarus&rdquo;. For the longest time during the creation of
            the album, the tracks were just one, named
            &ldquo;Lazarus/Rebirth&rdquo;. They were only split up towards the
            end of mastering, to bring the number of tracks up to 15 (and also
            for me to write about each part individually here).
          </p>
          <p>
            &ldquo;Rebirth&rdquo; is what&apos;s on the other side of that
            accident, that horrifying moment, that life-changing experience.
          </p>
          <p>
            It resolves into sonic space of synthesizer plucks and arppegios
            that evolves into a crushing, distorted mood, where only a heartbeat
            is left.
          </p>
        </>
      ),
    },
    {
      title: "Anywhere Else At Any Other Time",
      description: (
        <>
          <p>
            That heartbeat continues into &ldquo;Anywhere Else At Any Other
            Time&rdquo;. This track had many names throughout its way to
            release. It was called &ldquo;Leaving&rdquo;,
            &ldquo;Departure&rdquo;, all things related to the central motive, a
            slow, but driving melody that envelopes the announcement sample from
            a train journey. This was the motive of &ldquo;Public
            Transportation&rdquo; and this track, &ldquo;Anywhere Else At Any
            Other Time&rdquo;, waves this EP goodbye at the train&apos;s
            platform.
          </p>
          <p>
            I like to imagine that the train takes me somewhere far away, maybe
            to the sea, to the beach, to a place I can only imagine, not
            remember...
          </p>
        </>
      ),
    },
    {
      title: "Echoes of You",
      description: (
        <>
          <p>
            &ldquo;Echoes of You&rdquo; starts exactly there, in a cottage at
            the beach. The soundscape at the start sets up a journey into deep
            atmospheric sounds with lots of echo and reverb.
          </p>
          <p>
            I wrote the song the week my grandfather died. He probably had the
            most artistical influence on my own work than anyone else. Due to
            his deteriorating hearing, he was unable to experience my music. It
            hurts knowing I never had the opportunity to show him.
          </p>
          <p>
            I&apos;d like to think that some day I can show him. Maybe someday.
          </p>
          <p>
            As the song ends, a door opens, and the listener is greeted by
            sounds of waves and sea gulls. We are now approaching the final
            moments, the last chapter.
          </p>
        </>
      ),
    },
    {
      title: "The Last Chapter",
      description: (
        <>
          <p>
            &ldquo;The Last Chapter&rdquo; is exactly that: the last chapter.
            The tragedy of all the previous tracks, all those memories,
            experiences, emotions, they culminate in a final, soft, gloomy track
            about what has been, what is, and what will be.
          </p>
          <p>
            The song brings everything down, into just a few, slow moving
            chamber strings, the soft piano and then nothing.
          </p>
          <p>
            Into that silence follows a monologue, my monologue, the last
            chapter of Zoomoid. It&apos;s an admission that all things must end,
            and that we have reached that point now, where I have to leave
            Zoomoid behind.
          </p>
        </>
      ),
    },
    {
      title: "All Things Must End",
      className: "",
      description: (
        <>
          <p>
            And with that, we rise one last time, for old time&apos;s sake, into
            &ldquo;All Things Must End&rdquo;, the album&apos;s title track and
            also the final Zoomoid track.
          </p>
          <p>
            I was long unsure of where to place this track. I had it written
            before most of the other tracks on the album. And when all the
            puzzle pieces finally joined, it found its place right at the end.
          </p>
          <p>
            One last time, gathering all the energy, for a final, euphoric,
            powerful stride towards what Zoomoid is and was and will be.
          </p>
          <p>
            And with that triumphal outro, the dramatic violin vibrato and the
            swelling of the trombones, the album comes to an end. This is it.
            The final tone. As it resonates away and leaves you in silence,
            remember everything that was. Just for a brief moment... and try to
            imagine what could have been...
          </p>
        </>
      ),
    },
  ];

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

  return (
    <article ref={skipRef} className="relative">
      <section className="min-h-screen mx-auto relative z-0 items-center">
        <div
          className="absolute w-full h-full left-0 right-0 bottom-0 z-10"
          style={{
            maskImage: `linear-gradient(transparent 0%, black 30%, black 100%)`,
          }}
        >
          <Image
            src="/img/all-things-must-end/assets/gregoire-jeanneau-9sxeKzuCVoE-unsplash.jpg"
            // width={2304}
            // height={3456}
            fill
            alt=""
            className="opacity-80 w-full"
          ></Image>
        </div>
        <div className="flex-grow"></div>
        <div className="max-w-screen-md mx-auto z-10 w-full text-lg ">
          <h3 className="text-10xl text-center">
            <span className="">
              <YearRoll
                decades={[10, 20]}
                years={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
                direction="normal"
                duration="5s"
                rootMargin="-500px 0px -500px 0px"
                once
              ></YearRoll>
            </span>
          </h3>
          <div className="space-y-2">
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
              Which means I have to leave something behind. To cite a film
              that&apos;s had monumental influence on me and my music:
              &ldquo;Newton&apos;s third law: In order to go somewhere, you have
              to leave something behind.&rdquo;
            </p>
            <p>Which means... this is it.</p>
            <p>
              The final <b>Zoomoid album</b>.{" "}
            </p>
            <p>The last chapter.</p>
            <div className="rounded-xl relative max-w-screen-sm">
              <Image
                src="/img/all-things-must-end/cover.jpg"
                alt=""
                width={2500}
                height={2500}
              ></Image>
            </div>
          </div>
        </div>
        {/* <div className="flex-grow"></div> */}
      </section>
      <div className="mx-auto relative min-h-[500px] z-20">
        <div
          className="absolute w-full h-[800px] left-0 right-0 z-20 transform bg-[#051c35]"
          style={{
            maskImage: `linear-gradient(transparent 0%, black 30%, black 100%)`,
          }}
        ></div>
      </div>
      <div className="h-0 relative">
        <div className="relative w-full h-32 top-0 transform -translate-y-72 z-30">
          <Image
            src="/img/all-things-must-end/waveforms/line/All Things Must End (Album Mix).svg"
            fill
            alt=""
            className=""
          ></Image>
        </div>
      </div>
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
        {tracks.map((track, i) => {
          const waveformFilename = `${leadingZeroes(i + 1)}_${track.title}`;
          return (
            <section key={`track-${i}`} className={track.className}>
              <div className="mx-auto relative max-w-screen-md">
                <div className="flex items-stretch relative isolate">
                  <div className="relative w-48 flex-shrink-0 -ml-36 translate-x-12 md:-ml-48 md:translate-x-12 z-0">
                    <Image
                      src={boxWaveform(waveformFilename + ".png")}
                      width={400}
                      height={1280}
                      alt=""
                    ></Image>
                  </div>
                  <div className="flex-grow flex flex-col justify-center z-10 text-white">
                    <div className="flex">
                      <h3 className="font-sans flex-grow h-full text-2xl md:text-4xl mb-4">
                        <span>{leadingZeroes(i + 1)}</span> &mdash;{" "}
                        <span>{track.title}</span>
                      </h3>
                      {/* <div className="relative transform rotate-180">
                        <Image
                          src={waveWaveform(waveformFilename + ".svg")}
                          width={1010}
                          height={100}
                          alt=""
                        ></Image>
                      </div> */}
                    </div>

                    <div className="md:text-lg space-y-2">
                      {track.description}
                      {track.children}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <div
        className="h-[1200px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, #f59e0b 0%, #f59e0b 15%, #7f1d1d 80%, rgb(10 10 10 / 1) 100%)`,
        }}
      >
        <div className="mx-auto max-w-screen-md text-white pt-32 text-lg">
          {state.lang === "de-DE" ? (
            <OutroDE
              animationName="slide-up"
              className="space-y-8"
              interval="100ms"
              initialStyle={{
                opacity: 0,
              }}
            ></OutroDE>
          ) : (
            <OutroEN
              animationName="slide-up"
              className="space-y-8"
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

type OutroProps = StaggeringGroupProps;

function OutroDE(props: OutroProps) {
  return (
    <SG {...props}>
      <p>Ich habe das Resultat dieser Betrachtung für Dich entschieden</p>
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
      <p>Danke! Ich hab Dich lieb!</p>
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
