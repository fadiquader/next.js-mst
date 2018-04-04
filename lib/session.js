import Cookies from 'universal-cookie';

const days = 1
const date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
// const expires = date.toGMTString();
const expires = date;

export const setCookie = (key, value, options) => {
  if (process.browser) {
    const cookie = new Cookies();
    cookie.set(key, value, {
      expires,
      path: '/'
    });
  }
};

export const removeCookie = key => {
  const cookie = new Cookies();
  cookie.remove(key, {
    expires: Date.now(),
  });
};

export const getCookie = (key, req) => {
  const cookie = new Cookies(req && req.headers.cookie ? req.headers.cookie : null);
  return cookie.get(key)

};
