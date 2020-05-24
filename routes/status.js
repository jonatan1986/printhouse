var Photo = require('../models/Photo');
var User = require('../lib/user');
var photoArray =  [];



exports.form = function(req, res){
  if(JSON.stringify(req.body) === '{}')
  {
      console.log("res.locals.user empty",req.body);
      res.render('statuslogin',{ title: 'התחברות'});
      return;
  }
  console.log("status.js contin");
  Photo.find({username:req.user.name},function(err,photos){
    if(err)
    {
      return next(err);
    }
    if(photos.length == 0)
    {
      res.render('status', { title: 'לא נמצאו הזמנות'});
    }
    else
    {
      res.render('status', { title: 'להלן ההזמנות:',photos:photos});
    }
  });

  // console.log("status name" ,req.user.name);
  // console.log("status photoArray" ,photoArray);
  //
};


exports.submit = function(req, res, next){
    var data = req.body.user;
    User.authenticate(data.name, data.pass, function(err, user){
      if (err) return next(err);
      if (user)
      {
        req.user = res.locals.user = req.body.user;
        Photo.find({username:data.name},function(err,photos){
          if(err)
          {
            return next(err);
          }
          if(photos.length == 0)
          {
            res.render('status', { title: 'לא נמצאו הזמנות'});
          }
          else
          {
            res.render('status', { title: 'להלן ההזמנות:',photos:photos});
          }
        });
      }
      else
      {
        res.error("שם משתמש או סיסמא לא נכונים"); // original file
        res.redirect('back'); // original file
      }
    });
}
