// JavaScript to make the header move on scroll
// JavaScript to make the header move to a fixed position on scroll
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header__section2");
    if (window.scrollY > 0) { // Adjust this value as needed
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  });
  