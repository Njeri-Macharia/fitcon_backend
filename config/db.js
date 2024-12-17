
const database=require('mysql2/promise');

// connect to database
const connection = database.createPool({
    host: 'localhost', 
    user: 'root',      
    password: 'root001$', 
    port:3300,     
    database:'fitcon_database'
  });


  // connection.connect((err) => {
  //   if (err) {
  //     console.error('Error connecting to MySQL:', err.message);
  //     return;
  //   }
  //   console.log('Connected to MySQL server!');
  // });

// Export the connection object so it can be used in other files
module.exports = connection;