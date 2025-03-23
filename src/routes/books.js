const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// Tambah buku baru
router.post("/", booksController.addBook);

// Mendapatkan semua buku dengan query parameters (name, reading, finished)
router.get("/", booksController.getAllBooks);

// Mendapatkan detail buku berdasarkan id
router.get("/:id", booksController.getBookById);

// Mengubah data buku berdasarkan id
router.put("/:id", booksController.updateBookById);

// Menghapus buku berdasarkan id
router.delete("/:id", booksController.deleteBookById);

module.exports = router;
