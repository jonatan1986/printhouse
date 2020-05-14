var Photo = require('../models/Photo');


exports.form = function(req, res){
  res.render('fill', { title: ''});
};


exports.save = function(req, res){
  console.log("fill post save req.body",req.body.photodata.title);
  console.log("fill post save req.name",req.user.name);
  // Photo.create({
  //   username: req.user.name,
  //   title: req.body.photodata.title,
  //   content: req.body.photodata.content,
  //   filepath: req.body.photodata.path
  // },
  // function(err) {
  //   if (err)
  //   {
  //     return next(err);
  //   }
  // });
  res.redirect('/order');
};
