function parseField(field) {
  return field
    .split(/\[|\]/)
    .filter(function(s){ return s });
}



exports.validateFile = function(req, res, next,filesize,filename)
{
  let pageValidationError = validateFileSize(req, res, next,filesize) ||
   validateFileExtension(req, res, next,filename);
  // console.log("pageValidationError.message ",pageValidationError.message);
  if (pageValidationError)
  {
     res.error(pageValidationError.message);
     res.redirect('back');
     return pageValidationError;
  }
}


validateFileSize = function(req, res, next,filesize){
    // field = parseField(file);

    if (filesize > 0)
    {
      return;
      // console.log("validateFileSize next");
      // return next({error:false,message:null});
    }
    else
    {
      console.log("validateFileSize error");
      pageValidationError = 'no file uploaded';
      // return pageValidationError;
      return {error:true,message:'no file uploaded'};
    }
};


validateFileExtension = function(req, res, next, filename)
{
  if( filename.match(/\.(jpg|jpeg|png)$/i))
  {
     // return next({error:false,message:null});
     return;
  }
  else
  {
       // let pageValidationError = 'invalid file extension';
       return {error:true,message:'invalid file extension'};
  }
}
