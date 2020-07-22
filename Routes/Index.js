const express = require('express')
const RouteCharacters = require('./RouteCharacters');
const router = express.Router();

router.use('/characters', RouteCharacters);

module.exports = router;