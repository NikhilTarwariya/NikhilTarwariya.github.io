document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".progress"); // Select all cards inside .progress

  // Create the Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When a card is in view, add the 'visible' class to trigger animation
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing after the animation starts
        }
      });
    },
    { threshold: 1 }
  ); // Trigger when 50% of the card is visible

  // Start observing each individual card
  cards.forEach((card) => {
    observer.observe(card);
  });
});
