import Image from "next/image";

export default function Section(props) {
  const release = props.release;
  const links = release.listen;
  const listenLinks = links.map((l) => (
    <a
      key={l.title}
      href={l.url}
      target="_blank"
      rel="noreferrer"
      className="block text-xl my-4 md:my-0 font-semibold hover:underline"
    >
      {l.title}
    </a>
  ));

  return (
    <article id={release.id} className="bg-neutral-100 text-black">
      <div className="xl:max-w-[1800px] py-[6.6vmax] px-[4vw] mx-auto md:flex justify-end w-full">
        <div className="md:grid grid-cols-12 md:gap-y-4 items-start px-4 md:px-0 lg:w-[75%]">
          <span className="col-span-2 my-2">{release.date}</span>
          <h1
            className="col-span-10 font-semibold leading-none text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans"
            dangerouslySetInnerHTML={{
              __html: release.title,
            }}
          ></h1>
          <div className="col-span-2"></div>
          <div className="col-span-10 relative">
            <div className="lg:max-w-xl max-w-sm md:my-0 my-4 w-full">
              <Image
                src={release.cover.url}
                alt={"Cover of " + release.title}
                width={1500}
                height={1500}
                placeholder="blur"
              ></Image>
            </div>
          </div>
          <div className="col-span-2 my-4 md:my-0 text-2xl md:text-normal font-sans md:font-serif">
            About
          </div>
          <div className="col-span-10">
            <p className="text-xl sm:text-2xl leading-normal xl:max-w-screen-md">
              {release.about}
            </p>
          </div>
          {release.listen && (
            <div className="col-span-2 my-4 md:my-0 text-2xl md:text-normal font-sans md:font-serif">
              Listen
            </div>
          )}
          <div className="col-span-10 md:flex gap-4">{listenLinks}</div>
        </div>
      </div>
    </article>
  );
}
