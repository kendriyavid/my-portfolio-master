import ScrollReveal from "scrollreveal";
import "../scss/main.scss";

/* Selectors */
import selectors from "./selectors";

// Functionality to handle navigation //
window.onload = () => {
  if (window.matchMedia("(min-width: 768.001px)").matches) {
    selectors.navigationContainer.classList.add("navigation-visible");
  }
};
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768.001px)").matches) {
    selectors.navigationContainer.classList.add("navigation-visible");
    selectors.hamburgerBtn.classList.remove("animated-hamburger-btn");
  } else if (
    !selectors.hamburgerBtn.classList.contains("animated-hamburger-btn")
  ) {
    selectors.navigationContainer.classList.remove("navigation-visible");
  }
});
selectors.hamburgerBtn.addEventListener("click", function () {
  this.classList.toggle("animated-hamburger-btn");
  selectors.navigationContainer.classList.toggle("navigation-visible");
});

// Functionality to add shadow to navigation header //
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
    selectors.navigationHeader.style.boxShadow =
      "0 3px 8px hwb(0 0% 100% / .15)";
  } else {
    selectors.navigationHeader.style.boxShadow = "none";
  }
});

// Functionality to reveal on scrolling //
ScrollReveal({
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  origin: "top",
  reset: false
}).reveal(".project");

ScrollReveal({
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  origin: "top",
  reset: false
}).reveal(".contact-section");


document.addEventListener('DOMContentLoaded', function () {
  const leetcodeStats = document.getElementById('leetcode-stats');

  // Fetch LeetCode data using the API
  fetch('https://leetcode-stats-api.herokuapp.com/harshdeepkv')
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        // Display the LeetCode statistics
        leetcodeStats.innerHTML = `
          <div class="statistics">
            <div><strong>Total Solved:</strong> ${data.totalSolved}</div>
            <div><strong>Easy Solved:</strong> ${data.easySolved}</div>
            <div><strong>Medium Solved:</strong> ${data.mediumSolved}</div>
            <div><strong>Hard Solved:</strong> ${data.hardSolved}</div>
            <div><strong>Contribution Points:</strong> ${data.contributionPoints}</div>
            <div><strong>Ranking:</strong> ${data.ranking}</div>
          </div>
        `;
      } else {
        leetcodeStats.innerHTML = '<p>Failed to load LeetCode Stats.</p>';
      }
    })
    .catch((error) => {
      console.error('Error fetching LeetCode data:', error);
      leetcodeStats.innerHTML = '<p>Error loading LeetCode Stats.</p>';
    });
});

