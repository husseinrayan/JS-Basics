// var name= prompt("what is your name");
// var username= prompt("what is your surname");
// var city= prompt("what is your city");
// alert("Nom : " + name +"\n" +"Prenom : " + username +"\n"+ "Ville : " + city);
var button = document.getElementById("validate");

button.onclick = function alertTest() {
  userName = document.getElementById("name").value;
  surname = document.getElementById("surname").value;
  city = document.getElementById("city").value;

  alert("Name: " + userName + "\n" + "Surname: " + surname + "\n" + "City: " + city);};
