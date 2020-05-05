var express = require('express');
var res = express.response;



res.message = function(msg, type){
  type = type || 'info';
  var sess = this.req.session;
  sess.messages = sess.messages || [];
  sess.messages.push({ type: type, string: msg });
};

res.error = function(msg){
  return this.message(msg, 'error');
};


res.success = function(msg){
  return this.message(msg, 'success');
};

module.exports = function(req, res, next){
  res.locals.messages = req.session.messages || [];
  // console.log("res.locals.messages",res.locals.messages,
  // " ",req.session.id);
  res.locals.removeMessages = function(){
    req.session.messages = [];
  };
  next();
};
