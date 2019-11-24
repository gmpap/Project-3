const express = require('express');
const router = express.Router();

//Get api/profile
//Test route
//Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
