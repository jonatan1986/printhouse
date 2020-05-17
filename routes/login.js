var User = require('../lib/user');

exports.form = function(req, res){
  // console.log(req);
  res.render('login', { title: 'התחברות'});
};

exports.submit = function(req, res, next){
    var data = req.body.user;
    User.authenticate(data.name, data.pass, function(err, user){
      if (err) return next(err);
      if (user) {
        // console.log("valid credentials");
        req.session.uid = user.id;
        res.redirect('/design');
      } else {
        res.error("שם משתמש או סיסמא לא נכונים"); // original file
        res.redirect('back'); // original file
      }
    });
}
