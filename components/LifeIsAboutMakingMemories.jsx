import Image from "next/future/image";
import liamm from "public/img/covers/liamm.jpg";
import liamm_banner_vectorized from "public/img/assets/liamm-banner-vectorized.svg"
 
export default function LifeIsAboutMakingMemories() {
  return (
    <section id="life-is-about-making-memories" className="bg-neutral-200 text-neutral-800 py-32 relative">
      <div className="absolute right-0 transform -translate-x-20 -rotate-45 scale-[3] opacity-30">
        <Image src={liamm_banner_vectorized}></Image>
      </div>
      <div className="container max-w-screen-2xl md:grid grid-cols-2 gap-8">
        <div>
          <h2 className="font-sans font-semibold uppercase text-6xl my-4">
            “Life Is About Making Memories”
          </h2>
          <p className="text-2xl leading-normal">
            “Life Is About Making Memories” is Zoomoid&apos;s first proper album
            release. It features 11 tracks, a proper intro and outro, and tries
            to hit those nostalgia notes, with tracks thematically and sonically
            covering video games, movies, tv series, and moments from childhood
            in the early 2000s, when things were simpler and he had to care
            less.
          </p>
          <div className="my-16">
            <span className="block my-4 font-sans uppercase">Cover Image</span>
            <Image className="" src={liamm}></Image>
          </div>
        </div>
        <div>
          <h3 className="font-sans text-2xl font-semibold tracking-wide uppercase mt-8">Tracks</h3>
          <ol>
            
          </ol>
        </div>
      </div>
    </section>
  );
}
