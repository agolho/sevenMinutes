var whatNow,timer,exerciseIndex=0;
var excersises=['Jumping Jacks','Wall Sit','Push-Up','Crunch','Step-Up','Squat','Triceps Dip','Plank','High Knees','Lunge','Push Up with Rotation','Side Plank'];

$("#startButton").click(function() {
  $('#startButton').addClass('disabled');
  sevenMinutes();
})

function sevenMinutes(){
    timer = setInterval(function(){ writeClock(excersises[exerciseIndex],30); }, 1000);
    timer=35;
}

function writeClock(whatNow,workLength){
  $('#splashScreen').addClass('jumbotron');

  if (timer > 30) {
    var countdown = timer-30;
    $("#splashScreen").html('<h1>'+whatNow+'<h1> <br><h5>Get Ready!<br></h5> <h1 class="digitiser">'+countdown+'</h1>');
    countdown--;
    timer--;
  } else {
  $("#splashScreen").html('<h1>'+whatNow+'<h1> <br> <h1 class="digitiser">'+timer+'</h1>');
  if (timer > 0){
    timer--;
  }
  else {
    timer=35;
    if (exerciseIndex < excersises.length)
        exerciseIndex++;
      }
    }
}

//GlOBAL CONTROLS
