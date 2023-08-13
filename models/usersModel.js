const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId:String,
    displayName:String,
    password:String,
    image:String,
    firstName:String,
    lastName:String,
    gender:String,
    email:String,
})

const UserModels = mongoose.model('UserModels', userSchema);

module.exports= UserModels;