document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded!");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace(".html", "");
            const targetSection = document.querySelector(`#${targetId}`);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = link.getAttribute("href");
            }
        });
    });

    // Add a fade-in effect for the hero section
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = 0;
        hero.style.transition = "opacity 1.5s ease-in-out";
        setTimeout(() => {
            hero.style.opacity = 1;
        }, 200);
    }
});