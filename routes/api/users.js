//bring in express
const express = require('express');
//use express router
const router = express.Router();

//route to GET api/users.  This is a public route
router.get('/', (req, res) => res.send('User route'));

//export router
module.exports = router;

//Create mongoose model to hold all users fields
