<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Cek apakah file sudah ada
    if (file_exists($targetFile)) {
        echo "Maaf, file sudah ada.";
        $uploadOk = 0;
    }

    // Batasi tipe file yang bisa diupload
    $allowedTypes = array("pdf", "doc", "docx", "xls", "xlsx");
    if (!in_array($fileType, $allowedTypes)) {
        echo "Maaf, hanya file dengan tipe .pdf, .doc, .docx, .xls, .xlsx yang diperbolehkan.";
        $uploadOk = 0;
    }

    // Cek apakah uploadOk diset ke 0 oleh kesalahan sebelumnya
    if ($uploadOk == 0) {
        echo "Maaf, file tidak berhasil diupload.";
    } else {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
            echo "File ". htmlspecialchars(basename($_FILES["file"]["name"])) . " telah berhasil diupload.";
        } else {
            echo "Maaf, terjadi kesalahan saat mengupload file Anda.";
        }
    }
}
?>
