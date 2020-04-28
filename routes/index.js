var express = require('express');
var router = express.Router();
var homepage = require('../routes/homepage');
var contact = require('../routes/contact');

router.get('/homepage',homepage.form);

router.get('/contact',contact.form);

module.exports = router;
