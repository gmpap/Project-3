const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  //Get the token from the header
  const token = req.header('x-auth-token');

  //Check if the token is invalid
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization is Denied' });
  }
  //Verify the token
  try {
    //decode the token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is Invalid!' });
  }
};
