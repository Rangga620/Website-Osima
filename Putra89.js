<script>
// Efek animasi ketika kotak masuk ke dalam viewport saat di-scroll
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.5
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});

// Mengubah tema warna secara dinamis
function changeTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('--background-color', '#1a1a1a');
        root.style.setProperty('--text-color', '#f1f1f1');
        root.style.setProperty('--box-background', '#333');
    } else {
        root.style.setProperty('--background-color', '#0D324D');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--box-background', 'rgba(255, 255, 255, 0.1)');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('#theme-toggle');
    themeToggle.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            changeTheme('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            changeTheme('dark');
        }
    });
});
</script>
