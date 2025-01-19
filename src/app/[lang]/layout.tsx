import "@/styles/globals.css";
import "@/styles/fonts/basier/stylesheet.css";
import "@/styles/fonts/novela/stylesheet.css";
import "@/styles/fonts/material-icons/stylesheet.css";
import i18n, { type Locale } from "@/i18n";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Locales from "@/components/Locales";
import { LocaleContextProvider } from "@/context/locale.context";
import { PropsWithChildren } from "react";
import { ThemeContextProvider } from "@/context/theme.context";
import ThemeableScaffolding from "@/components/ThemeableScaffolding";

export async function generateStaticParams() {
  return i18n.locales.map((l) => ({ lang: l }));
}

type LocalizedPageProps = {
  params: Promise<
    {
      lang: Locale;
    } & object
  >;
};

export default async function LocalizedPageLayout(
  props: PropsWithChildren<LocalizedPageProps>
) {
  const params = await props.params;

  const { children } = props;

  // this is a hack to get around the read-only property of the locales
  const locales = i18n.locales.map((l) => l);

  const LocaleSwitcher = (
    <Locales current={params.lang} locales={locales}></Locales>
  );

  const navigationElement = (
    <Navigation lang={params.lang}>{LocaleSwitcher}</Navigation>
  );
  const footerElement = <Footer lang={params.lang}>{LocaleSwitcher}</Footer>;

  return (
    <html lang={params.lang}>
      <body>
        <LocaleContextProvider>
          <ThemeContextProvider>
            <ThemeableScaffolding
              footer={footerElement}
              navigation={navigationElement}
            >
              {children}
            </ThemeableScaffolding>
          </ThemeContextProvider>
        </LocaleContextProvider>
      </body>
    </html>
  );
}
