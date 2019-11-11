//bring in express
const express = require('express');
//use express router
const router = express.Router();

//route to GET api/auth.  This is a public route
router.get('/', (req, res) => res.send('Auth route'));

//export router
module.exports = router;
