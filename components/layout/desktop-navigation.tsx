"use client";
import Link from "next/link";

export default function DesktopNavigation({
  navigation,
  textColor
}: {
  navigation: {
    title: string,
    url: string,
  }[],
  textColor: string
}) {
  return (
    <div
      className={`${textColor} fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-md border-b border-white border-opacity-10 transition-colors`}
    >
      <div className="max-w-screen-2xl container py-6 hidden md:flex flex-grow items-center px-4 md:px-0">
        <div className="font-semibold text-2xl tracking font-sans">
          <Link href="/">Zoomoid</Link>
        </div>
        <div className="flex-grow flex justify-end" />
        <nav className="flex-wrap gap-16 tracking-wide flex">
          {navigation.map((action) => (
            <div
              key={action.title}
              className="font-sans font-semibold text-sm uppercase"
            >
              <Link href={action.url} passHref={true} rel="noreferrer">
                {action.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
