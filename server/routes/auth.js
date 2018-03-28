import express from 'express';
import passport from 'passport';

const router = express.Router();

const pathPrefix = '/auth'
// const requireSignin = passport.authenticate('local-login',{
//   successRedirect : '/',
//   failureRedirect : '/login',
// });

router.get(`${pathPrefix}/csrf`, (req, res) => {
  return res.json({
    csrfToken: res.locals._csrf
  })
})

router.get(`${pathPrefix}/session`, (req, res) => {
  const sessionMaxAge = 60000 * 60 * 24 * 7
  const  sessionRevalidateAge = 60000;
  let session = {
    maxAge: sessionMaxAge,
    revalidateAge: sessionRevalidateAge,
    csrfToken: res.locals._csrf
  }

  // Add user object to session if logged in
  if (req.user) {
    // If logged in, export the API access token details to the client
    // Note: This token is valid for the duration of this session only.
    session.user = req.user
    if (req.session && req.session.api) {
      session.api = req.session.api
    }
  }

  return res.json(session)
})
router.get('/auth/oauth/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}))

router.get('/auth/oauth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: `/auth/callback?action=signin&service=facebook`,
  failureRedirect: `/auth/error?action=signin&type=oauth&service=facebook`
}))
router.get('/auth/oauth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get('/auth/oauth/google/callback', passport.authenticate('google', {
  successRedirect: `/auth/callback?action=signin&service=google`,
  failureRedirect: `/auth/error?action=signin&type=oauth&service=google`
}))

router.post(`${pathPrefix}/signout`, (req, res) => {
  // Log user out with Passport and remove their Express session
  req.logout()
  req.session.destroy(() => {
    return res.redirect(`${pathPrefix}/callback?action=signout`)
  })
})

export default router