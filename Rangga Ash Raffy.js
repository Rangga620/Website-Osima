function toggleInfo(id) {
    const elements = document.querySelectorAll('.info');
    elements.forEach(el => el.parentNode.classList.remove('active'));

    const selected = document.getElementById(id);
    selected.parentNode.classList.add('active');
}
