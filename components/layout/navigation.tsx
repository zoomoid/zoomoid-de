import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export type NavigationElement = {
  title: string,
  url: string,
  external: boolean,
}

export function Navigation({
  textColor,
  backgroundColor,
}: {
  textColor: string,
  backgroundColor: string
}) {
  const data: NavigationElement[] = [
    {
      title: "Work",
      url: "/work",
      external: false,
    },
    {
      title: "Blog",
      url: "https://zoomoid.dev/blog",
      external: true,
    },
    {
      title: "About",
      url: "/about",
      external: false,
    },
  ];

  return (
    <header className="">
      <DesktopNavigation textColor={textColor} navigation={data} />
      <MobileNavigation
        textColor={textColor} backgroundColor={backgroundColor}
        navigation={data}
      />
    </header>
  );
}