
const database=require('mysql2/promise');

// connect to database
const connection = database.createPool({
    host: 'localhost', 
    user: 'root',      
    password: 'root001$', 
    port:3300,     
    database:'fitcon_database'
  });

module.exports = connection;