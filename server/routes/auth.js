import express from 'express';
import passport from 'passport';
// project files
import db from '../models';
import { tokenForUser } from '../utils';

const router = express.Router();

const days = 1
const date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
const expires = date;

router.get('/oauth/facebook', passport.authenticate('facebook', {
  session: false,
  scope: ['public_profile', 'email']
}));

router.get('/oauth/facebook/callback', passport.authenticate('facebook', {
  session: false,
  // successRedirect: `/auth/callback?action=signin&service=facebook`,
  failureRedirect: `/auth/error?action=signin&type=oauth&service=facebook`
}),(req, res) => {
  const successRedirect = `/auth/callback?action=signin&service=facebook`;
  const failureRedirect = `/auth/error?action=signin&type=oauth&service=facebook`;
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

router.get('/oauth/google', passport.authenticate('google', {
  session: false,
  scope: ['profile', 'email']
}));

router.get('/oauth/google/callback', passport.authenticate('google', {
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


router.post(`/localSignin`, async (req, res) => {
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

router.post('/localSignup', async (req, res) => {
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

router.get('/signout', (req, res) => {
  req.logout();
  res.clearCookie('x-access-token')
  res.clearCookie('redirect_url')
  return res.redirect(`/auth/callback?action=signout`)
});



export default router