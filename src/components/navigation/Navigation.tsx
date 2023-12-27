import { type PropsWithChildren } from "react";
import { type NavigationItem } from ".";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/img/logo_bar.png";
export type NavigationProps = PropsWithChildren<{
  elements?: NavigationItem[];
}>;

export default function Navigation({
  elements = [],
  children,
}: NavigationProps) {
  return (
    <header className="text-white px-[4vw] py-[3vw] flex items-center">
      <nav className="flex-wrap flex-grow gap-4 tracking-wide flex justify-between">
        <div className="font-sans text-xl font-semibold">
          <Link href="/" className="h-8 relative">
            <Image
              alt="Zoomoid Logo"
              src="/img/logo_bar.png"
              width={5000}
              height={1319}
              // src={Logo}
              className="h-8 w-auto"
            ></Image>
          </Link>
        </div>
        {children}
      </nav>
    </header>
  );
}
