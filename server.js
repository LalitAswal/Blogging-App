const http = require('http')
const dotenv = require('dotenv');
const app = require('./app.js');


const server = http.createServer(app);


dotenv.config({ path: 'config/config.env'})
const PORT = process.env.PORT || 3000;


server.listen(PORT,() =>{
    console.log(PORT);
    console.log(`server is listening at http://localhost:${PORT}`);
});
