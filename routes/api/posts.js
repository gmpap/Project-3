const express = require('express');
const router = express.Router();

//Get api/posts
//Test route
//Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
