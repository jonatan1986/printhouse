var User = require('../lib/user');
var Photo = require('../models/Photo');

exports.form = function(req, res){
  // console.log(req);
  res.render('admin', { title: 'התחברות מנהל'});
};

exports.submit = function(req, res, next){
    var data = req.body.user;
    if(data.name != "admin")
    {
      res.error("אין לך הרשאות כניסה"); // original file
      res.redirect('back'); // original file
      return;
    }
    User.authenticate(data.name, data.pass, function(err, user){
      if (err) return next(err);
      if (user) {
        // console.log("valid credentials");
        req.session.uid = user.id;
      } else {
        res.error("שם משתמש או סיסמא לא נכונים"); // original file
      }
      res.redirect('back'); // original file
    });
}

exports.displayOrders = function(req, res, next)
{

    Photo.find({},function(err,photos){
      // console.log("displayOrders ",photos);
      if(err)
      {
        return next(err);
      }
      // console.log(photos);
      if(photos.length == 0)
      {
        res.render('order', { title: 'לא נמצאו הזמנות',photos:photos});
      }
      else
      {
        res.render('order', { title: 'להלן ההזמנות:',photos:photos});
      }
    });
}
