import React, { Component } from 'react';
import Router from 'next/router'
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';

import Layout from '../../components/Layout';
import pageWithIntl from '../../components/PageWithIntl';

@inject('store')
@observer
class Protected extends Component {

  redirectToHome = () => {
    Router.push('/')
  }

  render() {

    return (
      <Layout {...this.props}>
        <div className="container">
          <br/>
          <Button onClick={this.redirectToHome}>
            Go Back
          </Button>
          <br/>
          <h1>Protected page</h1>
        </div>

      </Layout>
    )
  }
}

export default pageWithIntl(Protected, 'auth-required')