window.addEventListener("DOMContentLoaded", () => {
        // Optional: fade-in body if you're using it
        document.body.classList.add("fade-in-up");

        const heroText = document.querySelector(".heroTextSec");

        // Force a reflow to ensure CSS is applied before adding class
        if (heroText) {
          // Wait a frame before triggering animation
          requestAnimationFrame(() => {
            heroText.classList.add("animate-in");
          });
        }
      });

      // Page transition on link click
      document.querySelectorAll("a.transition-link").forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const href = this.getAttribute("href");

          const wrapper = document.getElementById("page-wrapper");
          wrapper.classList.add("fade-out-up");

          // After animation, go to the next page
          setTimeout(() => {
            window.location.href = href;
          }, 600); // match animation duration
        });
      });

      const text1 = document.querySelector(".heroTextBold");
      const text2 = document.querySelector(".heroTextBold2");

      function applyStyles(hovered, other) {
        hovered.style.color = "#4C4C4C";
        hovered.style.webkitTextStroke = "0";

        other.style.color = "transparent";
        other.style.webkitTextStroke = "1px #4C4C4C";
      }

      function resetStyles() {
        text1.style.color = "#4C4C4C";
        text1.style.webkitTextStroke = "0";

        text2.style.color = "transparent";
        text2.style.webkitTextStroke = "1px #4C4C4C";
      }

      text1.addEventListener("mouseenter", () => applyStyles(text1, text2));
      text2.addEventListener("mouseenter", () => applyStyles(text2, text1));
      text1.addEventListener("mouseleave", resetStyles);
      text2.addEventListener("mouseleave", resetStyles);

      // Smooth scroll to projects
      const projectsLink = document.querySelector(".selectedWorks");
      projectsLink.addEventListener("click", () => {
        document.getElementById("projects").scrollIntoView({
          behavior: "smooth",
        });
      });

      // Optional: Add pointer cursor to make it clear it's clickable
      projectsLink.style.cursor = "pointer";

      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".navSec2");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
        document.body.classList.toggle("no-scroll"); // Disable scroll when menu is active
      });

      // Close menu when clicking on a link (optional)
      document.querySelectorAll(".navSec2 a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        });
      });

      document.getElementById("backToTop").addEventListener("click", function(e) {
  e.preventDefault(); // Stop default jump behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll
  });
});