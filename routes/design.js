exports.form = function(req, res){
  console.log(req.session.uid);
  res.render('design', { title: 'ברוך הבא'});
};


exports.logout = function(req, res){
  console.log("logout");
  req.session.destroy(function(err) {
    if (err) throw err;
    res.redirect('/login');
  });
};
