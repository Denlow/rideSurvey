$(document).ready(function(){
  $("form#rideSurvey").submit(function(event){
    event.preventDefault();
    $("#workResponses").show();
    $("input:checkbox[name=work-ride]:checked").each(function(){
      var workRideMode = $(this).val();
      $('#workResponses').append(workRideMode + "<br>");
    });
    $('#rideSurvey').hide();
  });
});
