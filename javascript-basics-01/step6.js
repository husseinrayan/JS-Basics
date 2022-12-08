
var x= document.getElementById("validate");

x.onclick = function divide(a, b) {
  var a = parseInt(document.getElementById("first_number").value);
  var b = parseInt(document.getElementById("second_number").value);
  return alert(a / b);
};