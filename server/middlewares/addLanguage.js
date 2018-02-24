const {readFileSync} = require('fs')
const {basename} = require('path')
const glob = require('glob')
const { parse } = require('url')
const accepts = require('accepts')

const { getLocales } = require('../utils/lang');

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
export const addLanguage = (req, res, next) => {
  const { locale, localeDataScript, messages, antdLocale} = getLocales(req);
  req.session.lang = locale;
  req.locale = locale;
  req.localeDataScript = localeDataScript;
  req.messages = messages;
  req.antdLocale = antdLocale;
  next()
  return
}