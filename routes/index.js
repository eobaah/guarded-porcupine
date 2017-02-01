const express = require('express');
const router = express.Router();
const path = require( 'path' );
const { db, getAllBooks, getBook, addBook,updateBook, removeBooks } = require('../database/dbBookStore')


router.get('/books', (req, res, next) => {
  getAllBooks().then( books => {
  res.send( books )
  })
})

router.get('/books/:id', (req, res, next) => {
  getBook(req.params.id).then( book => {
  res.send( book )
  })
})

router.post('/books', (req, res, next) => {
  const book = req.body
  console.log("request body on index.js", book);
  addBook( book )
    .then( () => res.redirect('/books') )
})


router.post('/beans', function (req, res, next) {
  console.log('request body', req.body)
  res.send('beans are amazing');
});

module.exports = router;
