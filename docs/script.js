const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.style.background = "rgba(5,5,5,0.92)";
  } else {
    navbar.style.background = "rgba(5,5,5,0.72)";
  }

});

/* Scroll Reveal */

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }

  });

}, {
  threshold: 0.15
});

document.querySelectorAll(
  ".about-card, .project-card, .timeline-item"
).forEach((el) => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";

  observer.observe(el);

});

/* Background Parallax */

document.addEventListener("mousemove", (e) => {

  const balls = document.querySelectorAll(".ball");

  balls.forEach((ball, index) => {

    const speed = (index + 1) * 0.003;

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    ball.style.transform =
      `translate(${x}px, ${y}px)`;

  });

});
