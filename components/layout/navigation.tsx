import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export type NavigationElement = {
  title: string,
  url: string,
  external: boolean,
}

export function Navigation() {
  const data: NavigationElement[] = [
    {
      title: "Work",
      url: "/work",
      external: false,
    },
    // {
    //   title: "Blog",
    //   url: "https://zoomoid.dev/blog",
    //   external: true,
    // },
    {
      title: "About",
      url: "/about",
      external: false,
    },
  ];

  return (
    <header className="">
      <DesktopNavigation navigation={data} />
      <MobileNavigation navigation={data} />
    </header>
  );
}