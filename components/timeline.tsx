import Link from "next/link";

function TimelineElements() {
  const data = [
    {
      title: "Life Is About Making Memories",
      date: "September 22, 2018",
      url: "/work/life-is-about-making-memories",
      topics: ["Nostalgia", "LoFi", "Album"],
    },
    {
      title: "Eigenräume",
      date: "May 14, 2019",
      url: "/work/eigenräume-standard-edition",
      topics: ["Techno", "Album"],
    },
    {
      title: "Eigenräume (Extended Edition)",
      date: "September 09, 2019",
      url: "/work/eigenräume-extended-edition",
      topics: ["Techno", "Album"],
    },
    {
      title: "Public Transportation EP",
      date: "November 1, 2019",
      url: "/work/public-transportation",
      topics: ["LoFi", "HipHop"],
    },
    {
      title: "301 Permanently Moving",
      date: "December 13, 2019",
      url: "/work/301-permanently-moving",
      topics: ["Techno", "EP"],
    },
    {
      title: "Shades Of Yellow",
      date: "May 1, 2020",
      url: "/work/shades-of-yellow",
      topics: ["Electronic", "EP"],
    },
    {
      title: "Voyager",
      date: "October 30, 2020",
      url: "/work/voyager",
      topics: ["Techno", "Album", "Space"],
    },
    {
      title: "Sehnsucht",
      date: "March 19, 2021",
      url: "/work/sehnsucht",
      topics: ["Melancholia", "EP", "Feelings"],
    },
    {
      title: "Im Schatten Der Nacht",
      date: "December 17, 2021",
      url: "/work/im-schatten-der-nacht",
      topics: ["Techno", "EP"],
    },
  ];

  const highlights = data.map(({ title, url, topics, date }) => {
    return (
      <div key={title} className="mb-8 font-sans">
        <Link href={url}><h5 className="cursor-pointer">{title}</h5></Link>
        <div className="flex items-center gap-1 text-xs md:text-normal">
          <time className="cursor-pointer text-opacity-50 text-black">
            {date}
          </time>
          <span className="text-opacity-50 text-black">&mdash;</span>
          <div className="flex gap-x-1">
            {topics.map((t) => (
              <span key={t} className="inline-block cursor-pointer text-opacity-50 text-black hover:text-opacity-100 after:content-[',_'] last:after:content-[]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {highlights}
    </>
  );
}

export default function Timeline() {
  return (
    <section className="md:grid grid-cols-2 mt-16 mb-8 pt-8">
      <p className="text-2xl mb-8 font-serif">Timeline</p>
      <div className="leading-normal">
        <TimelineElements />
        <div className="text-black hover:text-opacity-60 text-xs sm:text-sm py-2 inline-block mt-4 font-sans font-medium tracking-wide uppercase cursor-pointer">
          <Link href="/work" passHref={true}>
            <div className="flex items-center">
              <span>View all Releases</span>
              <i className="material-icons-sharp">keyboard_arrow_right</i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
