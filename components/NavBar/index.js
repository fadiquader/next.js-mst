import React, { Component } from 'react';
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Button, Layout, Dropdown, Menu, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import { setCookie, removeCookie } from 'lib/session'

import styles from './index.scss';

const { Header } = Layout;

@inject('store')
@observer
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleSignoutSubmit = this._handleSignoutSubmit.bind(this)
  }
  async _handleSignoutSubmit(event) {
    event.preventDefault();
    const { authStore } = this.props.store;
    removeCookie('x-access-token');
    authStore.signout();
    Router.push('/')
    // window.location.href = '/'
  }

  changeLang = lang => {
    setCookie('locale', lang, {})
    if(window) window.location.reload()
  }

  render() {
    const { authStore } = this.props.store;
    // console.log('token ', this.props.store.authStore.token)
    const navigateMenu = (
      <Menu>
        <Menu.Item>
          {/*<a href={`//localhost:3000?lang=en`}>En</a>*/}
          <a onClick={() => this.changeLang('en')}>En</a>
        </Menu.Item>
        <Menu.Item>
          {/*<a href={`//localhost:3000?lang=ar`}>Ar</a>*/}
          <a onClick={() => this.changeLang('ar')}>Ar</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Link prefetch href="/login">
            <a href="/login">Login</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link prefetch href="/examples/protected">
            <a href="/examples/protected">Protected</a>
          </Link>
        </Menu.Item>
      </Menu>
    )
    return (
      <Header>
        <div className="logo">
          <Link prefetch href="/">
                <span>
                  {'logo'}
                </span>
          </Link>
        </div>
        <Menu mode="horizontal" theme="dark" selectedKeys={[]} style={{ lineHeight: '64px' }}>
          <Menu.Item key="123">
            <Dropdown overlay={navigateMenu}>
              <a >
                Examples <Icon type="down" />
              </a>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="logout">
            <a onClick={this.handleSignoutSubmit}>
              logout
            </a>
          </Menu.Item>
          {/*{ authStore.isAuthenticated &&*/}

          {/*}*/}
        </Menu>
        <style jsx>{styles}</style>
      </Header>
    )
  }
}

export default NavBar;