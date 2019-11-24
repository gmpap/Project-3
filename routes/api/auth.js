const express = require('express');
const router = express.Router();

//Get api/auth
//Test route
//Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
