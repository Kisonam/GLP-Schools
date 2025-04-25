// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // change slide every 4 seconds

// Navbar background on scroll
const navbar = document.getElementById('navbar');
const homeSection = document.getElementById('home');

window.addEventListener('scroll', () => {
  if (window.scrollY > homeSection.offsetHeight - 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});