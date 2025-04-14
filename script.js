// Back to Top button logic
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Show or hide button on scroll
  window.addEventListener("scroll", function () {
    backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Scroll to top when button is clicked
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
