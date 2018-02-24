import axios from 'axios';

import { BASE_API } from '../../utils/constatns';

const authController = {};

authController.me = async (req, res) => {
  try {
    const token = req.headers['x-token'] || req.session.token;
    // console.log('token server', token)
    const result = await axios.get(`${BASE_API}me`, {
      headers: {
        common: {
          'x-token': token
        }
      }
    });
    req.user = result.data.me;
    res.status(200).json({
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
  try {
    console.log('username server ', username)
    const result = await axios.post(`${BASE_API}login`, { username, password });
    req.session.token = result.data.token;
    req.user = result.data.user;
    res.status(200).json({
      token: result.data.token,
      user: result.data.user
    })
  } catch (err) {
    res.status(401).json({
      success: false
    })
  }
};

export { authController };