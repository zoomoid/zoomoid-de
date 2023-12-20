import {
  AnimationContainer as C,
  StaggeringAnimationContainer as SC,
} from "./AnimationContainer";

export default function Start() {
  return (
    <section className="relative z-0 transform mt-32 max-w-screen-md mx-auto min-h-[60vh] mb-32">
      <h1 className="text-7xl mt-64 mb-32">
        <SC
          animationName="slide-up"
          interval="250ms"
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
        </SC>
      </h1>
      <div className="text-xl space-y-4">
        <C animationName="slide-left" animationDelay="2s">
          <p className="">
            It&apos;s been a rough couple of months <b>(and years)</b>...
          </p>
        </C>
        <C animationName="slide-right" animationDelay="2.5s">
          <p className="">
            We&apos;ve come <b>a long way</b>. Now it&apos;s time to do{" "}
            <b>the final steps.</b>
          </p>
        </C>
        <C animationName="slide-left" animationDelay="3s">
          <p className="">
            This is it: The <b>final</b> Zoomoid <b>album</b>.
          </p>
        </C>
        <C animationName="slide-right" animationDelay="3.5s">
          <p className="">
            Let&apos;s start at the <b>beginning</b>...
          </p>
        </C>
        <C animationName="slide-left" animationDelay="4s">
          <p>
            Before we get into what <b>this</b> is, I need to explain a couple
            of things. Things that lead up to this moment, and things that paved
            the way to where we are now.
          </p>
        </C>
      </div>
    </section>
  );
}
