import Cookies from 'universal-cookie';

const {readFileSync} = require('fs')
const {basename} = require('path')
const glob = require('glob')
const { parse } = require('url')
const accepts = require('accepts')

const { getLocales, languages } = require('../utils/lang');

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
export const addLanguage = (req, res, next) => {
  const cookie = new Cookies(req.headers.cookie)
  const cookieLocale = cookie.get('locale');
  const parsedUrl = parse(req.url, true);
  const accept = accepts(req).language(languages);
  if(cookieLocale) {
    const { locale, localeDataScript, messages, antdLocale } = getLocales(cookieLocale);
    res.cookie('locale', locale, {})
    req.locale = locale;
    req.localeDataScript = localeDataScript;
    req.messages = messages;
    req.antdLocale = antdLocale;
  }
  // console.log('res.locales.locale ', res.locales)

  return next()
}