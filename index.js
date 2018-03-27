function myFunc() {
  "use strict";
  alert("My Function");
}
myFunc();


(function SayWelcome(){
  "use strict";
  alert("welcome to my website");
})();

function convertUsdToEuro() {
  "use strict";
  var amount = document.getElementById("dollar").value,
  result = amount * 0.81, // 100 * 0.81 = 81
  message = document.getElementById("message");
  
  if(amount === ""){ //amount cant be empty
    message.innerHTML = "this field cant be empty";
  } else if (isNaN(amount)){ // amount must be number
    message.innerHTML = "this field accept number";
  } else if (amount === "0"){ //amount cant be zero
    message.innerHTML = "the value must not be zero";
  } else if (amount < 0){ //amount cant be minus
    message.innerHTML ="the value must not be negativ number";
  }
else {
  message.innerHTML = amount + " Dollar is worth " + result + " Euro";
}
}




var season = prompt("whats the best season for you?");
switch (season) { //switch function
  case "winter":
    alert("winter is too cold");
    break;
  case "summer": 
  alert("summer is too hot");
    break;
  case "Autumn":
  alert("Autumn is cloudy");
  break; 
  case "spring":
  alert("Spring is amazing");
  break;
  default:
  alert("you didnt enter a season name");
  break;
}

var myName = "sahar"; // Global Scope
console.log(myName); // 1 global 
function myNameFunc(){

  "use strict";
  console.log(myName); //undefined
  var myName = "samar"; // local scope, cant be exixt from outside the function
console.log(myName); 
}
console.log(myName); // 2 global
myNameFunc(); // 3 local 
console.log(myName); // 4

var x = 1; 
function  changeXto2() {
  "use strict";
   x = 2;
  
}
function changeXto3(){
  "use strict";
   x = 3;
}
console.log(x); //1
changeXto2();
console.log(x); // 2
changeXto3();
console.log(x);//3