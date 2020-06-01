var User = require('../lib/user');
var Photo = require('../models/Photo');

exports.form = function(req, res){
  // console.log(req);
  // var name = req.user;
  if (typeof req.user === 'undefined' || req.user.name == 'admin')
  //prevent from logged user to access admin page
  {
    res.render('admin', { title: 'התחברות מנהל'});
  }
  else
  {
    res.render('login', { title: 'התחברות'});
  }


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

exports.updateOrder = function(req,res,next)
{
  console.log("req.body.photodata.id",req.body.photodata.photoid);
  var id = req.body.photodata.photoid;
  Photo.find({_id:id},function(err,photos){
    // console.log("displayOrders ",photos);
    if(err)
    {
      return next(err);
    }
    // console.log(photos);
    if(photos.length == 0)
    {
      console.log("no photos");
    }
    else
    {
      console.log("photo found ",photos);
    }
  });
  res.redirect('back');
}
