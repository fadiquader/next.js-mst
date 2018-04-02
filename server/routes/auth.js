import express from 'express';
import passport from 'passport';
import Cookies from 'universal-cookie';

import db from '../models';
import { tokenForUser } from '../utils';

const router = express.Router();

const pathPrefix = '/auth'


const days = 1
const date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
const expires = date;


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
  session: false,
  scope: ['public_profile', 'email']
}));

router.get('/auth/oauth/facebook/callback', passport.authenticate('facebook', {
  session: false,
  successRedirect: `/auth/callback?action=signin&service=facebook`,
  failureRedirect: `/auth/error?action=signin&type=oauth&service=facebook`
}));

router.get('/auth/oauth/google', passport.authenticate('google', {
  session: false,
  scope: ['profile', 'email']
}));

router.get('/auth/oauth/google/callback', passport.authenticate('google', {
  session: false,
  // successRedirect: `/auth/callback?action=signin&service=google`,
  failureRedirect: `/auth/error?action=signin&type=oauth&service=google`
}), (req, res) => {
  const successRedirect = `/auth/callback?action=signin&service=google`;
  const failureRedirect = `/auth/error?action=signin&type=oauth&service=google`;
  if(req.user) {
    req.login(req.user, { session: false }, (err) => {
      if(err) return res.redirect(failureRedirect);
      const token = tokenForUser(req.user)
      res.cookie('x-access-token', token);
      return res.redirect(successRedirect)
    })
  }
  else  {
    return res.redirect(failureRedirect)
  }

});

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
      if (err || !user) {
        return res.status(200).json({
          success: false,
          message: err && err.message || 'Error Happened',
          user: null
        });
      }

      req.login(user, { session: false }, (err) => {
        if (err) {
          return res.status(200).json({
            success: false,
            // message: err.message
          });
        }
        const token = tokenForUser(user);
        return res.json({user, token});
      });
    })(req, res);
  } catch (err) {
    res.status(200).json({
      success: false,
      // message: err.message
    });
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


router.post('/user_token', async (req, res) => {
  const { email, password } = req.body.auth
  const errorResponse = (msg) => {
    res.status(500).json({
      success: false,
      message: msg || 'Invalid credentials',
    });
  };
  try {
    const user = await db.LocalAuth.findOne({ email });
    if (user === null) {
      errorResponse('Email is not registered')
      return;
    }
    user.comparePassword(password, async (err, isMatch) => {
      if (err || !isMatch) {
        // const err = new Error('Wrong Email or password')
        errorResponse('Email is not registerd')
        return;
      }
      const me = await db.User.findById(user.user);
      const token = tokenForUser(me);
      res.status(200).json({
        success: true,
        me,
        token
      })
    });
  } catch (err) {
    return errorResponse(err.message)
  }
})


export default router