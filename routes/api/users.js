//bring in express
const express = require('express');
//use express router
const router = express.Router();
//Validates users inputs
const { check, validationResult } = require('express-validator/check');

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
  //

  (req, res) => {
    //This handles the response from the validation, take in the request
    const errors = validationResult(req);
    //check for errors.  If error is found, outputs and array of the contents (in postman)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User route');
  }
);

//export router
module.exports = router;

//Create mongoose model to hold all users fields.  Basically register a user for out app
//to interact with our db we need to create a model
