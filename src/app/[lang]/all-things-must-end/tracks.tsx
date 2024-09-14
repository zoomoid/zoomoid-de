import { Track } from "./Track";
import { leadingZeroes } from "./utils";

const tracksEN: Track[] = [
  {
    title: "All That Could Have Been",
    description: (
      <>
        <p>
          This is where it all begins. The introduction. The thought of all that
          could have been. That title sets up everything that is to follow from
          here. All those possible outcomes...
        </p>
        <p>
          <q>All That Could Have Been</q> is an homage to all those intros to
          albums I&apos;ve written &mdash; something that I always thought I was
          rather good at.
        </p>
        <p>
          For just a moment in the beginning of 2023, I felt so amazing.
          Floating above the clouds is an incredible feeling.
        </p>
        <p>
          All those endorphines pushed me through the first months of the year.
          They would fade too quickly...
        </p>
      </>
    ),
  },
  {
    title: "Nur Für Einen Augenblick",
    description: (
      <>
        <p>
          ...and in the blink of an eye, I was back in the deep dark hole. All
          that came crashing down. It was never built to last. Time flew by and
          I found myself back in old habits.
        </p>
        <p>
          <q>Nur Für Einen Augenblick</q> is older than these experiences
          though. It was originally written back in 2022, on a rare evening of
          inspiration and creativity. It had many different working titles
          throughout its design period: <q>What&apos;s Next</q> was one of them,
          and I think it already captures the spirit of the entire album in some
          sense.
        </p>
        <p>
          It&apos;s an uplifting kind of track, in its core a Drum &amp; Bass
          song that heavily leans into orchestral music (which is where most of
          the instruments usually belong). It&apos;s inspired by the works of
          artists like Keeno and Etherwood.
        </p>
      </>
    ),
  },
  {
    title: "Ein Tag Im April (Interlude)",
    description: (
      <>
        <p>
          <q>Ein Tag Im April</q>, or <q>a day in April</q> spans a bridge
          between <q>Nur Für Einen Augenblick</q> and{" "}
          <q>Angst vor der Zukunft</q>. It&apos;s a wild ride, an experience,
          like a day in my life in that particular month.
        </p>
        <p>
          Between ups and downs, between running 21 kilometers on a random
          saturday in pouring rain for the sheer reason of feeling the
          runner&apos;s high, feeling weightless, feeling so much, and crashing
          down completely while in Amsterdam at a conference.
        </p>
        <p>
          It&apos;s also more than just a single day. A day became the
          representation of the entire mood I went through in April of 2023. It
          was a ride through some of the most euphoric and also crushing times.
        </p>
        <p>
          The sonic atmosphere of this track is comprised of vast reverbs,
          familiar sounds from previous Zoomoid releases, heavily distorted and
          modulated to fade into <q>Angst vor der Zukunft</q>.
        </p>
      </>
    ),
  },
  {
    title: "Angst vor der Zukunft",
    description: (
      <>
        <p>
          <q>Angst vor der Zukunft</q> is one of the protagonists of the album.{" "}
          <q>Afraid of the future</q> characterizes what I felt over the last
          year. Both in the short term and in the long term I&apos;m not sure
          where things are going. Maybe that&apos;s not a bad thing. Maybe it
          is. I don&apos;t know.
        </p>
        <p>
          <q>Angst vor der Zukunft</q> also digs into the grasp and
          understanding of time, albeit, entirely subjective. I feel like time
          is running out. Not for one particular thing. Just in general. Time is
          running out... &ldquo;Wie kann man Zeit haben wenn sie eindeutig dich
          hat&rdquo.
        </p>
        <p>
          <q>Angst vor der Zukunft</q> is referential to some other important
          Zoomoid releases. Its roots go back to tracks like <q>Wild World</q>,
          the softer side of <q>Voyager</q>, but most importantly{" "}
          <q>Shades of Yellow</q>. The motive of both tracks is the same, both
          circle around the central quote from <q>Dark</q>, but this time,
          it&apos;s me saying the words, as if this would give them more
          gravity. The break even uses the same instruments as the original,{" "}
          <q>Shades of Yellow</q>, even though slightly adapted to fit the rest
          of the track.
        </p>
      </>
    ),
  },
  {
    title: "Outer Space (Reprise)",
    description: (
      <>
        <p>
          <q>Angst vor der Zukunft</q> bridges over into another reworked
          Zoomoid track, <q>Outer Space</q>. <q>Outer Space</q> was originally
          released on the Extended Edition of
          <q>Eigenräume</q>. It was a Techno track, but a melodic one, that
          would have also perfectly fitted onto <q>Voyager</q>. It was later
          remastered and made into a longer mix version on the{" "}
          <q>301 Permanently Moving</q> EP.
        </p>
        <p>
          In 2021 I released <q>Sehnsucht</q>, which was entirely acoustic,
          heavily relying on the softness of Felt Instrument&apos;s <b>Lekko</b>{" "}
          piano. Its sound has a level of intimacy that inspired me to remixing
          other Zoomoid tracks with those softer instruments into warm, ambient,
          and cozy versions. I&apos;ve been sitting on this remix for a while
          now, the project file almost got lost between different devices and
          setups. Now it get&apos;s to see the world, as a reprise of all the
          great Zoomoid tracks that lay in the past.
        </p>
      </>
    ),
  },
  {
    title: "Illusions",
    description: (
      <>
        <p>
          <q>Illusions</q> is a track I wrote over the course of a weekend. I
          started out on a friday evening with an idea for something that got
          inspired by previous track such as the &ldquo;Im Schatten der
          Nacht&rdquo; EP, <q>Voyager</q> tracks and more. By sunday afternoon,
          I had a fully-arranged and mixed track.
        </p>
        <p>
          When the drums fade away in the middle part of the track to reveal the
          gigantic space of synthesizers where, just for a moment, you can close
          your eyes, dream of a distant, empty, resonant space, you can maybe
          understand where the track gets its name from.
        </p>
        <p>
          And when the drums come back they take you back to reality, back to
          the apex of the rollercoaster that is life, down into a valley of
          loudness and impressions and emotions.
        </p>
        <p>
          <q>Illusions</q> would be perfectly fine on its own, but in the
          context of this album, it blooms, it provides a five-minute escape
          into the time and space of <q>Im Schatten der Nacht</q>.
        </p>
      </>
    ),
  },
  {
    title: "Delay (Long Version)",
    description: (
      <>
        <p>
          Talking about reworking, remixing, remastering older Zoomoid releases,
          <q>Delay</q> from <q>Public Transportation</q> always seemed a bit
          short to me. Its length on the original EP is fine, all other tracks
          fit together, but there was more for <q>Delay</q>.
        </p>
        <p>
          In the same way that <q>Outer Space</q> in this album&apos;s form
          existed way before the album, the <q>Long Version</q> of <q>Delay</q>{" "}
          existed in a prototype form for more than two years before I started
          working on this album. I considered releasing it as a single, but that
          never seemed right to do. And so, when time came to find tracks that
          captured my spirit, skill, and sound, the characteristics of Zoomoid,{" "}
          <q>Delay</q> filled that spot perfectly.
        </p>
        <p>
          It&apos;s not just an longer version of the original though. I
          recorded some new elements, like a lot of guitars, for both lead
          elements, and ambience, and it gives the track a special atmosphere of
          almost being <q>real instruments</q>. Also, the drums got a complete
          make-over, which for a Drum &amp; Bass track, is pretty much an
          entirely new track...
        </p>
        <p>
          <q>Delay</q> is not the last reference to &ldquo;Public
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
          How can I even describe <q>Maybe Someday</q>? Maybe you remember my
          attempt at writing a love song from the biography above &mdash; If you
          didn&apos;t read that, no worries! &mdash; well this is it. This is my
          final attempt at it, I guess. Is it though? I&apos;m not sure. Could
          be. Could also not be. Who knows. While I try to figure that out,
          listen to it, maybe you can figure it out!
        </p>
        <p>
          It is, in essence, again an attempt to figure out how my perception of
          time works, but also so much more. It&apos;s a declaration of
          surrender to time, where I&apos;m not sure if I&apos;ll ever have the
          time and, more importantly, timing, to say all the things I want to
          say, do all the things I want to do. I know for a fact that I will
          not... but maybe someday, if everything has been figured out, the
          stars align, and I have the courage... then maybe someday...
        </p>
        <p>
          And maybe it&apos;s also a song about grief. There&apos;s really alot
          I could interpret into the track, and I think, that&apos;s some of its
          beauty.
        </p>
        <p>
          Of all of them, the track <q>Maybe Someday</q> is probably my
          favourite track. Possibly because it&apos;s the most real, makes me
          feel the most most vulnerable and was written last; it captures that
          emotion that arise when you finally finalise something, the kind of
          feeling of <q>coming home</q>.
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
          <q>Window of Opportunity</q> picks up on those topics from the
          previous track, where I&apos;m not sure if I&apos;ll ever be at the
          right spot at the right time and have the courage and strength to do
          the right things (what&apos;s right is clearly subjective to the
          situation). This idea of <b>missing the window of opportunity</b> has
          become a principle of my skewed life philosophy, that, no matter what,
          I will always miss it, that I&apos;m doomed to...
        </p>
        <p>
          I wanted to make a track about this for at least as long as{" "}
          <q>Sehnsucht</q>, and in a sense, I already did: <q>Türen</q> stems
          from a similar idea, that doors close before I have the opportunity to
          enter them. The idea comes from Kafka&apos;s <q>Before the Law</q>,
          albeit, much transferred, and the title&apos;s interpretation can be
          more optimistic, when considering that new doors also may open...
        </p>
        <p>
          <q>Window of Opportunity</q> borrows its sound design from
          <q>Sehnsucht</q>, which is only reasonable, considering the
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
          still think that <q>Worlds</q>, which included &ldquo;Sad
          Machine&rdquo; is one of best album ever made, and having passed on
          the opportunity to see him perform it live is one of those{" "}
          <b>Windows of Opportunity</b> that I&apos;ve missed in life.
        </p>
      </>
    ),
  },
  {
    title: "Lazarus",
    description: (
      <>
        <p>
          With <q>Lazarus</q> starts the transition away from what Zoomoid was
          into what Zoomoid has become. The vibe shifts away from referencing
          and deriving music from existing work, into new, uncharted terrories.
        </p>
        <p>
          <q>Lazarus</q> starts with tragic strings and, one last time, using
          that tune-in sample of the orchestra that already was in{" "}
          <q>Shades of Yellow</q> and <q>Ein Tag im April</q>. The almost
          wailing piano melody brings down the track into looming, scary
          space...
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
          <q>Rebirth</q> is the logical consequence of <q>Lazarus</q>. For the
          longest time during the creation of the album, the tracks were just
          one, named <q>Lazarus/Rebirth</q>. They were only split up towards the
          end of mastering, to bring the number of tracks up to 15 (and also for
          me to write about each part individually here).
        </p>
        <p>
          <q>Rebirth</q> is what&apos;s on the other side of that accident, that
          horrifying moment, that life-changing experience.
        </p>
        <p>
          It resolves into a sonic space of synthesizers and arppegios that
          evolves into a crushing, distorted mood, where only a heartbeat is
          left.
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
          Time&rdquo;. This track had many names throughout its way to release.
          It was called <q>Leaving</q>, <q>Departure</q>, all things related to
          the central motive, a slow, but driving melody that envelopes the
          announcement sample from a train journey. This was the motive of{" "}
          <q>Public Transportation</q> and this track,{" "}
          <q>Anywhere Else At Any Other Time</q>, waves this EP goodbye at the
          train&apos;s platform.
        </p>
        <p>
          I like to imagine that the train takes me somewhere far away, maybe to
          the sea, to the beach, to a place I can only imagine, not remember...
        </p>
      </>
    ),
  },
  {
    title: "Echoes of You",
    description: (
      <>
        <p>
          <q>Echoes of You</q> starts exactly there, in a cottage at the beach.
          The soundscape at the start sets up a journey into deep atmospheric
          sounds with lots of echo and reverb.
        </p>
        <p>
          I wrote the song the week my grandfather died. He probably had the
          most artistical influence on my own work than anyone else combined.
          Due to his deteriorating hearing, he was unable to experience my
          music. It hurts knowing I never had the opportunity to show him.
        </p>
        <p>
          I&apos;d like to think that some day I can show it to him. Maybe
          someday.
        </p>
        <p>
          As the song ends, a door opens, and the listener is greeted by sounds
          of waves and sea gulls. We are now approaching the final moments, the
          last chapter.
        </p>
      </>
    ),
  },
  {
    title: "The Last Chapter",
    description: (
      <>
        <p>
          <q>The Last Chapter</q> is exactly that: the last chapter. The tragedy
          of all the previous tracks, all those memories, experiences, emotions,
          they culminate in a final, soft, gloomy track about what has been,
          what is, and what will be.
        </p>
        <p>
          The song brings everything down, into just a few, slow moving chamber
          strings, the soft piano and then nothing.
        </p>
        <p>
          Into that silence follows a monologue, my monologue, the last chapter
          of Zoomoid. It&apos;s an admission that all things must end, and that
          we have reached that point now, where I have to leave Zoomoid behind.
        </p>
      </>
    ),
  },
  {
    title: "All Things Must End",
    description: (
      <>
        <p>
          And with that, we rise one last time, for old time&apos;s sake, into{" "}
          <q>All Things Must End</q>, the album&apos;s title track and also the
          final Zoomoid track.
        </p>
        <p>
          I was long unsure of where to place this track. I had it written
          before most of the other tracks on the album. And when all the puzzle
          pieces finally joined, it found its place right at the end.
        </p>
        <p>
          One last time, gathering all the energy, for a final, euphoric,
          powerful stride towards what Zoomoid is and was and will be.
        </p>
        <p>
          And with that triumphal outro, the dramatic violin vibrato and the
          swelling of the trombones, the album comes to an end. This is it. The
          final tone. As it resonates away and leaves you in silence, remember
          everything that was. Just for a brief moment... and try to imagine
          what could have been...
        </p>
      </>
    ),
  },
];

