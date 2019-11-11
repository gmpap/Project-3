//bring in express
const express = require('express');
//use express router
const router = express.Router();

//route to GET api/posts.  This is a public route
router.get('/', (req, res) => res.send('Posts route'));

//export router
module.exports = router;
