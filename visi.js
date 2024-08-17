document.querySelector('.visi-link').addEventListener('click', function(event) {
    event.preventDefault();  // Mencegah tindakan default link

    const visiSection = document.getElementById('Visi');
    const visiText = document.querySelector('.visi-text');
    const visiContent = [
        "Kami berkomitmen untuk menciptakan masa depan yang lebih baik dengan inovasi, kolaborasi, dan integritas yang kuat.",
        "Visi kami adalah menjadi pemimpin global dalam keberlanjutan dan teknologi cerdas.",
        "Menginspirasi generasi mendatang untuk mencapai potensi penuh mereka dengan pendidikan dan nilai-nilai moral yang kuat."
    ];

    visiSection.style.display = 'block';
    visiSection.style.opacity = '1';
    visiText.style.opacity = '0';

    const randomIndex = Math.floor(Math.random() * visiContent.length);
    setTimeout(() => {
        visiText.textContent = visiContent[randomIndex];
        visiText.style.opacity = '1';
    }, 300);
});

document.querySelector('.misi-link').addEventListener('click', function(event) {
    event.preventDefault();  // Mencegah tindakan default link

    const misiSection = document.getElementById('Misi');
    const misiList = document.querySelector('.misi-list');
    const misiContent = [
        "Mengembangkan program pendidikan berkualitas yang mampu menciptakan lulusan berdaya saing tinggi.",
        "Meningkatkan partisipasi masyarakat dalam kegiatan sosial dan pembangunan.",
        "Menerapkan teknologi inovatif dalam semua aspek operasional organisasi.",
        "Menjaga nilai-nilai kejujuran, transparansi, dan akuntabilitas dalam setiap langkah yang diambil."
    ];

    misiSection.style.display = 'block';
    misiSection.style.opacity = '1';
    misiList.innerHTML = '';

    misiContent.forEach(misi => {
        const li = document.createElement('li');
        li.textContent = misi;
        misiList.appendChild(li);
    });
});
