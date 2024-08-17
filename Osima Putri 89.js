document.addEventListener("DOMContentLoaded", function() {
    // Menambahkan efek hover pada setiap box
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Menambahkan smooth scroll pada klik setiap divisi
    const divisions = document.querySelectorAll('.division h3');
    divisions.forEach(division => {
        division.style.cursor = 'pointer';
        division.addEventListener('click', function() {
            const level = this.nextElementSibling;
            level.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Menambahkan animasi fade-in saat halaman dimuat
    const elements = document.querySelectorAll('.box, .division h3');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
    });

    window.addEventListener('scroll', function() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    });
});
