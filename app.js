const express = require('express');
const app = express();
const cors = require('cors');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env'});
require('./config/dbConfig.js');

const usersRoutes = require('./routes/users.routes.js');


// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: 'session',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: process.env.cookieSessionKey || "WorkHardIsTheKey"
  })
);


app.use('/', usersRoutes);

module.exports = app;