var User = require('../lib/user');

exports.form = function(req, res){
  req.user = res.locals.user = "";
  res.render('login', { title: 'התחברות'});
};

exports.submit = function(req, res, next){
    var data = req.body.user;
    User.authenticate(data.name, data.pass, function(err, user){
      if (err) return next(err);
      if (user) {
        // console.log("valid credentials");
        req.session.uid = user.id;
        // console.log("login req.session.uid ",req.session.uid);
        // console.log("login req.session.id ",req.session.id);
        res.redirect('/design');
      } else {
        // console.log("invalid credentials");
        // res.render('login', { title: 'Login' ,messages:"שם משתמש או סיסמא לא נכונים"});
        res.error("שם משתמש או סיסמא לא נכונים"); // original file
        res.redirect('back'); // original file
      }
    });
}
