import fetch from 'isomorphic-fetch'

export default class Lang {
  static init({ req, force }) {
    const { locale, messages, antdLocale, localeDataScript } = req;
    let locales = {};
    let localeLang = null
    if(req && locale) {
      locales.locale = locale;
      locales.messages = messages;
      locales.antdLocale = antdLocale;
      locales.localeDataScript = localeDataScript;
    } else {
      // if (force === true) {
      //   // If force update is set, reset data store
      //   this._removeLocalStore('locale')
      // } else {
      //   localeLang = this._getLocalStore('locale') || 'en'
      // }
      localeLang = this._getLocalStore('locale')
      console.log('localeLang ', localeLang)
    }
    if (locales && Object.keys(locales).length > 0 && locales.locale && locales.messages && locales.antdLocale) {
      return new Promise(resolve => {
        resolve(locales)
      })
    } else {
      // // (no valid session)
      // if (typeof window === 'undefined') {
      //   return new Promise(resolve => {
      //     resolve({})
      //   })
      // }
    }

    return fetch('/api/locale?lang='+localeLang)
      .then(res => res.json())
      .then(data => {
        console.log('data ', data)
        locales = data;
        this._saveLocalStore('locale',  data.locale)
        return locales
      })
  }
static _getLocalStore(name) {
    return localStorage.getItem(name) || null
  // try {
  //   return JSON.parse(localStorage.getItem(name))
  // } catch (err) {
  //   return null
  // }
}

static _saveLocalStore(name, data) {
  localStorage.setItem(name, data)
  // try {
  //   localStorage.setItem(name, JSON.stringify(data))
  //   return true
  // } catch (err) {
  //   return false
  // }
}

static _removeLocalStore(name) {
  try {
    localStorage.removeItem(name)
    return true
  } catch (err) {
    return false
  }
}
}