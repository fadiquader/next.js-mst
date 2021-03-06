import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Cookies from 'universal-cookie'
import Authenticate from '../../services/Authenticate';
import pageWithIntl from '../../components/PageWithIntl';

import Loader from '../../components/loader'

class Callback extends React.Component {

  // static async getInitialProps({req}) {
  //   const session = await Authenticate.init({req: req})
  //
  //   const cookies = new Cookies((req && req.headers.cookie) ? req.headers.cookie : null)
  //
  //   // If the user is signed in, we look for a redirect URL cookie and send
  //   // them to that page, so that people signing in end up back on the page they
  //   // were on before signing in. Defaults to '/'.
  //   let redirectTo = '/';
  //   if (session.token) {
  //     // Read redirect URL to redirect to from cookies
  //     redirectTo = cookies.get('redirect_url') || redirectTo
  //     // Allow relative paths only - strip protocol/host/port if they exist.
  //     redirectTo = redirectTo.replace( /^[a-zA-Z]{3,5}\:\/{2}[a-zA-Z0-9_.:-]+\//, '')
  //   }
  //
  //   return {
  //     redirectTo: redirectTo
  //   }
  // }
  //
  // async componentDidMount() {
  //   // Get latest session data after rendering on client *then* redirect.
  //   // The ensures client state is always updated after signing in or out.
  //   // (That's why we use a callback page)
  //   const session = await Authenticate.init({force: true});
  //   // console.log('this.props.redirectTo: ', this.props.redirectTo)
  //   // // Router.replace(this.props.redirectTo || '/')
  //   // Router.replace('/examples/protected')
  // }

  render() {
    // Provide a link for clients without JavaScript as a fallback.
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
        </Head>
        <a href={this.props.redirectTo}>
          <Loader fullscreen={true}/>
        </a>
      </React.Fragment>
    )
  }
}

export default pageWithIntl(Callback, 'callback')