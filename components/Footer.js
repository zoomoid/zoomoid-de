import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Footer() {
  const { data, error } = useSWR("/api/socials", fetcher);
  if (error) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  const socials = data.socials;

  const socialElements = socials.map((s) => (
    <div key={s.title}>
      <a href={s.url} target="_blank" rel="noreferrer">
        {s.title}
      </a>
    </div>
  ));

  return (
    <footer className="py-[6.6vmax] px-[4vw] text-white">
      <div className="xl:max-w-[1800px] mx-auto flex justify-end">
        <div className="lg:w-[75%] w-full md:grid grid-cols-12 font-medium tracking-wide px-4 md:px-0">
          <div className="col-span-9 md:grid grid-cols-9">
            <div className="col-span-3 md:mb-0 mb-4">Zoomoid</div>
            <div className="col-span-6">
              <a className="block" href="https://zoomoid.de">
                https://zoomoid.de
              </a>
              <a className="block" href="mailto:hello@zoomoid.de">
                hello@zoomoid.de
              </a>
              <p>&nbsp;</p>
              <p className="text-sm">
                Made with NextJS, TailwindCSS, and coffee on a cold day
              </p>
              <p className="text-sm">Inspired by Squarespace&apos;s Suhama</p>
            </div>
          </div>
          <div className="col-span-3 md:mt-0 mt-4">{socialElements}</div>
        </div>
      </div>
    </footer>
  );
}
