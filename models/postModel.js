const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    text: String,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModels' }
});

const postSchema = new Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now() },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModels' },
    comments: [commentSchema], // Array of comments
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserModels' }] // Array of user IDs who liked the post
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
