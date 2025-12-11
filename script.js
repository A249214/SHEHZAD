const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        // Remove active class from all buttons
        resumeBtns.forEach(b => {
            b.classList.remove('active');
        });

        // Add active to clicked button
        btn.classList.add('active');

        // Hide all details
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // Show selected detail
        resumeDetails[idx].classList.add('active');
    });
});
