const express = require('express');
const router = express.Router();

const controller = require('../controller/Controller.js');

router.get('/', controller.index);


module.exports = router;

