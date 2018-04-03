import Cookies from 'universal-cookie'

import React from 'react'
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl'
import LocaleProvider from 'antd/lib/locale-provider';
import { Provider } from "mobx-react"
import { getSnapshot } from "mobx-state-tree"
import { initStore } from '../stores';

import { getCurrentUser } from "../services/userApi";
import { getJwt } from "../lib/auth";

import redirect from "../lib/redirect";

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(window.ReactIntlLocaleData[lang])
  })
}

const openRoutes = [''];
const redirectIfAuth = ['/login'];

class Page extends React.Component {
  static async getInitialProps (context) {
    let props = {}
    // if (typeof Page.getInitialProps === 'function') {
    //   props = await Page.getInitialProps(context)
    // }
    console.log('paaaaaaaaaaaaage ')
    const { req, res, pathname, query } = context;
    const isServer = !!req;
    const cookies = new Cookies((req && req.headers.cookie) ? req.headers.cookie : null);
    if(!cookies.get('locale'))
      cookies.set('locale', 'en', { path: '/' });
    // const red = cookies.get('redirect_url') || '/'
    const jwt = getJwt(context);
    const user = await getCurrentUser(jwt, context);
    console.log('user', user)
    const path =  isServer ? req.path : pathname;

    const store = initStore(isServer);
    user && store.authStore.authenticate(user);

    const redirectUrl = query.redirect ? query.redirect : path
    if(!user && redirectIfAuth.indexOf(path) !== -1) {
      let redirectPath = '/login?redirect='+redirectUrl;
      cookies.set('redirect_url', redirectUrl, { path: '/' })
      redirect(redirectPath, context)
    }

    const { locale, messages, antdLocale } = req || window.__NEXT_DATA__.props

    return {
      ...props, isServer,
      initialState: getSnapshot(store),
      redirectURL: red,
      authStatus,
      locale,
      antdLocale,
      messages
    }
  }

  constructor (props) {
    super(props)
    // const {locale, messages, antdLocale } = props
    // this.state = {
    //   locale, messages, antdLocale
    // }
    this.store = initStore(props.isServer, props.initialState)
  }


  render () {
    // const { now, ...props} = this.props
    const {children, locale, messages, antdLocale, now} = this.props
    // console.log('locale ', locale)
    return (
      <LocaleProvider locale={antdLocale}>
        <IntlProvider locale={locale} messages={messages} initialNow={now}>
          <Provider store={this.store}>
            {children}
          </Provider>
        </IntlProvider>
      </LocaleProvider>
    )
  }
}

export default Page;