$(function() {
  $("#bugsbio").hide();
  $("#cecilbio").hide();
  $("#bowserbio").hide();
  $("#bugs").css("cursor", "pointer");
  $("#cecil").css("cursor", "pointer");
  $("#bowser").css("cursor", "pointer");
  $(".medium").css("cursor", "pointer");

  $("#bugs").on("click", function () {
    $("#bugsbio").fadeToggle("fast");
  });
  $("#cecil").on("click", function () {
    $("#cecilbio").fadeToggle("fast");
  });
  $("#bowser").on("click", function () {
    $("#bowserbio").fadeToggle("fast");
  });

});