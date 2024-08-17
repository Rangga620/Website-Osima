document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.prestasi-item');
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease-in-out';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
