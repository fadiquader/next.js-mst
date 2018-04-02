import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
import { Strategy as LocalStrategy} from'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import axios from 'axios';
import { BASE_URL, BASE_API, DEV_URL, PATH_PREFIX } from '../utils/constatns';
import db  from '../models';
// require('dotenv').load()

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.findById(id).then(user => {
    done(null, user);
  }).catch(err => {
      done(err, false);
    })

});

const facebookStrategy = new FacebookStrategy({
  clientID: '158671718005040',
  clientSecret: 'd77d4d987465ffe867cebaea592f57b2',
  passReqToCallback: true,
  callbackURL: 'http://localhost:3000/auth/oauth/facebook/callback',
  profileFields: ['id', 'displayName', 'email', 'link'],
  scope: [
    'public_profile',
    'email'
  ],
  proxy: true
}, async (req, accessToken, refreshToken, profile, done) => {
  try {
    const user = await db.SocialAuth.findOrCreate('facebook', profile)
    console.log('userrr ', user)
    return done(null, user)
  } catch (err) {
    return done(err, false)
  }
});

passport.use(facebookStrategy);

const googleStrategy = new GoogleStrategy({
    callbackURL: 'http://localhost:3000/auth/oauth/google/callback',
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    passReqToCallback: true,
    // proxy: true
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const user = await db.SocialAuth.findOrCreate( 'google', profile);
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
)

passport.use(googleStrategy);


const headerExtractor = (req) => {
  let token = null;
  if (req) {
    if(req.cookies && req.cookies['x-access-token']) {
      token = req.cookies['x-access-token'];
    } else if(req.headers['x-access-token']) {
      token = req.headers['x-access-token']
    }
  }
  return token;
};

const jwtOptions = {
  // jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  jwtFromRequest: headerExtractor,
  secretOrKey: process.env.JWT_SECRET,
};
// Create JWT Strategy
const jwtStrategy = new JwtStrategy(jwtOptions, ((payload, done) => {
  db.User.findById(payload.sub).then((user) => {
    if (!user) return done(null, false);
    return done(null, user);
  }).catch(error => done(error, false));
}));

passport.use(jwtStrategy);

const localSigninOptions = {
  usernameField: 'email',
  passwordField : 'password',
  passReqToCallback : true
};
const localSignin = new LocalStrategy(localSigninOptions, async (req, email, password, done) => {
  try {
    const user = await db.LocalAuth.findOne({ email });
    if (user === null) {
      const err = new Error('Email is not registerd')
      return done(err, false)
    }
    user.comparePassword(password, async (err, isMatch) => {
      if (err || !isMatch) {
        const err = new Error('Wrong Email or password')
        return done(err, false)
      }
      const me = await db.User.findById(user.user);
      // const token = tokenForUser(me);

      return done(null, me)
    });
  } catch (err) {
    console.log("error login: ", err.message)
    return done(err, false)
  }
});

passport.use('local', localSignin);


// const localSignupOptions = {
//   usernameField: 'email',
//   passwordField : 'password',
//   passReqToCallback : true
// };
// const localSignup = new LocalStrategy(localSignupOptions, async (req, email, password, done) => {
//   try {
//     const user = await db.LocalAuth.findOne({ email });
//     if (user !== null) {
//       throw new Error('This Email is registered in the system');
//     }
//
//
//   } catch (err) {
//     done(err, false)
//   }
// });
//
// passport.use('local-signup', localSignup);


// export const providers = [
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
