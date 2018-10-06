// 1. Take a number from a user
// 2. Generate an array of that size
// 3. For every number divisible  by 3, replace it with the string "ping"
// 4. For every number divisible by 5 replace it with the string "pong"
// 5. For every number divisible by 15 replace it with the string "pingpong"
// 6. Make it so the user can enter a new number and see the results update

// Business Logic
console.log("test test");

var PingPong = function(PingPongInput) {
    console.log("test test 2");
    console.log("This is ping pong input: " + PingPongInput);
    console.log("This is Type of pingpongInput: " + typeof PingPongInput);
    var arraysize = parseInt(PingPongInput);
    console.log("This is Type of arraysize: " + typeof arraysize);
    console.log("-------------------------------");
    
    var inputArray = [arraysize];
    console.log("This is input Array: " + inputArray)
    if (PingPongInput % 3 === 0 && PingPongInput % 15 !== 0 ) {
        inputArray.forEach(function(x) {
            console.log("This is x for the first if: " + x);
        });
    } else if (PingPongInput % 5 === 0 && PingPongInput % 15 !== 0) {
        console.log("This is when the Else If fires off");
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