const tracksDE: Track[] = [
  {
    title: "All That Could Have Been",
    description: (
      <>
        <p>
          Hier beginnt alles. Die Einleitung... Der Gedanke an all das was hätte
          sein können. Dieser Titel baut das auf, was von hier an folgt. All die
          Möglichkeiten...
        </p>
        <p>
          <q>All That Could Have Been</q> ist eine Homage an all die Intros für
          Alben die ich geschrieben habe, etwas von dem ich immer dachte, dass
          ich ziemlich gut drin bin.
        </p>
        <p>
          Nur für einen Moment am Anfang von 2023 habe ich mich großartig
          gefühlt. Über den Wolken zu schweben hat sich unglaublich angefühlt.
        </p>
        <p>
          All diese Endorphine haben mich durch die ersten Monate des Jahres
          getragen. Und dann sind sie alle plötzlich verschwunden.
        </p>
      </>
    ),
  },
  {
    title: "Nur Für Einen Augenblick",
    description: (
      <>
        <p>
          ...und nur mit einem einzigen Augenblick war ich wieder in dem tiefen,
          dunklen Loch. Alles stürzte über mir ein. Es war nie für die Ewigkeit
          gebaut. Zeit flog vorbei und ich war wieder zurück in alten
          Gewohnheiten.
        </p>
        <p>
          <q>Nur Für Einen Augenblick</q> ist aber älter als diese Erfahrungen.
          Es wurde ursprünglich 2022 geschrieben, an einem der seltenen Abende
          mit Inspiration und Kreativität. Es hatte viele verschiedene
          Arbeitstitel durch seine Entwurfsperiode: <q>What&apos;s Next</q> war
          einer davon, und ich denke, das fängt bereit den Geist des Albums in
          einem gewissen Sinne ein.
        </p>
        <p>
          Es ist eine Art erhebendes Stück, in seinem Kern ein Drum &amp; Bass
          Track der sich sehr an orchestraler Musik bedient, inspiriert an der
          Musik von Keeno und Etherwood.
        </p>
      </>
    ),
  },
  {
    title: "Ein Tag Im April (Interlude)",
    description: (
      <>
        <p>
          <q>Ein Tag Im April</q> spannt eine Brücke zwischen &bdquo;Nur Für
          Einen Augenblick&ldquo; und <q>Angst vor der Zukunft</q>. Es ist eine
          wilde Reise, eine Erfahrung, eben wie ein Tag in meinem Leben in
          diesem spezifischen Monat.
        </p>
        <p>
          Zwischen Höhen und Tiefen, zwischen einen Halbmarathon an einem
          beliebigen Samstag im strömenden Regen für den einfachen Grund, etwas
          zu fühlen, sich federleicht zu fühlen, so vieles zu fühlen, zu dem
          totalen Kollaps während der Zeit in Amsterdam auf einer Konferenz...
        </p>
        <p>
          Es ist mehr als nur ein einzelner Tag. Ein Tag wurde beschreibend für
          die gesamte Stimmung durch die ich im April 2023 gegangen bin. Es war
          eine Reise durch manche der euphorischsten und zertrümmernsten Zeiten.
        </p>
        <p>
          Die klangliche Atmosphäre dieses Tracks besteht aus ausgedehntem Hall,
          bekannten Sounds von früheren Zoomoid-Veröffentlichungen, stark
          verzerrt und moduliert, um in <q>Angst vor der Zukunft</q>
          überzugehen.
        </p>
      </>
    ),
  },
  {
    title: "Angst vor der Zukunft",
    description: (
      <>
        <p>
          <q>Angst vor der Zukunft</q> ist einer der Protagonisten des Albums.
          Der Titel charakterisiert was ich das Jahr über gefühlt habe, Sowohl
          kurzfristig als auch langfristig. Ich weiß nicht genau wo es hingeht.
          Vielleicht ist das ja keine schlechte Sache. Vielleicht doch. Ich weiß
          es nicht.
        </p>
        <p>
          <q>Angst vor der Zukunft</q> befasst sich auch mit dem Verständnis von
          Zeit, wenn auch vollständig subjektiv. Ich habe das Gefühl, dass mir
          die Zeit davonläuft. Nicht für eine bestimmte Sache. Nur ganz
          allgemein... &bdquo;Wie kann man Zeit haben, wenn sie dich eindeutig
          hat&ldquo;.
        </p>
        <p>
          <q>Angst vor der Zukunft</q> ist ein Verweis auf einige andere
          wichtige Zoomoid-Veröffentlichungen. Seine Wurzeln gehen zurück auf
          Tracks wie <q>Wild World</q>, die sanftere Seite von <q>Voyager</q>,
          vor allem aber auf &bdquo;Shades of Yellow&ldquo;. Das Motiv von
          beiden Tracks ist das gleiche, beide kreisen um das zentrale Zitat aus{" "}
          <q>Dark</q>, aber dieses Mal bin ich es, der die Worte sagt, als ob
          sie dadurch mehr Gewicht bekämen. Der Teil verwendet sogar die
          gleichen Instrumente wie im Original, <q>Shades of Yellow</q>, auch
          wenn wenn auch leicht angepasst, um zum Rest des Tracks zu passen.
        </p>
      </>
    ),
  },
  {
    title: "Outer Space (Reprise)",
    description: (
      <>
        <p>
          <q>Angst vor der Zukunft</q> geht über in einen weiteren
          überarbeiteten Zoomoid-Track, <q>Outer Space</q>. &bdquo;Outer
          Space&ldquo; wurde ursprünglich auf der Extended Edition von
          <q>Eigenräume</q>. Es war ein Techno-Track, aber ein melodischer, der
          auch perfekt auf <q>Voyager</q> gepasst hätte. Er wurde später neu
          gemastert und in einer längeren Mix-Version auf dem Album{" "}
          <q>301 Permanently Moving</q> EP.
        </p>
        <p>
          Im Jahr 2021 veröffentlichte ich <q>Sehnsucht</q>, das vollständig
          akustisch war und sich stark auf die Sanftheit von Felt
          Instrument&apos;s <b>Lekko</b> stützte. Sein Klang hat eine Intimität,
          die mich dazu inspiriert hat, andere Zoomoid-Tracks mit diesen
          weicheren Instrumenten zu warmen und gemütlichen Versionen zu remixen.
          Ich habe schon eine Weile an diesem Remix gesessen, die Projektdatei
          ging fast zwischen verschiedenen Geräten und Setups verloren. Jetzt
          darf er die Welt sehen, als Reprise all der großartigen
          Zoomoid-Tracks, die in der Vergangenheit lagen.
        </p>
      </>
    ),
  },
  {
    title: "Illusions",
    description: (
      <>
        <p>
          <q>Illusions</q> ist ein Stück, das ich im Laufe eines Wochenendes
          geschrieben habe. Ich begann an einem Freitagabend mit einer Idee für
          etwas die von früheren Tracks inspiriert wurde, wie zum Beispiel der{" "}
          <q>Im Schatten der Nacht</q> EP,
          <q>Voyager</q> Tracks und mehr. Am Sonntag Nachmittag hatte ich einen
          fertig arrangierten und abgemischten Track.
        </p>
        <p>
          Wenn das Schlagzeug im Mittelteil des Tracks verklingt und den
          gigantischen Raum von Synthesizern, in dem man für einen Moment die
          Augen schließen und von einem fernen, leeren, resonanten Raum träumen
          kann, kann man vielleicht verstehen, woher der Track seinen Namen hat.
        </p>
        <p>
          Und wenn die Trommeln zurückkommen, bringen sie dich zurück in die
          Realität, zurück zum den Gipfel der Achterbahn, die das Leben ist,
          hinunter in ein Tal der Lautstärke und Eindrücke und Emotionen.
        </p>
        <p>
          <q>Illusions</q> wäre für sich allein genommen völlig in Ordnung, aber
          im Kontext dieses Albums blüht es auf, es bietet eine fünfminütige
          Flucht in die Zeit und den Raum von &bdquo;Im Schatten der
          Nacht&ldquo;.
        </p>
      </>
    ),
  },
  {
    title: "Delay (Long Version)",
    description: (
      <>
        <p>
          Wenn wir schon über die Überarbeitung, den Remix und das Remastering
          älterer Zoomoid-Veröffentlichungen sprechen: <q>Delay</q> von{" "}
          <q>Public Transportation</q> kam mir immer etwas kurz vor. Seine Länge
          auf der Original-EP ist in Ordnung, alle anderen Tracks passen
          zusammen, aber für <q>Delay</q> wäre mehr drin gewesen.
        </p>
        <p>
          Genauso wie <q>Outer Space</q> in der Form dieses Albums lange vor dem
          Album existierte, existierte die <q>Long Version</q> von <q>Delay</q>{" "}
          existierte in einer prototypischen Form für mehr als zwei Jahre, bevor
          ich mit der Arbeit an diesem Album begann. Ich habe überlegt, es als
          Single zu veröffentlichen, aber das schien mir nie das Richtige zu
          sein. Als dann die Zeit kam Tracks zu finden, die meinen Geist, mein
          Können und meinen Sound einfangen, die Eigenschaften von Zoomoid,
          füllte <q>Delay</q> diesen Platz perfekt aus.
        </p>
        <p>
          Es ist aber nicht nur eine längere Version des Originals. Ich habe
          einige neue Elemente aufgenommen, wie zum Beispiel eine Menge
          Gitarren, sowohl für die Lead-Elemente als auch für die Atmosphäre,
          und das gibt dem Stück einen besonderen Vibe. Außerdem wurde das
          Schlagzeug komplett überarbeitet, was einen Drum &amp; Bass-Track so
          ziemlich zu einem völlig neuen Track macht...
        </p>
        <p>
          <q>Delay</q> ist nicht die letzte Referenz auf &bdquo;Public
          Transportation&ldquo;, aber dieser Punkt ist für später reserviert...
        </p>
      </>
    ),
  },
  {
    title: "Maybe Someday",
    description: (
      <>
        <p>
          Wie kann ich <q>Maybe Someday</q> überhaupt beschreiben? Vielleicht
          erinnerst Du dich an meinen Versuch, ein Liebeslied zu schreiben, aus
          der obigen Biographie erinnern &mdash; Wenn Du das nicht gelesen hast,
          keine Sorge! &mdash; nun, dies ist es. Dies ist mein letzter Versuch,
          denke ich. Ist es wirklich ein Liebeslied? Ich bin nicht sicher.
          Könnte sein. Könnte aber auch nicht sein. Wer weiß. Während ich
          versuche herauszufinden, hör es Dir an, vielleicht kannst Du es
          herausfinden!
        </p>
        <p>
          Im Grunde ist es wieder ein Versuch, herauszufinden, wie meine
          Wahrnehmung von Zeit funktioniert, aber auch so viel mehr. Es&apos;ist
          eine Erklärung der Kapitulation vor der Zeit, bei der ich nicht sicher
          bin, ob ich jemals die Zeit und, noch wichtiger, das Timing haben
          werde, um all die Dinge zu sagen, die ich ich sagen möchte, zu tun,
          was ich tun möchte. Ich weiß ganz sicher, dass ich es nicht jetzt tun
          werde können... aber vielleicht eines Tages, wenn alles geklärt ist,
          die und ich den Mut habe... dann vielleicht eines Tages...
        </p>
        <p>
          Und vielleicht ist es auch ein Lied über Trauer. Es gibt wirklich eine
          Menge Dinge, die ich in den Track interpretieren könnte, und ich
          glaube, das ist ein Aspekt der ihn so schön macht.
        </p>
        <p>
          Von allen ist der Track <q>Maybe Someday</q> wahrscheinlich mein
          Lieblingsstück. Möglicherweise, weil er der realste ist, mich am
          verletzlichsten macht und als letztes geschrieben wurde; es fängt die
          Emotionen ein, die entstehen, wenn man etwas endlich abschließt, das
          Art von Gefühl des <q>Heimkommens</q>.
        </p>
      </>
    ),
  },
  {
    title: "Window of Opportunity (Too Late)",
    description: (
      <>
        <p>
          Wir befinden uns jetzt an einem Übergang in der allgemeinen Stimmung
          des Albums. <q>Window of Opportunity</q> greift die Themen des
          vorherigen Tracks auf, in dem ich mir nicht sicher bin, ob ich jemals
          zur richtigen Zeit am richtigen Ort sein werde und den Mut und die
          Kraft habe, das Richtige zu tun (was richtig ist, ist natürlich von
          der Situation abhängig). Diese Vorstellung,{" "}
          <b>die Chance zu verpassen</b>, ist zu einem Prinzip meiner schiefen
          Lebensphilosophie geworden, dass ich sie immer verpassen werde, dass
          ich dazu verdammt bin...
        </p>
        <p>
          Darüber wollte ich schon mindestens so lange einen Track machen wie{" "}
          <q>Sehnsucht</q>, und in gewisser Weise habe ich das auch schon getan:{" "}
          <q>Türen</q> entspringt einer ähnlichen Idee, dass sich Türen
          schließen, bevor ich die Gelegenheit habe, sie zu betreten. Der
          Gedanke stammt aus Kafka&apos;s <q>Vor dem Gesetz</q>, wenn auch stark
          übertragen, und die Interpretation des Titels kann optimistischer
          sein, wenn man bedenkt dass sich auch neue Türen öffnen können...
        </p>
        <p>
          <q>Window of Opportunity</q> leiht sich das Sounddesign von{" "}
          <q>Sehnsucht</q>, was in Anbetracht der Ähnlichkeiten der Motive nur
          vernünftig ist. Gegen Ende gehen die Klänge in eine Kombination aus
          einem{" "}
          <a
            href="https://de.wikipedia.org/wiki/Mellotron"
            className="underline"
          >
            Mellotron
          </a>{" "}
          und der Plastik-Harfe aus Porter Robinsons <q>Sad Machine</q>
          über, auch seine Melodie auf den letzten Tönen. Ich bin immer noch der
          Überzeugung, dass <q>Worlds</q>, das auch <q>Sad Machine</q>
          enthielt, eines der besten Album ist, das je gemacht wurde, und dass
          ich die Gelegenheit verpasst habe, ihn live zu sehen, ist eine dieser
          Gelegenheiten, die ich im Leben verpasst habe.
        </p>
      </>
    ),
  },
  {
    title: "Lazarus",
    description: (
      <>
        <p>
          Mit <q>Lazarus</q> beginnt der Übergang weg von dem, was Zoomoid war,
          zu dem, was Zoomoid geworden ist. Der Vibe bewegt sich weg von
          Referenzierung und Ableitung von Musik aus bereits existierenden
          Werken, in neue, unerforschte Terrore.
        </p>
        <p>
          <q>Lazarus</q> beginnt mit tragischen Streichern und, ein letztes Mal,
          mit dem Orchester-Sample, das schon in <q>Shades of Yellow</q>
          und <q>Ein Tag im April</q> aufgetaucht ist. Die fast wimmernde
          Klaviermelodie bringt den Track in einen bedrohlichen, unheimlichen
          Raum...
        </p>
        <p>
          Der Unfall im Jahr 2013, bei dem ich zwei Wochen lang auf der
          Intensivstation lag, ist die unmittelbare Inspiration für diesen Track
          (und auch für den nächsten).
        </p>
      </>
    ),
  },
  {
    title: "Rebirth",
    description: (
      <>
        <p>
          <q>Rebirth</q> ist die logische Folge von
          <q>Lazarus</q>. Für die längste Zeit während der Entstehung des Album
          waren die beiden Tracks ein einziger, der den Namen{" "}
          <q>Lazarus/Rebirth</q> trug. Erst gegen Ende des Masterings wurden sie
          aufgeteilt, um die Anzahl der Tracks auf 15 zu erhöhen (und auch,
          damit ich hier über jeden Teil einzeln schreiben einzeln zu
          schreiben).
        </p>
        <p>
          <q>Rebirth</q> ist das, was auf der anderen Seite dieses Unfall,
          diesem schrecklichen Moment, dieser lebensverändernden Erfahrung ist.
        </p>
        <p>
          Es löst sich auf in einen Klangraum aus Synthesizern und Arppegios,
          der sich zu einer erdrückenden, verzerrten Stimmung entwickelt, in der
          nur noch ein Herzschlag übrig bleibt.
        </p>
      </>
    ),
  },
  {
    title: "Anywhere Else At Any Other Time",
    description: (
      <>
        <p>
          Dieser Herzschlag setzt sich in <q>Anywhere Else At Any Other Time</q>
          . Dieses Stück hatte auf seinem Weg zur Veröffentlichung viele Namen.
          Er wurde <q>Leaving</q>, <q>Departure</q>
          genannt, alles Dinge, die sich auf das zentrale Motiv beziehen, eine
          langsame, aber treibende Melodie, die die Ansage einer Zugfahrt
          umhüllt. Dies ist das Motiv von <q>Public Transportation</q>
          und dieser Track, <q>Anywhere Else At Any Other Time</q>, winkt diese
          EP zum Abschied am Bahnsteig des Zuges.
        </p>
        <p>
          Ich stelle mir gerne vor, dass der Zug mich irgendwo weit weg bringt,
          vielleicht ans Meer, an den Strand, an einen Ort, den ich mir nur
          vorstellen kann, an den ich mich nicht erinnere...
        </p>
      </>
    ),
  },
  {
    title: "Echoes of You",
    description: (
      <>
        <p>
          <q>Echoes of You</q> beginnt genau dort, in einer Hütte am Strand. Die
          Geräuschkulisse zu Beginn ist der Auftakt zu einer Reise in tiefe
          atmosphärischen Klängen mit viel Echo und Nachhall.
        </p>
        <p>
          Ich habe das Lied in der Woche geschrieben, in der mein Großvater
          gestorben ist. Er hatte wahrscheinlich den größten künstlerischen
          Einfluss auf meine Arbeit als jeder andere. Aufgrund seines
          nachlassenden Gehörs war er nicht in der Lage, meine Musik zu erleben.
          Es schmerzt zu wissen, dass ich nie die Gelegenheit hatte, sie ihm zu
          zeigen.
        </p>
        <p>
          Ich würde gerne glauben, dass ich es ihm eines Tages zeigen kann.
          Vielleicht eines Tages.
        </p>
        <p>
          Am Ende des Liedes öffnet sich eine Tür, und der Zuhörer wird von
          Wellen und Möwen begrüßt. von Wellen und Seemöwen. Wir nähern uns nun
          den letzten Momenten, dem letzte Kapitel.
        </p>
      </>
    ),
  },
  {
    title: "The Last Chapter",
    description: (
      <>
        <p>
          <q>The Last Chapter</q> ist genau das: das letzte Kapitel. Die
          Tragödie all der vorangegangenen Tracks, all der Erinnerungen,
          Erfahrungen und Emotionen, sie kulminieren in einem letzten, sanften,
          düsteren Track über das, was gewesen ist was war, was ist, und was
          sein wird.
        </p>
        <p>
          Das Lied reduziert alles auf wenige, sich langsam bewegende
          Kammersaiten Streicher, das sanfte Klavier und dann nichts mehr.
        </p>
        <p>
          In diese Stille hinein folgt ein Monolog, mein Monolog, das letzte
          Kapitel von Zoomoid. Es ist ein Eingeständnis, dass alle Dinge enden
          müssen und dass wir nun den Punkt erreicht haben, an dem ich Zoomoid
          hinter mir lassen muss.
        </p>
      </>
    ),
  },
  {
    title: "All Things Must End",
    description: (
      <>
        <p>
          Und damit erheben wir uns ein letztes Mal, um der alten Zeiten willen,
          in <q>All Things Must End</q>, dem Titeltrack des Albums&apos;und auch
          der letzte Zoomoid-Track.
        </p>
        <p>
          Ich war lange unsicher, wo ich dieses Stück platzieren sollte. Ich
          hatte ihn vor den meisten anderen Stücken des Albums geschrieben. Und
          als sich alle Puzzleteile endlich zusammenfügten, fand er seinen Platz
          ganz am Ende.
        </p>
        <p>
          Ein letztes Mal die ganze Energie sammeln, für einen letzten,
          euphorischen, kraftvollen Schritt zu dem, was Zoomoid ist, war und
          sein wird.
        </p>
        <p>
          Und mit diesem triumphalen Outro, dem dramatischen Geigenvibrato und
          dem Anschwellen der Posaunen ist das Album zu Ende. Das war&apos;s.
          Der letzte Ton. Wenn er verklingt und dich in der Stille zurücklässt,
          erinnere dich an an alles, was gewesen ist. Nur für einen kurzen
          Moment... und versuch Dir vorzustellen was hätte sein können...
        </p>
      </>
    ),
  },
];

const audioPrefix = "https://files.zoomoid.de/all-things-must-end/mp3";

const augmentAudioURI = (t: Track, i: number) => {
  const trackNumber = leadingZeroes(i + 1);
  const filename = `${trackNumber}_${t.title}`;

  return {
    ...t,
    audioURI: `${audioPrefix}/${filename}.mp3`,
  };
};

const tracks = {
  DE: tracksDE.map(augmentAudioURI),
  EN: tracksEN.map(augmentAudioURI),
};

export default tracks;
