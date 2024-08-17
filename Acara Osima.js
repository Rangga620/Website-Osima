function showDetail(id) {
    $('.acara-detail').hide(); // Sembunyikan semua detail acara
    $(`#detail-${id}`).fadeIn(); // Tampilkan detail acara yang dipilih
}

function hideDetail(id) {
    $(`#detail-${id}`).fadeOut(); // Sembunyikan detail acara yang dipilih
}
