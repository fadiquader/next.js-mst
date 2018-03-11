import axios from 'axios';

import { BASE_API, PATH_PREFIX } from '../../utils/constatns';

const authController = {};

authController.me = async (req, res) => {
  try {
    const token = req.headers['x-token'] || req.session.token;
    console.log('token server', token)
    console.log('token session', req.session.token)
    const result = await axios.get(`${BASE_API}me`, {
      headers: {
        common: {
          'x-token': token
        }
      }
    });
    // req.user = result.data.me;
    res.json({
      success: true,
      token,
      me: result.data.me
    })
  } catch (err) {
    res.status(403).json({
      success: false
    })
  }
};

authController.login = async (req, res) => {
  const { username, password } = req.body;
  console.log('username server ', username)
  axios.post(`${BASE_API}login`, { username, password })
    .then(result => {
      req.logIn(result.data.user, err => {
        if(err) {
          console.log('Error Passport Login: ', err.message)
        }
        req.session.token = result.data.token
        // return res.redirect(`${PATH_PREFIX}/callback?action=signin&service=credentials`)
        return res.json({
          success: true,
          token: result.data.token,
          user: result.data.user
        })
      })
    })
    .catch(err => {
      res.status(401).json({
        success: false
      })
    });

  // try {
  //   // return res.redirect(`${PATH_PREFIX}/callback?action=unlink&service=signin}`)
  //
  // }

};

authController.signout = async (req, res) => {
  // Log user out with Passport and remove their Express session
  req.logout();
  // req.session.destroy(() => {
  //   return res.redirect(`${PATH_PREFIX}/callback?action=signout`)
  // })
  req.session = null;
  return res.redirect(`${PATH_PREFIX}/callback?action=signout`)

}

export { authController };