import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function DesktopNavigation(props) {
  const nav = props.navigation;

  return (
    <header
      className={
        props.className +
        " " +
        "max-w-screen-2xl container py-2 hidden md:flex absolute top-0 left-0 right-0 z-50"
      }
    >
      <div className="flex flex-grow items-center px-4 md:px-0">
        <div className="font-semibold text-2xl tracking font-sans">
          <Link href="/">Zoomoid</Link>
        </div>
        <div className="flex-grow flex justify-end"></div>
        <nav className="flex-wrap gap-16 tracking-wide flex">
          {nav.map((action) => (
            <div
              key={action.title}
              className="font-sans font-semibold text-sm uppercase"
            >
              <Link href={action.url} passHref={true}>
                <a rel="noreferrer">
                  {action.title}
                </a>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

function MobileNavigation(props) {
  const nav = props.navigation;
  const mobileNav = nav.map((action) => (
    <div key={action.title} className="font-sans mb-2">
      <a href={action.url} target="_blank" rel="noreferrer">
        {action.title}
      </a>
    </div>
  ));

  const [showNav, setShowNav] = useState(false);

  return (
    <header
      className={
        props.className +
        " " +
        "container max-w-screen-2xl py-2 md:hidden absolute top-0 left-0 right-0 z-50"
      }
    >
      <div className="flex items-center">
        <div className="font-semibold text-2xl tracking font-sans">
          <Link href="/">Zoomoid</Link>
        </div>
        <div className="flex-grow flex justify-end">
          <button className="leading-[0px]" onClick={() => setShowNav(true)}>
            <i className="material-icons-sharp text-2xl">menu</i>
          </button>
        </div>
      </div>
      {showNav && (
        <div
          className={
            props.background +
            " " +
            "fixed backdrop-blur-3xl top-0 left-0 bottom-0 right-0 z-50 h-screen w-screen"
          }
        >
          <div className="container h-full py-2">
            <div className="flex">
              <div className="font-semibold text-2xl tracking font-sans">
                <Link href="/">Zoomoid</Link>
              </div>
              <div className="flex-grow flex justify-end">
                <button
                  className="leading-[0px]"
                  type="button"
                  onClick={() => setShowNav(false)}
                >
                  <i className="material-icons-sharp text-2xl">close</i>
                </button>
              </div>
            </div>
            <nav className="flex flex-col h-full mt-2 border-t border-neutral-800 pt-2">
              {mobileNav}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Navigation(props) {
  const { data, error } = useSWR("/api/navigation", fetcher);

  if (error)
    return (
      <header>
        <></>
      </header>
    );
  if (!data) return <header></header>;

  return (
    <>
      <DesktopNavigation
        className={props.className}
        navigation={data}
      ></DesktopNavigation>
      <MobileNavigation
        className={props.className}
        background={props.background}
        navigation={data}
      ></MobileNavigation>
    </>
  );
}
