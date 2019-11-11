//bring in express
const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
//use express router
const router = express.Router();
//Validates users inputs
//require('express-validator/check')
const { check, validationResult } = require('express-validator');

//bring in user model
const User = require('../../models/User');

//route to POST api/users.  This is a public route.  Where we register user
router.post(
  '/',
  [
    //This sets the validation
    //This checks the name field.  If the field is not valid, it returns the message "Name is Required"
    check('name', 'Name is Required')
      .not()
      .isEmpty(),
    //This checks the the validity of the email entered
    check('email', 'Please include a Valid email').isEmail(),
    //checks the password for min 6 characters
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  //label this as asnyc for use with try catch below

  async (req, res) => {
    //This handles the response from the validation, take in the request
    const errors = validationResult(req);
    //check for errors.  If error is found, outputs and array of the contents (in postman)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destruture req.body, and thus pull items out of req.body
    const { name, email, password } = req.body;
    try {
      //See if user exists, if so send error.  Dont want duplicate accounts
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exsits!' }] });
      }
      //Get users gravatar
      const avatar = gravatar.url(email, {
        //pass in 3 options(image: size, rating, default img)
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      //create new user instance
      user = new User({
        name,
        email,
        avatar,
        password
      });

      //Encrpt the password and save user
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      //Return jsonwebtoken so user is logged in right away after creating account
      res.send('User Registered');
    } catch (err) {
      //server error message
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

//export router
module.exports = router;

//Create mongoose model to hold all users fields.  Basically register a user for out app
//to interact with our db we need to create a model
