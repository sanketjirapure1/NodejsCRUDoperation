const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookname: {
    type: String,
  },

  title: {
    type: String,
  },

  page: {
    type: Number,
  },

  athour: {
    type: String,
  },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
