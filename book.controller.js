
const Book = require("../models/book");


exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.send(books);
    } catch (error) {
        console.log(error.message)
    }
},

exports.getBookId = async (req,res) => {

    try {
        const books = await Book.findById(req.params.id);
        res.status(200).json(books)

    } catch (error) {
      res.send('error' + error)

    }
 },

exports.createBook = async (req, res ) =>{

    const book = new Book({

        bookname: req.body.bookname,
        title: req.body.title,
        page: req.body.page,
        athour: req.body.athour,

      })
      try {

        const pdt = await book.save();
        res.status(201).json(pdt)
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"," http://localhost:8000/books");

      } catch (error) {
          res.send(book)
      }
}



exports.updateBook = async(req,res) =>{

    try {
        const book = await Book.findById(req.params.id);

        book.bookname = req.body.bookname
        book.title = req.body.title
        book.page = req.body.page
        book.athour = req.body.athour

        const pdt = await book.save();
        res.json(pdt)

    } catch (error) {
      res.send('error' + error)

    }
}


exports.deleteBook = async(req,res) =>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        res.json(book)

    } catch (error) {
      res.json({message: err})

    }
}


