const locales = ['en-US', 'de-DE'] as const
const defaultLocale = 'en-US' as const

const i18n = {
  locales: locales,
  defaultLocale: defaultLocale,
} as const;

export type Locale = (typeof i18n)["locales"][number];

export default i18n
