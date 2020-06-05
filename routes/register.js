var User = require('../lib/user');

exports.form = function(req, res){
  req.user = res.locals.user = "";
  res.render('register', { title: 'פתיחת חשבון'});
};

exports.submit = function(req, res, next){
  // console.log("req.body",req);
  var data = req.body.user;
  User.getByName(data.name, function(err, user){
    if (err) return next(err);

    if (user.id) {
        res.error("שם משתמש כבר קיים במערכת");
        res.redirect('back');
    } else {
      res.success("חשבון נוצר בהצלחה");
      user = new User({
        name: data.name,
        pass: data.pass
      });

      user.save(function(err){
        if (err) return next(err);
        req.session.uid = user.id;
        // console.log(user.id);
        res.redirect('back');
      });
    }
  });
};
