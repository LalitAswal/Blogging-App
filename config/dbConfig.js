const  mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env'})

const options= {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family  :4
}

const dbConnection = mongoose.connect(process.env.mongodbURL, options);

dbConnection.then(() => {
    console.log('connection established');
}).catch(err => console.log('connection error',err))

module.exports = dbConnection;