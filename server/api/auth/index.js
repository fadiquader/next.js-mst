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

export default router