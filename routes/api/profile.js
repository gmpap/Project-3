//bring in express
const express = require('express');
//use express router
const router = express.Router();

//route to GET api/profile.  This is a public route
router.get('/', (req, res) => res.send('Profile route'));

//export router
module.exports = router;
