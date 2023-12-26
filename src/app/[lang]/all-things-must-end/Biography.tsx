"use client";

import {
  StaggeringGroup as SG
} from "@/components/AnimationContainer";
import { YearRoll } from "@/components/YearRoll";
import Image from "next/image";
import { RefObject } from "react";

export default function Biography({
  skipRef,
}: {
  skipRef: RefObject<HTMLDivElement>;
}) {
  return (
    <article id="preamble" className="relative">
      <section className="z-0 relative">
        <div
          className="h-[100vh] absolute w-full transform -translate-y-96 bg-neutral-950 overflow-hidden"
          style={{
            maskImage: `linear-gradient(transparent 0%, black 40%, black 70%, transparent 100%)`,
          }}
        >
          <Image
            src="/img/all-things-must-end/assets/casey-horner-RmoWqDCqN2E-unsplash.jpg"
            alt=""
            width={4016}
            height={6016}
            className="mix-blend-color-dodge filter saturate-0 opacity-80"
          ></Image>
        </div>
      </section>
      <section className="max-w-screen-md mx-auto my-16 z-10">
        <h2 className="text-6xl mb-8">A Brief Biography of Me, Zoomoid</h2>
        <p className="text-lg">
          I promise, it&apos;s not thaaaaat long, and it might help you
          understand the album, its motives, and most importantly its
          consequences. If you want to, you can{" "}
          <span
            onClick={() => {
              if (skipRef) {
                skipRef.current?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="underline cursor-pointer"
          >
            skip it
          </span>
          .
        </p>
        <h3 className="text-8xl text-center mt-16">
          <span className=""></span>
          <span className="">
            <YearRoll
              decades={[10, 20]}
              years={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
              direction="reverse"
              duration="4s"
              rootMargin="-500px 0px -500px 0px"
              once
            ></YearRoll>
          </span>
        </h3>
        <SG animationName="slide-up" className="my-16 text-lg space-y-2">
          <p>
            In <b>2013</b> someone hit my reset button. After a terrifying
            accident, and the subsequent long recovery, I got into music making.
            YouTube provided all the resources I needed to get started, and I
            went heads-first into Trance and Progressive House, both genres I
            listened frequently to back then.
          </p>
          <p>
            Learning was <b>(and still is)</b> a wonderful thing, and sometimes{" "}
            <b>I miss those days </b>
            for the simple fact that those days <b>(and nights)</b> are truly
            cherished memories. It took me <b>until 2016</b>, however, to
            produce anything that I considered worth &ldquo;releasing&rdquo;,
            whatever that may have meant <b>back then</b>.
          </p>
          <p>
            Naturally, this track was little but an attempt to recreate and fuse
            together what all those YouTube tutorials taught me, and it&apos;s
            not worth going into further detail here.{" "}
            <small>
              Though, the inclined can go on a search to find the traces of this
              track. It made it to Soundcloud and YouTube at some point.
            </small>
          </p>
          <p>
            Remaining in House music, I also made a remix of David Guetta&apos;s
            &ldquo;Memories&rdquo;! Ironically enough, Guetta would remix{" "}
            <b>
              his own track 4 years later, which is even weaker than the
              original from 2009!
            </b>
          </p>
          <p>
            Originally however, I wanted to make <b>Drum &amp; Bass</b>, which
            was one genre I (back then) only recently discovered. I could never
            quite figure it out, though, back then... Trying to recreate what I
            was listening to did not get me anywhere, and it would take another
            2 years to get there.
          </p>
          <p>
            Meanwhile, I <b>also got into Techno</b>. The Techno I was listening
            to back then was very contemporary, and does not have anything to do
            with today&apos;s Techno, which has quickly become extremely
            popular. To some extent, I&apos;m all here for that, but maybe you
            already see the huge valley in tempo range between the two genres I
            was primarily listening to; that&apos;s what I consider to be the{" "}
            <b>Hardcore range</b>, and I&apos;d rather not talk about...{" "}
            <small>
              (which is sort of where the today&apos;s Techno lives in &ndash;
              don&apos;t wanna go there)
            </small>
          </p>
        </SG>
      </section>
      <section id="2018" className="max-w-screen-md mx-auto my-16">
        <h3 className="text-8xl text-center">
          <span className="text">
            <YearRoll
              key="liamm"
              years={[6, 7, 8]}
              decades={[10]}
              direction="normal"
              duration="1s"
              once
              rootMargin="-500px 0px -500px 0px"
            ></YearRoll>
          </span>
        </h3>
        <SG
          animationName="slide-up"
          className="my-16 text-lg space-y-2 relative"
        >
          <p>
            When &ldquo;<b>Life Is About Making Memories</b>&rdquo; landed in
            2018, I had already released several attempts at proper tracks in
            the form of Singles. But releasing the
            <b> first proper album-sized collection</b> of tracks, that also had
            a <b>concept built-in </b>
            started the next episode of <b>Zoomoid</b> as a <b>producer</b>.
            Ideas grew larger than just single tracks, and spanned further than
            just five minutes of some repetitive loops and samples clicked
            together in Ableton Live.
          </p>
          <div>
            <SG
              animationName="slide-up"
              className="grid md:grid-cols-1 gap-x-4"
            >
              <div></div>
              <div>
                <Image
                  src="/img/liamm.jpg"
                  width={1500}
                  height={1500}
                  alt=""
                  className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl shadow-neutral-300/10 my-8 w-1/2 border-neutral-50 mx-auto"
                ></Image>
              </div>
              <div></div>
            </SG>
          </div>
          <p>
            It got me going onto more elaborate sound design and composition{" "}
            <small>
              (though it is still a bit improvised and by no means professional,
              rather &ldquo;if it sounds good, it&apos;s good&rdquo;).
            </small>
          </p>
          <p>
            With that, releases became a more regular thing. Studying Computer
            Science full-time gave me enough evenings without plans to waste
            hours on end staring into the ever so grey user interface of Live.
          </p>
          <SG
            animationName="slide-up"
            className="grid md:grid-cols-2 gap-x-4 relative"
          >
            <div>
              <Image
                src="/img/eigenräume_pre.jpg"
                width={1500}
                height={1500}
                alt=""
                className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl shadow-neutral-300/10 my-8 border-neutral-50 mx-auto relative z-10"
              ></Image>
            </div>
            <div>
              <Image
                src="/img/eigenräume.jpg"
                width={1500}
                height={1500}
                alt=""
                className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl shadow-neutral-300/10 my-8 border-neutral-50 mx-auto transform scale-110 -translate-x-10 relative z-20"
              ></Image>
            </div>
          </SG>
          <p>
            In 2019, I made an album that was released in two
            &ldquo;waves&rdquo;, called &ldquo;<b>Eigenräume</b>&rdquo;. It took
            some inspiration from place I held very dear to my heart, and places
            I wanted (and some still want to visit). That album had concept down
            to it&apos;s core fibers, and it defined the &ldquo;Zoomoid
            sound&rdquo; in terms of electronic, techno-y sound design and
            composition. While I failed with the original idea of producing an
            album where all tracks would blend seamlessly into each other on the
            first try{" "}
            <small>(which is why there are two versions of the album)</small>,
            the second try{" "}
            <small>
              (the <b>Extended Version</b>)
            </small>{" "}
            got it right for at least the first six tracks, afterwards things
            derailed a bit. Notably, one of those other tracks, &ldquo;
            <b>Outer Space</b>&rdquo; was a piece I thought too good to just
            stash at the end of the album, which is why it I made it longer and
            &ldquo;remastered&rdquo; it for the late-2019&apos;s &ldquo;
            <b>301 Moved Permanently</b>&rdquo;.
          </p>
          <div className="">
            <SG
              animationName="slide-up"
              className="grid md:grid-cols-2 gap-x-4"
            >
              <div>
                <Image
                  src="/img/public_transportation.jpg"
                  width={1500}
                  height={1500}
                  alt=""
                  className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl shadow-neutral-300/10 my-8 border-neutral-50 mx-auto"
                ></Image>
              </div>
              <div>
                <Image
                  src="/img/301.jpg"
                  width={1500}
                  height={1500}
                  alt=""
                  className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl shadow-neutral-300/10 my-8 border-neutral-50 mx-auto"
                ></Image>
              </div>
            </SG>
          </div>
          <p>
            I made &ldquo;<b>Public Transportation</b>&rdquo; from an idea on a
            train ride back home{" "}
            <small>(see what I did there? Backreferencing?)</small> and that
            stuck with me. I really like trains &mdash; which you might alreay
            know &mdash; particularly seeing the world from inside a train,
            passing by. I find this to be really peaceful, and it&apos;s one of
            the few things where my brain will completely shut off. So I made an
            album about a (hypothetical) train journey, which announcements as
            to where the train is going to stop next. Go have a listen if you
            haven&apos;t yet, it&apos;s also really short, then come back to
            this.
          </p>
        </SG>
      </section>
      <section className="max-w-screen-md mx-auto my-16">
        <h3 className="text-8xl text-center">
          <span className="">
            <YearRoll
              key="liamm"
              years={[8, 9, 10]}
              decades={[10, 20]}
              direction="normal"
              duration="1s"
              once
              rootMargin="-500px 0px -500px 0px"
            ></YearRoll>
          </span>
        </h3>
        <SG animationName="slide-up" className="my-16 text-lg space-y-2">
          <p>
            In 2020 I hit a brick wall. And not the good one. As the world went
            into lockdown, I (as the artist) struggled to find inspiration,
            energy, and all that what came easily before. In hindsight, this
            would have been a good point to start therapy, probably.
          </p>
          <p>
            I was also in love. But the kind that wasn&apos;t mutual. With a
            shattered heart, I wanted to write a love song. The silly things you
            do when you&apos;re in love, I guess. I thought I could.
          </p>
          <div>
            <Image
              src="/img/shades_of_yellow.jpg"
              width={1500}
              height={1500}
              alt=""
              className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl w-1/2 shadow-neutral-300/10 my-8 border-neutral-50 mx-auto"
            ></Image>
          </div>
          <p>
            &ldquo;<b>Shades of Yellow</b>&rdquo; was the two-track EP that came
            out of that episode. My attempt at a love song remained nothing more
            than the title of a track that (to be brutally honest) seems like a
            more refined copy of a previous track I made, called
            &ldquo;Utopia&rdquo; from &ldquo;
            <b>Life Is About Making Memories</b>&rdquo;. Other than being called
            &ldquo;Malheureux en Amour&rdquo;{" "}
            <small>
              (which I also managed to misspell on the first release of the EP,
              where, when trying to fix the issue, I managed to upload an
              unfinished version of the cover image, which is why the path on
              the top blue wave doesn&apos;t connect properly on the right side
              &mdash; look it up...)
            </small>
            , not much remains of the title&apos;s meaning. The song is rather
            upbeat for such a topic, to be honest...
          </p>
          <p>
            Anyways, that EP had a title track, &ldquo;Shades of Yellow&rdquo;,
            which stands in stark contrast to the previously discussed track:
            it&apos;s a Tech-House track, rather long and tells a way better
            story than &ldquo;Malheureux en Amour&rdquo;. It was probably
            inspired a lot by &ldquo;Wild World&rdquo;, another Zoomoid song,
            released as one of those Singles that have since disappeared from
            the discography, but remains as a VIP Mix on &ldquo;Life Is About
            Making Memories&rdquo;.
          </p>
          <p>
            That title track sampled the German TV series &ldquo;Dark&rdquo;, in
            particular a dialogue where two protagonists talk about time and
            their grasp of it. It resonated with me. Quite a bit actually...
          </p>
          <div>
            <Image
              src="/img/voyager.jpg"
              width={1500}
              height={1500}
              alt=""
              className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl w-1/2 shadow-neutral-300/10 my-8 border-neutral-50 mx-auto"
            ></Image>
          </div>
          <p>
            In the second half of 2020 I wanted to do something new. While the
            world was held captive by a global pandemic, I had enough of sitting
            in my small bedroom in my slightly bigger appartment. Parallel to
            starting a new job, I started collecting ideas that turned into
            tracks that turned into &ldquo;<b>Voyager</b>&rdquo;
          </p>
          <div>
            <Image
              src="/img/all-things-must-end/2046.jpg"
              width={3000}
              height={1500}
              alt=""
              className="shadow-2xl shadow-neutral-300/10 my-8 border-neutral-50 mx-auto"
            ></Image>
          </div>
          <p>
            Surely, I&apos;m not the first one to use that title, it&apos;s by
            no means unique. But it fits the concept really well. A working
            title of the album was &ldquo;Artemis&rdquo; (the name of the NASA
            mission to the moon on the 2020s). You get the picture.
          </p>
          <p>
            It&apos;s tracks sort of guide you on a journey through space, away
            from our pale blue dot in the night sky. It&apos;s ten tracks are
            all in a similar style, they match together really well, and
            I&apos;m quite proud of the entire album. It&apos;s a nice
            experience to listen to it from start to end &mdash; like a concept
            album would.
          </p>
          <p>
            The album&apos;s title track &ldquo;Voyager&rdquo; also had me{" "}
            <b>singing</b> for the first time ever &mdash; and I&apos;m not a
            singer. I&apos;m not even sure if I know how to work with vocals...
          </p>
        </SG>
      </section>
      <section className="max-w-screen-md mx-auto my-16">
        <h3 className="text-8xl text-center">
          <span className="text">
            <YearRoll
              years={[0, 1]}
              decades={[20]}
              direction="normal"
              duration="0.5s"
              once
              rootMargin="-500px 0px -500px 0px"
            ></YearRoll>
          </span>
        </h3>
        <SG animationName="slide-up" className="text-lg my-16 space-y-2">
          <p>
            The escapism that &ldquo;Voyager&rdquo; provided, artistically, did
            not last for long though. I went down into that dark hole that is
            depression. Combining it with a slowly creeping burn-out from that
            aforementioned job, I ended up in a really sad state of mind.
          </p>
          <p>
            Pink Floyd&apos;s &ldquo;Comfortably Numb&rdquo; probably captures
            it best. I have a hang of describing my mental state with music.
            I&apos;ve an incredibly deep emotional response to music, it&apos;s
            like I&apos;m creating a soundtrack to my own life by choosing
            tracks that display my emotional state. It&apos;s amazing and I
            wouldn&apos;t want to miss it, but it makes tough situations even
            more tough.
          </p>
          <div>
            <Image
              src="/img/sehnsucht.jpg"
              width={1500}
              height={1500}
              alt=""
              className="border-t border-l rounded-xl border-opacity-[0.15] shadow-2xl  w-1/2 shadow-neutral-300/10 my-8 border-neutral-50 mx-auto"
            ></Image>
          </div>
          <p>
            &ldquo;<b>Sehnsucht</b>&rdquo; captured those heavy, sad tones. The
            album cover is a picture my grandfather drew that I hold very dear
            to my heart (especially since he passed away in 2023).
          </p>
          <p>
            It&apos;s an entirely instrumental piece of music, no drums, just
            instruments, carried by{" "}
            <a
              className="underline"
              target="_blank"
              href="https://www.feltinstruments.com/"
            >
              Felt Instrument&apos;s
            </a>{" "}
            brilliant <b>Lekko</b> piano, harmonies, melodies, melancholia, the
            wish to be more, to do more, experience more, live a life... It also
            manifests the idea of windows of opportunity and time and, in this
            way, started picking up the fact that time as a human being is
            limited. That&apos;s a thought you don&apos;t have for as long as
            you&apos;re &ldquo;young&rdquo;, whatever that may mean, but in that
            dark period of time, I was starting to face my own &ldquo;getting
            older&rdquo;, facing my own mortality in a way &mdash; something you
            would probably not expect from a 22-year old at the time.
          </p>
          <small>
            I was also really alone at times, and then my brain goes for wild
            rides of &ldquo;what if&apos;s&rdquo;...
          </small>
          <p>
            &ldquo;Sehnsucht&apos;s&rdquo; central motive (and I&apos;m sorry
            this is getting a bit heavy, and also relys on understanding some
            German, but you&apos;ll have to anyways for understanding
            what&apos;s to come), is the phrase, or rather set of questions
            &ldquo;Was war? Was ist? Was bleibt?&rdquo; which broadly translates
            to &ldquo;What has been? What is (now)? What remains?&rdquo;.
            It&apos;s somewhat indicative of the questions I asked myself:
            &ldquo;What remains?&rdquo; asks the question I wanted to answer
            when starting out with making music in 2013. Eight years later, I
            started reviewing my work. Had i succeeded in making something
            that&apos;s worth lasting? I honestly can&apos;t tell. But I want it
            to last.
          </p>
          <div>
            <Image
              src="/img/all-things-must-end/2047.jpg"
              width={3024}
              height={1512}
              alt=""
              className="shadow-2xl shadow-neutral-300/10 my-8 border-neutral-50 mx-auto"
            ></Image>
          </div>
          <p>
            In that moment, evaluating my own creation over the past years,
            something sparked the idea that culminated in this album. The idea
            of endings. I saw myself burning out, fading away, silently quitting
            making music. That was a path I did not want to go down on. When I
            announced in late-2021 that Zoomoid would be taking an indefinite
            hiatus, I wasn&apos;t sure if I would be able to come back, to wake
            up again.
          </p>
          <p>But here we are.</p>
        </SG>
      </section>
    </article>
  );
}
