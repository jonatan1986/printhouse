var express = require('express');
var router = express.Router();
var homepage = require('../routes/homepage');
var contact = require('../routes/contact');
var register = require('../routes/register');
var login = require('../routes/login');
var design = require('../routes/design');

router.get('/homepage',homepage.form);

router.get('/contact',contact.form);

router.get('/register',register.form);
router.post('/register',register.submit);

router.get('/login',login.form);
router.post('/login',login.submit);


router.get('/design',design.form);
router.get('/logout',design.logout);

module.exports = router;
