function showDetails(type) {
    const visiContent = document.getElementById('visi');
    const misiContent = document.getElementById('misi');

    visiContent.style.display = 'none';
    misiContent.style.display = 'none';

    if (type === 'visi') {
        visiContent.style.display = 'block';
    } else if (type === 'misi') {
        misiContent.style.display = 'block';
    }
}

function goToHomePage() {
    window.location.href = "Struktur B Putri.html"; // Ubah sesuai dengan halaman utama yang diinginkan
}
