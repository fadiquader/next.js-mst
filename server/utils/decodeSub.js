import jwt from 'jsonwebtoken';

export function decodeSub(req, res, next) {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(process.env.jWT_SECRET);
    decoded.id = decoded.sub;
    delete decoded.sub;
    req.user = decoded;
    next();
  } catch (e) {
    req.user = null;
    next();
  }
}
