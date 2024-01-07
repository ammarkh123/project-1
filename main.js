var bars = document.querySelector(".links span.icon");
var activeBar = document.querySelector(".icon span.middle-bar");
var tabsList = document.querySelector(".head .links ul");
function viewtabs() {
  (function action() {
    tabsList.classList.toggle("active-links");
    activeBar.classList.toggle("active-bar");
  })();
}
bars.addEventListener("click", viewtabs);
