$(document).ready(function () {
  $('textarea[data-limit-rows=true]')
    .on('keypress', function (event) {

        var textarea = $(this),
            text = textarea.val(),
            lengthCount = textarea.val().length,
            numberOfLines = (text.match(/\n/g) || []).length + 1,
            maxRows = parseInt(textarea.attr('rows'));

          // var line = text.split("\n").pop();
          var lineArray = text.split("\n");
          var line = lineArray.pop();
          var char =  text.charAt(text.length-1);
          console.log(" numberOfLines ",numberOfLines);
          // if (text..match(/\n/g))
          // {
          //     console.log("text",text);
          // }
        if (line.length > 40 && event.which !== 13 )
        {
          return false;
        }
        if (event.which === 13 && numberOfLines === maxRows)
        {
          return false;
        }
    });
});
