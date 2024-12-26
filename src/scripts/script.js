document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
                entry.target.classList.remove("section-hidden");
                observer.unobserve(entry.target);
            }
            else {
                entry.target.classList.remove("section-visible");
                entry.target.classList.add("section-hidden");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            observer.observe(section);
        });
    });
});