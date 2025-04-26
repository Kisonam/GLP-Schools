
// Fullscreen gallery modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");
const galleryImages = document.querySelectorAll(".gallery-row img");

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
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
// Form submission
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const policyChecked = document.getElementById('policy').checked;

  if (name && email && message && policyChecked) {
    form.reset();
    formMessage.style.display = 'block';
  } else {
    alert('Please fill all fields and agree to the Privacy Policy.');
  }
});