'use strict';
import express from 'express';
import expressSession from 'express-session';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import { parse } from 'url';

import apis from './api';

const mobxReact = require('mobx-react');

const IntlPolyfill = require('intl')
const next = require('next');

const { addLanguage } = require('./middlewares/addLanguage')
const { addUser } = require('./middlewares/addUser')

mobxReact.useStaticRendering(true);

Intl.NumberFormat = IntlPolyfill.NumberFormat
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat

// Load environment variables from .env file if present
require('dotenv').load()
require('./services/passport');
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.PORT = process.env.PORT || 80

// Initialize Next.js
const nextApp = next({
  dir: '.',
  dev: (process.env.NODE_ENV === 'development')
});

const handle = nextApp.getRequestHandler()

const MongoStore = require('connect-mongo')(expressSession);


const sessionStore = new MongoStore({
  url: process.env.MONGO_URI,
  autoRemove: 'interval',
  autoRemoveInterval: 10, // Removes expired sessions every 10 minutes
  collection: 'sessions',
  stringify: false
})
// Add next-auth to next app
nextApp
  .prepare()
  .then(() => {
    const expressApp = express();
    expressApp.use(bodyParser.json());
    expressApp.use(bodyParser.urlencoded({ extended: true }));
    // expressApp.use(expressSession({
    //   secret: 'fadi',
    //   store: sessionStore,
    //   resave: false,
    //   rolling: true,
    //   saveUninitialized: false,
    //   cookie: {
    //     httpOnly: true,
    //     secure: 'auto',
    //     maxAge: 60000 * 60 * 24 * 7
    //   }
    // }));
    expressApp.use(cookieSession({
      name: 'session',
      keys: ['fadi'],
      // Cookie Options
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }));
    expressApp.use(passport.initialize());
    expressApp.use(passport.session());
    expressApp.use(addLanguage);
    // expressApp.use(addUser);
    expressApp.get('/auth/oauth/facebook', passport.authenticate('facebook'));
    expressApp.get('/auth/oauth/facebook/callback', passport.authenticate('facebook', {
      successRedirect: `${'/auth'}/callback?action=signin&service=facebook`,
      failureRedirect: `${'/auth'}/error?action=signin&type=oauth&service=facebook`,
      // session: false
    }))
    expressApp.use('/api', apis);

    expressApp.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      return handle(req, res, parsedUrl)
    })
    expressApp.listen(process.env.PORT, err => {
      if (err) {
        throw err
      }
      console.log('> Ready on http://localhost:' + process.env.PORT + ' [' + process.env.NODE_ENV + ']')
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  });
