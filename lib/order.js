var express = require('express');
var res = express.response;


res.save = function(title,content,path,amount,font,status)
{
  var sess = this.req.session;
  sess.orders = sess.orders || [];
  sess.orders.push({ amount: amount,title:title,content:content,path:path,font:font,
  status:status});
}


module.exports = function(req, res, next){
  res.locals.orders = req.session.orders || [];
  res.locals.removeOrders = function(){
    req.session.orders = [];
  };
  next();
};
