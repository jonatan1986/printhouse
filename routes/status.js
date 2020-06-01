var Photo = require('../models/Photo');
var User = require('../lib/user');



exports.form = function(req, res){
    // console.log("deletes any");
    // Photo.collection.remove({});
  if(JSON.stringify(req.body) === '{}' &&  typeof res.locals.user === 'undefined')
  {
      res.render('statuslogin',{ title: 'התחברות'});
      return;
  }

  Photo.find({username:req.user.name},function(err,photos){
    if(err)
    {
      return next(err);
    }
    // console.log(photos);
    if(photos.length == 0)
    {
      res.render('status', { title: 'לא נמצאו הזמנות',photos:photos});
    }
    else
    {
      res.render('status', { title: 'להלן ההזמנות:',photos:photos});
    }
  });
};


exports.submit = function(req, res, next){
    var data = req.body.user;
    User.authenticate(data.name, data.pass, function(err, user){
      if (err) return next(err);
      if (user)
      {
        req.user = res.locals.user = user;
        req.session.uid = user.id;
        Photo.find({username:data.name},function(err,photos){
          if(err)
          {
            return next(err);
          }
          if(photos.length == 0)
          {
            res.render('status', { title: 'לא נמצאו הזמנות',photos:photos});
          }
          else
          {
            // Photo.collection.remove({});
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
