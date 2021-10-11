// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Wuhan") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Wuhan ranks the third.");
      }

      if ($(this).attr("id") == "Tianjin") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, Tianjin has the largest single population.");
      }

      if ($(this).attr("id") == "Shanghai") {
         $("#feedback").css("color","red");
         $("#feedback").html("No,Shanghai ranks the second.");
      }

  $("#feedback").css("backgroundColor","yellow");
  $('#myModal').modal("show");

   });
}); //end main jQuery function

