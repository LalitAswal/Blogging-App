const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema  = new Schema({
    title:String,
    content:String,
    createAt:{type:Date, default:Date.now()},
    user_id:{type: mongoose.Schema.Types.ObjectId, ref:'UserModels' }
})


const postModel = mongoose.model('post', postSchema);

module.exports = postModel;