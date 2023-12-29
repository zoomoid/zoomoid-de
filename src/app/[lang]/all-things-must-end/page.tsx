import { Locale } from "@/i18n";
import { type Metadata, type Viewport } from "next";
import Epilogue from "./Epilogue";
import Mainmatter from "./Mainmatter";
import Opening from "./Opening";
import styles from "./styles.module.css";

type PageProps = {
  params: {
    lang: Locale;
  };
};

export const metadata: Metadata = {
  title: "Zoomoid - All Things Must End",
  description: "The last Zoomoid album",
  authors: {
    name: "Zoomoid",
    url: "https://zoomoid.de",
  },
  creator: "Alexander Bartolomey",
  category: "music",
  alternates: {
    canonical: "https://zoomoid.de/all-things-must-end",
    languages: {
      "en-US": "https://zoomoid.de/en-US/all-things-must-end",
      "de-DE": "https://zoomoid.de/de-DE/all-things-must-end",
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  initialScale: 1,
  width: "device-width",
};

export default async function Page({ params: { lang } }: PageProps) {
  return (
    <main
      className={styles.page}
      style={{
        opacity: 0,
      }}
    >
      {/* <ScrollHook></ScrollHook> */}
      <div className="text-neutral-300 py-[6.6vmax] lg:py-[1.6vmax]">
        <Opening></Opening>
        <Mainmatter></Mainmatter>
        <Epilogue></Epilogue>
      </div>
    </main>
assN  );
}
