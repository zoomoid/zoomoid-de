import { type PropsWithChildren } from "react"
import { type Navigation } from "."
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

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