const express = require('express');
const router = express.Router();
const registrations = require('../controllers/users.controller')



router.post('/', registrations);


module.exports = router;