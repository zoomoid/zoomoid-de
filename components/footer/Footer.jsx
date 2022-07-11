import Image from "next/future/image";
import Link from "next/link";
import useSWR from "swr";
import FooterColumn from "./FooterColumn";
import img from "public/img/white.png";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Footer() {
  const { data, error } = useSWR("/api/footer", fetcher);
  if (error) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  return (
    <footer className="bg-neutral-900 text-white pt-8 pb-4">
      <div className="max-w-screen-2xl container">
        <div className="uppercase font-sans font-semibold text-2xl mb-8 cursor-pointer">
          <Link href="/" passHref={true}>
            <a>
              <Image src={img} className="w-40"></Image>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 font-sans mb-8">
          {data.sections.map(({ title, elements }) => (
            <FooterColumn
              key={title}
              title={title}
              elements={elements}
            ></FooterColumn>
          ))}
        </div>
        <p className="font-sans">{data.subtitle}</p>
        <p className="font-sans text-sm text-white text-opacity-50">
          {data.subsubtitle}
        </p>
      </div>
    </footer>
  );
}
