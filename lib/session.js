import Cookies from 'universal-cookie';

const days = 1
const date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
// const expires = date.toGMTString();
const expires = date;

export const setCookie = (key, value) => {
  if (process.browser) {
    const cookie = new Cookies();
    cookie.set(key, value, {
      expires,
      path: "/"
    });
  }
};

export const removeCookie = key => {
  if (process.browser) {
    const cookie = new Cookies();
    cookie.remove(key, {
      expires,
    });
  }
};

export const getCookie = (key, req) => {
  const cookie = new Cookies(req && req.headers.cookie ? req.headers.cookie : null);
  return cookie.get(key)
  // return process.browser
  //   ? getCookieFromBrowser(key)
  //   : getCookieFromServer(key, req);
};

// const getCookieFromBrowser = key => {
//   return cookie.get(key);
// };
//
// const getCookieFromServer = (key, req) => {
//   if (!req.headers.cookie) {
//     return undefined;
//   }
//   const rawCookie = req.headers.cookie
//     .split(";")
//     .find(c => c.trim().startsWith(`${key}=`));
//   if (!rawCookie) {
//     return undefined;
//   }
//   return rawCookie.split("=")[1];
// };
