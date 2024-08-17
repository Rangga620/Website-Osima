function showDetails(type) {
    alert(`Menampilkan detail untuk ${type}`);
}

function goBack() {
    window.history.back();
}
function showDetails(type) {
    if (type === 'putra') {
        window.location.href = 'Struktur B Putra.html'; // Ganti dengan nama file yang sesuai
    } else if (type === 'putri') {
        window.location.href = 'Struktur B Putri.html'; // Ganti dengan nama file yang sesuai
    }
}
function goToHomePage() {
    window.location.href = "Osima.html"; // arahkan ke halaman utama
}