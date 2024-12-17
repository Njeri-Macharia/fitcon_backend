// const bodyparser= require('body-parser');
// const connection = require('./config/db');
const http = require('http'); 
const app = require('./app'); 



const server = http.createServer(app);
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error:', err);
    process.exit(1); // Exit with failure code
  });