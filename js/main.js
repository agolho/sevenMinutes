var whatNow,timer,seconds,exerciseIndex;
var excersises=['Jumping Jacks','Wall Sit','Push-Up','Crunch','Step-Up','Squat','Triceps Dip','Plank','High Knees','Lunge','Push Up with Rotation','Side Plank'];

$("#startButton").click(function() {
  $('#startButton').addClass('disabled');
  exerciseIndex=0;
  sevenMinutes();
})

function sevenMinutes(){
    timer = setInterval(function(){ writeClock(excersises[exerciseIndex],30); }, 1000);
    seconds=35;
}

function writeClock(whatNow,workLength){
  $('#splashScreen').addClass('jumbotron');

  if (seconds > 30) {
    var countdown = seconds-30;
    $("#splashScreen").html('<h1>'+whatNow+'<h1> <br><h5>Get Ready!<br></h5> <h1 class="digitiser">'+countdown+'</h1>');
    countdown--;
    seconds--;
  } else {
  $("#splashScreen").html('<h1>'+whatNow+'<h1> <br> <h1 class="digitiser">'+seconds+'</h1>');
  if (seconds > 0){
    seconds--;
  }
  else {
    seconds=35;
  if (exerciseIndex < excersises.length)
      exerciseIndex++;
    } if (exerciseIndex==excersises.length) {
      clearInterval(timer);
      seconds=0;
      countdown=0;
      exerciseIndex=0;
      $("#splashScreen").html('<h3>Congratulations!</h3> <br>   <button class="btn btn-lg btn-primary" onClick="sevenMinutes()" id="startButton" name="button">AGAIN</button>');
      return;
    }
  }
}

//GlOBAL CONTROLS
