window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 20) {
    navbar.style.background = "rgba(8,8,8,0.92)";
  } else {
    navbar.style.background = "rgba(8,8,8,0.75)";
  }

});