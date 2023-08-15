const express = require('express');
const authentication = require('../middleware/jwtMiddleware');
const router = express.Router();

const {postList, getPostById, createPost} = require('../controllers/post.controller');
// const  createPost = require('../controllers/post.controller');


console.log('checking post routes');

console.log(` line  in post11`);

router.get('/allPost',authentication, postList );
router.get('/post/:postId', authentication, getPostById );
router.post('/createPost', authentication, createPost );
console.log('checking post routes');


module.exports = router;