console.log("JS");
var arrow = document.getElementById("scroll-top");
document.addEventListener("scroll", () => {
  var arrowPos = window.scrollY;
  if (arrowPos > 500) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
});
