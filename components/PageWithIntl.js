import Cookies from 'universal-cookie'
import Router from 'next/router'
import React, {Component} from 'react'
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl'
import LocaleProvider from 'antd/lib/locale-provider';
import { Provider } from "mobx-react"
import { getSnapshot } from "mobx-state-tree"
import { initStore } from '../stores';
import Authenticate from '../services/Authenticate';

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
      const { req, res, query } = context;
      const isServer = !!req;
      let session = await Authenticate.init({
        req: req, force: true
      });

      const store = initStore(isServer);

      if(session.token) {
        store.authStore.authenticate(session)
      }
      let redirect = authStatus === 'auth-required' && !session.token ?
        '/login' : authStatus === 'redirect-if-auth' && session.token ?
          '/' : null;
      if(redirect !== null) {
        if (isServer && res) {
          res.writeHead(302, { Location: redirect })
          res.end()
        } else {
          Router.push(redirect)
        }
      }

      if (query.redirect) {
        const cookies = new Cookies((req && req.headers.cookie) ? req.headers.cookie : null)
        cookies.set('redirect_url', query.redirect, { path: '/' })
      }

      return {...props, isServer, session, initialState: getSnapshot(store)}
    }

    constructor (props) {
      super(props)
      this.store = initStore(props.isServer, props.initialState)
    }

    render () {
      const {locale, messages, antdLocale, now, ...props} = this.props

      return (
        <LocaleProvider locale={antdLocale}>
          <IntlProvider locale={locale || 'en'} messages={messages} initialNow={now}>
            <Provider store={this.store}>
              <IntlPage {...props} />
            </Provider>
          </IntlProvider>
        </LocaleProvider>
      )
    }
  }
}