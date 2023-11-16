import Image from "next/image";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { type Navigation, type WithClassName } from ".";
import Logo from "../../../public/img/logo_bar.png";

type DesktopNavigationProps = WithClassName<
  PropsWithChildren<{
    navigation: Navigation;
  }>
>;

export default function DesktopNavigation({
  navigation,
  className,
}: DesktopNavigationProps) {
  return (
    <nav className={className}>
      <div className="flex-wrap flex-grow gap-4 tracking-wide flex justify-between">
        <div className="font-sans text-xl font-semibold tracking">
          <Link href="/" className="h-8 relative">
            <Image alt="Zoomoid Logo" src={Logo} className="h-8 w-auto"></Image>
          </Link>
        </div>
        <div className="flex gap-x-4">
          {navigation.map((element) => (
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
