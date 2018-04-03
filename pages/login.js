import Link from 'next/link'
import React from 'react'
import { inject, observer } from 'mobx-react';
import { Row, Col, Form, Input, Button } from 'antd';

// import Page from '../components/page'
import Layout from '../components/Layout'
import NProgress from '../components/NProgress'
// import Home from '../components/Home';
import pageWithIntl from '../components/PageWithIntl';

const FormItem = Form.Item;

@inject('store')
@observer
class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.onInputChange = this._onInputChange.bind(this);
    this.handleLogin = this._handleLogin.bind(this);
  }
  componentWillMount() {

  }
  _handleLogin(e) {
    e.preventDefault();
    const { loginStore } = this.props.store;
    loginStore.tryLogin(this.state)
  }

  _onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { loginStore } = this.props.store;
    return (
      <Layout {...this.props}>
        <NProgress />
        <div className="container">
          <div>
            <a href="http://localhost:3000/auth/oauth/facebook">Continue with FB</a>
          </div>
          <div>
            <a href="http://localhost:3000/auth/oauth/google">Continue with Google</a>
          </div>
          <Row>
            <Col span={12}>
              <Form onSubmit={this.handleLogin}>
                <FormItem>
                  <Input name="email" onChange={this.onInputChange} />
                </FormItem>
                <FormItem>
                  <Input name="password" onChange={this.onInputChange} />
                </FormItem>
                <FormItem>
                  <Button htmlType="submit">Login</Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}


export default pageWithIntl(Login)