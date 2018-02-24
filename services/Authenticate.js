import fetch from 'isomorphic-fetch'
import axios from 'axios';

export default class Authenticate {
  static init({ req, force }) {
    if(req) {
      if(req.session && req.session.token) {
        const { token, refreshToken } = req.session;
        return this._getUserData(token);
      }
      return new Promise((resolve) => {
        resolve({})
      })
    }
    else if(typeof window !== 'undefined') {
      const token = this._getLocalStore('token');
      const refreshToken = this._getLocalStore('refreshToken');
      if(token) {
        return this._getUserData(token);
      }
      return new Promise((resolve) => {
        resolve({})
      })
    }
  }
  static _getUserData(token, refreshToken) {
    return fetch('http://localhost:3000/api/me', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'x-token': token,
        'x-refresh-token': null,
      },
    })
      .then(res => res.json())
      .then(data => {
        if(data && data.token) {
          if(typeof window !== 'undefined')
            this._saveLocalStore('token', data.token);
          return data
        }
        return {}
      })
  }
  static _getLocalStore(name) {
    return localStorage.getItem(name) || null
    // try {
    //   return JSON.parse(localStorage.getItem(name))
    // } catch (err) {
    //   return null
    // }
  }

  static _saveLocalStore(name, data) {
    localStorage.setItem(name, data)
    // try {
    //   localStorage.setItem(name, JSON.stringify(data))
    //   return true
    // } catch (err) {
    //   return false
    // }
  }

  static _removeLocalStore(name) {
    try {
      localStorage.removeItem(name)
      return true
    } catch (err) {
      return false
    }
  }
}