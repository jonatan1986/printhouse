var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    path = require('path'),
    fs = require('fs'),
    join = path.join;

var Photo = require('../models/Photo');
var validate = require('../lib/middleware/validate');
var fieldname = "";
var fieldvalue = "";
var photoArray = [];
var fieldvalue;

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


photoArray.push({
  name:'offwhite',
  path:'postcard_bej.jpg'
});


exports.form = function(req, res){
  res.render('design', { title: 'ברוך הבא',Photos:photoArray});
};

exports.submit = function (dir) {

  return function(req, res, next){

    var form = new formidable.IncomingForm();

// form.parse analyzes the incoming stream data, picking apart the different fields and files for you.
form.on('file', (name, file) => {
    let pageValidationError = validate.validateFile(req,res,next,file.size,file.name);
    if (pageValidationError)
    {
      return;
    }
    var name = fieldvalue;
    var path = join(dir, file.name);
  //====================
    fs.rename(file.path, path, function(err){
      if (err) return next(err);
        var str1 = "הועלה בהצלחה ";
        var str2 = str1.concat(file.name);
        var str3 = str2.concat(" קובץ");
        res.success(str3);
        res.redirect('back');
      // });
    });
    //====================
});
//
    form.on('field', (fieldName, fieldValue) => {
        fieldname = fieldName;
        fieldvalue  = fieldValue;
    });
//
//
   form.parse(req, function(err, fields, files) {
     if (err) {
       // Check for and handle any errors here.
       console.error(err.message);
       return;
     }
   });
  };
};



exports.logout = function(req, res){
  req.session.destroy(function(err) {
    if (err) throw err;
    res.redirect('/login');
  });
};


exports.save = function (dir) {
  return function(req, res, next){
        // console.log("design save again",req.body);
        var data = req.body;
        console.log("save filename",data);
        res.locals.file = data.filename;
  };
};
