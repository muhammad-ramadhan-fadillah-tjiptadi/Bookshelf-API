const express = require("express");
const app = express();
const booksRouter = require("./routes/books");

// Middleware untuk parsing JSON
app.use(express.json());

// Routing untuk Bookshelf API
app.use("/books", booksRouter);

// Menjalankan server pada port 9000
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
