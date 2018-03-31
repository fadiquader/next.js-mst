const {readFileSync} = require('fs')
const {basename} = require('path')
const glob = require('glob')
const { parse } = require('url')
const accepts = require('accepts')
const axios = require('axios')


export const languages = glob.sync('./lang/*.json').map((f) => {
    return basename(f, '.json')
});

const rootToLang = {
    'ar': 'ar_EG',
    'bg': 'bg_BG',
    'ca': 'ca_ES',
    'cs': 'cs_CZ',
    'de': 'de_DE',
    'el': 'el_GR',
    'en': 'en_US',
    'es': 'es_ES',
    'et': 'et_EE',
    'fa': 'fa_IR',
    'fi': 'fi_FI',
    'fr': 'fr_FR',
    'is': 'is_IS',
    'it': 'it_IT',
    'ja': 'ja_JP',
    'ko': 'ko_KR',
    'nb': 'nb_NO',
    'nl': 'nl_NL',
    'pl': 'pl_PL',
    'pt': 'pt_PT',
    'ru': 'ru_RU',
    'sk': 'sk_SK',
    'sr': 'sr_RS',
    'sv': 'sv_SE',
    'th': 'th_TH',
    'tr': 'tr_TR',
    'uk': 'uk_UA',
    'vi': 'vi_VN',
    'zh': 'zh_CN'
};

const antdLocaleCache = new Map();

export const getAntdLocaleData = (locale) => {
    const root = locale.split('-')[0];
    const lang = rootToLang[root];
    if (!antdLocaleCache.has(lang)) {
        const localeData = require(`antd/lib/locale-provider/${lang}`)
        antdLocaleCache.set(lang, localeData)
    }
    return antdLocaleCache.get(lang)
};

const localeDataCache = new Map();

export const getLocaleDataScript = (locale) => {
    const lang = locale.split('-')[0];
    if (!localeDataCache.has(lang)) {
        const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
        const localeDataScript = readFileSync(localeDataFile, 'utf8');
        localeDataCache.set(lang, localeDataScript)
    }
    return localeDataCache.get(lang)
};


export const getMessages = (locale) => {
    return require(`../../lang/${locale}.json`)
};


export const getLocales = locale => {
  return {
    locale,
    localeDataScript: getLocaleDataScript(locale),
    messages: getMessages(locale),
    antdLocale: getAntdLocaleData(locale)
  }
}