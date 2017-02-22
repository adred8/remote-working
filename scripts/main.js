
"use strict"

$(document).ready(function(){

  // Making the stars change from gold star to grey star when clcked
  $(".task-img").each(function(){
    $(this).on("click", function(){
      var img_attr = $(this).attr("src");
      console.log("img clicked");
      console.log(img_attr);

      if (img_attr == "fonts/gold-star.png"){
        $(this).attr("src", "fonts/grey-star.png");
      }

      if (img_attr == "fonts/grey-star.png"){
        $(this).attr("src", "fonts/gold-star.png");
      }
    });
  });

  // Making the checkbox responsive to user input by making the task lists get striked
  // through when checked and
  $("checkbox").each(function(){
    $(this).on('click', function(){
      
    })
  });


  // removing the task when delete button is clicked
});
