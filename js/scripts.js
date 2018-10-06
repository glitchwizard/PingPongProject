// 1. Take a number from a user
// 2. Generate an array of that size
// 3. For every number divisible  by 3, replace it with the string "ping"
// 4. For every number divisible by 5 replace it with the string "pong"
// 5. For every number divisible by 15 replace it with the string "pingpong"
// 6. Make it so the user can enter a new number and see the results update

// Business Logic

var PingPong = function(PingPongInput) {
    var outputArray = []; //creating an array that will be used for the output
    for (var i = 1; i <= PingPongInput; i++) {
        if (i % 3 === 0 && i % 15 !== 0 ) {
            console.log("Ping");
        } else if (i % 5 === 0 && i % 15 !== 0) {
            console.log("Pong");            
        } else if (i % 15 === 0) { 
            console.log("PingPong");
        } else if(i % 3 !== 0 && i % 5 !== 0 && i % 15 !== 0 ) {
            console.log("This is i: " + i);
        } else {
            console.log("You did not enter a number, please enter a number");
            
        }
    }
};

//UI Logic

$(document).ready(function(){
    $("form#pingpong").submit(function(event) {
      event.preventDefault();
      var Userinput = parseInt($("input#PingPongInput").val());
      var result = PingPong(Userinput);
  
      $(".output").text(result);
  
      $("#result").show(result);
    });
  });