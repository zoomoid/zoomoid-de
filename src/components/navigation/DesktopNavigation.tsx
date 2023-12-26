import Image from "next/image";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { type NavigationItem } from ".";
import Logo from "/public/img/logo_bar.png";

type DesktopNavigationProps = PropsWithChildren<{
  items: NavigationItem[];
  className?: string;
}>;

export default function DesktopNavigation({
  items,
  className,
}: DesktopNavigationProps) {
  return (
    <nav className={className}>
      <div className="flex-wrap flex-grow gap-4 tracking-wide flex justify-between">
        <div className="font-sans text-xl font-semibold">
          <Link href="/" className="h-8 relative">
            <Image alt="Zoomoid Logo" src={Logo} className="h-8 w-auto"></Image>
          </Link>
        </div>
        <div className="flex gap-x-4">
          {items.map((element) => (
            <div key={element.title}>
              <a href={element.url} target="_blank" rel="noreferrer">
                {element.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
