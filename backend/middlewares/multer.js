const multer = require("multer");

// Konfigurasi penyimpanan dan filenya
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

// Filter untuk jenis file yang diizinkan
const fileFilter = function (req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed!"), false);
    }
};

// Inisialisasi multer dengan konfigurasi yang telah ditentukan
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
