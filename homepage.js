function displayLinks() {
  var screenWidth = window.innerWidth;
  const hambugerLinks = document.querySelector(".mobile-links");
  const dropdown = document.querySelector(".drop-down-links");
  if (screenWidth < 751) {
    hambugerLinks.style.display = "block";
  } else {
    dropdown.style.display = "block";
  }
}
function returnToHome() {
  const back = document.querySelector(".mobile-links");
  back.style.display = "none";
}
