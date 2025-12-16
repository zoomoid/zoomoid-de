const locales = ["en", "de"] as const;
const defaultLocale = "en" as const;

const i18n = {
  locales: locales,
  defaultLocale: defaultLocale,
} as const;

export type Locale = (typeof i18n)["locales"][number];

export default i18n;
