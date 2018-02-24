import Link from 'next/link'
import React from 'react'
import { inject, observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl'
import { Row, Col } from 'antd';

import Page from '../components/page'
import Layout from '../components/Layout'
import NProgress from '../components/NProgress'
// import Home from '../components/Home';
import pageWithIntl from '../components/PageWithIntl';



@inject('store')
@observer
class Home extends Page {

  render() {
    const { postStore, authStore } = this.props.store;
    if(postStore.isLoading) {
      return <div>loading...</div>
    }
    // console.log('auth ', authStore)
    return (
      <Layout {...this.props}>
        <NProgress />
        {/*<div>{ this.props.store.lastUpdate.toString()}</div>*/}
        <div className="text-light rounded-0" style={{
          backgroundColor: 'rgba(73,155,234,1)',
          background: 'radial-gradient(ellipse at center, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)'
        }}>
          <div className="container">
            <h1 className="display-2 mb-3" style={{fontWeight: 300}}>
              <FormattedMessage id='projectName' defaultMessage="Starter Project" />
            </h1>
            <p className="lead mb-5">
              <FormattedMessage id='projectDescription' defaultMessage="A reference and template for react projects" />
            </p>

          </div>
        </div>
        <div className="container">
          {/*<div>{this.props.store.name}</div>*/}
          <ol>
            {postStore.posts.values().map(post =>
            <li key={post.id}>
              <a
                href={`/post/${post.id}`}
                onClick={e => {
                  e.preventDefault();
                  return false
                }}
              >
                {post.title}
              </a>
              <div>{post.body}</div>
            </li>
            )}
          </ol>
        </div>
      </Layout>
    )
  }
}

export default pageWithIntl(Home)