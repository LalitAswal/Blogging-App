const mongoose = require('mongoose');
const {schema} = mongoose;

const postSchema  = new Schema({
    title:String,
    content:String,
    createAt:{type:Date, default:Date.now()},
    _user:{type :schema.types.ObjectId, ref:'User' }
})


module.exports = mongoose.model('post', postSchema);