
var img = document.querySelectorAll("img");

img.forEach((n) => {
  n.addEventListener("mouseover", (n) => {
    n.target.src = `images/${n.target.id}_2.jpg`;
  });

  n.addEventListener("mouseout", (n) => {
    n.target.src = `images/${n.target.id}.jpg`;
  });
});