import express from 'express';
import passport from 'passport';
import { authController } from './auth';

const router = express.Router();

// const requireSignin = passport.authenticate('local-login',{
//   successRedirect : '/',
//   failureRedirect : '/login',
// });

router.get('/me', authController.me);
router.post('/login', authController.login);
// router.post('/login', requireSignin, authController.login);
router.post('/signout', authController.signout);

router.get('/auth/oauth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: `/auth/callback?action=signin&service=facebook`,
  failureRedirect: `/auth/error?action=signin&type=oauth&service=facebook`
}))

export default router