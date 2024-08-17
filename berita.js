document.querySelectorAll('.news-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});
