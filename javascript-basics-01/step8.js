
var x= document.getElementById("validate");

x.onclick = function checkAge() {
  var age = document.getElementById("age").value;

  if (age > 18) {
    alert("You are over 18");
  } else {
    alert("You are under 18");
  }
};
