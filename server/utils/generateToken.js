import jwt from 'jsonwebtoken';

export function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({
      sub: user._id,
      iat: timestamp
    }, process.env.JWT_SECRET
  );
}


