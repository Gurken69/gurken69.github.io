document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });

    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const currentProjects = document.getElementById('current-projects');
    const archivedProjects = document.getElementById('archived-projects');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Show/hide projects based on filter
            if (btn.dataset.filter === 'current') {
                currentProjects.classList.remove('hidden');
                archivedProjects.classList.add('hidden');
            } else {
                currentProjects.classList.add('hidden');
                archivedProjects.classList.remove('hidden');
            }
        });
    });
});