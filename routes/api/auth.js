//bring in express
const express = require('express');
//use express router
const router = express.Router();
const bcrypt = require('bcryptjs');
//bring in middleware
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
//bring in user data
const User = require('../../models/Users');

//Validates users inputs
//require('express-validator/check')
const { check, validationResult } = require('express-validator');

//route to GET api/auth.  This is a public route add middleware as second param
//This will make the route protected
router.get('/', auth, async (req, res) => {
  try {
    //call to db returns all data w/o password
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//route to POST api/auth.  This is a public route.  Where we auth user & get token
router.post(
  '/',
  [
    //This is the login
    check('email', 'Please include a Valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],

  async (req, res) => {
    //This handles the response from the validation, take in the request
    const errors = validationResult(req);
    //check for errors.  If error is found, outputs and array of the contents (in postman)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      //See if user exists, if so send error.  Dont want duplicate accounts
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Credentials Invalid' }] });
      }

      //see if matches password

      const isMatch = await bcrypt.compare(password, user.password);
      //if passwords dont match, return error
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Credentials Invalid' }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config["jwtSecret"],
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      //server error message
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

//export router
module.exports = router;
