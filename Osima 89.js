document.addEventListener("DOMContentLoaded", function() {
    const map = document.getElementById("map");

    // Contoh lokasi marker pada peta
    const locations = [
        { top: '20%', left: '30%' },
        { top: '50%', left: '50%' },
        { top: '80%', left: '70%' }
    ];

    locations.forEach(location => {
        const marker = document.createElement("div");
        marker.className = "marker";
        marker.style.top = location.top;
        marker.style.left = location.left;
        map.appendChild(marker);
    });
});
