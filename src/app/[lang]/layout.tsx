import "@/styles/globals.css";
import "@/styles/fonts/basier/stylesheet.css";
import "@/styles/fonts/material-icons/stylesheet.css";
import i18n,  { type Locale } from "@/i18n";
import footer from "@/app/api/footer/footer.mock";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import Locales from "@/components/Locales";
import { LocaleContextProvider } from "@/context/locale.context";
import { PropsWithChildren } from "react";

export async function generateStaticParams() {
  return i18n.locales.map((l) => ({ lang: l }));
}

type LocalizedPageProps = {
  params: {
    lang: Locale;
  } & object;
};

export default async function LocalizedPageLayout({
  children,
  params,
}: PropsWithChildren<LocalizedPageProps>) {
  const { socials } = await Promise.resolve(footer);

  // this is a hack to get around the read-only property of the locales
  const locales = i18n.locales.map((l) => l);

  const LocaleSwitcher = (
    <Locales current={params.lang} locales={locales}></Locales>
  );

  return (
    <html lang={params.lang}>
      <body>
        <LocaleContextProvider>
          <Navigation>{LocaleSwitcher}</Navigation>
          {children}
          <Footer socials={socials}>{LocaleSwitcher}</Footer>
        </LocaleContextProvider>
      </body>
    </html>
  );
}
