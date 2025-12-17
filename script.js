// script.js

/* ---------------- MENU TOGGLE (mobile) ---------------- */
const menuIcon = document.getElementById('menu-icon');
const mainNav = document.getElementById('main-nav');

if (menuIcon && mainNav) {
  menuIcon.addEventListener('click', () => {
    // toggle nav visibility on mobile
    mainNav.classList.toggle('show');
    // toggle simple aria-expanded for accessibility
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

      // Show selected detail (guard index)
      if (resumeDetails[idx]) resumeDetails[idx].classList.add('active');
    });
  });
}

// const arrowRight = document.querySelector('.arrow-right');
// const arrowLeft = document.querySelector('.arrow-left');
// const imgSlide = document.querySelector('.img-slide');
// const portfolioDetails = document.querySelectorAll('.portfolio-detail');

// let index = 0;
// const total = portfolioDetails.length - 1;

// function activePortfolio() {
//   imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

//   portfolioDetails.forEach(detail => {
//     detail.classList.remove('active');
//   });

//   portfolioDetails[index].classList.add('active');

//   arrowLeft.classList.toggle('disabled', index === 0);
//   arrowRight.classList.toggle('disabled', index === total);
// }

// arrowRight.addEventListener('click', () => {
//   if (index < total) {
//     index++;
//     activePortfolio();
//   }
// });

// arrowLeft.addEventListener('click', () => {
//   if (index > 0) {
//     index--;
//     activePortfolio();
//   }
// });




const rightBtn = document.querySelector('.arrow-right');
const leftBtn = document.querySelector('.arrow-left');
const slide = document.querySelector('.img-slide');
const items = document.querySelectorAll('.img-item');

// let index = 0;
const total = items.length - 1;

function updateSlider() {
    slide.style.transform = `translateX(-${index * 100}%)`;
    leftBtn.classList.toggle('disabled', index === 0);
    rightBtn.classList.toggle('disabled', index === total);
}

rightBtn.addEventListener('click', () => {
    if (index < total) {
        index++;
        updateSlider();
    }
});

leftBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});


const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

const imgSlide = document.querySelector('.portfolio-carousel .img-slid');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let index = 0;
const totalSlides = document.querySelectorAll('.img-item').length;

function activePortfolio() {

  /* FIX: style (not Style) + correct template string */
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  portfolioDetails.forEach(detail => {
    detail.classList.remove('active');
  });

  if (portfolioDetails[index]) {
    portfolioDetails[index].classList.add('active');
  }

  /* FIX: button enable / disable */
  arrowLeft.classList.toggle('disabled', index === 0);
  arrowRight.classList.toggle('disabled', index === totalSlides - 1);
}

/* FIX: remove space from 'click ' */
arrowRight.addEventListener('click', () => {
  if (index < totalSlides - 1) {
    index++;
    activePortfolio();
  }
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    activePortfolio();
  }
});

/* INIT */
activePortfolio();



























