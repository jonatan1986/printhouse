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

    if (filesize > 0)
    {
      return;
    }
    else
    {
      return {error:true,message:'לא הועלה שום קובץ'};
    }
};


validateFileExtension = function(req, res, next, filename)
{
  if( filename.match(/\.(jpg|jpeg|png)$/i))
  {
     return;
  }
  else
  {
     return {error:true,message:"jpeg,png,jpg ניתן להעלות קבצים מסוג"};
  }
}
