var express = require('express');
var router = express.Router();
var homepage = require('../routes/homepage');
var contact = require('../routes/contact');
var register = require('../routes/register');

router.get('/homepage',homepage.form);

router.get('/contact',contact.form);

router.get('/register',register.form);

// router.post('/register',register.submit);

module.exports = router;
