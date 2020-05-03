var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photo_app',{ useUnifiedTopology: true,
                                                  useNewUrlParser: true},function(){
                                                    console.log("mongoose connected")
                                                  });

var schema = new mongoose.Schema({
  name: String,
  path: String,
  username: String
});



module.exports = mongoose.model('Photo', schema);
