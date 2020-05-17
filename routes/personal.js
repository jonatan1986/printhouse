

exports.form = function(req, res){
  console.log("res.locals.user.orders ",res.locals.orders);
  res.render('personal', { title: ''});
};
