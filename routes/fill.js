var Photo = require('../models/Photo');


exports.form = function(req, res){
  res.render('fill', { title: ''});
};


exports.save = function(req, res){
  var amount = req.body.photodata.amount;
  var title = req.body.photodata.title;
  var content = req.body.photodata.content;
  var path = req.body.photodata.path;
  var font = req.body.photodata.font;
  var status = 'בטיפול';
  // res.save(title,content,path,amount,font,status);
  // Photo.collection.remove({filepath: '/postcards/postcard_birdsandflowers.jpg'});
  Photo.create({
    username: req.user.name,
    title: req.body.photodata.title,
    content: req.body.photodata.content,
    filepath: req.body.photodata.path,
    amount: req.body.photodata.amount,
    font: req.body.photodata.font,
    status: status
  },
  function(err) {
    if (err)
    {
      return next(err);
    }
  });
  res.redirect('/personal');
};
