window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.animate');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
});
