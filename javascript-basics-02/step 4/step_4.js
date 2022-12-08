var b = document.querySelector("button");
var n1 = document.getElementById("name");
var n2 = document.getElementById("surname");
var n3 = document.getElementById("city");

b.addEventListener("click", function () {
  if (confirm("Are you sure you want to reset")) {
    n1.value = "";
    n2.value = "";
    n3.value = "";
  } else {
    console.log("canceled");
  }
});