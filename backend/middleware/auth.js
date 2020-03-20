const jwt = require('jsonwebtoken');

module.exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send(null);
  }

  try {
    const { email } = jwt.verify(token, process.env.SECRET_KEY);
    req.user = email;
    next();
  } catch (err) {
    res.status(401).send(null);
  }
};
