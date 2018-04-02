import jwt from 'jsonwebtoken';

const BASE_API = 'http://localhost:3091/api/'

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({
      sub: user.id,
      iat: timestamp
    }, process.env.JWT_SECRET
  );
}



export const addUser = (req, res, next) => {
  const token = req.cookies['x-access-token'] || req.headers['x-access-token']
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (!err) req.user = decoded;
      return next();
    })
  } else {
    return next()
  }
}



