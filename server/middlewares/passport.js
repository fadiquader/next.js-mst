import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import axios from 'axios';
import { BASE_URL, BASE_API, DEV_URL, PATH_PREFIX } from '../utils/constatns';

// require('dotenv').load()

export default (expressApp) => {
  passport.use(new FacebookStrategy({
    clientID: '158671718005040',
    clientSecret: 'd77d4d987465ffe867cebaea592f57b2',
    passReqToCallback: true,
    callbackURL: 'http://localhost:3000/auth/oauth/facebook/callback',
    profileFields: ['id', 'displayName', 'email', 'link']
  }, async (req, accessToken, refreshToken, _profile, next) => {
    try {
      const { id, displayName } = _profile;
      console.log('fb profile ', _profile)
      const result = await axios.post(`${BASE_API}login`, { displayName, password: '123' });
      req.session.token = result.data.token;
      req.user = result.data.user;
      next(null, _profile)
    } catch (err) {
      next(err, false)
    }
  }));

  expressApp.get('/auth/oauth/facebook', passport.authenticate('facebook'));
  expressApp.get('/auth/oauth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: `${PATH_PREFIX}/callback?action=signin&service=facebook`,
    failureRedirect: `${PATH_PREFIX}/error?action=signin&type=oauth&service=facebook`,
    session: false
  }))
}

// export const providers = [
//   {
//     providerName: 'Facebook',
//     providerOptions: {
//       scope: ['email', 'public_profile']
//     },
//     Strategy: require('passport-facebook').Strategy,
//     strategyOptions: {
//       clientID: process.env.FACEBOOK_ID,
//       clientSecret: process.env.FACEBOOK_SECRET,
//       profileFields: ['id', 'displayName', 'email', 'link']
//     },
//     getProfile(profile) {
//       // Normalize profile into one with {id, name, email} keys
//       return {
//         id: profile.id,
//         name: profile.displayName,
//         email: profile._json.email
//       }
//     }
//   },
//   {
//     providerName: 'Google',
//     providerOptions: {
//       scope: ['profile', 'email']
//     },
//     Strategy: require('passport-google-oauth').OAuth2Strategy,
//     strategyOptions: {
//       clientID: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     },
//     getProfile(profile) {
//       // Normalize profile into one with {id, name, email} keys
//       return {
//         id: profile.id,
//         name: profile.displayName,
//         email: profile.emails[0].value
//       }
//     }
//   },
//   {
//     providerName: 'Twitter',
//     providerOptions: {
//       scope: []
//     },
//     Strategy: require('passport-twitter').Strategy,
//     strategyOptions: {
//       consumerKey: process.env.TWITTER_KEY,
//       consumerSecret: process.env.TWITTER_SECRET,
//       userProfileURL: 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true'
//     },
//     getProfile(profile) {
//       // Normalize profile into one with {id, name, email} keys
//       return {
//         id: profile.id,
//         name: profile.displayName,
//         email: (profile.emails && profile.emails[0].value) ? profile.emails[0].value : ''
//       }
//     }
//   }
// ]
//
// passport.use(new require('passport-facebook').Strategy({
//   clientID: '158671718005040',
//   clientSecret: 'd77d4d987465ffe867cebaea592f57b2',
//   callbackURL: 'http://localhost:3000/auth/facebook/callback'
// }, async (accessToken, refreshToken, profile, cb) => {
//   const { id, displayName } = profile;
//   const fbUsers = await models.FbAuth.findAll({ limit: 1, where: { fb_id: id }});
//   if(!fbUsers.length){
//   }
//   cb(null, {})
// }));
// app.use(passport.initialize())
// app.get('/flogin', passport.authenticate('facebook'));
// app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//   failureRedirect: '/login',
//   session: false
// }), (req, res) => {
//   res.send('Auth was good')
// })
//
