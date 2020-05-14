var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photo_app',{ useUnifiedTopology: true,
                                                  useNewUrlParser: true},function(){
                                                    console.log("mongoose connected")
                                                  });

var schema = new mongoose.Schema({
  username: String,
  title: String,
  content: String,
  filepath: String
});



module.exports = mongoose.model('Photo', schema);
