var photoArray = [];

photoArray.push({
  name:'birds',
  path:'postcard_birdsandflowers.jpg'
});

photoArray.push({
  name:'leaves',
  path:'postcard_leaves.jpg'
});

photoArray.push({
  name:'offwhite',
  path:'postcard_offwhite.jpg'
});

exports.form = function(req, res){
  console.log(req.session.uid);
  res.render('design', { title: 'ברוך הבא',Photos:photoArray});
};


exports.logout = function(req, res){
  req.session.destroy(function(err) {
    if (err) throw err;
    res.redirect('/login');
  });
};
