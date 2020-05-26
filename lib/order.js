var express = require('express');
var res = express.response;


res.save = function(title,content,path,amount,font)
{
  console.log("order save");
  var sess = this.req.session;
  sess.orders = sess.orders || [];
  sess.orders.push({ amount: amount,title:title,content:content,path:path,font:font});
}


module.exports = function(req, res, next){
  res.locals.orders = req.session.orders || [];
  res.locals.removeOrders = function(){
    req.session.orders = [];
  };
  next();
};
