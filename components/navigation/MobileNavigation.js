import { useState } from "react";

export default function MobileNavigation(props) {
  const nav = props.navigation;
  const mobileNav = nav.map((action) => (
    <div key={action.title} className="px-4 text-center text-2xl my-4">
      <a href={action.url} target="_blank" rel="noreferrer">
        {action.title}
      </a>
    </div>
  ));

  const [showNav, setShowNav] = useState(false);

  return (
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
  );
}
