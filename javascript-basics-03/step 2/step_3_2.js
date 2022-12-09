var num1 = document.getElementById("show");
var num2 = document.getElementById("hide");
var num3 = document.getElementById("texte")

num1.onclick = function(){
    num3.style.display = "block";
}

num2.onclick = function(){
    num3.style.display = "none";
}