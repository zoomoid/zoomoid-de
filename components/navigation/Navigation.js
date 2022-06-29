import Link from "next/link"
import useSWR from "swr"
import MobileNavigation from "./MobileNavigation"
import DesktopNavigation from "./DesktopNavigation"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Navigation() {

  const {data, error} = useSWR('/api/navigation', fetcher)

  if (error) return (<header><span>Failed to load navigation</span></header>)
  if (!data) return (<header></header>)


  const nav = data.navigation

  return (
    <header className="text-white px-[4vw] py-[3vw]">
      <div className="flex items-center px-4 md:px-0">
        <div className="font-semibold text-3xl tracking font-sans">
          <Link href="/">Zoomoid</Link>
        </div>
        <div className="flex-grow flex justify-end">
          <DesktopNavigation navigation={nav}></DesktopNavigation>
          <MobileNavigation navigation={nav}></MobileNavigation>
        </div>
      </div>
    </header>
  );
}