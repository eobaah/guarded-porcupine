const pgp = require( 'pg-promise' )()
const connectionString = process.env.DATABASE_URL || 'postgress://localhost:5432/guarded-porcupine-db'
const db = pgp( connectionString )

const getAllBooks = () =>
  db.any( `SELECT * FROM bookshb ORDER BY title` )

const getBook = (id) =>
    db.one( `SELECT * FROM bookshb where id=$1`, [id] )

const addBook = ({ title, author, description, genre, image_url, price, keywords }) =>
  db.oneOrNone(
    `INSERT INTO
       (title, author, description, genre, image_url, price, keywords)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)`,
    [title, author, description, genre, image_url, price, keywords] )

const updateBook = (id, book) => {
  return db.oneOrNone(`UPDATE
  bookshb SET title=$2, author=$3, description=$4, genre=$5, image_url=$6,
  price=$7, keywords=$8  WHERE id=$1`,
  [id, book.title, book.author, book.description, book.genre,
  book.image_url, book.price, book.keywords ])
}


const removeBooks = id =>
  db.none( `DELETE FROM bookshb WHERE id=$1`, [ id ] )



module.exports = {
  db,
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  removeBooks
}
