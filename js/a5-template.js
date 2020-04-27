$(document).ready(function() {

  // Play/Pause Video On Mousedown
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="images/play.png") {
      $($("#videoplayer").children()[0]).attr("src","images/pause.png");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","images/play.png");
      $("#thevideo")[0].pause();
    }

  });

  // Toggle the Receive Newsletter Checkbox
  $("#receiveNewsButton").click(function() {

      if($($("#receiveNewsButton").children()[0]).attr("src")=="images/unchecked.png") {
        $($("#receiveNewsButton").children()[0]).attr("src","images/checked.png");
        $("#receiveNewsVal").val("y");
      } else {
        $($("#receiveNewsButton").children()[0]).attr("src","images/unchecked.png");
        $("#receiveNewsVal").val("n");
      }
      
  });

  // Validate Form On Click Button
  $("#signupbutton").click(function() {

      // Check first name and last name are complete
      if($("#fn").val()=="" || $("#ln").val()=="") {
        $("#name").addClass("error");
        return;
      } else {
        $("#name").removeClass("error");
      }

      // Check email is complete
      if($("#em").val()=="") {
        $("#email").addClass("error");
        return;
      } else {
        $("#name").removeClass("error");
      }

      alert("Thanks for signing up to hear more about me!");

  });


}); // end document ready

