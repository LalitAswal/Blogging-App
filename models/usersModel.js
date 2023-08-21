const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
    displayName: String,
    password:  String,
    image: String,
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserModels' }], // Array of user IDs being followed
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserModels' }] // Array of user IDs following this user
});

const UserModels = mongoose.model('UserModels', userSchema);

module.exports = UserModels;
