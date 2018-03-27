/*function myFunc() {
  "use strict";
  alert("My Function");
}
myFunc();


(function SayWelcome(){
  "use strict";
  alert("welcome to my website");
})();
*/
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