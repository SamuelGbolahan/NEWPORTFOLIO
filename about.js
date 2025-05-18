window.addEventListener("DOMContentLoaded", () => {
  // Animate h1
  const header = document.querySelector(".aboutDesription h1");
  const email = document.querySelector(".aboutDesription .email");

  if (header && email) {
    setTimeout(() => {
      header.classList.add("animate-in");
    }, 200); // delay for natural flow

    setTimeout(() => {
      email.classList.add("animate-in");
    }, 600); // stagger for smoother effect
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