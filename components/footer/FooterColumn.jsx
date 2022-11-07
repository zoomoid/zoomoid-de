import Link from "next/link";

export default function FooterColumn(props) {
  const title = props.title ?? "";
  const elements = props.elements ?? [];
  return (
    <div className="">
      <div className="uppercase mb-2 text-xs tracking-wide font-medium">
        {title}
      </div>
      {elements.map(({ url, title, external }, i) => (
        <div
          key={"footer-" + title + "-" + i}
          className="cursor-pointer hover:text-neutral-300"
        >
          <Link href={url} passHref={true}>
            <span className="">
              {title}
              {external ? (
                <i className="material-icons-sharp text-sm pl-1">north_east</i>
              ) : (
                ""
              )}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
