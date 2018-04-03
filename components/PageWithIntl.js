import Cookies from 'universal-cookie'
import Router from 'next/router'
import React, {Component} from 'react'
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl'
import LocaleProvider from 'antd/lib/locale-provider';
import { Provider } from "mobx-react"
import { getSnapshot } from "mobx-state-tree"
import { initStore } from '../stores';
import Authenticate from '../services/Authenticate';
import { getCurrentUser } from "../services/userApi";
import { redirectIfNotAuthenticated, getJwt } from "../lib/auth";

import redirect from "../lib/redirect";

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach((lang) => {
      addLocaleData(window.ReactIntlLocaleData[lang])
  })
}

// auth-required, so should redirect to login if not authenticated
// no-auth-required, doesn't matter auth here
// redirect-if-auth, redirect if to home page or profile page if is authenticated


export default (Page, authStatus='no-auth-required') => {
  const IntlPage = injectIntl(Page)

  return class PageWithIntl extends Component {
    static async getInitialProps (context) {
      let props
      if (typeof Page.getInitialProps === 'function') {
        props = await Page.getInitialProps(context)
      }
      // Get the `locale` and `messages` from the request object on the server.
      // In the browser, use the same values that the server serialized.
      const { req, res, pathname, query } = context;
      const isServer = !!req;
      const cookies = new Cookies((req && req.headers.cookie) ? req.headers.cookie : null);
      if(!cookies.get('locale'))
        cookies.set('locale', 'en', { path: '/' })
      const jwt = getJwt(context);
      const user = await getCurrentUser(jwt, context);
      console.log('user', user)

      const store = initStore(isServer);
      if(user)
        store.authStore.authenticate(user);

      let red = authStatus === 'auth-required' && !user ?
        '/login' : authStatus === 'redirect-if-auth' && user ?
          '/' : null;

      if(red === '/login') {
        const redirectUrl = isServer ? query.redirect ? query.redirect : req.path : pathname;
        red = red + '?redirect='+redirectUrl;
        cookies.set('redirect_url', redirectUrl, { path: '/' })
      }

      if(red !== null && authStatus !== 'callback') {
        redirect(red, context)
      }

      // if(authStatus === 'callback') {
      //   redirectURL = redirect !== null ? redirect : cookies.get('redirect_url') || '/'
      // }
      const { locale, messages, antdLocale } = req || window.__NEXT_DATA__.props

      // const { locale, antdLocale, messages } = session.lang
      // console.log('page with intl: ', locale)
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
      const {locale, messages, antdLocale } = props
      this.state = {
        locale, messages, antdLocale
      }
      this.store = initStore(props.isServer, props.initialState)
    }

    componentDidMount() {
      const { redirectURL, authStatus } = this.props;
      if(redirectURL && authStatus === 'callback') {
        Router.replace(redirectURL)
      }
    }

    render () {
      const { now, ...props} = this.props
      const {locale, messages, antdLocale} = this.props
      // console.log('locale ', locale)
      return (
        <LocaleProvider locale={antdLocale}>
          <IntlProvider locale={locale} messages={messages} initialNow={now}>
            <Provider store={this.store}>
              <IntlPage {...props} />
            </Provider>
          </IntlProvider>
        </LocaleProvider>
      )
    }
  }
}