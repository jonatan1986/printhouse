var Photo = require('../models/Photo');


exports.form = function(req, res){
  res.render('fill', { title: ''});
};


exports.save = function(req, res){
  console.log("fill post save req.body.title",req.body.photodata.title);
  console.log("fill post save req.name",req.user.name);
  console.log("fill post save req.body.amount ",req.body.photodata.amount);
  var amount = req.body.photodata.amount;
  var title = req.body.photodata.title;
  var content = req.body.photodata.content;
  var path = req.body.photodata.path;
  res.save(title,content,path,amount);
  // Photo.collection.remove({});
  Photo.create({
    username: req.user.name,
    title: req.body.photodata.title,
    content: req.body.photodata.content,
    filepath: req.body.photodata.path,
    amount: req.body.photodata.amount
  },
  function(err) {
    if (err)
    {
      return next(err);
    }
  });
  res.redirect('/personal');
};
