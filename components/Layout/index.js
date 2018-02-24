import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { FormattedDate } from 'react-intl';
import { Layout as AntLayout } from 'antd';
import Cookies from 'universal-cookie'
// project files
import Package from '../../package'
import PageWithIntl from '../PageWithIntl'
// import NavBar from '../NavBar'

import mainStyles from '../../styles/main.scss';

import { inject, observer } from 'mobx-react'

const { Content } = AntLayout;

// @inject('store') @observer

export class Layout extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    };

    this.onChangeLanguage = this.onChangeLanguage.bind(this)
  }
  


  onChangeLanguage = (lang) => {
    if(window) {
      localStorage.setItem('locale', lang)
      window.location.href = `${window.location.href}?lang=${lang}`
    }
  };

  render() {
    // console.log(this.context._documentProps.__NEXT_DATA__)
    return (
      <React.Fragment>

        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title || 'Next.js Starter Project'}</title>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
        </Head>
        <style jsx global>{mainStyles}</style>
        <AntLayout>
          <div>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
            </ul>
          </div>
          <Content>
            {this.props.children}
          </Content>
        </AntLayout>
      </React.Fragment>
    )
  }
}

export default PageWithIntl(Layout)