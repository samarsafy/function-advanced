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
  result = amount * 0.81,
  message = document.getElementById("message");
  message.innerHTML = amount + " Dollar is worth " + result + " Euro"; 
  if(amount === ""){
    message.innerHTML = "this field cant be empty"
  } 
}