
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

// Get references to the toggle menu button and mobile navigation
const toggleMenuButton = document.querySelector('.toggle-menu');
const mobileNav = document.querySelector('.mobile-nav');

// Add a click event listener to toggle the mobile navigation and button text
toggleMenuButton.addEventListener('click', () => {
  // Toggle the 'active' class on the mobile navigation
  mobileNav.classList.toggle('active');
  // Toggle the 'active' class on the toggle menu button
  toggleMenuButton.classList.toggle('active');
  // Check if the mobile navigation is open or closed
  if (mobileNav.classList.contains('active')) {
    // If open, change the button content to "X"
    toggleMenuButton.innerHTML = "&#128473;";
  } else {
    // If closed, change the button content back to the original symbol
    toggleMenuButton.innerHTML = "&#9776;";
  }
});

// Function to check if the user has scrolled to the bottom
function isScrolledToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to handle scroll events
function handleScroll() {
  if (isScrolledToBottom()) {
    // If scrolled to the bottom, remove the fixed position
    document.getElementById('background-video').classList.add('no-fixed');
  } else {
    // If not at the bottom, ensure the fixed position
    document.getElementById('background-video').classList.remove('no-fixed');
  }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll);
