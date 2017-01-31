const pgp = require( 'pg-promise' )()
const connectionString = process.env.DATABASE_URL || 'postgress://localhost:5432/guarded-porcupine-db'
const db = pgp( connectionString )
