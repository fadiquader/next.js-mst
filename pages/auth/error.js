import React from 'react'
import Link from 'next/link'

class ErrorPage extends React.Component {

  static getInitialProps({req, query}) {
    console.log('eeorrrrrrrrr page ')
    // let props = await super.getInitialProps({req})
    let props = {}
    props.action = query.action || null
    props.type = query.type || null
    props.service = query.service || null
    return props
  }

  render() {
    if (this.props.action == 'signin' && this.props.type == 'oauth') {
      return(
        <div>
          <div className="text-center mb-5">
            <h1 className="display-4 mt-5 mb-3">Unable to sign in</h1>
            <p className="lead">An account associated with your email address already exists.</p>
            <p className="lead"><Link href="/auth"><a>Sign in with email or another service</a></Link></p>
          </div>
          <div className="row">
            <div className="col-sm-8 mr-auto ml-auto mb-5">
              <div className="text-muted">
                <h4 className="mb-2">Why am I seeing this?</h4>
                <p className="mb-2">
                  It looks like you might have already signed up using another service.
                </p>
                <p className="mb-3">
                  To protect your account, if you have perviously signed up
                  using another service you must link accounts before you
                  can use a different service to sign in.
                </p>
                <h4 className="mb-2">How do I fix this?</h4>
                <p className="mb-0">
                  To sign in using another service, first sign in using your email address then link accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.props.action == 'signin' && this.props.type == 'token-invalid') {
      return(
        <div>
          <div className="text-center mb-5">
            <h1 className="display-4 mt-5 mb-2">Link not valid</h1>
            <p className="lead">This sign in link is no longer valid.</p>
            <p className="lead"><Link href="/auth"><a>Get a new sign in link</a></Link></p>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <div className="text-center mb-5">
            <h1 className="display-4 mt-5">Error signing in</h1>
            <p className="lead">An error occured while trying to sign in.</p>
            <p className="lead"><Link href="/auth"><a>Sign in with email or another service</a></Link></p>
          </div>
        </div>
      )
    }
  }
}

export default ErrorPage;