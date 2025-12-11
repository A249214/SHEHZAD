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
