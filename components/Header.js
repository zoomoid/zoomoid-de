import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Header(props) {
  const [showNav, setShowNav] = useState(false);
  const desktopNav = props.nav.map((action) => (
    <div key={action.title}>
      <a href={action.url} target="_blank">
        {action.title}
      </a>
    </div>
  ));

  const mobileNav = props.nav.map((action) => (
    <div key={action.title} className="px-4 text-center text-2xl my-4">
      <a href={action.url} target="_blank">
        {action.title}
      </a>
    </div>
  ));
  const wrapper = React.createRef();

  return (
    <header className="text-white px-[4vw] py-[3vw]">
      <div className="flex items-center px-4 md:px-0">
        <div className="font-semibold text-3xl tracking font-sans">
          <a href="/">Zoomoid</a>
        </div>
        <div className="flex-grow flex justify-end">
          <nav className="flex-wrap gap-4 tracking-wide hidden md:flex">
            {desktopNav}
          </nav>
          <nav className="md:hidden">
            <button className="leading-[0px]" onClick={() => setShowNav(true)}>
              <i className="material-icons-sharp text-6xl">menu_open</i>
            </button>
            {showNav && (
              <div className="fixed top-0 left-0 bottom-0 right-0 z-50 h-screen w-screen">
                <div className="bg-slate-900 px-[4vw] py-[6.6vmax]  h-full w-full">
                  <button
                    className="absolute top-[4vw] right-[4vw]"
                    type="button"
                    onClick={() => setShowNav(false)}
                  >
                    <i className="material-icons-sharp text-6xl">close</i>
                  </button>
                  <div className="flex flex-col h-full items-center justify-center">
                    {mobileNav}
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
