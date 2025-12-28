/* ---------------- MENU TOGGLE (mobile) ---------------- */
const menuIcon = document.getElementById('menu-icon');
const mainNav = document.getElementById('main-nav');

if (menuIcon && mainNav) {
  menuIcon.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    const expanded = mainNav.classList.contains('show');
    menuIcon.setAttribute('aria-expanded', expanded);
  });
}

/* ---------------- RESUME TABS ---------------- */
const resumeBtns = document.querySelectorAll('.resume-btn');
if (resumeBtns.length) {
  resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const resumeDetails = document.querySelectorAll('.resume-detail');

      // Remove active from all buttons
      resumeBtns.forEach(b => b.classList.remove('active'));

      // Add active to clicked button
      btn.classList.add('active');

      // Hide all details
      resumeDetails.forEach(d => d.classList.remove('active'));

      // Show selected detail
      if (resumeDetails[idx]) resumeDetails[idx].classList.add('active');
    });
  });
}

/* ---------------- NAV ACTIVE LINKS ---------------- */
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');

function resetActiveNav() {
  navLinks.forEach(link => link.classList.remove('active'));
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    resetActiveNav();
    link.classList.add('active');
  });
});

if (logoLink) {
  logoLink.addEventListener('click', () => {
    resetActiveNav();
    navLinks[0].classList.add('active'); // Home link
  });
}

/* ---------------- PORTFOLIO CAROUSEL ---------------- */
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const items = document.querySelectorAll('.img-item');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let index = 0;
const totalSlides = items.length;

function updateSlider() {
  if (!imgSlide) return;

  // Move the slider
  imgSlide.style.transform = `translateX(-${index * 100}%)`;

  // Enable/disable arrows
  arrowLeft.classList.toggle('disabled', index === 0);
  arrowRight.classList.toggle('disabled', index === totalSlides - 1);

  // Show correct portfolio detail
  portfolioDetails.forEach(detail => detail.classList.remove('active'));
  if (portfolioDetails[index]) {
    portfolioDetails[index].classList.add('active');
  }
}

// Right arrow click
if (arrowRight) {
  arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
      index++;
      updateSlider();
    }
  });
}

// Left arrow click
if (arrowLeft) {
  arrowLeft.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });
}

// Initialize slider
updateSlider();
