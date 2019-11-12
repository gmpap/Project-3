//bring in express
const express = require('express');
//use express router
const router = express.Router();

//route to GET api/profile.  This is a public route
// /api/user
router.use('/users', require('./users.js'));
router.use('/auth', require('./auth.js'));
router.use('/posts', require('./posts'));
router.use('/profile', require('./profile'));
//router.get('/api', (req, res) => res.send('Profile route'));

//export router
module.exports = router;
