var User = require('../lib/user');

exports.form = function(req, res){
  req.user = res.locals.user = "";
  res.render('register', { title: 'פתיחת חשבון'});
};

exports.submit = function(req, res, next){
  // console.log("req.body",req);
  var data = req.body.user;
  console.log("data.name ",data.name);
  console.log("data.pass ",data.pass);
  User.getByName(data.name, function(err, user){
    if (err) return next(err);

    if (user.id) {
        res.error("שם משתמש כבר קיים במערכת");
        res.redirect('back');
        // res.redirect('/register');
    } else {
      console.log("User Created Successfully!");
      res.error("חשבון נוצר בהצלחה");
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
