/* MENU TOGGLE */
const menuIcon = document.getElementById('menu-icon');
const mainNav = document.getElementById('main-nav');

menuIcon.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});

/* NAV ACTIVE + SECTION SWITCH */
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const id = link.getAttribute('href').substring(1);
        const target = document.getElementById(id);

        if (!target) return;

        sections.forEach(sec => sec.classList.remove('section-active'));
        target.classList.add('section-active');

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        mainNav.classList.remove('show');
    });
});

/* RESUME TABS */
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(b => b.classList.remove('active'));
        resumeDetails.forEach(d => d.classList.remove('active'));

        btn.classList.add('active');
        resumeDetails[i].classList.add('active');
    });
});

/* PORTFOLIO SLIDER */
const imgSlide = document.querySelector('.img-slide');
const items = document.querySelectorAll('.img-item');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const details = document.querySelectorAll('.portfolio-detail');

let index = 0;

function updateSlider() {
    imgSlide.style.transform = `translateX(-${index * 100}%)`;

    details.forEach(d => d.classList.remove('active'));
    details[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < items.length - 1) {
        index++;
        updateSlider();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});

updateSlider();



/* DARK MODE TOGGLE */
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;
darkModeIcon.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
/* SCROLL REVEAL ANIMATION */
ScrollReveal({
    reset: true,  
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/* ==================== SCROLL SECTION ACTIVE LINK ==================== */
const sectionsAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sectionsAll.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});
/* ==================== CHANGE BACKGROUND HEADER ==================== */
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/* ==================== SHOW SCROLL UP ==================== */
function scrollUp() { 
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/* ==================== DARK LIGHT THEME ==================== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
/* ==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ==================== */
function scaleCV() {
    document.body.classList.add('scale-cv');
}
function removeScale() {
    document.body.classList.remove('scale-cv');
}
/* ==================== GENERATE PDF ==================== */
let areaCV = document.getElementById('area-cv');
let resumeButton = document.getElementById('resume-button');
let opt = {
    margin: 0,
    filename: 'shehzad-ali-resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
};
function generateResume() {
    html2pdf().set(opt).from(areaCV).save();
}
resumeButton.addEventListener('click', () => {
    scaleCV();
    generateResume();
    setTimeout(removeScale, 5000);
});
/* ==================== END ==================== */
/* ================= PORTFOLIO ================= */
    <section class="portfolio-active" id="portfolio">
/* ================= CONTACT ================= */
    <section class="contact" id="contact">
/* ================= FOOTER ================= */
        </section> 
    <footer>
        <p>&copy; 2025 Muhammad Shehzad Ali. All rights reserved.</p>
        </footer>
        
