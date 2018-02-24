import axios from 'axios'

const BASE_API = 'http://localhost:3091/api/'

export const addUser = async (req, res, next) => {
  const token = req.session.token;
  try {
    if(token && typeof req.user === 'undefined') {
      const result = await axios.get(`${BASE_API}me`, {
        headers: {
          common: {
            'x-token': token
          }
        }
      });
      req.session.token = token
      req.user = result.data.me
    }
    next()
  } catch (err) {
    next()
  }

}

