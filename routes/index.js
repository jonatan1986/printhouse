var express = require('express');
var router = express.Router();
var homepage = require('../routes/homepage');
var contact = require('../routes/contact');
var register = require('../routes/register');
var login = require('../routes/login');
var design = require('../routes/design');
var fill = require('../routes/fill');
var personal = require('../routes/personal');
var status = require('../routes/status');

var app = express();


var dir = __dirname.substring(0, __dirname.lastIndexOf('/')) + '/public/postcards';


router.get('/homepage',homepage.form);

router.get('/contact',contact.form);

router.get('/register',register.form);
router.post('/register',register.submit);

router.get('/login',login.form);
router.post('/login',login.submit);


router.get('/design',design.form);
router.post('/design',design.submit(dir));
router.get('/logout',design.logout);
router.post('/save',design.save(dir));

// router.get('/save',design.save(dir));

router.get('/fill',fill.form);
router.post('/fill',fill.save);

router.get('/personal',personal.form);
// router.post('/personal',fill.save);


router.get('/status',status.form);
router.post('/status',status.submit);


module.exports = router;
