const express = require('express');
const router = express.Router();
const authentication = require('../middleware/jwtMiddleware');

const {registrations, login, userDetails} = require('../controllers/users.controller');



router.post('/', registrations);
router.post('/login', login);
router.get('/user_Details',authentication, userDetails);



module.exports = router;