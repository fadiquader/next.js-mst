import React from 'react'
import Layout from '../components/Layout'
import Lang from '../services/Lang';
import Authenticate from '../services/Authenticate';


export default class extends React.Component {
  
  static async getInitialProps({req}) {
    // const session = await Authenticate.init({
    //   req: req, force: true
    // });
    // if(session === null) return {}
    // return {
    //   token: session.token,
    //   user: session.user
    // }
    return {}
  }

  adminAcccessOnly() {
    return (
      <Layout {...this.props} navmenu={false}>
        <div className="text-center pt-5 pb-5">
          <h1 className="display-4 mb-5">Access Denied</h1>
          <p className="lead">You must be signed in as an administrator to access this page.</p>
        </div>
      </Layout>
    )
  }

}
