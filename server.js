const http = require('http')
const dotenv = require('dotenv');
const app = require('./app.js');
dotenv.config({ path: 'config/config.env'})
const server = http.createServer(app);


const PORT = process.env.PORT || 3000;

console.log(PORT, process.env.PORT);

server.listen(PORT,() =>{
    console.log(PORT);
    console.log(`server is listening at http://localhost:${PORT}`);
});
