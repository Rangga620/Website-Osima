document.addEventListener("DOMContentLoaded", function() {
    const divisionLinks = document.querySelectorAll('.division-link');

    // Smooth scroll to section
    divisionLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));

            window.scrollTo({
                top: targetSection.offsetTop - 20, // Adjust the offset for smooth appearance
                behavior: 'smooth'
            });
        });
    });

    // Hover effect using JavaScript (alternative to CSS)
    divisionLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            link.style.transform = 'scale(1.1)';
            link.style.backgroundColor = '#3e8e41';
        });

        link.addEventListener('mouseout', function() {
            link.style.transform = 'scale(1)';
            link.style.backgroundColor = '#4CAF50';
        });
    });
});
