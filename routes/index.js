//bring in express
const express = require('express');
//use express router
const router = express.Router();

//route to GET api/profile.  This is a public route
// /api
router.use('/', require('./api'));
//router.get('/api', (req, res) => res.send('Profile route'));

//export router
module.exports = router;
