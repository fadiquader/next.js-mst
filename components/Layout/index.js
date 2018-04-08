import React from 'react'
import Head from 'next/head'
import { Layout as AntLayout } from 'antd';
// project files
import Package from '../../package'
import { inject, observer } from 'mobx-react'
import PageWithIntl from '../PageWithIntl'
import NavBar from '../NavBar'
// import NavBar from '../NavBar'

import mainStyles from '../../styles/main.scss';

import styles from 'styles/ant.less';

const isProd = process.env.NODE_ENV === 'production';

// let antLib;
// if(isProd) {
//   const manif = require('/.next/asset-manifest.json');
//   console.log('manif ', manif);
//   antLib = manif['commons.css'];
// }

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

    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title || 'Next.js Starter Project'}</title>
          {isProd && (
            <link rel="stylesheet" href={`/_next/static/style-ant.css`} />
          )}
        </Head>
        <style jsx global>{mainStyles}</style>
        <AntLayout>
          <NavBar />
          <Content>
            {this.props.children}
          </Content>
        </AntLayout>
      </React.Fragment>
    )
  }
}

export default PageWithIntl(Layout)

// <meta charSet="UTF-8" />
//   <title>{props.title || ''}</title>
// <meta name="description" content={props.description || defaultDescription} />
// <meta name="viewport" content="width=device-width, initial-scale=1" />
// <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
// <link rel="apple-touch-icon" href="/static/touch-icon.png" />
// <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
// <meta property="og:url" content={props.url || defaultOGURL} />
// <meta property="og:title" content={props.title || ''} />
// <meta property="og:description" content={props.description || defaultDescription} />
// <meta name="twitter:site" content={props.url || defaultOGURL} />
// <meta name="twitter:card" content="summary_large_image" />
// <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
// <meta property="og:image" content={props.ogImage || defaultOGImage} />
// <meta property="og:image:width" content="1200" />
// <meta property="og:image:height" content="630" />