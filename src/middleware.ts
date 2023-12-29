import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import type { NextRequest } from 'next/server'
import i18n from './i18n'


function getLocale({ headers }: NextRequest): string {
  let languages = new Negotiator({ headers: {
    "accept-language": headers.get("accept-language") ?? i18n.defaultLocale
  } }).languages()

  return match(languages, i18n.locales, i18n.defaultLocale)
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next|img|fonts|_ipx|static).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
