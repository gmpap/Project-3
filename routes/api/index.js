//bring in express
const express = require('express');
//use express router
const router = express.Router();

//route to GET api/profile.  This is a public route
// /api/user
router.use('/users', require('../../client/old/test/users.js/index.js.js.js'));
router.use('/auth', require('../../client/old/test/auth.js/index.js.js.js'));
router.use('/posts', require('../../client/old/test/posts'));
router.use('/profile', require('../../client/old/test/profile'));
//router.get('/api', (req, res) => res.send('Profile route'));

//export router
module.exports = router;
