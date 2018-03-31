import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import db from '../models';

const router = express.Router();

const pathPrefix = '/auth'
// const requireSignin = passport.authenticate('local-login',{
//   successRedirect : '/',
//   failureRedirect : '/login',
// });

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({
    sub: user.id,
    iat: timestamp
  }, process.env.jWT_SECRET
  );
}


router.get(`${pathPrefix}/csrf`, (req, res) => {
  return res.json({
    csrfToken: res.locals._csrf
  })
});

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
  console.log('req.locale ', req.locale)
  const { locale, localeDataScript, messages, antdLocale } = req;
  // console.log('locale, messages: ', locale, messages)
  // if(locale && localeDataScript && messages && antdLocale) {
  //   session.lang = {
  //     locale,
  //     localeDataScript,
  //     messages,
  //     antdLocale,
  //   }
  // }

  return res.json(session)
});

router.get('/auth/oauth/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));

router.get('/auth/oauth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: `/auth/callback?action=signin&service=facebook`,
  failureRedirect: `/auth/error?action=signin&type=oauth&service=facebook`
}));

router.get('/auth/oauth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/oauth/google/callback', passport.authenticate('google', {
  successRedirect: `/auth/callback?action=signin&service=google`,
  failureRedirect: `/auth/error?action=signin&type=oauth&service=google`
}));

router.post(`${pathPrefix}/signout`, (req, res) => {
  // Log user out with Passport and remove their Express session
  req.logout()
  req.session.destroy(() => {
    return res.redirect(`${pathPrefix}/callback?action=signout`)
  })
});

router.post(`${pathPrefix}/localSignin`, async (req, res) => {
  try {
    passport.authenticate('local', {session: false}, (err, user, info) => {
      console.log(err.message);
      if (err || !user) {
        return res.status(400).json({
          message: err.message,
          user   : user
        });
      }

      req.login(user, {session: false}, (err) => {
        if (err) {
          res.json({
            message: err.message
          });
        }
        const token = tokenForUser(user);

        return res.json({user, token});
      });
    })(req, res);
  } catch (err) {

  }

});

router.post(`${pathPrefix}/localSignup`, async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  // validation - username / password

  try {
    if (!firstName) throw new Error('Frist Name is Required');
    else if (!lastName) throw new Error('Last Name is Required');
    else if (!email) throw new Error('Email is Required');
    else if (!password || password.length < 8) throw new Error('Invalid Password, must be at least 8 characters');
    const emailExists = await db.LocalAuth.findOne({ email });
    if (emailExists !== null) throw Error('Email already exists');
    const user = await db.LocalAuth.createLocalUser({
      firstName,
      lastName,
      email,
      password,
    });
    const token = tokenForUser(user);
    res.status(200).json({
      success: true,
      me: user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

});

export default router