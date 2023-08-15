const express = require('express');
const router = express.Router();
const {registrations, login} = require('../controllers/users.controller');



router.post('/', registrations);
router.post('/login', login);



module.exports = router;