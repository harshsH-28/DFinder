//jshint esversion:6
function hablo () {
  document.querySelectorAll(".hammenu")[0].addEventListener("click", function () {
  //document.addClass("menu");
  document.querySelector(".hammenu").classList.add("hammenu-none");
  document.querySelector("svg").classList.add("close");
  document.querySelector(".menU").classList.add("menu");
  document.querySelector(".normal").classList.add("animation");
  sablo();
});
}

function sablo () {
  document.querySelector("svg").addEventListener("click", function () {
  //document.addClass("menu");
  document.querySelector(".hammenu").classList.remove("hammenu-none");
  document.querySelector("svg").classList.remove("close");
  document.querySelector(".menU").classList.remove("menu");
  document.querySelector(".normal").classList.remove("animation");
});
}

window.onload=hablo();
