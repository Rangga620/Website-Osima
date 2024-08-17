// Smooth scrolling effect for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-top button
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = 'Top';
scrollTopButton.classList.add('scroll-top');
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Dynamic bounce effect on box hover
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    box.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
