const db = require( './dbBookStore' )

var sql = `DROP TABLE IF EXISTS booksHB;
  CREATE TABLE IF NOT EXISTS booksHB (
  id SERIAL PRIMARY KEY,
  title VARCHAR( 3000 ),
  author VARCHAR( 3000 ),
  description VARCHAR( 3000 ),
  genre VARCHAR( 3000 ),
  image_url VARCHAR( 3000 ),
  price VARCHAR( 3000 ),
  keywords VARCHAR( 3000 )
)`

db.none( sql ).then( () => console.log( 'Done with db query' ))
              .then( () => process.exit() )
