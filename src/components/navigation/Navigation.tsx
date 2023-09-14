import Link from "next/link"
import useSWR from "swr"
import MobileNavigation from "./MobileNavigation"
import DesktopNavigation from "./DesktopNavigation"
import { type Navigation } from "."
import { type PropsWithChildren } from "react"

export type NavigationProps = PropsWithChildren<{
  navigation: Navigation
}>

export default function Navigation({ navigation }: NavigationProps) {
  return (
    <header className="text-white px-[4vw] py-[3vw]">
      <div className="flex items-center">
        <div className="flex-grow">
          <DesktopNavigation className="hidden md:flex" navigation={navigation}></DesktopNavigation>
          <MobileNavigation className="md:hidden" navigation={navigation}></MobileNavigation>
        </div>
      </div>
    </header>
  );
}