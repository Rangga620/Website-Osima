document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('uploadStatus').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('uploadStatus').innerHTML = '<p style="color:red;">Terjadi kesalahan saat mengupload file.</p>';
    });
});
